import React from 'react';
import TitleSection from './TitleSection';

class CardExperience extends React.Component{
	render(){
		const {dataCard} = this.props
		return(
			<div>
				<h2>Experiencia</h2>
				<ul className="listJobs">
					{
						dataCard.map(u =>
							<li>
								<div className="boxCard">
									<div className="containerTitleSection">
										<TitleSection title={u.companyName}/>
									</div>
									<p>{u.rolTitle}</p>
									<p>{u.rolDescription}</p>
									<p>{u.logo}</p>
									<p>Fecha:</p>
									<p>{u.date}</p>
									<p>Tecnologías utilizadas</p>
										<ul className="tagList">
											{
												u.tools.map(y =>
													<li>{y}</li>
												)
											}
										</ul>
								</div>
							</li>
						)
					}
				</ul>
			</div>
		);
	}
}

CardExperience.propTypes = {
	dataCard: React.PropTypes.array
};

export default CardExperience;