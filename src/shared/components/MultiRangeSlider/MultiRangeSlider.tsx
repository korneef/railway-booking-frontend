import { ChangeEvent, useCallback, useEffect, useState, useRef } from 'react';
import classNames from 'classnames';

interface MultiRangeSliderProps {
  type: 'price' | 'time';
  min: number;
  max: number;
}

export default function MultiRangeSlider(props: MultiRangeSliderProps) {
  const { type, min, max } = props;

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback((value: number) =>
    Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const className = 'multi-slider'

  return (
    <div className={classNames(className + `__container`, className + `__container_${type}`)}>
      <div className={classNames(className + `__header-wrapper`, className + `__header-wrapper_${type}`)}>
        <div className={classNames(className + `__header-range`)}>от</div>
        <div className={classNames(className + `__header-range`)}>до</div>
      </div>
      <div className={classNames(className + `__input-wrapper`)}>

        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className={classNames(className + `__input`,
            className + `__input--left`,
            className + `__input_${type}`,
          )}
          style={{ zIndex: 3 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className={classNames(className + `__input`,
            className + `__input--right`,
            className + `__input_${type}`,
          )}        />
      </div>

      <div className={className}>
        <div className={classNames(className + `__track`, className + `__track_${type}`)}></div>
        <div ref={range} className={classNames(className + `__range`, className + `__range_${type}`)}></div>
        <div className={classNames(className + `__value-wrapper`)}>
        
          <div className={classNames(className + `__value`)}>{type === 'time' ? `${minVal}:00` : minVal}</div>
          <div className={classNames(className + `__value`)}>{type === 'time' ? `${maxVal}:00` : maxVal}</div>
        </div>
      </div>
    </div>
  );
}
