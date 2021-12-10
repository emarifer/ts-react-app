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
			<div
				className={typeof props.className === 'string' ? props.className : ''}
			>
				<label htmlFor={typeof props.id === 'string' ? props.id : props.name}>
					{label}
				</label>
				<input type="checkbox" {...field} {...props} />
			</div>

			<ErrorMessage name={props.name} component="span" />
		</>
	);
};
