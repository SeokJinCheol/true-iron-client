import React, {FC} from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './_style.css'
import {CircularProgressbar} from "react-circular-progressbar";

interface Props {
    percent: number;
}

const CircleProgress:FC<Props> = ({ percent }) => {
    return (
        <CircularProgressbar value={percent} text={`${percent}%`} />
    )
}

export default CircleProgress;