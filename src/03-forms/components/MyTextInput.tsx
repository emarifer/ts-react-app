/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from 'formik';

interface Props {
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password';
	placeholder?: string;
	[x: string]: unknown;
}

export const MyTextInput = ({ label, ...props }: Props) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={typeof props.id === 'string' ? props.id : props.name}>
				{label}
			</label>

			<input
				className={`${meta.touched && meta.error && 'has-error'}`}
				{...field}
				{...props}
			/>

			<ErrorMessage name={props.name} component="span" />

			{/* {meta.touched && meta.error && (
				<span className="error">{meta.error}</span>
			)} */}
		</>
	);
};
