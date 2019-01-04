import React from 'react';
import TitleSection from './fragments/TitleSection';

class AboutMe extends React.Component {
		render() {

			const {dataAboutMe} = this.props

			return (
				<div name="aboutMe" className="boxAboutMe">
					<TitleSection title={dataAboutMe.title}/>
					<p>{dataAboutMe.description}</p>
					<p>test</p>
				</div>
			);
		}
}


AboutMe.propTypes = {
  dataAboutMe: React.PropTypes.object
};

export default AboutMe;
