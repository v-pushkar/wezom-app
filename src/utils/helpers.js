export const toDate = (date) => {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const bdate = new Date(date);
	const day = days[bdate.getDay()];
	const daydate = bdate.getDate();
	const month = bdate.getMonth();
	const year = bdate.getFullYear();
	return `${day} ${daydate}/${month}/${year}`;
};
export const resultTransform = (res, searchFilter) => {
	const validData = res.map((i) => {
		return {
			...i,
			fullname: `${i.name.title}. ${i.name.first} ${i.name.last}`,
			avatar: i.picture.medium,
			birthday: [`${toDate(i.dob.date)}`, `${i.dob.age} years`],
		};
	});
	if (!searchFilter) {
		console.log("filter 1:", searchFilter);
		return validData;
	}
	if (!!searchFilter) {
		console.log("filter :", searchFilter);
		return validData.filter((i) =>
			i.fullname.toLowerCase().includes(searchFilter.toLowerCase())
		);
	}
};

export const NationalitesCounter = (data) => {
	// console.log("NationalitesCounter", data);
	let res = {};
	data.forEach((i) => {
		if (res[countryList[i.nat]]) {
			++res[countryList[i.nat]];
		} else if (i.nat) {
			res[countryList[i.nat]] = 1;
		}
	});
	return res;
};
export const serchRequestString = (data) => {
	console.log("serchRequestString data :", data);
	const baseUrl = "https://randomuser.me/api/";

	const peges = 500;
	const nat = data.nat.length ? `&nat=${data.nat.join()}` : "";
	const gender = data.gender.length ? `&gender=${data.gender}` : "";
	const serchUrl = `${baseUrl}?results=${peges}${nat}${gender}`;
	// console.log("serchRequestString :", serchUrl);
	return serchUrl;
};
export const statisticElementsCounter = (data, type) => {
	let res = {};
	data.forEach((i) => {
		if (res[i[type]]) {
			++res[i[type]];
		} else if (i[type]) {
			res[i[type]] = 1;
		}
	});
	console.log("ressss:", res);
	return res;
};
export const genderPredominate = (data) => {
	let obj = statisticElementsCounter(data, "gender")
	let res = null;
	Object.keys(obj).forEach((i) => {
		if (!res) {
			res = i
		}
		else if(obj[res] !== obj[i]){
			res = obj[res] > obj[i] ? res: i
		}
		 
	});
	return res
};
export function jsUcfirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
export const countryOptions = [
	{ label: "American", value: "US" },
	{ label: "Australian", value: "AU" },
	{ label: "Brazilian", value: "BR" },
	{ label: "British", value: "GB" },
	{ label: "Canadian", value: "CA" },
	{ label: "Danish", value: "DK" },
	{ label: "Dutch", value: "NL" },
	{ label: "Finnish", value: "FI" },
	{ label: "French", value: "FR" },
	{ label: "German", value: "DE" },
	{ label: "Iranian", value: "IR" },
	{ label: "Irish", value: "IE" },
	{ label: "New Zealander", value: "NZ" },
	{ label: "Norwegian", value: "NO" },
	{ label: "Spanish", value: "ES" },
	{ label: "Swiss", value: "CH" },
	{ label: "Turkish", value: "TR" },
];
export const genderList = ["male", "female", "Indeterminate"];

export const countryList = {
	AF: "Afghanistan",
	AL: "Albania",
	DZ: "Algeria",
	AS: "American Samoa",
	AD: "Andorra",
	AO: "Angola",
	AI: "Anguilla",
	AQ: "Antarctica",
	AG: "Antigua and Barbuda",
	AR: "Argentina",
	AM: "Armenia",
	AW: "Aruba",
	AU: "Australia",
	AT: "Austria",
	AZ: "Azerbaijan",
	BS: "Bahamas (the)",
	BH: "Bahrain",
	BD: "Bangladesh",
	BB: "Barbados",
	BY: "Belarus",
	BE: "Belgium",
	BZ: "Belize",
	BJ: "Benin",
	BM: "Bermuda",
	BT: "Bhutan",
	BO: "Bolivia (Plurinational State of)",
	BQ: "Bonaire, Sint Eustatius and Saba",
	BA: "Bosnia and Herzegovina",
	BW: "Botswana",
	BV: "Bouvet Island",
	BR: "Brazil",
	IO: "British Indian Ocean Territory (the)",
	BN: "Brunei Darussalam",
	BG: "Bulgaria",
	BF: "Burkina Faso",
	BI: "Burundi",
	CV: "Cabo Verde",
	KH: "Cambodia",
	CM: "Cameroon",
	CA: "Canada",
	KY: "Cayman Islands (the)",
	CF: "Central African Republic (the)",
	TD: "Chad",
	CL: "Chile",
	CN: "China",
	CX: "Christmas Island",
	CC: "Cocos (Keeling) Islands (the)",
	CO: "Colombia",
	KM: "Comoros (the)",
	CD: "Congo (the Democratic Republic of the)",
	CG: "Congo (the)",
	CK: "Cook Islands (the)",
	CR: "Costa Rica",
	HR: "Croatia",
	CU: "Cuba",
	CW: "Curaçao",
	CY: "Cyprus",
	CZ: "Czechia",
	CI: "Côte d'Ivoire",
	DK: "Denmark",
	DJ: "Djibouti",
	DM: "Dominica",
	DO: "Dominican Republic (the)",
	EC: "Ecuador",
	EG: "Egypt",
	SV: "El Salvador",
	GQ: "Equatorial Guinea",
	ER: "Eritrea",
	EE: "Estonia",
	SZ: "Eswatini",
	ET: "Ethiopia",
	FK: "Falkland Islands (the) [Malvinas]",
	FO: "Faroe Islands (the)",
	FJ: "Fiji",
	FI: "Finland",
	FR: "France",
	GF: "French Guiana",
	PF: "French Polynesia",
	TF: "French Southern Territories (the)",
	GA: "Gabon",
	GM: "Gambia (the)",
	GE: "Georgia",
	DE: "Germany",
	GH: "Ghana",
	GI: "Gibraltar",
	GR: "Greece",
	GL: "Greenland",
	GD: "Grenada",
	GP: "Guadeloupe",
	GU: "Guam",
	GT: "Guatemala",
	GG: "Guernsey",
	GN: "Guinea",
	GW: "Guinea-Bissau",
	GY: "Guyana",
	HT: "Haiti",
	HM: "Heard Island and McDonald Islands",
	VA: "Holy See (the)",
	HN: "Honduras",
	HK: "Hong Kong",
	HU: "Hungary",
	IS: "Iceland",
	IN: "India",
	ID: "Indonesia",
	IR: "Iran",
	IQ: "Iraq",
	IE: "Ireland",
	IM: "Isle of Man",
	IL: "Israel",
	IT: "Italy",
	JM: "Jamaica",
	JP: "Japan",
	JE: "Jersey",
	JO: "Jordan",
	KZ: "Kazakhstan",
	KE: "Kenya",
	KI: "Kiribati",
	KP: "Korea (the Democratic People's Republic of)",
	KR: "Korea (the Republic of)",
	KW: "Kuwait",
	KG: "Kyrgyzstan",
	LA: "Lao People's Democratic Republic (the)",
	LV: "Latvia",
	LB: "Lebanon",
	LS: "Lesotho",
	LR: "Liberia",
	LY: "Libya",
	LI: "Liechtenstein",
	LT: "Lithuania",
	LU: "Luxembourg",
	MO: "Macao",
	MG: "Madagascar",
	MW: "Malawi",
	MY: "Malaysia",
	MV: "Maldives",
	ML: "Mali",
	MT: "Malta",
	MH: "Marshall Islands (the)",
	MQ: "Martinique",
	MR: "Mauritania",
	MU: "Mauritius",
	YT: "Mayotte",
	MX: "Mexico",
	FM: "Micronesia (Federated States of)",
	MD: "Moldova (the Republic of)",
	MC: "Monaco",
	MN: "Mongolia",
	ME: "Montenegro",
	MS: "Montserrat",
	MA: "Morocco",
	MZ: "Mozambique",
	MM: "Myanmar",
	NA: "Namibia",
	NR: "Nauru",
	NP: "Nepal",
	NL: "Netherlands (the)",
	NC: "New Caledonia",
	NZ: "New Zealand",
	NI: "Nicaragua",
	NE: "Niger (the)",
	NG: "Nigeria",
	NU: "Niue",
	NF: "Norfolk Island",
	MP: "Northern Mariana Islands (the)",
	NO: "Norway",
	OM: "Oman",
	PK: "Pakistan",
	PW: "Palau",
	PS: "Palestine, State of",
	PA: "Panama",
	PG: "Papua New Guinea",
	PY: "Paraguay",
	PE: "Peru",
	PH: "Philippines (the)",
	PN: "Pitcairn",
	PL: "Poland",
	PT: "Portugal",
	PR: "Puerto Rico",
	QA: "Qatar",
	MK: "Republic of North Macedonia",
	RO: "Romania",
	RU: "Russian Federation (the)",
	RW: "Rwanda",
	RE: "Réunion",
	BL: "Saint Barthélemy",
	SH: "Saint Helena, Ascension and Tristan da Cunha",
	KN: "Saint Kitts and Nevis",
	LC: "Saint Lucia",
	MF: "Saint Martin (French part)",
	PM: "Saint Pierre and Miquelon",
	VC: "Saint Vincent and the Grenadines",
	WS: "Samoa",
	SM: "San Marino",
	ST: "Sao Tome and Principe",
	SA: "Saudi Arabia",
	SN: "Senegal",
	RS: "Serbia",
	SC: "Seychelles",
	SL: "Sierra Leone",
	SG: "Singapore",
	SX: "Sint Maarten (Dutch part)",
	SK: "Slovakia",
	SI: "Slovenia",
	SB: "Solomon Islands",
	SO: "Somalia",
	ZA: "South Africa",
	GS: "South Georgia and the South Sandwich Islands",
	SS: "South Sudan",
	ES: "Spain",
	LK: "Sri Lanka",
	SD: "Sudan (the)",
	SR: "Suriname",
	SJ: "Svalbard and Jan Mayen",
	SE: "Sweden",
	CH: "Switzerland",
	SY: "Syrian Arab Republic",
	TW: "Taiwan",
	TJ: "Tajikistan",
	TZ: "Tanzania, United Republic of",
	TH: "Thailand",
	TL: "Timor-Leste",
	TG: "Togo",
	TK: "Tokelau",
	TO: "Tonga",
	TT: "Trinidad and Tobago",
	TN: "Tunisia",
	TR: "Turkey",
	TM: "Turkmenistan",
	TC: "Turks and Caicos Islands (the)",
	TV: "Tuvalu",
	UG: "Uganda",
	UA: "Ukraine",
	AE: "United Arab Emirates",
	GB: "Great Britain",
	UM: "United States Minor Outlying Islands (the)",
	US: "USA",
	UY: "Uruguay",
	UZ: "Uzbekistan",
	VU: "Vanuatu",
	VE: "Venezuela (Bolivarian Republic of)",
	VN: "Viet Nam",
	VG: "Virgin Islands (British)",
	VI: "Virgin Islands (U.S.)",
	WF: "Wallis and Futuna",
	EH: "Western Sahara",
	YE: "Yemen",
	ZM: "Zambia",
	ZW: "Zimbabwe",
	AX: "Åland Islands",
};