import { Component } from "react";
import GeneralInfo from "./General_Info";
import Education from "./Education";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: false,
    };
  }

  submitStatus = (e) => {
    e.preventDefault();
    this.setState({
      formStatus: true,
    });
    console.log(this.state);
  };
  editForm = (e) => {
    e.preventDefault();
    this.setState({
      formStatus: false,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitStatus}>
          <GeneralInfo isSubmitted={this.state.formStatus} />
          <Education isSubmitted={this.state.formStatus} />
          <input type="submit"></input>
          <button onClick={this.editForm}>Edit</button>
        </form>
      </div>
    );
  }
}
