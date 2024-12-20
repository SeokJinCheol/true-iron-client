import { combineReducers } from "redux";

import user from './user/reducer';
import workflow from './workflow/reducer'
import chat from '@/modules/chat/reducer'

const rootReducer = combineReducers({
    user, workflow, chat
})

export default rootReducer;