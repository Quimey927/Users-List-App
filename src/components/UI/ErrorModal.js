import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick} />
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Invalid Input</h2>
        </header>
        <div class={classes.content}>
          <p>{props.error || 'Error!!'}</p>
        </div>
        <footer className={classes.footer}>
          <Button className={classes.btn} type="button" onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
  );
};

const ErrorModal = (props) => {
  const clickHandler = (evt) => {
    props.onCloseModal();
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          onClick={clickHandler}
        />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          error={props.error}
          onClick={clickHandler}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  )
};

export default ErrorModal;