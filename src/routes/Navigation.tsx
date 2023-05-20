import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  const mainRoutes = routes;

  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='Logo app' />
          <ul>
            {mainRoutes.map(({ to, path, name }) => (
              <li key={path}>
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
          {mainRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route
            path={mainRoutes[0].path}
            element={<Navigate to={mainRoutes[0].to} replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
