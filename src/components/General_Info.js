import { Component } from "react";

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitStatus: false,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
