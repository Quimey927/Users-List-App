import { useState } from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Wrapper from './components/Helpers/Wrapper';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([
      {
        username: 'Quimey',
        age: 32,
        id: 'u1'
      }
  ]);

  const addUserHandler = (username, age) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ username: username, age: age, id: Math.random().toString });
      return updatedUsers;
    });
  };

  return (
    <Wrapper>
      <UserForm onAddUser={addUserHandler}/>
      <UserList users={users}/>
    </Wrapper>
  );
}

export default App;
