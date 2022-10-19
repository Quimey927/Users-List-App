import { Fragment } from 'react';

import classes from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

const ErrorModal = (props) => {
  const clickHandler = (evt) => {
    props.onCloseModal();
  }

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={clickHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Invalid Input</h2>
        </header>
        <div class={classes.content}>
          <p>{props.error || 'Error!!'}</p>
        </div>
        <footer className={classes.footer}>
          <Button className={classes.btn} type="button" onClick={clickHandler}>Okay</Button>
        </footer>
      </Card>
    </Fragment>
  )
};

export default ErrorModal;