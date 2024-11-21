import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function dateFormatting(dateString: string) {
	const [year, month, day] = dateString.split('T')[0].split('-');
	return `${month}/${day}/${year}`;
}
