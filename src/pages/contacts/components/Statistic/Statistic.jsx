import React, { useState } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Typography, Row, Col, Statistic } from "antd";
import {
	NationalitesCounter,
	statisticElementsCounter,
	jsUcfirst,
	genderList,
	genderPredominate,
} from "./../../../../utils/helpers";

const { Header, Content, Footer } = Layout;

const styles = {
	padding: "20px",
	backgroundColor: "#fff",
	boxShadow: "0 5px 5px hsla(0,0%,40%,.1)",
	marginTop: "30px",
};

const Statistics = ({ data }) => {
	return (
		<div className="table-wrapper" style={styles}>
			<Content style={{ padding: "0 50px" }}>
				<Typography.Title level={2}>Statistic</Typography.Title>
				<Row gutter={16}>
					<Col span={2}>
						<Statistic
							title="Collection size"
							value={data.length}
						/>
					</Col>
					<Col span={8}>
						<Row>
							{genderList.map((i, idx) => {
								return (
									<Col key={i} span={4}>
										<Statistic
											title={jsUcfirst(i)}
											value={
												statisticElementsCounter(
													data,
													"gender"
												)[i]
											}
										/>
									</Col>
								);
							})}
						</Row>

						<Row style={{ marginTop: "10px" }}>
							<Typography.Text mark>
								{genderPredominate(data)} predominate
							</Typography.Text>
						</Row>
					</Col>
				</Row>
				<Row style={{ marginTop: "20px" }}>
					<Typography.Text type="secondary">
						Nationalities
					</Typography.Text>
				</Row>
				<Row gutter={16} style={{ marginTop: "20px" }}>
					{Object.keys(NationalitesCounter(data)).map((i, idx) => {
						return (
							<Col key={idx} span={2}>
								<b>{i}:</b>
								{NationalitesCounter(data)[i]}
							</Col>
						);
					})}
				</Row>
			</Content>
		</div>
	);
};
const mapStateToProps = (state) => ({
	data: state.contacts.contactsList,
});
export default connect(mapStateToProps, null)(Statistics);
