import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Wrapper>
            <Title>Hello World!</Title>
          </Wrapper>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </a>
      </header>
    </div>
  );
}

export default App;
