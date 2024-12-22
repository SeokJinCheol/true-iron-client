import { ActionType } from "typesafe-actions";
import * as actions from './actions';

export type ProjectAction = ActionType<typeof actions>;

export type Project = {
    id: string,
    name: string,
}