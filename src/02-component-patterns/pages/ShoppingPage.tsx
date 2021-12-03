import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => (
	<div>
		<h1>Shopping Store</h1>
		<hr />

		<ProductCard
			key={product.id}
			product={product}
			className="bg-dark text-white"
			initialValues={{
				count: 4,
				maxCount: 10,
			}}
		>
			{({ reset, isMaxCountReaced, count, increaseBy, maxCount }) => (
				<>
					<ProductImage className="custom-image" />
					<ProductTitle className="text-bold" />
					<ProductButtons className="custom-buttons" />

					<button onClick={reset}>Reset</button>
					<button onClick={() => increaseBy(-2)}>-2</button>

					{!isMaxCountReaced && (
						<button onClick={() => increaseBy(2)}>+2</button>
					)}

					<span>
						{count} - {maxCount}
					</span>
				</>
			)}
		</ProductCard>
	</div>
);
