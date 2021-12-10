import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => (
	<div>
		<h1>Formik Abstraction</h1>

		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				jobType: '',
				terms: false,
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
				jobType: Yup.string()
					.required('Required')
					.notOneOf(['it-junior'], 'This option is not allowed'),
				terms: Yup.boolean().oneOf(
					[true],
					'You must accept the conditions and terms of use',
				),
			})}
		>
			{({ handleReset }) => (
				<Form autoComplete="off">
					<MyTextInput
						label="First Name:"
						name="firstName"
						id="firstName"
						placeholder="First Name"
					/>

					<MyTextInput
						label="Last Name:"
						name="lastName"
						id="lastName"
						placeholder="Last Name"
					/>

					<MyTextInput
						type="email"
						label="Email Adress:"
						name="email"
						id="email"
						placeholder="Email Adress"
					/>

					<MySelect label="Job Type:" name="jobType" id="jobType">
						<option value="">Pick something</option>
						<option value="developer">Developer</option>
						<option value="designer">Designer</option>
						<option value="it-senior">IT Senior</option>
						<option value="it-junior">IT Junior</option>
					</MySelect>

					<p>Conditions and Terms of Use</p>
					<MyCheckbox
						label="I agree:"
						name="terms"
						id="terms"
						className="checkbox-label"
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
