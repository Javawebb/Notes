import { Notes } from './components/Notes'
import styled from 'styled-components';
import Bg from './bg.jpg'
import {Brown} from './style/GlobalStyle'
import {Black} from './style/GlobalStyle'
import {Green} from './style/GlobalStyle'
import {Red} from './style/GlobalStyle'
function App() {
  return (
    <AppStyle className="App">
      <h1 className="App-title">YOUR NOTES</h1>
      <div className="container">
        <Notes/>
      </div>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: cover;
  .App-title{
    text-align: center;
    padding: 40px 0 60px 0;
    color:${Brown};
    font-size: 50px;
  }

  .container{
    width: 80%;
    margin: 0 auto;
  }
`
