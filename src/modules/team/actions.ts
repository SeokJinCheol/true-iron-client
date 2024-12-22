import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const SET_TEAM = "chat/SET_TEAM";

export const setTeam = createStandardAction(SET_TEAM)<{
    id: string;
    name: string;
}>();
