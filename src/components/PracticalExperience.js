import { Component } from "react";

export default class PracticalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      mainTasks: "",
      startingDate: "",
      endDate: "",
    };

    this.checkStatus = this.checkStatus.bind(this);
    this.changeCompanyValue = this.changeCompanyValue.bind(this);
    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
  }
  changeCompanyValue = (e) => {
    this.setState({
      company: e.target.value,
    });
  };
  changeStartDate = (e) => {
    this.setState({
      startingDate: e.target.value,
    });
  };
  changeEndDate = (e) => {
    this.setState({
      endDate: e.target.value,
    });
  };

  checkStatus() {
    if (!this.props.isSubmitted) {
      return (
        <div>
          <label htmlFor="companyName">Company: </label>
          <input
            value={this.state.company}
            onChange={this.changeCompanyValue}
            type="text"
            name="companyName"
          ></input>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            onChange={this.changeStartDate}
            name="startDate"
            value={this.state.startingDate}
          />
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            onChange={this.changeEndDate}
            name="endDate"
            value={this.state.endDate}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.state.company}</h1>
          <h2>Start Date: {this.state.startingDate}</h2>
          <h2>End Date: {this.state.endDate}</h2>
        </div>
      );
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
