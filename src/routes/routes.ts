import { JSX } from 'react';
import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from '../forms';

interface Routes {
  to: string;
  path: string;
  name?: string;
  Component: () => JSX.Element;
}

export const routes: Routes[] = [
  {
    to: '/basic-form',
    path: 'basic-form',
    Component: RegisterPage,
    name: 'Basic Form',
  },
  {
    to: '/basic-formik',
    path: 'basic-formik',
    Component: FormikBasicPage,
    name: 'Basic Formik',
  },
  {
    to: '/formik-yup',
    path: 'formik-yup',
    Component: FormikYupPage,
    name: 'Formik Yup',
  },
  {
    to: '/formik-components',
    path: 'formik-components',
    Component: FormikComponents,
    name: 'Formik Components',
  },
  {
    to: '/formik-abstraction',
    path: 'formik-abstraction',
    Component: FormikAbstraction,
    name: 'Formik Abstract',
  },
  {
    to: '/formik-register',
    path: 'formik-register',
    Component: RegisterFormikPage,
    name: 'Register Formik',
  },
  {
    to: '/dynamic-form',
    path: 'dynamic-form',
    Component: DynamicForm,
    name: 'Dynamic Form',
  },
];
