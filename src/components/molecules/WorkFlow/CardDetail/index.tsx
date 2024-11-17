import React, {FC, useEffect} from 'react';

import './_style.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/modules";
import {setWorkFlowID} from "src/modules/workflow/actions";

const CardDetail: FC = () => {
    const dispatch = useDispatch();
    const { id } = useSelector((state: RootState) => state.workflow);

    return (
        <div className="card__detail" style={id === "" ? {display: "none"} : {}}>
            {id}
            <i className="ri-close-line" onClick={() => dispatch(setWorkFlowID(""))}>test</i>
        </div>
    )
}

export default CardDetail;