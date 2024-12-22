import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const SET_PROJECT = "chat/SET_PROJECT";

export const setProject = createStandardAction(SET_PROJECT)<{
    id: string;
}>();
