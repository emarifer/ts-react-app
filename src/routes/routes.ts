import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent; // VER NOTA ABAJO:
	name: string;
}

const LazyLayout = lazy(
	() =>
		import(
			/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'
		),
);
// LOS MAGIC COMMENTS DE WEBPACK NO FUNCIONAN EN VITE/ESBUILD,
// DE HECHO NO SON NECESARIOS PARA IDENTIFICAR LOS LAZY CHUNKS

export const routes: Route[] = [
	{
		to: '/lazyload/',
		path: 'lazyload/*',
		Component: LazyLayout, // Los componentes tienen que empezar con mayúsculas
		name: 'Lazy Layout - (e.g: Dashboard)',
	},
	{
		to: '/no-lazy',
		path: 'no-lazy',
		Component: NoLazy,
		name: 'No Lazy',
	},
];

/**
 * MEDIANTE ESTA UNIÓN DE TIPOS PERMITIMOS QUE SE CARGUEN TANTO COMPONENTES «NORMALES»
 * COMO COMPONENTES «LAZY».
 */
