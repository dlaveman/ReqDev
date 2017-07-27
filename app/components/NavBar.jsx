import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { Tabs, Tab } from 'material-ui';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  handleChange = (event, index, value) => this.setState({ value });
  render() {
    return (
      <AppBar
        title="ReqDev"
        iconElementRight={
          <div>
            <FlatButton
              label="login"
              containerElement={<NavLink to="/login" />}
            />
            <FlatButton
              label="sign up"
              containerElement={<NavLink to="/signup" />}
            />
          </div>
        }
        iconElementLeft={
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={0} primaryText="Choose a Category" />
            <MenuItem
              value={1}
              containerElement={<NavLink to="/categories" />}
              primaryText="category 1"
            />
            <MenuItem value={2} primaryText="category 2" />
          </DropDownMenu>
        }
      />
    );
  }
}
