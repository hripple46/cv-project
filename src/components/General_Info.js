import { Component } from "react";

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.phoneNumber}</h2>
      </div>
    );
  }
}
