import React from 'react';

class Protest extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return <div className="protest">{this.props.name}</div>;
  }
}

export default Protest;
