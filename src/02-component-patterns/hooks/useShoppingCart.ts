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
			// Esta es la forma sin Control Prop. De esa forma no se altera
			// El estado que maneja el useProduct
			const productInCart: ProductInCart = prevShoppingCart[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;

				return {
					...prevShoppingCart,
					[product.id]: productInCart,
				};
			}

			// Delete product
			const { [product.id]: toDelete, ...rest } = prevShoppingCart;
			console.log({ toDelete });

			return rest;

			// Esta es la forma sin Control Prop
			// if (count === 0) {
			// 	const { [product.id]: toDelete, ...rest } = prevShoppingCart;
			// 	console.log({ toDelete });

			// 	return rest;
			// }

			// return {
			// 	...prevShoppingCart,
			// 	[product.id]: { ...product, count },
			// };
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
