import React from 'react';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}

export default App;
