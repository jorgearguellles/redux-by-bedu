import React, { Component } from "react";
import axios from "axios";

class Users extends Component {

  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  async componentDidMount(){
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: data
    });
  };

  putRows = () => (
    this.state.users.map( user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>      
    ))
  )

  render(){
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

export { Users };
