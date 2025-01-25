const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/login.html", (req, res) => {
  const { username, password } = req.body;
  console.log(`Login attempt: ${username}, ${password}`);
  res.send("Login successful!");
});

app.post("/login.html", (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log(`New user: ${firstname} ${lastname}, ${email}`);
  res.send("Registration successful!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
