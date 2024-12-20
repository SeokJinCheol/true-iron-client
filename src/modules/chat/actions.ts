import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const SET_CHAT = "chat/SET_CAHT";

export const setChat = createStandardAction(SET_CHAT)<{
    id: string;
}>();
