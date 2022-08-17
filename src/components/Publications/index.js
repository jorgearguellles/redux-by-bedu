import { useParams } from "react-router-dom";
import { Component } from "react";

function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class Publications extends Component {

	render() {			
		return (
			<div>			
				{this.props.params.key}               
			</div>
		);
	}
}

export default withParams(Publications);
