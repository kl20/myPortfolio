import React from 'react';

class MainPhoto extends React.Component {
		render() {
			const { position, name, image } = this.props
			return (
				<div className="containerPersonalPhoto">
					<div className="boxPhoto">
						<img  className="personalPhoto" src={require('../../images/personalPhoto.jpg')}/>
					</div>
					<div className="circlePhoto"></div>
					<div className="hideCircle"></div>
					<div className="mainMenu">
							<a href="#init">
								<div className="init circleMenu"> 
									<img  src={require('../../images/home.png')}/>
								</div>
							</a>
							<a href="#experience">
								<div className="experience circleMenu">
									<img src={require('../../images/experience.png')}/>
								</div>
							</a>
							<a href="#aboutMe">
								<div className="aboutMe circleMenu">
									<img src={require('../../images/education.png')}/>
								</div>
							</a>
						</div>
					<div className="personalDescription">
						<h1>{name}</h1>
						<h2>{position}</h2>
					</div>
				</div>
			);
		}
}

MainPhoto.propTypes = {
	name: React.PropTypes.string,
	position: React.PropTypes.string,
	image: React.PropTypes.string
};

export default MainPhoto;