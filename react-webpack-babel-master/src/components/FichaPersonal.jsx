import React from 'react';
import MainPhoto from './fragments/MainPhoto';
import IconsFicha from './fragments/IconsFicha';


class FichaPersonal extends React.Component {
	render() {
		const {dataFichaPersonal} = this.props
		return (
			<div className="containerFichaPersonal">
					<MainPhoto name={dataFichaPersonal.name} position={dataFichaPersonal.position} image={dataFichaPersonal.image}/>
					<IconsFicha/>
					<p className="pageDescription">
						{this.props.dataFichaPersonal.summary}
					</p>
			</div>
		);
	}
}

FichaPersonal.propTypes = {
	dataFichaPersonal: React.PropTypes.object
};

export default FichaPersonal;