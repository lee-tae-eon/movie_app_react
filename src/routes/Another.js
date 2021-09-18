import React from "react";

class Another extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter} <button onClick={this.add}>add</button>
      </div>
    );
  }
  add = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };
}

export default Another;
