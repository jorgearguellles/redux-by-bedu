import React, { Component } from "react";

// 7 import
import { connect } from 'react-redux';
// 8 import
import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  // Comment constructor because we started using Store from Redux as Global State.
  // constructor(){
  //   super()
  //   this.state = {
  //     users: []
  //   }
  // }

  componentDidMount(){
    this.props.getAllUsers();
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
      </div>
    );
  };
};


const mapStateToProps = (reducers) =>{
  return reducers.usersReducer
};

// export default connect(/* All reducers by Provider show to user */, {/*Actions  */})(Users);
export default connect( mapStateToProps, usersActions )(Users);

