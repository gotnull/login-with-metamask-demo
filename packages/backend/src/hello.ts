module.exports = (req: any, res: any) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  });
};
