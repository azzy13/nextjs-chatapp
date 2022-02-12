import { useContext } from 'react';
import axios from 'axios';
import { Context } from '../context/index';
import { useRouter } from 'next/router';

const Auth = () => {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        'https://api.chatengine.io/users/',
        { username, secret },
        { headers: { 'Private-Key': '47b59687-900c-4cf2-9fbd-e81ade2b2bbc' } },
      )
      .then((res) => {
        router.push('/chats');
      });
  };

  return (
    <div className='background'>
      <div className='auth-container'>
        <form className='auth-form' onSubmit={(e) => SubmitHandler(e)}>
          <div className='auth-title'>NextJS Chat</div>
          <div className='input-container'>
            <input
              placeholder='Email'
              className='text-input'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='input-container'>
            <input
              placeholder='Password'
              type='password'
              className='text-input'
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type='submit' className='submit-button'>
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
