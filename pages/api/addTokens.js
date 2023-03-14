// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from "@auth0/nextjs-auth0";

export default function handler(req, res) {
  const { user } = getSession(req, res);

  console.log('user: ', user);

	res.status(200).json({ name: 'John Doe' });
}
