import React, {FC} from 'react';
import './style.scss';
import {SelectInput, TextBoxInput, TextUnderLineInput} from "src/components/atoms/Inputs";
import {LoadingSpinner, LoadingWave} from "src/components/atoms/Loading";
import {SingleValue} from "react-select";

interface Props {}

const Home: FC<Props> = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const onChange = (e:SingleValue<Object>) => {
        console.log(e);
    }

    return (
        <div>
            <i className="ri-user-2-fill" />
            <TextUnderLineInput/>
            <LoadingWave />
            <LoadingSpinner />
            <TextBoxInput />
            <SelectInput onChange={onChange} placeholder={"선택해"} options={options} isMulti={false} required={true}/>
        </div>
    )
}

export default Home;