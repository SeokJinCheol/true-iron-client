import { ActionType } from "typesafe-actions";
import * as actions from './actions';

export type WorkFlowAction = ActionType<typeof actions>;

export type WorkFlow = {
    id: string;
}