import NavButton from './NavButton/NavButton';

export default function NavBar() {
	return (
		<nav className='flex items-end justify-end gap-4 mr-2 sm:mr-4 md:mr-10 lg:gap-8 xl:mr-32 animate-slide-from-top font-robotoMono'>
			<NavButton link='/' text='Home' />
			<NavButton link='/tools' text='My tools' />
			<NavButton link='/projects' text='My projects' />
		</nav>
	);
}
