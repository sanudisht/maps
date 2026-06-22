const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname));

const PORT = process.env.PORT || 7567;

app.listen(PORT, () => {
    console.log("Map server running on port", PORT);
});
