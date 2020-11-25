import React from 'react';
import './signin-signup.scss';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInSignUp = () => (
	<div className='signin-signup'>
		<SignIn />
		<SignUp />
	</div>
)

export default SignInSignUp;