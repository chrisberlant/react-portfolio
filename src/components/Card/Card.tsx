import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
	className?: string;
	children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
	return (
		<div
			className={cn(
				'flex flex-col px-4 items-center border shadow-md bg-card/80 border-border dark:shadow-none rounded-3xl',
				className
			)}
		>
			{children}
		</div>
	);
}
