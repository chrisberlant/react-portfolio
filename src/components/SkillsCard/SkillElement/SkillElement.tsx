import { cn } from '@lib/utils';
import { useState } from 'react';

interface SkillElementProps {
	title: string;
	logo: string;
	alt: string;
	className?: string;
	onAnimation?: () => void;
}

export function SkillElement({
	title,
	logo,
	alt,
	className,
	onAnimation = undefined,
}: SkillElementProps) {
	return (
		<div
			onAnimationIteration={onAnimation}
			className={cn(
				'flex flex-col select-none sm:flex-row text-center items-center border-2 bg-background border-border rounded-2xl py-2 sm:px-3 justify-center hover:bg-accent',
				className
			)}
		>
			<img src={logo} className='mb-1 sm:mb-0 sm:mr-3 size-8' alt={alt} />
			<span>{title}</span>
		</div>
	);
}

interface GlitchingSkillElementProps extends SkillElementProps {
	secondTitle: string;
	secondLogo: string;
}

export function GlitchingSkillElement({
	title,
	secondTitle,
	logo,
	secondLogo,
	alt,
	className,
}: GlitchingSkillElementProps) {
	const [element, setElement] = useState(true);

	return (
		<SkillElement
			title={element ? title : secondTitle}
			logo={element ? logo : secondLogo}
			alt={alt}
			className={className}
			onAnimation={() => setElement((prev) => !prev)}
		/>
	);
}
