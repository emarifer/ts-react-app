import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => (
	<div>
		<h1>Formik Components</h1>

		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				terms: false,
				jobType: '',
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
			validationSchema={Yup.object({
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
				terms: Yup.boolean().oneOf(
					[true],
					'You must accept the conditions and terms of use',
				),
				jobType: Yup.string()
					.required('Required')
					.notOneOf(['it-junior'], 'This option is not allowed'),
			})}
		>
			{({ handleReset }) => (
				<Form autoComplete="off">
					<label>
						First Name:
						<Field type="text" name="firstName" />
					</label>

					<ErrorMessage name="firstName" component="span" />

					<label>
						Last Name:
						<Field type="text" name="lastName" />
					</label>
					<ErrorMessage name="lastName" component="span" />

					<label>
						Email Adress:
						<Field type="text" name="email" />
					</label>
					<ErrorMessage name="email" component="span" />

					<label>
						Job Type:
						<Field as="select" name="jobType">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-junior">IT Junior</option>
						</Field>
					</label>
					<ErrorMessage name="jobType" component="span" />

					<p>Conditions and Terms of Use</p>
					<label className="checkbox-label">
						I agree:
						<Field type="checkbox" name="terms" />
					</label>
					<ErrorMessage name="terms" component="span" />

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
