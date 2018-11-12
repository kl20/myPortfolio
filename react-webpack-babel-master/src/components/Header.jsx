import React from 'react';
// import '../../styles/header.scss';

export default class Header extends React.Component {
		render() {
			return (
					<header>
					 <div className="headerLanguage">
							<a href="javascript:alert('Sorry, in progress.')"> ES </a>
							<a href="javascript:alert('Sorry, in progress.')"> EN </a>
					 </div>
					 <div className="headerTitle">
							<div className="headerName">
								 <h1>Juan Jesús Calvente Calvente</h1>
							</div>
							<div className="headerCareer">
								 <h2>Ingeniero Informático</h2>
							</div>
					 </div>
					 <div className="border"></div>
				</header>
			);
		}
}
