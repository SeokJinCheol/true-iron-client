import React, {FC, useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './_style.css'

interface Props {
    date: Date | null,
    placeholder: string | ""
}

const PropsDefault: Props = {
    date: new Date(),
    placeholder: "날짜를 선택하세요"
}

const DateInput: FC<Props> = ({date, placeholder}) => {
    const [startDate, setStartDate] = useState(undefined);
    const [endDate, setEndDate] = useState(undefined);

    const changeDate = (dates:any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    }

    return (
        <div className="date__input">
            <DatePicker
                placeholderText={placeholder || "날짜를 선택하세요."}
                selected={null}
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => changeDate(date)}
                showMonthYearDropdown={undefined}
                dateFormat={"YYYY-MM-dd HH:mm"}
                timeFormat="HH:mm"
                selectsRange
                showTimeSelect
            />
        </div>
    )
}

export default DateInput;