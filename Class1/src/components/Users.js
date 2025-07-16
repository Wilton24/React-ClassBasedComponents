import { Component } from 'react';
import User from './User';
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
  { id: 'u4', name: 'Sarah' },
  { id: 'u5', name: 'John' },
  { id: 'u6', name: 'Emily' },
  { id: 'u7', name: 'Michael' },
  { id: 'u8', name: 'Olivia' },
  { id: 'u9', name: 'David' },
  { id: 'u10', name: 'Sophia' },
];

// const usersList = (
//   <ul>
//     {DUMMY_USERS.map((user) => (
//       <User key={user.id} name={user.name} />
//     ))}
//   </ul>
// );



class Users extends Component {

  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'temp_state',
      searchInput: '',
      users: DUMMY_USERS,
    };
  }

  toggleUsersHandler = () => {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  };

  searchUser = (event) => {
    console.log(event.target.value);
    this.setState({
      searchInput: event.target.value,
      users: DUMMY_USERS.filter((user) =>
        user.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  render() {
    const userList = (
      <ul className={classes['users-list']}>
        {this.state.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <p>
          <input type="text" onChange={this.searchUser.bind(this)} />
        </p>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && this.state.users.length > 0 && userList}
      </div>
    );
  }
};

export default Users;
