import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function PageTitle({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<h1
			className={cn(
				'mt-2 mb-10 text-4xl font-bold text-center font-montserrat',
				className
			)}
		>
			{children}
		</h1>
	);
}
