import { TextField, backendURL } from "../../../shared";
import React, { KeyboardEventHandler, useState, useRef, useEffect } from "react";
import { fromEvent, Subscription } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { updateRequestParameter } from "../../../app/store/ticketSearchRequestSlices";


interface CitiesSearchInputProps {
  bemClass?: string,
  placeholder: string,
  requestKey: 'from_city_id' | 'to_city_id'
}

// TODO отрефакторить компонент
function CitiesSearchInput({ placeholder, bemClass, requestKey }: CitiesSearchInputProps) {
  interface City {
    _id: string,
    name: string
  }
  interface ICityList {
    list: Array<City>,
    selectedCity: City | null,
    inputValue: string
  }
  const [cityList, setCityList] = useState<ICityList>({
    list: [],
    selectedCity: null,
    inputValue: ''
  })
  const [selectedIndex, setSelectedIndex] = useState(0);

  type UlRef = React.RefObject<HTMLUListElement>;

  const ulElement: UlRef = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null);
  const subscriptionRef = useRef<Subscription | null>(null);

  const dispatch = useAppDispatch();
  const request = useAppSelector(state => state.ticketsSearchRequest.params[requestKey]);

  const citySelect = (item: City) => {
    const id = item ? item._id : false
    dispatch(updateRequestParameter({ key: requestKey, value: id }))
    setCityList(prevValue => {
      return {
        ...prevValue,
        selectedCity: item,
        list: [],
        inputValue: item.name.toUpperCase()
      }
    })
  }

  useEffect(() => {
    ulElement.current?.children[0] && (ulElement.current?.children[selectedIndex] as HTMLElement).focus();
  }, [selectedIndex])

  useEffect(() => {
    if (inputRef.current) {
      const input$ = fromEvent(inputRef.current, 'input').pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(300)
      );

      subscriptionRef.current = input$.subscribe((value: string) => {
        if (value.length === 0) return;
        fetch(`${backendURL}/routes/cities?name=${value}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.length === 1 && value.toLowerCase() === data[0].name.toLowerCase()) {
              citySelect(data[0])
            } else {
              dispatch(updateRequestParameter({ key: requestKey, value: false }));
              setCityList(prevValue => {
                return {
                  ...prevValue,
                  selectedCity: null,
                  list: data,
                };
              })
            }
          });
      });
    }

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef]);

  const handleChange = (value: string) => {
    !request && dispatch(updateRequestParameter({ key: requestKey, value: false }));
    setCityList(prevValue => {
      return {
        ...prevValue,
        inputValue: value,
        list: value ? prevValue.list : [],
        selectedCity: null
      }
    });
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, city: City) => {
    const childNodes = ulElement?.current?.childNodes;

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        if (childNodes) {
          setSelectedIndex((prevValue) => {
            const newValue = prevValue + 1 >= childNodes.length ? 0 : prevValue + 1;
            return newValue;
          });
        }
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        if (childNodes) {
          setSelectedIndex((prevValue) => {
            const newValue = prevValue - 1 < 0 ? childNodes.length - 1 : prevValue - 1;
            return newValue;
          });
        }
        break;
      }
      case 'Enter': {
        citySelect(city)
        break;
      }
    }
  }

  const focusOnUlHandle: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === 'ArrowDown') {
      e.preventDefault();
      ulElement.current?.children[0] && (ulElement.current?.children[0] as HTMLElement).focus();
      setSelectedIndex(0)
    }
  }

  const handleClick = (item: City) => {
    citySelect(item)
  }

  const className = 'cities-search-input';
  return (
    <div className={classNames(className, { [`${bemClass}__${className}`]: bemClass })}>
      <TextField
        propValue={cityList.inputValue}
        bemClass={className}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={focusOnUlHandle}
        refEl={inputRef}
      />
      {cityList.list.length !== 0 && <ul ref={ulElement}
        className={`${className}__cities-list`}>
        {Array.isArray(cityList.list) && cityList.list.map((item) => <li
          tabIndex={0}
          key={item.name}
          onKeyDown={(e) => handleKeyDown(e, item)}
          className={`${className}__cities-list-element`}
          onClick={() => handleClick(item)}
        >{item.name}
        </li>)}
      </ul>}
    </div>
  );
}

export default CitiesSearchInput;