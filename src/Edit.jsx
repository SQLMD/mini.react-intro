import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: this.props.user.lastname,
      firstname: this.props.user.firstname,
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
            this.props.editUser(this.state.firstname, this.state.lastname)
          }
        >
          Add
        </button>
      </div>
    );
  }
}

export default Edit;
