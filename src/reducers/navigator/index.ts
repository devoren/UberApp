import { action } from "typesafe-actions";

import reducers from "./reducer";
import TYPE from "./types";

export const setOrigin = (data: any) => (dispatch: any) => {
	dispatch(action(TYPE.SET_ORIGIN, data));
};
export const setDestination = (data: any) => (dispatch: any) => {
	dispatch(action(TYPE.SET_DESTINATION, data));
};
export const setTravelTimeInformation = (data: any) => (dispatch: any) => {
	dispatch(action(TYPE.SET_TRAVELTIMEINFORMATION, data));
};

export default reducers;
