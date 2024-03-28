import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import styled from '@emotion/styled'


const NavContainer = styled.nav({
  marginLeft: '20px',
  marginTop: '20px',
  padding: '10px'
})

const DropDown = styled.select({
  border: '0px',
})

function App() {
  const [nav, setNav] = React.useState('Admin')
  const handleNavSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNav(e.target.value)
  }

  return (
    <>
      <NavContainer>
        <DropDown onChange={handleNavSelect} value={nav}>
          <option value='Admin'>Admin</option>
          <option value='Regular'>Regular</option>
        </DropDown>
      </NavContainer>
      <div className="App-header">
        <Search />
      </div>
    </>
  );
}

export default App;
