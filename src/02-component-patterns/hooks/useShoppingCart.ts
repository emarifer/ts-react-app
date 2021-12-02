import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductCountChange = ({
		count,
		product,
	}: {
		// Interfaz creada al «vuelo» para no mezclar
		count: number; // la lógica del componente encapsulado «ProductCard»
		product: Product;
	}) => {
		// console.log({ count });

		setShoppingCart((prevShoppingCart) => {
			// console.log({ count });

			if (count === 0) {
				const { [product.id]: toDelete, ...rest } = prevShoppingCart;
				console.log({ toDelete });

				return rest;
			}

			return {
				...prevShoppingCart,
				[product.id]: { ...product, count },
			};
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
