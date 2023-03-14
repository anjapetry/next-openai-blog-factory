import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import {Configuration, OpenAIApi} from 'openai';
import clientPromise from '../../lib/mongodb';

export default withApiAuthRequired(async function handler(req, res) {
	const client = await clientPromise;

	const config = new Configuration({
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(config);

	const {topic, keywords} = req.body;

	/* const topic = "How career changers to web development can win over employers in 2023";
	const keywords = "web developers, career change, hiring web developers, careers in web development, career advice for web developers, new job, soft skills, transferable skills, convincing skills";
	*/
	
	const response = await openai.createCompletion({
		model: 'text-davinci-003',
		temperature: 0,
		max_tokens: 3600,
		prompt:
			`Write a long and detailed SEO-friendly blog post about ${topic}, that targets the following comma-separated keywords: ${keywords}.
			The content should be formatted in SEO-friendly, semantic HTML.
			The response must also include appropriate HTML title and meta description content.
			The return format must be stringified JSON in the following format:
			{
				"postContent: post content here"
				"title": title goes here
				"metaDescription": meta description goes here
			}`,
	});
	console.log("response: ", response);


	res.status(200).json({post: JSON.parse(response.data.choices[0]?.text.split('\n').join(''))});
})
