import React, { Component } from "react";
import { LoadingSpinner } from "../Spinner";

// 7 import
import { connect } from 'react-redux';
// 8 import
import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  componentDidMount(){
    this.props.getAllUsers();
  };

  renderContent = () => {
    return(
      <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.putRows()}
          </tbody>
        </table>
    );
  };

  putRows = () => (
    this.props.users.map( user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>      
    ))
  )

  render(){
    console.log(this.props);
    return (
      <div className="margin">
        {this.props.loading ? <LoadingSpinner/> : this.renderContent()}
      </div>
    );
  };
};

const mapStateToProps = (reducers) =>{
  return reducers.usersReducer
};

// export default connect(/* All reducers by Provider show to user */, {/*Actions  */})(Users);
export default connect( mapStateToProps, usersActions )(Users);
