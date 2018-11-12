import React from 'react';

require( '../styles/index.scss');

// import Header from './components/Header';
import FichaPersonal from './components/FichaPersonal';
import PortfolioContent from './components/PortfolioContent';

// import Experience from './components/Experience';

import myData from './json/resume.json';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="boxContent">
							<div className="fichaPersonal col-md-4">
								<FichaPersonal  dataFichaPersonal={myData.fichaPersonal}/>
							</div>
							<div className="portfolioContent col-md-8">
								<PortfolioContent dataPortfolioContent={myData.dataPortfolioContent}/>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
  }
}
