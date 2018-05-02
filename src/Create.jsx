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
    console.log("this", this.props.user);

    return (
      <div>
        <label htmlFor="firstname">firstname</label>
        <input
          name="firstname"
          type="text"
          onChange={this.takeF.bind(this)}
          // onChange={() => this.state.firstname}
        />
        <br />
        <label htmlFor="lastname">lastname</label>
        <input name="lastname" type="text" onChange={this.takeV.bind(this)} />
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
