import React from "react";
import Link from "../../Link";
import { LinksHolder } from "./styles";

const GroupeOfLinks: React.FC = () => {
	return (
		<LinksHolder>
		    <Link state={'default'} />
			<h2>Default</h2>
		    <Link state={'disabled'} />
			<h2>Disabled</h2>
		    <Link state={'hover'} />
			<h2>Hover</h2>
		    <Link state={'active'} />
			<h2>Pressed</h2>
		</LinksHolder>
	)
}

export default GroupeOfLinks;