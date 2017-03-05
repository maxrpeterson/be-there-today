import React from 'react';

class Protest extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="protest">
        <h3>{this.props.protest.title}</h3>
        <p>{this.props.protest.description}</p>
      </div>
    );
  }
}

export default Protest;
