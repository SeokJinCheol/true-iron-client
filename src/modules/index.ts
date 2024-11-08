import { combineReducers } from "redux";

import user from './user/reducer';
import {User} from './user/types';

export type RootState = {
    user: User;
}

const rootReducer = combineReducers({
    user
})

export default rootReducer;