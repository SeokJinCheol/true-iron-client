import React, {FC, useEffect, useState} from 'react'

import './_style.css'
import {DateInput} from "src/components/atoms/Inputs";
import {useDispatch} from "react-redux";
import {setWorkFlowID} from "src/modules/workflow/actions";
import CircleProgress from "src/components/atoms/Progress/CircleProgress";

interface Props {
    workId: string
}

const FlowCard: FC<Props> = ({workId}) => {
    const [title, setTitle] = useState<string>(workId);
    const [percent, setPercent] = useState<number>(0);

    useEffect(() => {
        const titles = {
            "1": "로그인 기능 구현",
            "2": "암호화",
            "3": "로그인 화면 구성",
            "4": "login API구현"
        }[workId] || "";

        const percents = {
            "1": 0.5 * 100,
            "2": 0.7  * 100,
            "3": 1 * 100,
            "4": 0.4  * 100,
        }[workId] || 0;

        setTitle(titles);
        setPercent(percents);
    }, []);

    const dispatch = useDispatch();
    return (
        <div className="work__card" onClick={() => {
            dispatch(setWorkFlowID("로그인 기능 구현"));
        }}>
            <div className="items">
                <div className="title">{title}</div>
                <div className="item__body">
                    <div className="progress p-2">
                        <CircleProgress percent={percent}/>
                    </div>
                    <DateInput date={new Date()} placeholder={""}/>
                </div>

                <i className="ri-user-2-fill"/>
            </div>
        </div>
    )
}

export default FlowCard;