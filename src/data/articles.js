import React from "react";

function article_1() {
	return {
		date: "28 March 2025",
		title: "Redux-Saga and the Quest for the Lost Side Effects",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
	
	};
}



const myArticles = [article_1];

export default myArticles;
