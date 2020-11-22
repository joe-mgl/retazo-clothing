import React, { Component } from  'react';
import './signin.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase-util'

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	formSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: ''})
	}

	OnInputChange = event => {
		const { value, name} = event.target;
		this.setState({ [name]: value });
	}

	render() {
		return(
			<div className='sign-in'>
				<h2> I already have an account </h2>
				<span> Sign in with your email and password </span>

				<form onSubmit={this.formSubmit}>
					<FormInput name='email' 
								 type='email'
								 value={this.state.email} 
								 handleChange={this.OnInputChange}
								 label='Email'
								 required
					/>
					<FormInput name='password' 
								 type='password' 
								 value={this.state.password} 
								 handleChange={this.OnInputChange}
								 label='Password'
								 required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;