import React, {FC} from 'react'
import './_style.css';

interface Props {
    percent: number;
}

const BarProgress:FC<Props> = ({ percent }) => {
    return (
        <div className="bar__progress">
            <progress value={percent}>{`${percent}%`}</progress>
        </div>
    )
}

export default BarProgress;