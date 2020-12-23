import React from 'react';
import BookList from './components/BooksList';
import Button from './components/Button';
import NavBar from './components/NavBar';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
        <Button />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
