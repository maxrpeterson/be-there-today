import React from 'react';
import Protest from './protest.jsx';
import { db } from '../firebase-connection.jsx';

class ProtestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protests: []
    };
  }

  componentDidMount() {
    console.log(db);
    db.ref('/protests').once('value').then(snapshot => {
      console.log(snapshot.val());
      this.setState({
        protests: snapshot.val()
      });
    });
  }

  render() {
    return (
      <ul>
        {
          this.state.protests.map((protest, i) => {
            return <Protest protest={protest} key={i}/>;
          })
        }
      </ul>
    );
  }
}

export default ProtestList;
