import classes from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li className={classes.list}>
      {props.children}
    </li>
  );
};

export default UserItem;