import { Component } from "react";
import GeneralInfo from "./General_Info";
import App from "../App";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      name: "",
    };
    this.changeName = this.changeName.bind(this);
  }
  submitName = (e) => {
    e.preventDefault();
    console.log(this.state.nameInput);
    this.setState({ name: this.state.nameInput });
  };
  changeName = (e) => {
    console.log(e.target.value);
    this.setState({
      nameInput: e.target.value,
    });
  };

  render() {
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
          <input type="submit"></input>{" "}
        </form>
        <GeneralInfo name={this.state.name} />
      </div>
    );
  }
}
