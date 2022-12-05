import TYPE from "./types";

interface NavState {
	origin: any;
	destination: any;
	travelTimeInformation: any;
}
const initialState: NavState = {
	origin: null,
	destination: null,
	travelTimeInformation: null,
};

export default (state: NavState = initialState, action: any) => {
	switch (action.type) {
		case TYPE.SET_ORIGIN:
			return {
				...state,
				selected: action.playload,
			};
		case TYPE.SET_DESTINATION:
			return {
				...state,
				selected: action.playload,
			};
		case TYPE.SET_TRAVELTIMEINFORMATION:
			return {
				...state,
				selected: action.playload,
			};
		default:
			return state;
	}
};
