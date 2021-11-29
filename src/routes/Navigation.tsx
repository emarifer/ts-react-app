import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import Logo from '../logo.svg';
import { Spinner } from '../01-lazyload/components/Spinner';

export const Navigation = () => (
	// <Suspense fallback={<span>Loading…</span>}>
	<Suspense fallback={<Spinner />}>
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={Logo} alt="React Logo" />
					<ul>
						{/* TODO: crear NavLinks dimámicos */}
						{routes.map(({ to, name }) => (
							<li key={to}>
								<NavLink
									to={to}
									className={({ isActive }) => (isActive ? 'nav-active' : '')}
								>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<Routes>
					{routes.map(({ path, Component }) => (
						<Route key={path} path={path} element={<Component />} />
					))}

					<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	</Suspense>
);

/**
 * INCLUIR SPINNERS. VER:
 * https://loading.io/css
 */
