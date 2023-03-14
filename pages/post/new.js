import { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AppLayout } from '../../components/AppLayout/AppLayout';

export default function NewPost(props) {
	console.log('NEW POST PROPS: ', props);
	const [topic, setTopic] = useState('');
	const [keywords, setKeywords] = useState("");
	const [postContent, setPostContent] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`/api/generatePost`, {
			method: "POST",
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ topic, keywords }),
		});
		const json = await response.json();
		console.log('RESULT: ', json.post.postContent);
		setPostContent(json.post.postContent);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						<strong>Generate a blog post on the topic of:</strong>
					</label>
					<textarea
						className="resize-none border border-slate-500 w-full block my-2 px-4 py-4 rounded-md"
						value={topic}
						onChange={(e) => setTopic(e.target.value)}
					/>
				</div>
				<div>
					<label>
						<strong>Targeting the following keywords</strong>
					</label>
					<textarea
						className="resize-none border border-slate-500 w-full block my-2 px-4 py-4 rounded-md"
						value={keywords}
						onChange={(e) => setKeywords(e.target.value)}
					/>
				</div>

				<button
					type="submit"
					className="btn mt-3 tracking-wider max-w-md m-auto"
				>
					Generate
				</button>
			</form>

			<div
				className="max-w-screen-sm p-10"
				dangerouslySetInnerHTML={{ __html: postContent }}
			></div>
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
