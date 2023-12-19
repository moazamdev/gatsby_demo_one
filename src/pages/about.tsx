import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage: React.FC<PageProps> = () => {
	return (
		<Layout pageTitle="About Me">
			<StaticImage alt="People in a crowd" src="../images/people.webp" />
			<p>
				Hi there! I'm the proud creator of this site, which I built with
				Gatsby.
			</p>
		</Layout>
	);
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
