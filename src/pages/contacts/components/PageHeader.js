import React from "react";
import { PageHeader, Button } from "antd";

export const Page_Header = () => {
	return (
		<div className="site-page-header-ghost-wrapper">
			<PageHeader
				className="site-page-header"
				title="Contacts"
				extra={[
					<Button key="3">Operation</Button>,
					<Button key="2">Operation</Button>,
					<Button key="1" type="primary">
						Primary
					</Button>,
				]}
			/>
		</div>
	);
};
