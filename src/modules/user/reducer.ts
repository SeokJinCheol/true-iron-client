import { UserAction, User } from "./types";
import { createReducer } from 'typesafe-actions';
import { SET_USER, LOGOUT_USER } from "./actions";
import produce from "immer";

const initialState: User = {
    id: "",
    name: "",
    email: "",
}

const user = createReducer<User, UserAction>(initialState, {
    [SET_USER]: (state, action) => produce(state, draft => {
        draft.id = action.payload.id;
        draft.name = action.payload.name;
        draft.email = action.payload.email;
    }),
    [LOGOUT_USER]: (state) => produce(state, draft => {
        draft.id = "";
        draft.name = "";
        draft.email = "";
    })
})

export default user;