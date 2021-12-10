/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from 'formik';

interface Props {
	label: string;
	name: string;
	placeholder?: string;
	[x: string]: unknown;
}

export const MySelect = ({ label, ...props }: Props) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={typeof props.id === 'string' ? props.id : props.name}>
				{label}
			</label>

			<select {...field} {...props} />

			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
