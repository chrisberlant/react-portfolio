import Badge from '../../Badge/Badge';
import { cn } from '@lib/utils';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel';
import { ReactNode } from 'react';
import Card from '@/components/Card/Card';

export type BadgesType = {
	front: string[];
	back: string[];
	fullStack: string[];
	appType: string[];
};
export type ProjectType = {
	title: string;
	slidesUrl: string[];
	badges: BadgesType;
	description: {
		title: string;
		content: ReactNode;
	};
};

export interface ProjectCardProps {
	project: ProjectType;
	children: ReactNode;
	className?: string;
}

export default function ProjectCard({
	project,
	children,
	className,
}: ProjectCardProps) {
	const { badges, slidesUrl, title, description } = project;
	return (
		<Card
			className={cn(
				'text-center px-5 md:px-12 py-5 max-w-7xl',
				className
			)}
		>
			<h2 className='mb-2 text-2xl font-bold leading-none'>{title}</h2>

			<h3 className='mb-4 font-bold text-center'>{description.title}</h3>
			<div className='flex flex-wrap justify-center gap-2 mb-4'>
				{Object.keys(badges).map((spec) =>
					badges[spec as keyof BadgesType].map((tech) => (
						<Badge variant={spec as keyof BadgesType} key={tech}>
							{tech}
						</Badge>
					))
				)}
			</div>

			<Carousel
				opts={{
					loop: true,
				}}
				className='max-w-52 sm:max-w-96 md:max-w-xl min-[840px]:max-w-2xl lg:max-w-3xl'
			>
				<CarouselContent>
					{slidesUrl.map((slide, index) => (
						<CarouselItem
							key={slide}
							className='flex justify-center basis-full sm:basis-1/2 md:basis-1/3'
						>
							<a href={slide} target='_blank'>
								<img
									src={slide}
									className='h-28 min-[840px]:h-32 rounded-md lg:h-36'
									alt={
										'Screenshot ' +
										`${title}` +
										' ' +
										`${index + 1}`
									}
								/>
							</a>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className='flex h-full mt-4'>{children}</div>
		</Card>
	);
}
