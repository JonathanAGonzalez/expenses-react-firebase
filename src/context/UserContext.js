import { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged, auth } from '../firesbase/firebaConfig';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [stateUserContext, setstateUserContext] = useState({ user: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cancelSuscription = onAuthStateChanged(auth, (user) => {
      setstateUserContext(user);
      setLoading(false);
    });
    return cancelSuscription;
  }, []);

  return (
    <UserContext.Provider value={{ stateUserContext, setstateUserContext }}>
      {!loading !== false && children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
