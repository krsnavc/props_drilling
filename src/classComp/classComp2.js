import React from 'react';

class ClassComponent2 extends React.Component {
  render() {
    return (
      <div className="input-box">
        <input type="text" value={this.props.data}></input>
      </div>
    );
  }
}

export { ClassComponent2 };
