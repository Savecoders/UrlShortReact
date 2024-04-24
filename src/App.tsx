import { ThemeProvider } from '@/components/ThemeProvider';
import { ModeToggle } from './components/ModeToggle';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='dark'>
      <Routes>
        <Route path='/' element={<ModeToggle />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
