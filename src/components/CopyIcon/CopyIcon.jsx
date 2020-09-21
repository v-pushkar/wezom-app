import React, { useState } from "react";
import { CopyTwoTone, CheckOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyIcon = ({ text }) => {
	const [isClicked, setIsClicked] = useState(false);

	const onClickHendler = () => {
		setIsClicked(true);
		setTimeout(() => {
			setIsClicked(false);
		}, 2000);
	};
	if (isClicked) {
		return (
			<CheckOutlined style={{ marginRight: "3px", color: "#52c41a" }} />
		);
	}
	return (
		<CopyToClipboard text={text} onCopy={onClickHendler}>
			<CopyTwoTone style={{ marginRight: "3px" }} />
		</CopyToClipboard>
	);
};

export default CopyIcon;
