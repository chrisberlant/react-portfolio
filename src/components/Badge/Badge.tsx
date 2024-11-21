import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@lib/utils';

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				front: 'border-transparent bg-front-end text-white hover:bg-front-end/80',
				back: 'border-transparent bg-back-end text-white hover:bg-back-end/80',
				fullStack:
					'border-transparent bg-full-stack text-white hover:bg-full-stack/80',
				appType:
					'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

export default function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}
