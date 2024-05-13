import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
	const {loading,login} = useLogin();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");


	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	}
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login to your
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'>  Watsep</span> account.
				</h1>

				<form onSubmit = {(e) => handleSubmit(e)}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input onChange = {(e) => setUsername(e.target.value)} type='text' value = {username} placeholder='Enter username' className='w-full input input-bordered h-10 bg-[#171717]' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							onChange = {(e) => setPassword(e.target.value)}
							value = {password}
							placeholder='Enter Password'
							className='w-full input input-bordered h-10 bg-[#171717]'
						/>
					</div>
					<NavLink to='/signup' className='text-sm  hover:underline hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</NavLink>

					<div>
						<button className='btn btn-block btn-sm mt-2 bg-[#171717] hover:text-white hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-gray-800'>
						{loading ? <span className = "loading loading-spinner"></span> : "Login"}
							</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;