import React, {FC, useEffect} from 'react';

import './_style.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/modules";
import {setWorkFlowID} from "src/modules/workflow/actions";

const CardDetail: FC = () => {
    const dispatch = useDispatch();
    const { id } = useSelector((state: RootState) => state.workflow);

    return (
        <div className="absolute top-0 right-0 w-1/5 h-full bg-blue-200 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
             style={id === "" ? {display: "none"} : {display: ""}}>
            {id}
            <i className="ri-close-line" onClick={() => dispatch(setWorkFlowID(""))}>test</i>
        </div>
    )
}

export default CardDetail;