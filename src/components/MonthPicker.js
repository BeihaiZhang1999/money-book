import React, { Component } from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { padLeft, range } from "./utility";

// 为什么这个组件默认是居中的？
class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      yearselected: this.props.year,
      monthselected: this.props.month,
    };
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false);
  }
  handleClick = (event) => {
    if (this.node.contains(event.target)) {
      return;
    }
    this.setState({
      isOpen: false,
    });
  };

  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  changeYear = (event, newyear) => {
    event.preventDefault();
    this.setState({
      yearselected: newyear,
    });
  };
  changeMonth = (event, newmonth) => {
    event.preventDefault();
    this.setState({
      monthselected: newmonth,
      isOpen: false,
    });
    this.props.onChange(this.state.yearselected, newmonth);
  };

  render() {
    const isOpen = this.state.isOpen;
    const { year, month } = this.props;
    const yearList = range(9, -4).map((number) => number + year);
    const monthList = range(12, 1);
    const yearselected = this.state.yearselected;
    const monthselected = this.state.monthselected;

    // console.log(yearList,monthList)
    return (
      <div class="dropdown month-picker-component" ref={(ref) => {this.node = ref}}>
        <h4>月份选择</h4>
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false"
          onClick={this.toggleDropdown}
        >
          {`${year}年 ${padLeft(month)}月`}
        </button>

        {isOpen && (
          <div className="dropdown-menu" style={{ display: "block" }}>
            <div className="row">
              <div className="col border-right">
                <p class="text-center">year</p>
                {yearList.map((yearnumber, index) => (
                  <a
                    key={index}
                    href="#"
                    className={
                      yearnumber === yearselected
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={(event) => this.changeYear(event, yearnumber)}
                  >
                    {yearnumber}年
                  </a>
                ))}
              </div>
              <div className="col">
                <p class="text-center">month</p>
                {monthList.map((monthnumber, index) => (
                  <a
                    key={index}
                    href="#"
                    className={
                      monthnumber === monthselected
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={(event) => this.changeMonth(event, monthnumber)}
                  >
                    {monthnumber}月
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MonthPicker;
