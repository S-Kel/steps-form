import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButto from 'material-ui/RaisedButton';
import {AppBar, TextField, RaisedButton} from 'material-ui';


class PersonalDetailsForm extends Component {
  // Continue to next page
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  // Go back to previous page
  back = e =>{
    e.preventDefault();
    this.props.prevStep();
  }

  // Render form
  render(){
    const {values,handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Personal Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange('occupation')}
            defaultValue ={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue ={values.city}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue ={values.bio}
          />
          <br />          
          <RaisedButton
            label="Continue"
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
export default PersonalDetailsForm
