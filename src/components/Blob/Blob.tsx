export default function Blob({
	svg,
	className,
}: {
	svg: string;
	className?: string;
}) {
	return <img src={svg} alt='' className={className} />;
}
