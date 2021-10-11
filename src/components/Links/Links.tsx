import React from "react";
import { Space, Button } from "antd";
import { LINKS } from "../../constants/constants";
import { openInNewTab } from "../../utils/utils";

export const AppLinks: React.FC = () => {
	return (
		<Space wrap>
			{LINKS.map((link) => {
				return link.enable ? (
					<Button
						key={link.key}
						type="primary"
						shape="round"
						size="large"
						icon={<link.cover style={{ marginRight: 10 }} />}
						onClick={() => openInNewTab(link.link)}
					>
						{link.title}
					</Button>
				) : null;
			})}
		</Space>
	);
};
