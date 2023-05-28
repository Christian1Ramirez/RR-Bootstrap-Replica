import './App.css';
import splashImage from './embedded/background.webp'
import TopBar from './components/TopBar';
import styled from 'styled-components';
import StoreListing from './components/StoreListing';

const Splash = styled.div`
  width: 100%;
  height: 22.5rem;
  background-repeat: no-repeat;
  background-size: 45% 100%;
  background-image: url(${ splashImage });
  background-position: right;
  background-color: #dfeed6;
  position: absolute;
  left: 0;
  top: 40px;
  bottom: 0;
  right: 50px;
  z-index: -1;
`

function App() {
  return <>
    <TopBar />
    <Splash />
    <StoreListing />
  </>
}

export default App;
