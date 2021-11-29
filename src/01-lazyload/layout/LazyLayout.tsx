import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => (
	<div className="lazy-layout">
		<header>
			<h1>Lazy Layout Page - (e.g: Dashboard)</h1>
			{/* Rutas hijas iran aqui */}
			<ul>
				<li>
					<NavLink
						to="lazy1"
						className={({ isActive }) => (isActive ? 'nav-active' : '')}
					>
						Lazy 1
					</NavLink>
				</li>
				<li>
					<NavLink
						to="lazy2"
						className={({ isActive }) => (isActive ? 'nav-active' : '')}
					>
						Lazy 2
					</NavLink>
				</li>
				<li>
					<NavLink
						to="lazy3"
						className={({ isActive }) => (isActive ? 'nav-active' : '')}
					>
						Lazy 3
					</NavLink>
				</li>
			</ul>
		</header>

		<footer>
			<Routes>
				<Route path="lazy1" element={<LazyPage1 />} />
				<Route path="lazy2" element={<LazyPage2 />} />
				<Route path="lazy3" element={<LazyPage3 />} />

				{/* <Route path="*" element={<div>Not Found 😝</div>} /> */}
				<Route path="*" element={<Navigate to="lazy1" replace />} />
			</Routes>
		</footer>
	</div>
);

export default LazyLayout;
