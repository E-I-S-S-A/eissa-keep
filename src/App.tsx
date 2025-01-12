import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import useUserHook from './hooks/useUserHook';

function App() {

  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
  const { getAndSetUser, redirectToAccounts } = useUserHook()

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {
    try {
      const user = await getAndSetUser();
      setIsSignedIn(true)
    } catch (error) {
      redirectToAccounts();
    }
  };

  return (
    <>
      {
        isSignedIn === true ?
          <Dashboard />
          : "Loading"
      }
    </>
  );
}

export default App;
