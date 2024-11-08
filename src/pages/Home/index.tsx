import React, {FC} from 'react';
import './style.scss';

import {logoutUser, setUser} from "src/modules/user/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/modules";

interface Props {}

const Home: FC<Props> = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const Click = () => {
        dispatch(setUser({
            id: "4ade80",
            name: "",
            email: ""
        }))
    }

    return (
        <div>
            {user.id}
            <button onClick={() => Click()}>
                test
            </button>

            <button onClick={() => dispatch(logoutUser())}>
                remove
            </button>
        </div>
    )
}

export default Home;