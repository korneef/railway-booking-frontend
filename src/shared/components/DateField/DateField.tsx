import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import classNames from "classnames";
import ru from 'date-fns/locale/ru';
import { useAppDispatch } from "../../../app/store/hooks";
import { updateRequestParameter } from "../../../app/store/ticketSearchRequestSlices";
import moment from "moment";

interface DateFieldProps {
  bemClass: string,
  placeholder?: string,
  size?: 'normal' | 'small',
  requestKey: 'date_start' | 'date_end',
}

function DateField(props: DateFieldProps) {
  const { 
    bemClass, 
    placeholder,
    size,
    requestKey
  } = props;
  const [date, setDate] = useState<Date | null>(null);
  const dispatch = useAppDispatch()

  useEffect(() => {
    (date !== null) ?
        dispatch(updateRequestParameter({key: requestKey, value: moment(date).format('YYYY-MM-DD')}))
        :
        dispatch(updateRequestParameter({key: requestKey, value: false}))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])

  const className = `datefield-input_${size}`;

  return (
    <div className={classNames(`${bemClass}__date-input-wrapper`)}>
      <DatePicker
        locale={ru}
        dateFormat="dd/MM/yy"
        className={classNames(bemClass + `__${className}`, className)}
        selected={date}
        onChange={(date) => setDate(date)}
        calendarStartDay={1}
        placeholderText={placeholder} />
    </div>
  );
}

export default DateField;