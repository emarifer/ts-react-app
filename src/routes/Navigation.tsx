import {
	// BrowserRouter,
	HashRouter,
	Routes,
	Route,
	NavLink,
	Navigate,
} from 'react-router-dom';
import {
	FormikAbstraction,
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterPage,
} from '../03-forms/pages';
import Logo from '../logo.svg';

export const Navigation = () => (
	<HashRouter>
		<div className="main-layout">
			<nav>
				<img src={Logo} alt="React Logo" />
				<ul>
					<li>
						<NavLink
							to="/register"
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
						>
							Register Page
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/formik-basic"
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
						>
							Formik Basic
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/formik-yup"
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
						>
							Formik Yup
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/formik-components"
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
						>
							Formik Components
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/formik-abstraction"
							className={({ isActive }) => (isActive ? 'nav-active' : '')}
						>
							Formik Abstraction
						</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="formik-abstraction" element={<FormikAbstraction />} />
				<Route path="formik-components" element={<FormikComponents />} />
				<Route path="formik-yup" element={<FormikYupPage />} />
				<Route path="formik-basic" element={<FormikBasicPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="/*" element={<Navigate to="register" replace />} />
			</Routes>
		</div>
	</HashRouter>
);

/**
 * EL USO DEL HASHROUTER SOLO DEBERIA HACERSE EN EL CASO DE DESPLEGAR LA
 * APLICACION EN GITHUB PAGES, PUES USA EL HORRENDO HASH ("#").
 * EN GITHUB PAGES PUEDE USARSE TAMBIEN UN 404.HTML DE RESPALDO Y USAR EL'
 * ROUTERBROWSER.
 * EN REACT, EL HASHROUTER ES EL EQUIVALENTE A NO USAR LA API «HISTORY» DEL NAVEGAFOR
 */
