import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils';

export const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
	{
		variants: {
			variant: {
				default:
					'bg-card hover:bg-accent border border-input shadow-md dark:bg-background dark:shadow-none',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				profile: 'bg-transparent hover:bg-accent',
				project:
					'bg-background hover:bg-accent border border-input shadow-md dark:shadow-none',
				youtube: 'text-primary-foreground bg-red-600 hover:bg-red-700',
			},
			size: {
				default: 'h-9 px-3 sm:h-10 sm:px-4 sm:py-2',
				sm: 'h-9 px-3',
				lg: 'h-11 px-8',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const logoVariants = cva('', {
	variants: {
		variant: {
			default: 'size-4',
			outline: 'mr-2 size-4',
			secondary: 'mr-2 size-4',
			profile: 'size-5',
			project: 'mr-2 size-4',
			youtube: 'mr-2 size-7',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface ExternalLinkProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	text?: string;
	logo?: string;
	icon?: React.ReactNode;
	logoAlt?: string;
	link: string;
	title?: string;
	download?: string;
}

export default function ExternalLink({
	className,
	variant,
	size,
	text,
	logo,
	logoAlt = '',
	icon,
	link,
	title,
	download,
}: ExternalLinkProps) {
	return (
		<a
			href={link}
			target='_blank'
			title={title}
			download={download}
			className={cn(buttonVariants({ variant, size, className }))}
		>
			{icon}
			{logo && (
				<img
					src={logo}
					className={cn(logoVariants({ variant }))}
					alt={logoAlt}
				/>
			)}
			{text}
		</a>
	);
}
