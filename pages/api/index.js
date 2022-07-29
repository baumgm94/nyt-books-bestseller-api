// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function NyTimesCall(req, res) {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=DnnZwrIpel9rfmqoQ9Id5SwjjWG1gZe1`
    );
    res.status(200).json({
      data: (await response.json()).results.books,
    });
  } catch (error) {}
}
