console.log("wlcome in node js ")
const express = require("express");
const app = express();
app.use(express.json())





const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

