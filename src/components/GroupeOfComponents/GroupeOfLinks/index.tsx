import React from "react";
import Link from "../../Link";
import { LinksHolder } from "./styles";

const GroupeOfLinks: React.FC = () => {
	return (
		<LinksHolder>
		    <Link disabled={false} />
			<h2>Default</h2>
		    <Link disabled={true} />
			<h2>Disabled</h2>
		    <Link disabled={false} state={'hover'} />
			<h2>Hover</h2>
		    <Link disabled={false} state={'active'} />
			<h2>Pressed</h2>
		</LinksHolder>
	)
}

export default GroupeOfLinks;