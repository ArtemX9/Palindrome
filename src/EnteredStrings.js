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

  clicked = (item) => {
    console.log(item);
  };

  onHoverr = () => {
    console.log('hovered');
  };

  render() {
    const { previouslyEnteredStrings } = this.state;
    const items = () => {
      return previouslyEnteredStrings.map((item, index) => (
        <EnteredStringItem key={`${item}-${index}`} itemm={item} />
      ) )
    };

    return (<Paper zDepth={2} style={{ marginTop: 30, padding: 15 }}>
        <p style={{ paddingBottom: 10, margin: 0 }}>These are the sentences you tried before:</p>
        {items()}
      </Paper>
    );
  }
}

export default EnteredStrings;
