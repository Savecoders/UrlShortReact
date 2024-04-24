import { ThemeProvider } from '@/components/ThemeProvider';
import { ModeToggle } from './components/ModeToggle';
function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='dark'>
      {
        <>
          <ModeToggle />
          <p>Hello word</p>
        </>
      }
    </ThemeProvider>
  );
}

export default App;
