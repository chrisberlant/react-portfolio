import NodeJsLogo from '@assets/nodejs-logo.svg';
import PostgresLogo from '@assets/postgresql-logo.svg';
import SequelizeLogo from '@assets/sequelize-logo.svg';
import ReactLogo from '@assets/react-logo.svg';
import TanstackQueryLogo from '@assets/tanstack-query-logo.svg';
import TailwindLogo from '@assets/tailwind-logo.svg';
import Description from '../Header/Description/Description';
import TypeScriptLogo from '@assets/typescript-logo.svg';
import JavaScriptLogo from '@assets/javascript-logo.svg';
import {
	GlitchingSkillElement,
	SkillElement,
} from '../SkillsCard/SkillElement/SkillElement';
import Marquee from '../ui/Marquee';
import PageTitle from '../PageTitle/PageTitle';
import DeveloperActivity from '@assets/developer-activity.svg';
import GitHubActivity from './GitHubActivity/GitHubActivity';
import Card from '../Card/Card';

export default function HomePage() {
	return (
		<section className='flex flex-col items-center gap-8'>
			<PageTitle>Chris Berlant's Webpage</PageTitle>
			<Description />

			<Card className='max-w-4xl gap-4 pb-5 pt-7 lg:gap-8 lg:flex-row'>
				<img
					src={DeveloperActivity}
					alt=''
					className='lg:max-w-48 max-w-36'
				/>
				<div className='flex flex-col items-center text-center'>
					<h2 className='mb-5 text-3xl font-bold text-center font-montserrat'>
						About me
					</h2>

					<div>
						<p className='mt-1'>
							After working for 10 years in IT as a VIP support, I
							decided to get back into the development world,
							which I firstly started diving into during my free
							time in 2004, then during my studies in 2010.
						</p>
						<p className='mt-1'>
							To achieve this, I followed the{' '}
							<a href='https://oclock.io' target='_blank'>
								O'clock school
							</a>
							's six months intensive program focused on learning
							how to code using the JavaScript language with solo
							& group projects, sometimes using pair programming,
							and built projects on my own.
						</p>
						<p className='mt-1'>
							I love traveling, especially in Asian countries, and
							discovering new things, related or not to the IT
							domain.
						</p>
					</div>
				</div>
			</Card>

			<Card className='py-7 bg-card'>
				<h2 className='mb-8 text-3xl font-bold text-center font-montserrat'>
					My stack
				</h2>
				<div className='relative flex max-w-md rounded-md sm:max-w-lg md:max-w-xl font-robotoMono sm:flex-col max-h-52'>
					<Marquee className='flex-1'>
						<GlitchingSkillElement
							className='animate-glitch'
							title='TypeScript'
							secondTitle='JavaScript'
							logo={TypeScriptLogo}
							secondLogo={JavaScriptLogo}
							alt='JavaScript/TypeScript logos'
						/>
						<SkillElement
							title='React'
							logo={ReactLogo}
							alt='React logo'
						/>
						<SkillElement
							title='TanStack Query'
							logo={TanstackQueryLogo}
							alt='Tanstack query logo'
						/>
						<SkillElement
							title='Tailwind'
							logo={TailwindLogo}
							alt='Tailwind logo'
						/>
					</Marquee>
					<Marquee className='flex-1' reverse>
						<SkillElement
							title='Node.js'
							logo={NodeJsLogo}
							alt='Node.js logo'
						/>
						<SkillElement
							title='PostgreSQL'
							logo={PostgresLogo}
							alt='PostgreSQL logo'
						/>
						<SkillElement
							title='Sequelize'
							logo={SequelizeLogo}
							alt='Sequelize logo'
						/>
					</Marquee>
					<div className='absolute inset-x-0 top-0 sm:inset-x-auto h-1/4 sm:h-auto bg-gradient-to-b sm:w-1/4 sm:inset-y-0 sm:left-0 sm:bg-gradient-to-r from-card'></div>
					<div className='absolute inset-x-0 bottom-0 sm:inset-x-auto h-1/4 sm:h-auto bg-gradient-to-t sm:w-1/4 sm:inset-y-0 sm:right-0 sm:bg-gradient-to-l from-card'></div>
				</div>
			</Card>
			<GitHubActivity />
		</section>
	);
}
