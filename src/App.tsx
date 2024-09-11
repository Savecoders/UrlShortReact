import { ThemeProvider } from '@/components/ThemeProvider';
import { ModeToggle } from './components/ModeToggle';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import NotFount from './pages/NotFount';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='dark'>
      <Routes>
        <Route path='/' element={<ModeToggle />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFount />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
