import { combineReducers } from "redux";

import user from './user/reducer';
import workflow from './workflow/reducer'
import chat from '@/modules/chat/reducer'
import project from '@/modules/project/reducer'
import team from '@/modules/team/reducer'

const rootReducer = combineReducers({
    user, workflow, chat, project, team
})

export default rootReducer;