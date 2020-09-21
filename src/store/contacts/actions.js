import { resultTransform, serchRequestString } from "./../../utils/helpers";
import {
	FETCH_CONTACTS,
	SET_CONTACTS_STATISTIC,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ALERT,
	HIDE_ALERT,
} from "./types";

export const showLoader = () => ({
	type: SHOW_LOADER,
});
export const hideLoader = () => ({
	type: HIDE_LOADER,
});

export const showAlert = (alert) => {
	return (dispatch) => {
		dispatch({ type: SHOW_ALERT, payload: alert });
		setTimeout(() => {
			dispatch(hideAlert());
		}, 2000);
	};
};
export const hideAlert = () => ({ type: HIDE_ALERT });

export const fechedContacts = (
	url = "https://randomuser.me/api/?results=700",
	includStr = null
) => {
	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const response = await fetch(url);
			const json = await response.json();
			dispatch({
				type: FETCH_CONTACTS,
				payload: resultTransform(json.results, includStr),
			});
			dispatch(hideLoader());
		} catch (error) {
			console.log("ERROR :", error.message);
			dispatch(showAlert(error.message));
		}
	};
};
