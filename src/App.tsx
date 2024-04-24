import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from './components/mode-toggle';

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
