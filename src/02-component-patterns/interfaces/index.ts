import { ReactElement } from 'react';

export interface ProductCardProps {
	product: Product;
	// children: () => JSX.Element; // Tambien se puede poner así:
	children?: ReactElement | ReactElement[];
}

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Image: ({ img }: { img?: string }) => JSX.Element;
	Title: ({ title }: { title?: string }) => JSX.Element;
	Buttons: () => JSX.Element;
}

// interface ProductButtonsProps {
// 	counterProp: number;
// 	increaseByProp: (value: number) => void;
// }
