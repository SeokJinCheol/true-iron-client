import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const SET_WORKFLOW = "user/SET_WORKFLOW";
export const SET_WORKFLOW_ID = "user/SET_WORKFLOW_ID";

export const setWorkFlow = createStandardAction(SET_WORKFLOW)<{
    id: string;
}>();

export const setWorkFlowID = createStandardAction(SET_WORKFLOW_ID)<string>();