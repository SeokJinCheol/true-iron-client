import { ChatAction, Chat } from "./types";
import { createReducer } from 'typesafe-actions';
import { SET_CHAT } from "./actions";
import {produce} from "immer";

const initialState: Chat = {
    id: "",
}

const chat = createReducer<Chat, ChatAction>(initialState, {
    [SET_CHAT]: (state, action) => produce(state, draft => {
        draft.id = action.payload.id;
    }),
})

export default chat;