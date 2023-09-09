const express = require("express");
// Sử dụng thư viện cors để trao đổi dữ liệu chéo từ client đến server
const cors = require("cors");
// Gọi đến thư viện express và sử dụng nó
const app = express();
app.use(cors());
app.use(express.json());

const contactsRouter = require("./app/routes/contact.route");

// Gọi router get
app.get("/", (req, res) => {
    res.json({ message: "Wellcome to contact book application."});
});

app.use("/api/contacts", contactsRouter);
module.exports = app;
