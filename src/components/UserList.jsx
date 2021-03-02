import { Component } from 'react';
import User from '../models/User'
import UserCard from './UserCard'
import './Card.css';


class UserList extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: User.getAll()
    }
  }

  render(){
    return (
      <div className="App">
         {this.state.users.map((user) => 
            <UserCard user={user}/>
          )}
      </div>
    );
  }
}

export default UserList;