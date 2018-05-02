import React, { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
    };
  }
  takeV(e) {
    this.setState({ lastname: e.target.value });
  }
  takeF(e) {
    this.setState({ firstname: e.target.value });
  }
  render() {
    return (
      <div>
        <input
          name="firstname"
          type="text"
          onChange={this.takeF.bind(this)}
          placeholder="First Name"
        />
        <br />
        <input
          name="lastname"
          type="text"
          onChange={this.takeV.bind(this)}
          placeholder="Last Name"
        />
        <br />
        <button
          onClick={() =>
            this.props.createUser(this.state.firstname, this.state.lastname)
          }
        >
          Add
        </button>
      </div>
    );
  }
}

export default Create;
