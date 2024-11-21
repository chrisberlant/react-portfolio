import { cn } from '@/lib/utils';

interface MarqueeProps {
	className?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	children?: React.ReactNode;
	repeat?: number;
	[key: string]: any;
}

export default function Marquee({
	className,
	reverse,
	pauseOnHover = false,
	children,
	repeat = 4,
	...props
}: MarqueeProps) {
	return (
		<div
			{...props}
			className={cn(
				'group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)] sm:flex-row flex-col',
				className
			)}
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn(
							'flex shrink-0 justify-around [gap:var(--gap)] sm:animate-marquee sm:flex-row animate-marquee-vertical flex-col',
							{
								'group-hover:[animation-play-state:paused]':
									pauseOnHover,
								'[animation-direction:reverse] sm:[animation-direction:reverse]':
									reverse,
							}
						)}
					>
						{children}
					</div>
				))}
		</div>
	);
}
