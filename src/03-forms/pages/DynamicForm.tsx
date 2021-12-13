import formJSON from '../data/custom-form.json';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';

import '../styles/styles.css';
import { ObjectShape } from 'yup/lib/object';

const initialValues: { [key: string]: unknown } = {};
const requiredFields: { [key: string]: unknown } = {};

for (const input of formJSON) {
	initialValues[input.name] = input.value;

	if (!input.validations) continue;

	let schema = Yup.string().trim();

	for (const rule of input.validations) {
		rule.type === 'required' && (schema = schema.required('Required'));

		if (rule.type === 'minLength') {
			const minLength = (rule as { type: string; value: number }).value;
			schema = schema.min(
				minLength,
				`Must be at least ${minLength} characters`,
			);
		}

		if (rule.type === 'maxLength') {
			const maxLength = (rule as { type: string; value: number }).value;
			schema = schema.max(maxLength, `Must be ${maxLength} characters or less`);
		}

		rule.type === 'email' && (schema = schema.email('Invalid email address'));
	}

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...(requiredFields as ObjectShape) });

export const DynamicForm = () => {
	console.log(formJSON);

	return (
		<div>
			<h1>Dynamic Form</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(value) => {
					console.log(value);
				}}
				validationSchema={validationSchema}
			>
				{({ handleReset }) => (
					<Form noValidate>
						{formJSON.map(({ label, name, type, placehoder, options }) => {
							switch (type) {
								case 'text':
								case 'email':
								case 'password':
									return (
										<MyTextInput
											key={name}
											autoComplete="off"
											type={type}
											label={label}
											name={name}
											id={name}
											placeholder={placehoder}
										/>
									);

								case 'select':
									return (
										<MySelect
											key={name}
											type={type}
											label={label}
											name={name}
											id={name}
										>
											<option value="">Select an option</option>
											{options?.map(({ id, label }) => (
												<option key={id} value={id}>
													{label}
												</option>
											))}
										</MySelect>
									);

								default:
									return <span key={name}>Type: {type} not supported</span>;
							}
						})}

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
};
