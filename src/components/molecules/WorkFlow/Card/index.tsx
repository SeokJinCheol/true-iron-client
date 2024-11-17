import React, { FC } from 'react'

import './_style.css'
import {DateInput} from "src/components/atoms/Inputs";
import {useDispatch} from "react-redux";
import {setWorkFlowID} from "src/modules/workflow/actions";
import CircleProgress from "src/components/atoms/Progress/CircleProgress";
import BarProgress from "src/components/atoms/Progress/BarProgress";

interface Props {

}

const FlowCard: FC<Props> = () => {
    const dispatch = useDispatch();
    return (
        <div className="work__card" onClick={() => {
            dispatch(setWorkFlowID("로그인 기능 구현"));
        }}>
            <div className="items">
                <div className="title">로그인 기능 구현</div>
                <div className="item__body">
                    <DateInput date={new Date()} placeholder={""}/>
                    <div className="progress">
                        <CircleProgress percent={0.5}/>
                    </div>
                </div>
            </div>

            <BarProgress percent={0.5}/>
        </div>
    )
}

export default FlowCard;