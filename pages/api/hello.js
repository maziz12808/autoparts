// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {middleware} from "../../middleware.js"
export default function handler(req, res) {
  middleware()
  res.status(200).json({ name: 'John Doe' })
}
