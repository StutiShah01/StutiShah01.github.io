import React, { useEffect ,useState} from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	
	const currentSEO = SEO.find((item) => item.page === "projects");
	
	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46}/>
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							I’ve delivered several hands-on projects: a responsive company site with lead capture,
							 lightweight content management, and analytics a modern portfolio with routing, 
							 smooth animations, and basic SEO file-compression REST APIs for uploading, 
							 compressing, and extracting archives with streaming downloads, limits, tests, and 
							 containerized deploys; a video platform clone with feed/search/watch pages, custom player,
							  history/queue, and infinite scroll and a job portal with auth, job posting CRUD,
							   profiles/resumes, filtered search, application tracking, and an admin dashboard.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
