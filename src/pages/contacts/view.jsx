import React, { useState, useEffect } from "react";

import { Spin } from "antd";
import { ContactsTable } from "./components/ContactsTable";
import Statistics from "./components/Statistic";
import { SearchForm } from "./components/SearchForm";
import Header from "components/contacts/Header";

const View = (props) => {
	const [contactsList, setContactsList] = useState([]);
	const fetchContactsList = () => {
		props.fechedContacts();
	};
	useEffect(() => {
		fetchContactsList();
	}, []);
	return (
		<div className={"page page--contacts"}>
			<div className="site-page-header-ghost-wrapper">
				<Header onRefresh={fetchContactsList}/>
				<SearchForm onSerchData={props.fechedContacts} />
				{props.contactsList.length ? (
					<>
						<ContactsTable data={props.contactsList} />
						<Statistics />
					</>
				) : (
					<div
						style={{
							with: "100%",
							height: "100%",
							backgroundColor: "#ffffff63",
							textAlign: "center",
							padding: "70px 0",
						}}
					>
						<Spin />
					</div>
				)}
			</div>
		</div>
	);
};

export { View };
