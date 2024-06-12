import {Input, MantineProvider, createTheme} from '@mantine/core'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Header} from './components/header/header';
import {Main as MainPage} from './pages/main/main';
import {Register as RegisterPage} from './pages/register/register';
import {setupAxiosConfiguration} from './shared/utils/axios-config';

import './App.css'
import mantineOverrideClasses from '../src/shared/styles/mantine-override.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: mantineOverrideClasses}),
  },
});

setupAxiosConfiguration();

export const App = () => (
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route
            path={'/register'}
            element={<RegisterPage />}
          />
          <Route
            path={'/'}
            element={<MainPage />}
          />
        </Routes>
      </div>
    </MantineProvider>
  </BrowserRouter>
)
