// api/news.js

import axios from 'axios';

export default async function handler(req, res) {
  const { country, category, page, pageSize } = req.query;
  const apiKey = process.env.NEWS_API_KE;
  const url = "https://newsapi.org/v2/top-headlines";
 
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
}

