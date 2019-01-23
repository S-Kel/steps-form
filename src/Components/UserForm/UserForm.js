import React, { Component } from 'react';
import UserFormDetails from './UserFormDetails'
import PersonalDetails from './PersonalDetailsForm'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
  state={
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  // Proceed to next step
  nextStep=()=>{
    const {step}=this.state;
    this.setState({step: step + 1});
  }
  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }
  // Handle fields Change
  handleFieldChange = input => (e) => {
    this.setState({ [input]: e.target.value});
  }

  render() {
    const {step, firstName, lastName, email, occupation, city, bio} = this.state;
    const values = { step, firstName, lastName, email, occupation, city, bio };
    switch(step){
      case 1:      
        return (
        <UserFormDetails 
          nextStep={this.nextStep}
          handleChange={this.handleFieldChange}
          values={values}
        />)
      case 2:      
        return (
        <PersonalDetails
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleFieldChange}
          values={values}
        />)
      case 3: 
        return (
        <Confirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleFieldChange}
          values={values}
        />)
      case 4:
        return (<Success />)
      default:
    }
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default UserForm;
