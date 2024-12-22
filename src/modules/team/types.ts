import { ActionType } from "typesafe-actions";
import * as actions from './actions';

export type TeamAction = ActionType<typeof actions>;

export type Team = {
    id: string;
    name: string;
}