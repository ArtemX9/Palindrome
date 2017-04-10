import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import { isPalindrome } from '../../utils/Palindrome';

const styles = {
  validatorBody: {
    marginTop: 30,
    padding: 15
  },
  validatorInput: {
    paddingTop: 30
  }
};

class PalindromeValidator extends Component {
  state = {
    inputString: '',
    isPalindrome: null
  };

  resultString = () => {
    return this.state.isPalindrome === null ? '' : `The string is${ !this.state.isPalindrome ? ' not' : ''} Palindrome`;
  };

  onInputChange = (event, inputString) => {
    this.setState({ inputString });
  };

  textEntered = () => {
    const { inputString } = this.state;
    if (inputString.trim() === '') {
      return;
    }
    const palindrome = isPalindrome(inputString);
    this.setState({ isPalindrome: palindrome });
    this.props.updateSavedItems({ inputString, isPalindrome: palindrome });
  };

  render() {
    let className = !!this.state.isPalindrome ? 'isPalindrome' : 'isNotPalindrome';

    return (
      <Paper zDepth={2} style={styles.validatorBody}>
        <p className={`Result-string ${className}`} >{this.resultString()}</p>
        <TextField
          hintText="Enter the string you want to check for Palindrome"
          fullWidth={true}
          value={this.state.inputString}
          onChange={this.onInputChange}
          style={styles.validatorInput}
        />
        <RaisedButton fullWidth primary label="Check it!" onTouchTap={this.textEntered} style={{ marginTop: 5 }}/>
      </Paper>
    );
  }
}

export default PalindromeValidator;