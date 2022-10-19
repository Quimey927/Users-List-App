import { useState } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './UserForm.module.css';

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');
  
  const usernameChangeHandler = (evt) => {
    setEnteredUsername(evt.target.value);
  };
  
  const ageChangeHandler = (evt) => {
    setEnteredAge(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (!enteredUsername.trim().length || !enteredAge.trim().length) {
      setError('You have to give a username and an age');
      return;
    }

    if (+enteredAge < 1) {
      setError('Number must be greater than 0');
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const closeModalHandler = () => {
    setError('');
  }

  return (
    <Wrapper>
      {error && <ErrorModal error={error} onCloseModal={closeModalHandler} />}
      <Card>
        <form className={classes['form-control']} onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
};

export default UserForm;