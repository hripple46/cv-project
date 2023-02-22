import { Component } from "react";

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      name: "",
      phoneNumberInput: null,
      phoneNumber: null,
    };
    this.changeName = this.changeName.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
    this.displayGeneralInfo = this.displayGeneralInfo.bind(this);
  }
  changeName = (e) => {
    this.setState({
      nameInput: e.target.value,
    });
  };
  changeNumber = (e) => {
    this.setState({
      phoneNumberInput: e.target.value,
    });
  };
  displayGeneralInfo() {
    if (this.props.isSubmitted) {
      return (
        <div>
          <h1>{this.state.nameInput}</h1>
          <h1>{this.state.phoneNumberInput}</h1>
        </div>
      );
    } else {
      return (
        <div>
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.nameInput}
            onChange={this.changeName}
          ></input>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="number"
            name="phoneNumber"
            onChange={this.changeNumber}
          ></input>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <this.displayGeneralInfo />
      </div>
    );
  }
}
