import { useContext } from 'react';
import GithubLogoWhite from '@assets/github-logo-white.svg';
import GithubLogoBlack from '@assets/github-logo-black.svg';
import { ThemeProviderContext } from '../ThemeProvider/ThemeProvider';
import { Globe } from 'lucide-react';
import ExternalLink from '../ExternalLink/ExternalLink';
import PageTitle from '../PageTitle/PageTitle';
import ProjectCard, { ProjectType } from './ProjectCard/ProjectCard';

const gestionSmac: ProjectType = {
	title: 'Main project: Gestion SMAC',
	slidesUrl: [
		'/img/gestion-smac1.png',
		'/img/gestion-smac2.png',
		'/img/gestion-smac3.png',
		'/img/gestion-smac4.png',
		'/img/gestion-smac5.png',
		'/img/gestion-smac6.png',
	],
	badges: {
		front: ['React', 'Mantine', 'TanStack Table', 'TanStack Query'],
		back: ['Express', 'PostgreSQL', 'JWT'],
		fullStack: ['Zod'],
		appType: ['Desktop only'],
	},
	description: {
		title: 'A mobile devices management application',
		content: (
			<div>
				<p>
					This internal webapp allows a team to manage a stock of
					various mobile devices (basic phones, smartphones, 4G
					modems).
				</p>
				<p>
					It includes authentication,
					creating/reading/updating/deleting multiple elements, and
					CSV files import/export.
				</p>
				<p>
					An admin dashboard allows users with the required role to do
					things like see the actions history and create new users
					allowed to access the app.
				</p>
				<p>You can find the full documentation on the repositories.</p>
			</div>
		),
	},
};

const jobMemo: ProjectType = {
	title: 'Jobmémo',
	slidesUrl: [
		'/img/jobmemo1.png',
		'/img/jobmemo2.png',
		'/img/jobmemo3.png',
		'/img/jobmemo4.png',
		'/img/jobmemo5.png',
		'/img/jobmemo6.png',
	],
	badges: {
		front: ['React', 'Redux', 'React Beautiful DnD'],
		back: ['Express', 'PostgreSQL', 'JWT'],
		fullStack: ['Joi'],
		appType: ['Responsive'],
	},
	description: {
		title: 'A job finding helper',
		content: (
			<div>
				<p>
					Help users track their various job applications and their
					associated contacts.
				</p>
				<p>
					It includes authentication,
					creating/reading/updating/deleting job offers and contacts.
				</p>
				<p>The main feature is the cards drag and drop.</p>
				<p>
					A trash bin allows the user to drag cards inside and restore
					them later if needed, or delete them permanently, just like
					on a desktop environment.
				</p>
			</div>
		),
	},
};

export default function Projects() {
	const { theme } = useContext(ThemeProviderContext);
	const gitHubLogo = theme == 'light' ? GithubLogoBlack : GithubLogoWhite;

	return (
		<section className='flex flex-col xl:mx-20 2xl:mx-44'>
			<PageTitle>My projects</PageTitle>
			<div className='flex flex-col flex-wrap items-center justify-center gap-8'>
				<ProjectCard project={gestionSmac}>
					<div className='flex flex-col items-center justify-between flex-1'>
						{gestionSmac.description.content}
						<div className='flex flex-row flex-wrap justify-center gap-6 mt-4'>
							<ExternalLink
								size='sm'
								variant='project'
								text='Front-end'
								logo={gitHubLogo}
								aria-label='Open the Gestion SMAC front-end repository'
								link='https://github.com/chrisberlant/gestion-SMAC-front'
							/>
							<ExternalLink
								size='sm'
								variant='project'
								text='Back-end'
								logo={gitHubLogo}
								aria-label='Open the Gestion SMAC back-end repository'
								link='https://github.com/chrisberlant/gestion-SMAC-back'
							/>
							<ExternalLink
								size='sm'
								variant='project'
								icon={<Globe className='mr-2' size={18} />}
								text='Try the demo version'
								aria-label='Try the demo version'
								link='https://demo--gestion-smac.netlify.app'
							/>
						</div>
					</div>
				</ProjectCard>
				<ProjectCard project={jobMemo}>
					<div className='flex flex-col items-center justify-between flex-1'>
						{jobMemo.description.content}
						<div className='flex flex-row flex-wrap justify-center gap-6 mt-4'>
							<ExternalLink
								size='sm'
								variant='project'
								text='Front-end'
								logo={gitHubLogo}
								aria-label='Open the JobMemo front-end repository'
								link='https://github.com/chrisberlant/jobmemo-front'
							/>
							<ExternalLink
								size='sm'
								variant='project'
								text='Back-end'
								logo={gitHubLogo}
								aria-label='Open the JobMemo back-end repository'
								link='https://github.com/chrisberlant/jobmemo-back'
							/>
						</div>
					</div>
				</ProjectCard>
			</div>
		</section>
	);
}
