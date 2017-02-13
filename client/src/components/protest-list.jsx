import React from 'react';
import Protest from './protest.jsx';
import db from '../firebase-config.jsx';

class ProtestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protests: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <ul>
        {
          this.state.protests.map(protest => {
            <Protest />
          })
        }
      </ul>
    );
  }
}

export default ProtestList;
