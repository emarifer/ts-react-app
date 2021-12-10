/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from 'formik';

interface Props {
	label: string;
	name: string;
	[x: string]: unknown;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
	const [field] = useField({ ...props, type: 'checkbox' });

	return (
		<>
			<label
				className={typeof props.className === 'string' ? props.className : ''}
			>
				{label}
				<input type="checkbox" {...field} {...props} />
			</label>

			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
