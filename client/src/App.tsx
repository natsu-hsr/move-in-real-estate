import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/header/header';
import {Main as MainPage} from './pages/main/main';

import './App.css'

export const App = () => (
  <BrowserRouter>
    <MantineProvider>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route
            path={'/'}
            element={<MainPage />}
          />
        </Routes>
      </div>
    </MantineProvider>
  </BrowserRouter>
)
