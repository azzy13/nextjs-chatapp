import { useEffect, useState, useContext } from 'react';
import { Context } from '../context/index';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then((module) => module.ChatEngine),
);
const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then((module) => module.MessageFormSocial),
);

const Chats = () => {
  const { username, secret } = useContext(Context);
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (typeof document) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === '' || secret === '') {
      router.push('/');
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className='background'>
      <div className='shadow'>
        <ChatEngine
          height='calc(77vh)'
          projectID='e22dd079-68c7-49d5-b3a9-3b8ea3d3afc6'
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
};

export default Chats;
