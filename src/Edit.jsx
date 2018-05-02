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
    console.log(this.props);
    return (
      <div>
        <input
          name="firstname"
          type="text"
          onChange={this.takeF.bind(this)}
          placeholder={this.props.user.firstName}
        />
        <br />
        <input
          name="lastname"
          type="text"
          onChange={this.takeV.bind(this)}
          placeholder={this.props.user.lastName}
        />
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
