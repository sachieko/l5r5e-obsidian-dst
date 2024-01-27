const express = require("express");
const app = express();
const PORT = 8000;

app.set('views', './views');
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/styles', express.static('styles'));

app.get("/", (req, res) => {
  res.render("l5r5e.ejs");
});

app.listen(PORT, () => {
  console.log(`Test server listening on port ${PORT}`);
});
