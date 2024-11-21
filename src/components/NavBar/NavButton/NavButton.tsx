import { NavLink } from 'react-router-dom';
import { buttonVariants } from '../../Button/Button';

interface NavButtonProps {
	link: string;
	text: string;
}

export default function NavButton({ link, text }: NavButtonProps) {
	return (
		<NavLink to={link} className={buttonVariants({ variant: 'link' })}>
			{({ isActive }) => (
				<span className={isActive ? 'font-bold' : ''}>{text}</span>
			)}
		</NavLink>
	);
}
