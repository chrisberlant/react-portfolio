import OrbitingCircles from '../../ui/OrbitingCircles';
import VSCodeLogo from '@assets/vscode-logo.svg';
import InsomniaLogo from '@assets/insomnia-logo.svg';
import DockerLogo from '@assets/docker-logo.svg';
import WindowsLogo from '@assets/windows-logo.svg';
import LinuxLogo from '@assets/linux-logo.svg';
import { useState, useEffect, useRef } from 'react';
import LaptopAnimate from '@assets/laptop-animate.svg';

export default function OrbitingCirclesTools() {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
	const prevWidth = useRef(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			const currWidth = window.innerWidth;
			if (currWidth < 768 && prevWidth.current >= 768)
				setIsSmallScreen(true);
			else if (currWidth >= 768 && prevWidth.current < 768)
				setIsSmallScreen(false);

			prevWidth.current = currWidth;
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const innerCircleRadius = isSmallScreen ? 70 : 85;
	const outerCircleRadius = isSmallScreen ? 125 : 145;

	return (
		<div className='flex items-center justify-center flex-1 overflow-hidden min-h-[19rem] md:min-h-[23rem]'>
			<img
				src={LaptopAnimate}
				alt=''
				className='absolute max-w-36 md:max-w-44'
			/>

			{/* Inner Circles */}
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={20}
				radius={innerCircleRadius}
			>
				<img src={DockerLogo} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={10}
				radius={innerCircleRadius}
			>
				<img src={InsomniaLogo} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-8'
				duration={20}
				delay={55}
				radius={innerCircleRadius}
			>
				<img src={LinuxLogo} alt='' />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className='bg-transparent border-none size-9 md:size-12'
				reverse
				radius={outerCircleRadius}
				duration={20}
			>
				<img src={VSCodeLogo} alt='' />
			</OrbitingCircles>
			<OrbitingCircles
				className='bg-transparent border-none size-9 md:size-12'
				reverse
				radius={outerCircleRadius}
				duration={20}
				delay={20}
			>
				<img src={WindowsLogo} alt='' />
			</OrbitingCircles>
		</div>
	);
}
