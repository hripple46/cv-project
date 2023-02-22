import { Component } from "react";
export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educationValue: "",
      education: "",
    };
    this.changeEducationValue = this.changeEducationValue.bind(this);
    this.submitEducation = this.submitEducation.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }

  changeEducationValue = (e) => {
    console.log(this.state.educationValue);
    this.setState({
      educationValue: e.target.value,
    });
  };
  submitEducation = () => {
    this.setState({
      education: this.state.educationValue,
    });
  };

  checkStatus() {
    if (!this.props.isSubmitted) {
      return (
        <div>
          <label htmlFor="collegeExperience">University: </label>
          <input
            value={this.state.educationValue}
            onChange={this.changeEducationValue}
            type="text"
            name="collegeExperience"
          ></input>
        </div>
      );
    } else {
      return <h1>{this.state.educationValue}</h1>;
    }
  }

  render() {
    return (
      <div>
        <this.checkStatus />
      </div>
    );
  }
}
