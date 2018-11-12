import React from 'react';

import AboutMe from './AboutMe';
import CardExperience from './fragments/CardExperience';

class PortfolioContent extends React.Component {
		render() {
			const {dataPortfolioContent} = this.props
			return (
				<div className="containerPortfolioContent">
					<AboutMe dataAboutMe={dataPortfolioContent.aboutMe}/>
					<CardExperience dataCard={dataPortfolioContent.experience}/>
				</div>
			);
		}
}

PortfolioContent.propTypes = {
	dataPortfolioContent: React.PropTypes.object
};

export default PortfolioContent;
