import DatePicker from "react-datepicker";
import { useState } from "react";
import classNames from "classnames";
import ru from 'date-fns/locale/ru';

interface DateFieldProps {
  bemClass: string,
  placeholder?: string,
  size?: 'normal' | 'small'
}

function DateField(props: DateFieldProps) {
  const { 
    bemClass, 
    placeholder,
    size,
  } = props;

  const [date, setDate] = useState<Date | null>(null);

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