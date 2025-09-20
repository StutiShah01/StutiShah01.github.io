import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./style/article.css";
import { useNavigate } from "react-router-dom";

const Article = (props) => {
	const { date, title, description, link } = props;
	const navigate =useNavigate();


	return (
		<>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<div className="article-link"
						onClick={() => navigate(link)} // navigate to the passed link
      					style={{ cursor: "pointer" }}>
							Read Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				
			</div>
		</>
	);
};

export default Article;
