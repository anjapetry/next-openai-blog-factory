import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../components/AppLayout/AppLayout';

export default function NewPost(props) {
	console.log('NEW POST PROPS: ', props);
	return (
		<div>
			<h1>Hi, this is the new post page.</h1>
		</div>
	);
}

NewPost.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
	return {
		props: {},
	};
});
