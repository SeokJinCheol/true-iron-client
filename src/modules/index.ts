import { combineReducers } from "redux";

import user from './user/reducer';
import {User} from './user/types';
import workflow from './workflow/reducer'
import {WorkFlow} from './workflow/types'

export type RootState = {
    user: User,
    workflow: WorkFlow
}

const rootReducer = combineReducers({
    user, workflow
})

export default rootReducer;