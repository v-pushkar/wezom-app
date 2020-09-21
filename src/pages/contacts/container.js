import { compose } from "redux";
import { connect } from "react-redux";
import { View } from "./view";
import { fechedContacts } from "./../../store/contacts/actions";

const mapStateToProps = (state) => {
	return {
		contactsList: state.contacts.contactsList,
		isLoading: state.contacts.isLoading,
		alert: state.contacts.alert,
		contactsStatistic: state.contacts.contactsStatistic,
	};
};

const mapDispatchToProps = {
	fechedContacts,
};

const PageContacts = compose(connect(mapStateToProps, mapDispatchToProps))(
	View
);

export { PageContacts };
