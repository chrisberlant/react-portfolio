import { Moon, Sun } from 'lucide-react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react';

function ThemeToggler() {
	const { theme, toggleTheme } = useContext(ThemeProviderContext);

	return (
		<button
			onClick={toggleTheme}
			className='absolute top-8 right-8 animate-slide-from-top hover:scale-110 lg:top-10 lg:right-20'
			aria-label='Toggle color theme'
		>
			{theme === 'light' ? <Sun /> : <Moon />}
		</button>
	);
}

export default ThemeToggler;
