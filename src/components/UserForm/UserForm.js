import { useState, Fragment, useRef } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './UserForm.module.css';

const UserForm = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState('');

  const submitHandler = (evt) => {
    evt.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (!enteredUsername.trim().length || !enteredAge.trim().length) {
      setError('You have to give a username and an age');
      return;
    }

    if (+enteredAge < 1) {
      setError('Number must be greater than 0');
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const closeModalHandler = () => {
    setError('');
  }

  return (
    <Fragment>
      {error && <ErrorModal error={error} onCloseModal={closeModalHandler} />}
      <Card>
        <form className={classes['form-control']} onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={usernameInputRef}  
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  )
};

export default UserForm;