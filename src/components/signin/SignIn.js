import React, { Component } from  'react';
import './signin.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase-util'

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	formSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: ''})
		} catch (error) {
			console.log(error);
		}
		
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
							Google Sign In
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;