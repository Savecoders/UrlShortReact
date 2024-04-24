import { ThemeProvider } from '@/components/ThemeProvider';
import { ModeToggle } from './components/ModeToggle';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
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
