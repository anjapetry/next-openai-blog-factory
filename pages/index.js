import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import HeroImage from '../public/hero.webp';

export default function Home() {
	return (
		<div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
			<Image src={HeroImage} alt="Hero" fill className="absolute" />
			<div className="relative z-10 text-amber-300 border-emerald-400  px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
				<Logo />
				<p>
					The AI-powered SAAS solution to generate SEO-optimized blog posts in
					minutes. Get high-quality content, without sacrificing your time.
				</p>
				<Link
					href="/post/new"
					className="btn text-center mt-3 tracking-wider max-w-md m-auto text-amber-300"
				>
					Begin
				</Link>
			</div>
		</div>
	);
}