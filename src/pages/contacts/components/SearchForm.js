import React, { useState } from "react";
import { Input, Form, Col, Row, Select, Checkbox, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import {
	genderList,
	countryOptions,
	serchRequestString,
} from "./../../../utils/helpers";

const { Search } = Input;
const { Option } = Select;

const styles = {
	wrapper: {
		marginBottom: "14px",
		padding: "10px",
		backgroundColor: "#fafafa",
	},
	form: {
		padding: "16px",
		backgroundColor: "#fff",
		boxShadow: "0 5px 5px hsla(0,0%,40%,.1)",
	},
	inputs: {
		fontSize: "16px",
		width: "calc(100% - 15px)",
		marginRight: "15px",
	},
	col: {
		height: "40px",
	},
};

export const SearchForm = ({ onSerchData }) => {
	const initialState = {
		text: "",
		gender: "",
		nat: [],
	};

	const [formState, setFormState] = useState(initialState);
	const serchInputHendler = (val, type) => {
		const newformState = { ...formState, [type]: val };
		setFormState(newformState);
		onSerchData(serchRequestString(newformState), newformState.text);
	};
	const clearForm = () => {
		setFormState(initialState);
		onSerchData()
	};

	return (
		<div className="serch-form-wrapp" style={styles.wrapper}>
			<Form style={styles.form}>
				<Row>
					<Col span={11} style={styles.col}>
						<Search
							style={styles.inputs}
							size="large"
							placeholder="input search text"
							name="text"
							value={formState.text}
							onChange={(e) => {
								serchInputHendler(e.target.value, "text");
							}}
						/>
					</Col>
					<Col span={4} style={styles.col}>
						<Form.Item style={styles.inputs}>
							<Select
								size="large"
								placeholder="Gender"
								value={formState.gender}
								onChange={(value) => {
									serchInputHendler(value, "gender");
								}}
								title={"hsgd"}
							>
								{genderList.map((i) => (
									<Option key={i} value={i}>
										{i}
									</Option>
								))}
							</Select>
						</Form.Item>
					</Col>
					<Col span={5} style={styles.col}>
						<Form.Item style={styles.inputs}>
							<Select
								name="nat"
								size="large"
								placeholder="Nationality"
								allowClear
								mode="multiple"
								value={formState.nat}
								maxTagCount={2}
								onChange={(value) => {
									serchInputHendler(value, "nat");
								}}
							>
								{countryOptions.map((i) => (
									<Select.Option
										mode="multiple"
										key={i.value}
										value={i.value}
									>
										{i.label}
									</Select.Option>
								))}
							</Select>
						</Form.Item>
					</Col>
					<Col span={4} style={styles.col}>
						<Row justify="space-between">
							<Form.Item name="remember" valuePropName="checked">
								<Checkbox disabled>I am creator</Checkbox>
							</Form.Item>
							<Button type="link" onClick={clearForm}>
								<CloseOutlined /> Clear
							</Button>
						</Row>
					</Col>
				</Row>
			</Form>
		</div>
	);
};
