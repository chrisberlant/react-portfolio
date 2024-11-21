import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import Blob from '../Blob/Blob';
import BlobSvg from '@assets/blob.svg';
import Blob2Svg from '@assets/blob2.svg';
import Blob3Svg from '@assets/blob3.svg';

export default function RootLayout() {
	return (
		<>
			<Blob
				svg={BlobSvg}
				className='fixed top-36 -z-10 opacity-40 animate-blob left-4 size-64 blur-2xl'
			/>
			<Blob
				svg={Blob2Svg}
				className='fixed bottom-4 blur-3xl -z-10 opacity-40 animate-blob2 -right-4 size-5/12 animation-delay-2000'
			/>
			<Blob
				svg={Blob3Svg}
				className='fixed top-0 blur-3xl -z-10 animate-blob3 -right-4 size-44 animation-delay-1000'
			/>
			<Header />
			<main className='flex-grow'>
				<Outlet />
			</main>
			<MobileMenu />
			<Footer />
		</>
	);
}
