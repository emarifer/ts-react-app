import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from '../components';
import { Product } from '../interfaces';

const product: Product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => (
	<div>
		<h1>Shopping Store</h1>
		<hr />

		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}
		>
			<ProductCard product={product}>
				<ProductCard.Image />
				<ProductCard.Title title={'Coca-Cola'} />
				<ProductCard.Buttons />
			</ProductCard>

			<ProductCard product={product}>
				<ProductImage />
				<ProductTitle />
				<ProductButtons />
			</ProductCard>
		</div>
	</div>
);
