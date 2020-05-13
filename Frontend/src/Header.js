import React, { Component } from "react";

// import { Container } from './styles';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    const { title, subtitle } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
      </>
    );
  }
}

export default Header;
