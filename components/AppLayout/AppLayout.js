import { useUser } from '@auth0/nextjs-auth0/client';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../Logo';

export const AppLayout = ({ children }) => {
	const { user } = useUser();

	return (
		<div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
			<div className="flex flex-col text-amber-300 overflow-hidden">
				<div className="bg-slate-900 px-2">
					<Logo />
					<Link
						href="/post/new"
						className="bg-gradient-to-r from-green-300 via-blue-500 to-emerald-800 tracking-wider w-full text-center text-amber-200 font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-pink-100
					transition-color active:bg-green-400 focus:outline-none focus:ring focus:ring-white block"
					>
						New Post
					</Link>
					<Link href="/token-topup" className="block mt-2 text-center">
						<FontAwesomeIcon icon={faCoins} className="text-amber-300" />
						<span className="pl-1">0 tokens available</span>
					</Link>
				</div>
				<div className="flex-1 overflow-auto bg-gradient-to-b from-slate-900 to-cyan-700">
					list of posts
				</div>
				<div className="bg-cyan-700 flex items-center gap-2 border-t border-t-black/50 h-20 px-2">
					{!!user ? (
						<>
							<div className="min-w-[50px]">
								<Image
									src={user.picture}
									alt={user.name}
									height={50}
									width={50}
									className="rounded-full"
								/>
							</div>
							<div className="flex-1">
								<div className="font-bold">{user.email}</div>
								<Link className="text-sm" href="/api/auth/logout">
									Logout
								</Link>
							</div>
						</>
					) : (
						<Link href="/api/auth/login">Login</Link>
					)}
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
};
