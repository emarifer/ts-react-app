import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
	const {
		handleSubmit,
		errors,
		touched,
		getFieldProps,
		handleReset,
	} = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.trim()
				.required('Required')
				.max(15, 'Must be 15 characters or less'),
			lastName: Yup.string()
				.trim()
				.required('Required')
				.max(10, 'Must be 10 characters or less'),
			email: Yup.string()
				.trim()
				.required('Required')
				.email('Invalid email address'),
		}),
	});

	return (
		<div>
			<h1>Formik Yup</h1>

			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor="firstName">First Name</label>
				<input type="text" autoComplete="off" {...getFieldProps('firstName')} />
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor="lastName">Last Name</label>
				<input type="text" autoComplete="off" {...getFieldProps('lastName')} />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor="email">Email Adress</label>
				<input type="email" autoComplete="off" {...getFieldProps('email')} />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type="submit">Submit</button>
				<button
					type="button"
					style={{ background: '#dc3545' }}
					onClick={handleReset}
				>
					Reset Form
				</button>
			</form>
		</div>
	);
};
