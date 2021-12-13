import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => (
	<div>
		<h1>Register Formik Page</h1>

		<Formik
			initialValues={{
				name: '',
				email: '',
				password1: '',
				password2: '',
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.trim()
					.required('Required')
					.min(2, 'Must be at least 2 characters')
					.max(15, 'Must be 15 characters or less'),
				email: Yup.string()
					.trim()
					.required('Required')
					.email('Invalid email address'),
				password1: Yup.string()
					.trim()
					.required('Required')
					.min(6, 'Must be at least 6 characters'),
				password2: Yup.string()
					.trim()
					.required('Required')
					.min(6, 'Must be at least 6 characters')
					.oneOf([Yup.ref('password1'), null], 'Passwords must match'),
			})}
		>
			{({ handleReset }) => (
				<Form autoComplete="off">
					<MyTextInput label="Name:" name="name" id="name" placeholder="Name" />

					<MyTextInput
						type="email"
						label="Email Adress:"
						name="email"
						id="email"
						placeholder="Email Adress"
					/>

					<MyTextInput
						autoComplete="off"
						type="password"
						label="Password:"
						name="password1"
						id="password1"
						placeholder="Password"
					/>

					<MyTextInput
						autoComplete="off"
						type="password"
						label="Repeat Password:"
						name="password2"
						id="password2"
						placeholder="Repeat Password"
					/>

					<button type="submit">Submit</button>
					<button
						type="button"
						style={{ background: '#dc3545' }}
						onClick={handleReset}
					>
						Reset Form
					</button>
				</Form>
			)}
		</Formik>
	</div>
);
