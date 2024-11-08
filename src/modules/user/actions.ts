import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const SET_USER = "user/SET_USER";
export const LOGOUT_USER = "user/DELETE_USER";

export const setUser = createStandardAction(SET_USER)<{
    id: string;
    name: string;
    email: string;
}>();

export const logoutUser = createStandardAction(LOGOUT_USER)();
