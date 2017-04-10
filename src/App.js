import React, { Component } from 'react';
import './App.css';
import EnteredStrings from './EnteredStrings';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PalindromeValidator from './PalindromeValidator';

import { saveToLocalStorage, getUserEntries } from './utils/LocalStorageWorker';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  state = {
    previouslyEnteredStrings: []
  };

  componentWillMount() {
    this.setState({ previouslyEnteredStrings: getUserEntries() }) ;
  }

  updateSavedItems = (inputString) => {
    let updatedItems = saveToLocalStorage(inputString);
    this.setState({ previouslyEnteredStrings: updatedItems });
  };

  render() {
    return (
      <div className="App">
        <PalindromeValidator updateSavedItems={this.updateSavedItems} />
        <EnteredStrings previouslyEnteredStrings={this.state.previouslyEnteredStrings} />
      </div>
    );
  }
}

export default App;
