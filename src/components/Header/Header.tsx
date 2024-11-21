import ProfileLinks from './ProfileLinks/ProfileLinks';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import NavBar from '../NavBar/NavBar';

export default function Header() {
	return (
		<header>
			<ThemeToggler />
			<div className='flex flex-col justify-between gap-4 mt-2 mb-8 items-startsm:items-end sm:mt-4 min-[700px]:flex-row md:mt-6'>
				<ProfileLinks />
				<NavBar />
			</div>
		</header>
	);
}
