import React from 'react';

class IconFicha extends React.Component {
	render() {
		return (
			<div className="containerIconsFicha">
					<a  target="_blank" href="https://www.twitter.com">
						<div className="icon">
							<img  className="personalPhoto" src={require('../../images/git.png')}/>
						</div>
					</a>
					<a target="_blank" href="https://www.linkedin.com/in/juan-jes%C3%BAs-calvente-calvente-1b1607a9/">
						<div className="icon">
							<img  className="personalPhoto" src={require('../../images/linkedin.png')}/>
						</div>
					</a>
			</div>
		);
	}
}

export default IconFicha;
