import UserItem from '../UserItem/UserItem';
import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card>
      <ul className={classes.users}>
        {props.users.map(user => (
          <UserItem
            key={user.id}
          >
            {user.username} ({user.age} years old)
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;