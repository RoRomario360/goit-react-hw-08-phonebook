import avatar from '../../images/avatar.jpeg';
import { getUserName } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const userAvatar = avatar;
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <img src={userAvatar} alt="avatar" width="20"></img>
      <span>Welcome {name}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
