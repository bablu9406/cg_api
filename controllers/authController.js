exports.login = async (req, res) => {
  const { email, password } = req.body;

  res.json({
    user: { email },
    token: "dummy-token",
  });
};
