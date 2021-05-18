import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { register, signin } from './actions/userActions';

const App = () => {
  const testState: any = useSelector((state: any) => state.userSignin);
  const dispatch: any = useDispatch();

  useEffect(() => {
    //dispatch(signin())
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Funciona :3</h1>
      <h2>
        Redux Tambien, pero sin Types :( result - {testState && testState.msg}
      </h2>
      <button
        type="button"
        className="bg-black p-1 text-white outline-none"
        onClick={(e) => {
          dispatch(signin({ username: 'eric', passwrd: '1345' }));
          e.preventDefault();
        }}
      >
        redux test
      </button>
    </div>
  );
};

export default App;
