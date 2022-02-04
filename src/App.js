import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import ExperimentNavBar from './components/ExperimentNavBar';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import StatusPage from './content/StatusPage';
import VisualizationsPage from './content/VisualizationsPage';
import DatabasePage from './content/DatabasePage';
import ConfigurationPage from './content/ConfigurationPage';
import { BackendContext, DEFAULT_BACKEND } from './BackendContext';

class App extends Component {
  render() {
    return (
      <>
        <BackendContext.Provider value={{ address: DEFAULT_BACKEND }}>
          <TutorialHeader />
          <ExperimentNavBar />
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/status" component={StatusPage} />
              <Route path="/visualizations" component={VisualizationsPage} />
              <Route path="/database" component={DatabasePage} />
              <Route path="/configuration" component={ConfigurationPage} />
            </Switch>
          </Content>
        </BackendContext.Provider>
      </>
    );
  }
}

export default App;
