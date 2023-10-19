import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import { RootState } from './data/store/store';
import { login, logout } from './data/store/slices/userSlice';
import { IUser } from './types/user';

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const user: IUser | null = userState.user;

  if (!user) {
    return (
      <button onClick={() => dispatch(login({ name: 'John' }))}>Login</button>
    );
  }

  return (
    <div>
      Hello, {user && user.name}
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default App;
