import {
	ProductCard,
	ProductImage,
	ProductTitle,
	ProductButtons,
} from '../components';
import { Product } from '../interfaces';

import '../styles/custom-styles.css';

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
			<ProductCard product={product} className="bg-dark text-white">
				<ProductCard.Image className="custom-image" />
				<ProductCard.Title title={'Coca-Cola'} className="text-bold" />
				<ProductCard.Buttons className="custom-buttons" />
			</ProductCard>

			<ProductCard product={product} className="bg-dark text-white">
				<ProductImage className="custom-image" />
				<ProductTitle className="text-bold" />
				<ProductButtons className="custom-buttons" />
			</ProductCard>

			<ProductCard
				product={product}
				style={{ backgroundColor: '#70d1f8', padding: '10px' }}
			>
				<ProductImage
					style={{
						boxShadow: '10px 10px 10px rgba(0,0,0,0.3)',
						marginBottom: '8px',
						borderRadius: '15px',
					}}
				/>
				<ProductTitle title="Cup of Tea" style={{ fontWeight: 'bold' }} />
				<ProductButtons style={{ justifyContent: 'flex-end' }} />
			</ProductCard>
		</div>
	</div>
);
