import CatppuccinLogo from '@assets/catppuccin-logo.png';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Footer() {
	return (
		<footer className='flex items-center justify-center pt-8'>
			<div className='flex flex-col items-center text-xs'>
				<span>
					Web illustrations by{' '}
					<a
						href='https://storyset.com'
						target='_blank'
						className='text-xs'
					>
						Storyset
					</a>
				</span>
				<div className='flex items-center mt-1'>
					Theme by
					<a
						href='https://catppuccin.com'
						target='_blank'
						className='flex items-center ml-1'
					>
						Catppuccin
						<img
							src={CatppuccinLogo}
							alt=''
							className='ml-2 size-5'
						/>
					</a>
				</div>
			</div>
			<MobileMenu />
		</footer>
	);
}
