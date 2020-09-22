import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Header.styles';

const Header = (props) => (
	<div className="page__head">
		<div className="ant-page-header ant-page-header-ghost">
			<div className="ant-page-header-heading">
				<div className="ant-page-header-heading-left">
					<span
						className="ant-page-header-heading-title"
						title="Contacts"
					>
						Contacts
					</span>
				</div>
				<span className="ant-page-header-heading-extra">
					<button
						type="button"
						className="ant-btn ant-btn-dashed ant-btn-circle ant-btn-icon-only"
						onClick={props.onRefresh}
					>
						<span
							role="img"
							aria-label="reload"
							className="anticon anticon-reload"
						>
							<svg
								viewBox="64 64 896 896"
								focusable="false"
								className=""
								dataicon="reload"
								width="1em"
								height="1em"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path>
							</svg>
						</span>
					</button>
					<div className="ant-btn-group">
						<button
							type="button"
							className="ant-btn ant-btn-default ant-btn-icon-only"
						>
							<span
								role="img"
								aria-label="appstore"
								className="anticon anticon-appstore"
							>
								<svg
									viewBox="64 64 896 896"
									focusable="false"
									className=""
									dataicon="appstore"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path>
								</svg>
							</span>
						</button>
						<button
							type="button"
							className="ant-btn is-active ant-btn-primary ant-btn-icon-only"
						>
							<span
								role="img"
								aria-label="unordered-list"
								className="anticon anticon-unordered-list"
							>
								<svg
									viewBox="64 64 896 896"
									focusable="false"
									className=""
									data-icon="unordered-list"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"></path>
								</svg>
							</span>
						</button>
					</div>
				</span>
			</div>
		</div>
	</div>
);

export default Header;
