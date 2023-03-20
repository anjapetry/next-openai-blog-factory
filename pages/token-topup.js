import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout/AppLayout';


export default function TokenTopup() {
	const handleClick = async () => {
		const result = await fetch(`api/addTokens`, {
			method: 'POST',
		});
	};

	return (
		<div>
			<h1>Hi, this is the token topup page.</h1>
			<button
				className="btn mt-3 tracking-wider max-w-md m-auto"
				onClick={handleClick}
			>
				Add tokens
			</button>
		</div>
	);
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
	return {
		props: {},
	};
});