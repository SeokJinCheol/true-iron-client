import { ProjectAction, Project } from "./types";
import { createReducer } from 'typesafe-actions';
import { SET_PROJECT } from "./actions";
import {produce} from "immer";

const initialState: Project = {
    id: "",
    name: ""
}

const chat = createReducer<Project, ProjectAction>(initialState, {
    [SET_PROJECT]: (state, action) => produce(state, draft => {
        draft.id = action.payload.id;
    }),
})

export default chat;