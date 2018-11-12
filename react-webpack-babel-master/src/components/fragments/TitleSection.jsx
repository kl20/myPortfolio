import React from 'react';

class TitleSection extends React.Component{
	render(){

		const {title} = this.props

		return(
			<div className="boxTitleSection">
				<h2>{title}</h2>
			</div>
		);
	}
}

TitleSection.propTypes = {
  title: React.PropTypes.string
};

export default TitleSection;
