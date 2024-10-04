import { ThemeProvider } from '@/components/ThemeProvider';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import NotFount from './pages/NotFount';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='dark'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/Dashboard' element={<Login />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFount />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
