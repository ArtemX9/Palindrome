import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import EnteredStringItem from '../EnteredStringItem/EnteredStringItem';
import './EnteredStrings.css';

const styles = {
  enteredStringsBody: {
    marginTop: 30,
    padding: 15
  }
};

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
      <Paper zDepth={2} style={styles.enteredStringsBody}>
        <p className='Entered-strings-list-title'>{this.title()}</p>
        {
          previouslyEnteredStrings.map((item, index) => (
            <EnteredStringItem key={`${item.inputString}-${index}`} item={item} />
          ))
        }
      </Paper>
    );
  }
}

EnteredStrings.propTypes = {
  previouslyEnteredStrings: React.PropTypes.array
};

export default EnteredStrings;
