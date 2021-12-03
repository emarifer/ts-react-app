import { useEffect, useRef, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces';

interface UseProductArgs {
	product: Product;
	onChange?: (args: OnChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({
	product,
	onChange,
	value = 0,
	initialValues,
}: UseProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);

	const isMounted = useRef(false);

	// console.log(initialValues?.count);

	const increaseBy = (value: number) => {
		let newValue = Math.max(counter + value, 0);

		// Forma alternativa
		// initialValues?.maxCount === undefined
		// 	? setCounter(newValue)
		// 	: setCounter(Math.min(initialValues?.maxCount, newValue));

		if (initialValues?.maxCount) {
			newValue = Math.min(initialValues.maxCount, newValue);
		}

		setCounter(newValue);

		onChange && onChange({ count: newValue, product });
	};

	const reset = () => setCounter(initialValues?.count || value);

	useEffect(() => {
		if (!isMounted.current) return;

		setCounter(value);
	}, [value]);

	// Este «useEffect» debe ir después del primero, ya que solo se dispara
	// después de que el componente se haya montado correctamente,
	// solo entonces se setea el valor inicial.
	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		isMaxCountReaced:
			Boolean(initialValues?.count) && initialValues?.maxCount === counter,
		maxCount: initialValues?.maxCount,
		increaseBy,
		reset,
	};
};
