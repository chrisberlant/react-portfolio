import Typewriter from 'typewriter-effect';

const descriptionString =
	"I'm a <span class='text-full-stack'>Full-stack</span>, more <span class='text-front-end'>Front-end</span> oriented <span class='text-front-end'>React</span> developer.";

export default function Description() {
	return (
		<div className='font-robotoMono flex flex-col h-40 min-[458px]:h-32 sm:h-40 min-[1128px]:h-36 text-2xl sm:text-3xl font-bold text-center'>
			<div className='flex justify-center'>
				<span className='mb-4'>Hi I'm Chris!</span>
			</div>
			<Typewriter
				options={{
					delay: 50,
				}}
				onInit={(typewriter) => {
					typewriter.typeString(descriptionString).start();
				}}
			/>
		</div>
	);
}
