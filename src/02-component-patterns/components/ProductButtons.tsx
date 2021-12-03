import { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
	className?: string;
	style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
	// TODO: propiedad maxCount a recibir
	const { counter, increaseBy, maxCount } = useContext(ProductContext);

	// TODO: isMaxReaced = useCallback, dependencias [counter, maxCount]
	// True si counter === maxCount
	// False si counter !== maxCount
	// console.log(maxCount);

	const isMaxReaced = useCallback(
		() => Boolean(maxCount) && maxCount === counter,
		[counter, maxCount],
	);

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>

			<div className={styles.countLabel}>{counter}</div>

			<button
				className={`${styles.buttonAdd} ${isMaxReaced() && styles.disabled}`}
				onClick={() => increaseBy(1)}
			>
				+
			</button>
		</div>
	);
};
