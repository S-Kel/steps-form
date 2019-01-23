import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem, RaisedButton, AppBar} from 'material-ui';


class Confirm extends Component {
  continue = e =>{
    e.preventDefault();

    // Process your form i.e. send data to API
    this.props.nextStep();
  }

  // Go back to previous page
  back = e =>{
    e.preventDefault();
    this.props.prevStep();
  }

  render(){
    const {values:{ firstName, lastName, email, occupation, city, bio }} = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstName}
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={lastName}
            />
            <ListItem
              primaryText="Email"
              secondaryText={email}
            />
            <ListItem
              primaryText="City"
              secondaryText={city}
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <ListItem
              primaryText="Bio"
              secondaryText={bio}
            />
          </List>
          <br />
          <RaisedButton
            label="Confirm"
            primary
            style={styles.button}
            onClick = {this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick = {this.back}
          />
        </Fragment>  
      </MuiThemeProvider>
    );
  }

  }

  const styles = {
    button: { margin: 15}
  }
export default Confirm
