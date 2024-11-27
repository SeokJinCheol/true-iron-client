import { WorkFlowAction, WorkFlow } from "./types";
import { createReducer } from 'typesafe-actions';
import { SET_WORKFLOW, SET_WORKFLOW_ID } from "./actions";
import {produce} from "immer";

const initialState: WorkFlow = {
    id: ""
}

const user = createReducer<WorkFlow, WorkFlowAction>(initialState, {
    [SET_WORKFLOW]: (state, action) => produce(state, draft => {
        draft.id = action.payload.id;
    }),

    [SET_WORKFLOW_ID]: (state, action) => produce(state, draft => {
        draft.id = action.payload;
    })
})

export default user;