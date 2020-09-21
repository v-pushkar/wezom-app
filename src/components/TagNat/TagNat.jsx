import React from "react";
import { Tag } from "antd";
import { countryList } from "./../../utils/helpers";

const TagNat = ({ nat }) => {
 
	const nationalites = [
		"AU",
		"BR",
		"CA",
		"CH",
		"DE",
		"DK",
		"ES",
		"FI",
		"FR",
		"GB",
		"IE",
		"IR",
		"NO",
		"NL",
		"NZ",
		"TR",
		"US",
	];
	const tagcolors = [
		"magenta",
		"red",
		"volcano",
		"orange",
		"gold",
		"lime",
		"green",
		"cyan",
		"blue",
		"geekblue",
		"purple",
  ];
  
	const color = !!tagcolors[nationalites.indexOf(nat)]
		? tagcolors[nationalites.indexOf(nat)]
		: "default";

	return <Tag color={color}>{countryList[nat]}</Tag>;
};

export default TagNat;
