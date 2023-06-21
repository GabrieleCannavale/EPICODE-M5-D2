import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Jumbotron/Welcome';
import MyFooter from './components/MyFooter/MyFooter';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LatestRelease from './components/main/LatestRelease/LatestRelease';


function App() {

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
    <NavigationBar onSearch={handleSearch} />
    <Welcome />
    <LatestRelease searchValue={searchValue} />
    <MyFooter />
    </>
  );
}

export default App;
