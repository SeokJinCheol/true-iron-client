import React, {FC} from 'react';
import './style.scss';
import {SingleValue} from "react-select";
import FlowBoard from "src/components/molecules/Flow";

interface Props {}

const Home: FC<Props> = () => {

    return (
        <div>
            <FlowBoard/>
        </div>
    )
}

export default Home;