import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButto from 'material-ui/RaisedButton';
import {AppBar, TextField, RaisedButton} from 'material-ui';


class UserFormDetails extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }
  render(){
    const {values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue ={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue ={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your email"
            floatingLabelText="email"
            onChange={handleChange('email')}
            defaultValue ={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary
            style={styles.button}
            onClick = {this.continue}
          />
        </Fragment>  
      </MuiThemeProvider>
    );
  }

  }

  const styles = {
    button: { marginTop: 15}
  }
export default UserFormDetails
