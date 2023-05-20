import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import logo from '../logo.svg';
import {
  FormikAbstraction,
  FormikBasicPages,
  FormikComponents,
  FormikYupPages,
  RegisterPage,
} from '../forms';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='Logo app' />
          <ul>
            <li>
              <NavLink
                to='/basic-form'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Basic Form
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/basic-formik'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Basic Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-yup'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstraction'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Abstract
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='basic-form' element={<RegisterPage />} />
          <Route path='basic-formik' element={<FormikBasicPages />} />
          <Route path='formik-yup' element={<FormikYupPages />} />
          <Route path='formik-components' element={<FormikComponents />} />
          <Route path='formik-abstraction' element={<FormikAbstraction />} />

          <Route path='/*' element={<Navigate to='/basic-form' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
