import React, { Component } from 'react';
import './App.css';
import EnteredStrings from './components/EnteredStrings/EnteredStrings';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PalindromeValidator from './components/PalindromeValidator/PalindromeValidator';

import { saveToLocalStorage, getUserEntries } from './utils/LocalStorage';
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

  updateSavedItems = (enteredItem) => {
    let updatedItems = saveToLocalStorage(enteredItem);
    this.setState({ previouslyEnteredStrings: updatedItems });
  };

  render() {
    return (
      <div className="App">
        <PalindromeValidator onTextEntered={this.updateSavedItems} />
        <EnteredStrings previouslyEnteredStrings={this.state.previouslyEnteredStrings} />
      </div>
    );
  }
}

export default App;
