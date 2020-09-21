import {
	FETCH_CONTACTS,
	SET_CONTACTS_STATISTIC,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ALERT,
	HIDE_ALERT,
} from "./types";
const initialState = {
    isLoading:false,
    alert:null,
    contactsList: [],
    contactsStatistic:[]
};

export const reducer = (state = initialState, action) => {
    console.log("CONTACTS REDUSER :", action)
	switch (action.type) {
		case SHOW_LOADER:
			return { ...state, isLoading: true };

		case HIDE_LOADER:
			return { ...state, isLoading: false };
		case HIDE_ALERT:
			return { ...state, alert: null };
		case SHOW_ALERT:
			return { ...state, alert: action.payload };
		case FETCH_CONTACTS:
			return { ...state, contactsList: action.payload };
		case SET_CONTACTS_STATISTIC:
			return { ...state, contactsStatistic: action.payload };

		default:
			return state;
	}
};
