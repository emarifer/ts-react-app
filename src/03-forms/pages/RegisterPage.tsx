import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
	const {
		name,
		email,
		password1,
		password2,
		onChange,
		resetForm,
		isValidEmail,
	} = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log({ name, email, password1, password2 });
	};

	return (
		<div>
			<h1>Register Page</h1>

			<form noValidate onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={onChange}
					name="name"
					className={`${name.trim().length <= 0 && 'has-error'}`}
					autoComplete="off"
				/>
				{name.trim().length <= 0 && <span>This field is required</span>}
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={onChange}
					name="email"
					className={`${!isValidEmail(email) && 'has-error'}`}
					autoComplete="off"
				/>
				{!isValidEmail(email) && <span>The email is not valid</span>}
				<input
					type="password"
					placeholder="Password"
					value={password1}
					onChange={onChange}
					name="password1"
					autoComplete="off"
				/>
				{password1.trim().length <= 0 && <span>This field is required</span>}
				{password1.trim().length < 6 && password1.trim().length > 0 && (
					<span>The password must be at least 6 characters long</span>
				)}
				<input
					type="password"
					placeholder="Repeat Password"
					value={password2}
					onChange={onChange}
					name="password2"
					autoComplete="off"
				/>
				{password2.trim().length <= 0 && <span>This field is required</span>}
				{password2.trim().length > 0 && password1 !== password2 && (
					<span>Passwords must match</span>
				)}
				<button type="submit">Create</button>
				<button
					type="button"
					style={{ background: '#dc3545' }}
					onClick={resetForm}
				>
					Reset Form
				</button>
			</form>
		</div>
	);
};
