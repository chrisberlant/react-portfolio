import { useContext } from 'react';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import OrbitingCirclesTools from './OrbitingCirclesTools/OrbitingCirclesTools';
import OperatingSystemAnimate from '@assets/operating-system-animate.svg';
import BuildingAnimate from '@assets/building-animate.svg';
import BookmarksAnimate from '@assets/bookmarks-animate.svg';
import NotionLogo from '@assets/notion-logo.svg';
import VercelLogoWhite from '@assets/vercel-logo-white.svg';
import VercelLogoBlack from '@assets/vercel-logo-black.svg';
import NetlifyLogo from '@assets/netlify-logo.svg';
import GithubLogoBlack from '@assets/github-logo-black.svg';
import GithubLogoWhite from '@assets/github-logo-white.svg';
import ExcalidrawLogo from '@assets/excalidraw-logo.svg';
import WhimsicalLogo from '@assets/whimsical-logo.svg';
import YoutubeLogo from '@assets/youtube-logo.svg';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';

export default function Tools() {
	const { theme } = useContext(ThemeProviderContext);
	return (
		<section className='flex flex-col items-center'>
			<PageTitle>My tools</PageTitle>
			<div className='flex flex-col w-full gap-8 max-w-7xl'>
				<Card className='gap-4 pb-4 lg:pr-4 lg:pl-0 lg:pb-0 justify-evenly lg:flex-row'>
					<OrbitingCirclesTools />
					<div className='flex-1'>
						<h2 className='mb-8 text-3xl font-bold text-center sm:mb-12 font-montserrat'>
							Dev environment
						</h2>
						<ul className='flex flex-col flex-wrap items-center gap-2 text-center xl:pr-5 lg:text-left lg:items-start'>
							<li>
								<span className='font-bold'>
									Visual Studio Code
								</span>{' '}
								is my IDE
							</li>
							<li>
								<span className='font-bold'>Windows</span> is my
								main operating system, as I've been using and
								debugging it for years
							</li>
							<li>
								<span className='font-bold'>Insomnia</span> is
								my API testing tool, so I can try and debug my
								server-side code without the front-end
								constraints
							</li>
							<li>
								Sometimes I also use{' '}
								<span className='font-bold'>Linux</span> (Arch &
								Debian based distributions) and{' '}
								<span className='font-bold'>WSL</span>
							</li>
							<li>
								<span className='font-bold'>Docker</span> allows
								me to run my apps in a containerized
								environment, therefore not depending on my own
								system specs
							</li>
						</ul>
					</div>
				</Card>

				<Card className='flex-1 pb-4 md:gap-4 justify-evenly lg:flex-row-reverse'>
					<img
						src={OperatingSystemAnimate}
						alt=''
						className='flex-1 lg:pr-4 max-w-60 md:max-w-xs xl:max-w-md'
					/>
					<div className='flex-1 mt-8 text-center lg:mt-10 xl:mt-0'>
						<h2 className='mb-8 text-3xl font-bold sm:mb-10 font-montserrat'>
							Online tools
						</h2>
						<ul className='flex flex-col flex-wrap items-center gap-2.5 lg:text-left lg:pl-5 lg:items-start'>
							<li>
								<a
									className='font-bold'
									href='https://www.notion.so'
									target='_blank'
								>
									<img
										src={NotionLogo}
										className='inline-block mr-1 size-6'
										alt='Notion logo'
									/>
									Notion
								</a>{' '}
								allows me to keep tracks of my discoveries and
								notes, and create my own documentations
							</li>
							<li>
								<a
									className='font-bold'
									href='https://excalidraw.com/'
									target='_blank'
								>
									<img
										src={ExcalidrawLogo}
										className='inline-block mr-1 size-5'
										alt='Excalidraw logo'
									/>
									Excalidraw
								</a>{' '}
								is the place where I can draw diagrams to
								organize my ideas
							</li>
							<li>
								<a
									className='font-bold'
									href='https://whimsical.com/'
									target='_blank'
								>
									<img
										src={WhimsicalLogo}
										className='inline-block mr-1 size-6'
										alt='Whimsical logo'
									/>
									Whimsical
								</a>{' '}
								is the perfect tool to build my responsive
								wireframes
							</li>
							<li>
								I use
								<a
									className='font-bold'
									href='https://www.github.com/'
									target='_blank'
								>
									<img
										src={`${
											theme === 'dark'
												? GithubLogoWhite
												: GithubLogoBlack
										}`}
										className='inline-block ml-2 mr-1.5 size-5'
										alt='GitHub logo'
									/>
									GitHub
								</a>{' '}
								to host the source code of my projects
							</li>
							<li>
								I use
								<a
									className='font-bold'
									href='https://vercel.com'
									target='_blank'
								>
									<img
										src={`${
											theme === 'dark'
												? VercelLogoWhite
												: VercelLogoBlack
										}`}
										className='inline-block ml-2 mr-1 size-5'
										alt='Vercel logo'
									/>
									Vercel
								</a>{' '}
								and{' '}
								<a
									className='font-bold'
									href='https://www.netlify.com'
									target='_blank'
								>
									<img
										src={NetlifyLogo}
										className='inline-block mx-2 size-5'
										alt='Netlify logo'
									/>
									Netlify
								</a>{' '}
								to host my projects using Continuous Integration
								and Continuous Deployments (CI/CD)
							</li>
						</ul>
					</div>
				</Card>

				<Card className='pb-4 md:gap-4 justify-evenly lg:flex-row'>
					<img
						src={BuildingAnimate}
						alt=''
						className='flex-1 pt-1 lg:pl-4 max-w-60 md:max-w-xs xl:max-w-md lg:pt-0'
					/>
					<div className='flex flex-col items-center flex-1 mt-8'>
						<h2 className='mb-8 text-3xl font-bold text-center sm:mb-10 font-montserrat'>
							Libraries
						</h2>
						<div className='text-center'>
							Using{' '}
							<a
								className='font-bold'
								href='https://npmjs.com'
								target='_blank'
							>
								Node Package Manager
							</a>
							, I can install my favorite libraries :
						</div>
						<ul className='flex flex-col flex-wrap gap-2 mt-2 list-disc max-h-48'>
							<li>
								<a
									className='font-bold'
									href='https://react.dev'
									target='_blank'
								>
									React
								</a>{' '}
								💙
							</li>
							<li>
								<a
									className='font-bold'
									href='https://vitejs.dev'
									target='_blank'
								>
									Vite
								</a>{' '}
								💙
							</li>
							<li>
								<a
									className='font-bold'
									href='https://reactrouter.com'
									target='_blank'
								>
									React Router
								</a>
							</li>
							<li className='mr-6'>
								<a
									className='font-bold'
									href='https://tanstack.com/query/latest'
									target='_blank'
								>
									TanStack Query
								</a>{' '}
								💙
							</li>
							<li>
								<a
									className='font-bold'
									href='https://redux-toolkit.js.org'
									target='_blank'
								>
									Redux Toolkit
								</a>
							</li>
							<li>
								<a
									className='font-bold'
									href='https://tailwindcss.com'
									target='_blank'
								>
									Tailwind
								</a>{' '}
								💙
							</li>
							<li>
								<a
									className='font-bold'
									href='https://mantine.dev'
									target='_blank'
								>
									Mantine
								</a>{' '}
							</li>
							<li>
								<a
									className='font-bold'
									href='https://expressjs.com'
									target='_blank'
								>
									Express
								</a>{' '}
								💙
							</li>
							<li>
								<a
									className='font-bold'
									href='https://zod.dev'
									target='_blank'
								>
									Zod
								</a>{' '}
								💙
							</li>
							<li>
								<a
									className='font-bold'
									href='https://tanstack.com/table/latest'
									target='_blank'
								>
									TanStack Table
								</a>
							</li>
							<li>
								<a
									className='font-bold'
									href='https://sonner.emilkowal.ski'
									target='_blank'
								>
									Sonner
								</a>{' '}
								💙
							</li>
							<li>
								<a
									className='font-bold'
									href='https://vitest.dev'
									target='_blank'
								>
									Vitest
								</a>
							</li>
						</ul>
					</div>
				</Card>

				<Card className='pb-4 md:gap-4 justify-evenly lg:flex-row-reverse'>
					<img
						src={BookmarksAnimate}
						alt=''
						className='flex-1 pt-2 lg:pr-4 max-w-60 md:max-w-xs xl:max-w-md lg:pt-0'
					/>
					<div className='flex flex-col items-center flex-1 mt-8'>
						<h2 className='mb-8 text-3xl font-bold text-center sm:mb-10 font-montserrat'>
							Bookmarks
						</h2>
						<div className='text-center'>
							Various websites I use to get things like prebuilt
							components, icons and keep myself updated on the
							development world.
						</div>
						<ul className='flex flex-col flex-wrap gap-2 mt-2 list-disc max-h-48'>
							<li>
								<a
									className='font-bold'
									href='https://ui.shadcn.com'
									target='_blank'
								>
									Shadcn/ui
								</a>
							</li>
							<li>
								<a
									className='font-bold'
									href='https://iconduck.com'
									target='_blank'
								>
									IconDuck
								</a>
							</li>
							<li className='mr-12'>
								<a
									className='font-bold'
									href='https://ui.aceternity.com'
									target='_blank'
								>
									Aceternity UI
								</a>
							</li>
							<li>
								<a
									className='font-bold'
									href='https://magicui.design'
									target='_blank'
								>
									Magic UI
								</a>
							</li>
							<li>
								<a
									className='font-bold'
									href='https://ui.jln.dev'
									target='_blank'
								>
									JLN UI
								</a>
							</li>
							<li>
								<a
									className='font-bold'
									href='https://daily.dev'
									target='_blank'
								>
									Daily.dev
								</a>
							</li>
							<li>
								<a
									className='font-bold'
									href='https://www.youtube.com/@Fireship'
									target='_blank'
								>
									<img
										src={YoutubeLogo}
										alt=''
										className='inline-block mr-1 size-5'
									/>
									Fireship
								</a>
							</li>
							<li>
								<a
									className='font-bold'
									href='https://www.youtube.com/@melvynxdev'
									target='_blank'
								>
									<img
										src={YoutubeLogo}
										alt=''
										className='inline-block mr-1 size-5'
									/>
									Melvynx
								</a>
							</li>
						</ul>
					</div>
				</Card>
			</div>
		</section>
	);
}
