import React from "react";
import { Table, Input, Button, Space } from "antd";
import { Avatar } from "antd";
import { UserOutlined, CopyTwoTone } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TagNat from "components/TagNat/TagNat";
import CopyIcon from "./../../../components/CopyIcon";

const columns = [
	{
		title: "Avatar",
		dataIndex: "avatar",
		key: "avatar",
		render: (src) => (
			<Avatar size="large" icon={<UserOutlined />} src={src} />
		),
	},
	{
		title: "Full name",
		dataIndex: "fullname",
		sorter: (a, b) => a.fullname.length - b.fullname.length,
		sortDirections: ["descend"],
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Birthday",
		dataIndex: "birthday",
		render: (text) => (
			<span>
				{text[0]}
				<br />
				{text[1]}
			</span>
		),
	},
	{
		title: "Email",
		dataIndex: "email",
		render: (mail) => (
			<span>
				<CopyIcon text={mail} />
				<a href={`mailto:${mail}`}>{mail}</a>
			</span>
		),
	},
	{
		title: "Phone",
		dataIndex: "phone",
		render: (tel) => (
			<span>
				<CopyIcon text={tel} />
				<a href={`tel:${tel}`}>{tel}</a>
			</span>
		),
	},
	{
		title: "Location",
		dataIndex: "location",
		render: (location) => (
			<span>
				<CopyIcon
					text={`${location.country} /${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`}
				/>
				<b>/{location.country}/</b>
				<br />
				{`${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`}
			</span>
		),
	},
	{
		title: "Nationality",
		dataIndex: "nat",
		render: (nat) => <TagNat nat={nat} />,
	},
];

const styles = {
	padding: "20px",
	backgroundColor: "#fff",
	boxShadow: "0 5px 5px hsla(0,0%,40%,.1)",
};
export const ContactsTable = (props) => {
	const onChange = (pagination, filters, sorter, extra) => {
		
	};
	return (
		<div className="table-wrapper" style={styles}>
			<Table
				columns={columns}
				dataSource={props.data}
				onChange={onChange}
			/>
		</div>
	);
};
