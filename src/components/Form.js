import { Component } from "react";
import GeneralInfo from "./General_Info";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      name: "",
      phoneNumberInput: null,
      phoneNumber: null,
      submitStatus: false,
    };
    this.changeName = this.changeName.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }
  submitName = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.nameInput,
      submitStatus: true,
      phoneNumber: this.state.phoneNumberInput,
    });
    console.log(this.state);
  };
  changeName = (e) => {
    console.log(e.target.value);
    this.setState({
      nameInput: e.target.value,
    });
  };
  changeNumber = (e) => {
    this.setState({
      phoneNumberInput: e.target.value,
    });
  };

  checkStatus() {
    console.log(this.state);
    if (this.state.submitStatus === true) {
      return null;
    } else {
      return (
        <div>
          <form onSubmit={this.submitName}>
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
            <input type="submit"></input>{" "}
          </form>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <this.checkStatus />
        <GeneralInfo
          name={this.state.name}
          phoneNumber={this.state.phoneNumber}
        />
      </div>
    );
  }
}
