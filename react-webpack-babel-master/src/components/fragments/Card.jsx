import React from 'react';
import TitleSection from './TitleSection';

class Card extends React.Component{
	render(){
		const {dataCard} = this.props
		return(
			<ul className="listJobs">
				{
					dataCard.map(u => {
						return(
							<li>
								<div className="boxCard">
									<div className="containerTitleSection">
										<TitleSection title={u.title}/>
									</div>
									<p>{u.description}</p>
								</div>
							</li>
							)
					}

					)
				}
			</ul>

		);
	}
}

Card.propTypes = {
	dataCard: React.PropTypes.array
};

export default Card;