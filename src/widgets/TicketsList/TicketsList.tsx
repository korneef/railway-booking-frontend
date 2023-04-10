import { TicketCard } from "../../features";
import { useAppSelector } from "../../app/store/hooks";
import { useState, useEffect } from "react";
import { useFindTicketRequest } from "../../shared";
import classNames from "classnames";
import { nanoid } from "nanoid";
import getPagesCount from "./helpers/getPagesCount";
import React from "react";


export default function TicketsList() {
  const { total_count, items } = useAppSelector(state => state.tickets);
  const { offset } = useAppSelector(state => state.ticketsSearchRequest.params);
  const refreshTicketList = useFindTicketRequest();

  const [listOutputsOptions, setlistOutputsOptions] = useState(() => {
    const itemsCount: number = 5;
    const maxPages = Math.ceil(total_count / itemsCount);
    const pages = getPagesCount(maxPages);
    return {
      itemsCount,
      pageNumber: 1,
      pages,
      maxPages
    }
  });

  useEffect(() => {
    setlistOutputsOptions(prevValue => {
      const maxPages = Math.ceil(total_count / prevValue.itemsCount);
      return { ...prevValue, maxPages, pages: getPagesCount(maxPages) }
    })
  }, [total_count])


  const handleDisplayedItemsCount = (count: number) => {
    setlistOutputsOptions(prevValue => {
      return { ...prevValue, itemsCount: count }
    })
    refreshTicketList('limit', count)
  }

  const handleSortSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const value = e.target.options[index].value;
    refreshTicketList('sort', value);
  }

  const changeOffset = (count: number) => {
    const newOffset = offset === undefined ? 0 : count + offset;
    const { maxPages } = listOutputsOptions;
    if (newOffset > total_count) return;
    if (newOffset <= 0) {
      setlistOutputsOptions(prevValue => ({ ...prevValue, pageNumber: 1, pages: getPagesCount(maxPages) }));
      refreshTicketList('offset', 0);
      return;
    }
    if (newOffset > total_count - count) {
      setlistOutputsOptions(prevValue => ({ ...prevValue, pageNumber: maxPages, pages: getPagesCount(maxPages) }));
      refreshTicketList('offset', newOffset);
      return;
    }

    setlistOutputsOptions(prevValue => {
      const changePage = count > 0 ? 1 : -1;
      const newPageNumber = prevValue.pageNumber + changePage;
      return { ...prevValue, pageNumber: newPageNumber, pages: [newPageNumber - 1, newPageNumber, newPageNumber + 1] }
    })
    refreshTicketList('offset', newOffset);
  }

  const selectPage = (selectedPage: number) => {
    const newOffset = selectedPage * listOutputsOptions.itemsCount - listOutputsOptions.itemsCount;
    const { maxPages } = listOutputsOptions

    if (selectedPage === 1) {
      setlistOutputsOptions(preValue => ({ ...preValue, pageNumber: 1, pages: getPagesCount(maxPages), offset: newOffset }));
      refreshTicketList('offset', newOffset);
      return
    }
    if (selectedPage === maxPages) {
      const pages: Array<number> = maxPages === 2 ? [1, 2] : [maxPages - 2, maxPages - 1, maxPages]
      setlistOutputsOptions(preValue => ({ ...preValue, pageNumber: maxPages, pages, offset: newOffset }));
      refreshTicketList('offset', newOffset);
      return
    }
    setlistOutputsOptions(preValue => ({ ...preValue, pageNumber: selectedPage, pages: [selectedPage - 1, selectedPage, selectedPage + 1], offset: newOffset }));
    refreshTicketList('offset', newOffset);
  }

  const className = 'tickets-list'
  const needPagination = listOutputsOptions.maxPages > 1
  const backPaginationButton = needPagination && <button onClick={() => changeOffset(-listOutputsOptions.itemsCount)} className={`${className}__pagination-button`}>{'<'}</button>;
  const forwardPaginationButton = needPagination && <button onClick={() => changeOffset(listOutputsOptions.itemsCount)} className={`${className}__pagination-button`}>{'>'}</button>;
  return (
    <div className={`${className}`}>
      <div className={`${className}__header`}>
        <div className={`${className}__total-count`}>найдено {total_count}</div>
        <div className={`${className}__sort-selection`}>
          сортировать по:<select onChange={handleSortSelect} className={`${className}__sort-selection-select`} name='sort by'>
            <option className={`${className}__sort-selection-option`} value="time">Времени</option>
            <option className={`${className}__sort-selection-option`} value="duration">Длительности</option>
            {/* TODO не работает сортировка по цене <option className={`${className}__sort-selection-option`} value="price">Стоимости</option> */}
          </select>
        </div>
        <div className={`${className}__displayed-count`}> Показывать по:
          <button className={classNames(
            `${className}__sort-selection-option-button`,
            { [`${className}__sort-selection-option-button_active`]: 5 === listOutputsOptions.itemsCount })}
            onClick={() => handleDisplayedItemsCount(5)}>5</button>
          <button className={classNames(
            `${className}__sort-selection-option-button`,
            { [`${className}__sort-selection-option-button_active`]: 10 === listOutputsOptions.itemsCount })}
            onClick={() => handleDisplayedItemsCount(10)}>10</button>
          <button className={classNames(
            `${className}__sort-selection-option-button`,
            { [`${className}__sort-selection-option-button_active`]: 20 === listOutputsOptions.itemsCount })}
            onClick={() => handleDisplayedItemsCount(20)}>20</button>
        </div>
      </div>
      <div className={`${className}__main`}>
        {items !== undefined ? items.map(item => <TicketCard key={item.departure._id} ticket={item} />) : null}
      </div>
      <div className={`${className}__pagination`}>
        {backPaginationButton}
        {needPagination && listOutputsOptions.pages.map(item => <button
          key={nanoid()}
          onClick={() => selectPage(item)}
          className={classNames(
            `${className}__pagination-button`,
            { [`${className}__pagination-button_active`]: item === listOutputsOptions.pageNumber })} >
          {item}
        </button>
        )}
        {forwardPaginationButton}
      </div>

    </div>
  );
}
