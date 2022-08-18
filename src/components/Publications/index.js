import { useParams } from "react-router-dom";
import { Component } from "react";
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';
import * as publicationsActions from '../../actions/publicationsActions';

function withParams(Component) {
	return props => <Component {...props} params={useParams()} />;
}

class Publications extends Component {

  componentDidMount(){
    if(!this.props.usersReducer.users.length){
      this.props.getAllUsers();
    };
    this.props.getPublications();
  };

	render() {			
    console.log(this.props)
		return (
			<div>
        <h1>Publication of </h1>
				{this.props.params.key}               
			</div>
		);
	};
};

const mapStateToProps = (reducers) => {
  const {usersReducer, publicationsReducer} = reducers;

  return {
    usersReducer, 
    publicationsReducer
  };
};

const mapDispatchToProps = {
  ...usersActions, 
  ...publicationsActions
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Publications));
