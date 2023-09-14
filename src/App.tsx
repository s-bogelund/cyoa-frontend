import { ThemeProvider } from '@/components/theme-provider';
import { Button } from './components/ui/button';

function App() {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<div
				className="flex container flex-col justify-center items-center min-h-[100vh] gap-2
      "
			>
				<h1>Hello World</h1>
				<Button>Default Shadcn button</Button>
			</div>
		</ThemeProvider>
	);
}

export default App;
