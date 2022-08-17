import { useParams } from "react-router-dom";
import { Component } from "react";
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';

function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class Publications extends Component {

  componentDidMount(){
    if(!this.props.users.length){
      this.props.getAllUsers();
    }
  }

	render() {			
    console.log(this.props)
		return (
			<div>
        <h1>Publication of </h1>
				{this.props.params.key}               
			</div>
		);
	}
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(withParams(Publications));
