import { NavLink } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import toast from "react-hot-toast";

const SignUp = () => {

	const [inputs, setInputs] = useState({
		fullName  : "",
		username : "",
		password : "",
		confirmPassword : "",
		gender : ""
	})
	const{loading,signup} = useSignup();


	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);		
	}

	const handleCheckboxChange = (gender) => {
		setInputs({...inputs,gender});
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up for a <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 '> Watsep</span> account.
				</h1>

				<form onSubmit = {(e) => handleSubmit(e)}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input value = {inputs.fullName}
						onChange={(e) => setInputs({...inputs, fullName : e.target.value})}
						type='text' placeholder='Enter Full Name' className='w-full input input-bordered  h-10 bg-[#171717]' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' 
						onChange={(e) => setInputs({...inputs, username : e.target.value})}
						value = {inputs.username}
						placeholder='Enter Username' className='w-full input input-bordered h-10 bg-[#171717]' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							onChange={(e) => setInputs({...inputs, password : e.target.value})}
							value = {inputs.password}
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 bg-[#171717]'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							onChange={(e) => setInputs({...inputs, confirmPassword : e.target.value})}
							value = {inputs.confirmPassword}
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 bg-[#171717]'
						/>
					</div>

					<GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender}/>

					<NavLink to = "/login" className='text-sm hover:underline hover:hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600  mt-2 inline-block' href='#'>
						Already have an account?
					</NavLink>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700 bg-[#171717] hover:text-white hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;