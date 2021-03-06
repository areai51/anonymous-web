import React, { Component } from 'react';
import logo from './logo.png';

export default class Header extends Component {
  static defaultProps = {
    status: 'connecting...'
  }

  constructor(props: Object) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.closeCallback();
  }

  htmlCloseBtn() {
    const {showCloseBtn} = this.props;
    return (
      <div>
      {
        showCloseBtn && (
        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
        <i className="material-icons noselect custom-icon-close" onClick={this.handleClose}>&#xE14C;</i>
      </label>)
      }
      </div>
    )
  }

  render() {
    const {status} = this.props;
    return (
      <header className="mdl-layout__header is-casting-shadow">
        <div className="mdl-layout__header-row custom-header">
          <img src={logo} className="custom-icon-logo" alt="logo"/>
          <div className="header-content">
            <span className="mdl-layout-title custom-title noselect">Anonymous</span>
            <span className="custom-status noselect">{status}</span>
          </div>
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-textfield--align-right">
            {this.htmlCloseBtn()}
          </div>
        </div>
      </header>
    );
  }
}
