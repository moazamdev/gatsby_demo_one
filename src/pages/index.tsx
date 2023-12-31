import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout pageTitle="Home Page">
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
				src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
			/>
			<p>I'm making this by following the Gatsby Tutorial.</p>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
