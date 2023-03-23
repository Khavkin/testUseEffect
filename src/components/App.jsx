import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contactsList = JSON.parse(localStorage.getItem('contacts')) ?? [];
    setContacts(contactsList);
  }, []); // ComponentDidMount

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); // ComponentDidUpdate

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
