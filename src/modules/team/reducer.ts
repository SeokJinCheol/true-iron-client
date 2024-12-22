import { TeamAction, Team } from "./types";
import { createReducer } from 'typesafe-actions';
import { SET_TEAM } from "./actions";
import {produce} from "immer";

const initialState: Team = {
    id: "",
    name: "",
}

const chat = createReducer<Team, TeamAction>(initialState, {
    [SET_TEAM]: (state, action) => produce(state, draft => {
        draft.id = action.payload.id;
    }),
})

export default chat;