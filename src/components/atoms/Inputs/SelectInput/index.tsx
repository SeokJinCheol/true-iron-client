import React, {FC} from 'react';
import Select, {SingleValue} from "react-select";
import './_style.css'

interface Props {
    placeholder: string,
    options: Array<Object>,
    isMulti: boolean,
    required: boolean,
    onChange: (e:SingleValue<Object>) => void,
}

const SelectInput: FC<Props> = ({placeholder, options, isMulti, required, onChange}: Props) => {
    return (
        <div className="select">
            <Select
                onChange={onChange}
                placeholder={placeholder}
                options={options}
                isMulti={isMulti}
                required={required}
            />
        </div>
    )
}

export default SelectInput;