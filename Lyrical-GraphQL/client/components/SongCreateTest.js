import React, { useState } from "react";

class SongCreateTest extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { title: "" };
  // }
  state = { title: "" };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("onSubmit");
  };

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title :</label>
          <input
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SongCreateTest;
