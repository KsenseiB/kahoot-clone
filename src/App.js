import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Main from './components/Host/Main';
import New_Quiz from './components/Host/New_Quiz'
import Game from './components/Game/Game'
import Questions from './components/Host/Questions';
import New_Question from './components/Host/New_Question';
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/game/:id' component={Game} />
          <Route path='/host' exact component={Main} />
          <Route path='/host/newQuiz'  component={New_Quiz} />
          <Route path='/host/questions' component={Questions} />
          <Route path='/host/newquestion' component={New_Question} />
        </Switch>
      </div>
    );
  }
}

export default App;