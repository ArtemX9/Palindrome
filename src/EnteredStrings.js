import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import EnteredStringItem from './EnteredStringItem';

class EnteredStrings extends Component {
  state = {
    previouslyEnteredStrings: this.props.previouslyEnteredStrings
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ previouslyEnteredStrings: nextProps.previouslyEnteredStrings })
  }

  title = () => this.state.previouslyEnteredStrings.length >= 1 ?
    'These are the sentences you tried before:' :
    'You don\'t have saved sentences';

  render() {
    const { previouslyEnteredStrings } = this.state;

    return (
      <Paper zDepth={2} style={{ marginTop: 30, padding: 15 }}>
        <p style={{ paddingBottom: 10, margin: 0 }}>{this.title()}</p>
        {
          previouslyEnteredStrings.map((item, index) => (
            <EnteredStringItem key={`${item}-${index}`} itemm={item.inputString} />
          ))
        }
      </Paper>
    );
  }
}

export default EnteredStrings;
