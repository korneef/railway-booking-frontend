import { TicketCard } from "../../features";
import { useAppSelector } from "../../app/store/hooks";
import { useState, useEffect } from "react";
import { useFindTicketRequest, useTicketsSearchRequest } from "../../shared";
import classNames from "classnames";
import { nanoid } from "nanoid";


//TODO доделать пагинацию, возможно вынести параметры пагинации в стейт менеджер, выяснить почему компонент ререндерится по нескольку раз
function TicketsList() {
  const totalCount = useAppSelector(state => state.tickets.total_count)
  const [listOutputsOptions, setlistOutputsOptions] = useState(() => {
    const itemsCount: number = 5;
    const maxPages = Math.ceil(totalCount / itemsCount);
    //let pages: Array<number> = [];
    // for (let i = 1; i < maxPages && i < 4; i += 1) {
    //   pages.push(i)
    // }
    const pages = [1,2,3]
    return {
      itemsCount,
      sortBy: 'date',
      pageNumber: 1,
      pages,
      offset: 0,
      maxPages
    }
  })
  const requestParams = useAppSelector(state => state.ticketsSearchRequest.params);
  const refreshTicketList = useFindTicketRequest();
  const { total_count, items } = useAppSelector(state => state.tickets);
  const TicketsSearchRequest = useTicketsSearchRequest();
  useEffect(() => {
    TicketsSearchRequest();
    setlistOutputsOptions(prevValue => {
      const maxPages = Math.ceil(totalCount / prevValue.itemsCount);
      return { ...prevValue, maxPages }
    })
    !requestParams.offset && setlistOutputsOptions(prevValue => ({ ...prevValue, offset: 0 }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestParams])

  const handleDisplayedItemsCount = (count: number) => {
    setlistOutputsOptions(prevValue => {
      return { ...prevValue, itemsCount: count }
    })
    refreshTicketList('limit', count)
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex;
    const value = e.target.options[index].value;
    setlistOutputsOptions(prevValue => {
      return { ...prevValue, sortBy: value }
    })
    refreshTicketList('sort', value);
  }

  const changeOffset = (count: number) => {

    const newOffset = count + listOutputsOptions.offset;
    if (newOffset > totalCount) return;
    if (newOffset <= 0) {

      setlistOutputsOptions(prevValue => ({ ...prevValue, offset: 0, pageNumber: 1, pages: [1, 2, 3] }))
      return
    }
    if (newOffset > totalCount - count) {
      const { maxPages } = listOutputsOptions;
      setlistOutputsOptions(prevValue => ({ ...prevValue, offset: newOffset, pageNumber: maxPages, pages: [maxPages - 2, maxPages - 1, maxPages] }))
      return
    }

    setlistOutputsOptions(prevValue => {
      const changePage = count > 0 ? 1 : -1;
      const newPageNumber = prevValue.pageNumber + changePage;
      return { ...prevValue, offset: newOffset, pageNumber: newPageNumber, pages: [newPageNumber - 1, newPageNumber, newPageNumber + 1] }
    })
    refreshTicketList('offset', newOffset);
  }

  const selectPage = (selectedPage: number) => {
    const newOffset = selectedPage * listOutputsOptions.itemsCount - listOutputsOptions.itemsCount;

    if (selectedPage === 1) {
      setlistOutputsOptions(preValue => ({ ...preValue, pageNumber: 1, pages: [1, 2, 3], offset: newOffset }))
      return
    }
    const { maxPages } = listOutputsOptions
    if (selectedPage === maxPages) {
      setlistOutputsOptions(preValue => ({ ...preValue, pageNumber: maxPages, pages: [maxPages - 2, maxPages - 1, maxPages], offset: newOffset }))
      return
    }
    setlistOutputsOptions(preValue => ({ ...preValue, pageNumber: selectedPage, pages: [selectedPage - 1, selectedPage, selectedPage + 1], offset: newOffset }))
    refreshTicketList('offset', newOffset);
  }

  const className = 'tickets-list'
  return (
    <div className={`${className}`}>
      <div className={`${className}__header`}>
        <div className={`${className}__total-count`}>найдено {total_count}</div>
        <div className={`${className}__sort-selection`}>
          сортировать по:<select onChange={handleSelect} className={`${className}__sort-selection-select`} name='sort by'>
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
        <button onClick={() => changeOffset(-listOutputsOptions.itemsCount)} className={`${className}__pagination-button`} >{'<'}</button>
        {listOutputsOptions.pages.map(item => <button
          key={nanoid()}
          onClick={() => selectPage(item)}
          className={classNames(
            `${className}__pagination-button`,
            { [`${className}__pagination-button_active`]: item === listOutputsOptions.pageNumber })} >
          {item}
        </button>
        )}
        <button onClick={() => changeOffset(listOutputsOptions.itemsCount)} className={`${className}__pagination-button`} >{'>'}</button>
      </div>

    </div>
  );
}

export default TicketsList;