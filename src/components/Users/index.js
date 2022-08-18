import React, { Component } from "react";
import { LoadingSpinner } from "../Spinner";
import { Fatal } from '../Fatal';
import Table from "./Table";

// 7 import
import { connect } from 'react-redux';
// 8 import
import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  componentDidMount(){
    this.props.getAllUsers();
  };

  renderContent = () => {

    if(this.props.loading){
      return <LoadingSpinner/>
    }

    if(this.props.error){
      return <Fatal message={this.props.error}/>
    }

    return <Table />
  };

  render(){
    return (
      <div className="margin">
        <h1>Users</h1>
        {this.renderContent()}
      </div>
    );
  };
};


const mapStateToProps = (reducers) =>{
  return reducers.usersReducer
};

// export default connect(/* All reducers by Provider show to user */, {/*Actions  */})(Users);
export default connect( mapStateToProps, usersActions )(Users);

