import { Route, Switch } from 'react-router';
import styled, { createGlobalStyle } from 'styled-components';

import { 
  Header,
  Home,
  Bookmarks, 
  Footer   
} from './components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const AppWrapper = styled.div`
  height: 100%;
`;

function App() {
  return (
    <AppWrapper >
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/bookmarks' component={Bookmarks} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}

export default App;
