import { ThemeProvider } from '@/components/ThemeProvider';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import NotFount from './pages/NotFount';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='dark'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFount />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
