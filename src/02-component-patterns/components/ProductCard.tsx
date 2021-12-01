import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	// children: () => JSX.Element; // Tambien se puede poner así:
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
	const { counter, increaseBy } = useProduct();

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};

/**
 * TYPESCRIPT-PLUGIN-CSS-MODULES. VER:
 * https://www.npmjs.com/package/typescript-plugin-css-modules
 */
