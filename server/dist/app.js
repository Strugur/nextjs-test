"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const range_1 = __importDefault(require("./range"));
const productApi_1 = __importDefault(require("./product/productApi"));
const app = express_1.default();
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
// const dbConnetion = mongoose.connection;
// dbConnetion.once("open", function() {
//     console.log("MongoDB database connection established successfully");
// });
const corsOptions = {
    exposedHeaders: 'Content-Range'
};
app.use(cors_1.default(corsOptions));
app.use(range_1.default);
app.use(function (req, res, next) {
    res.setHeader('Content-Range', 'products 0-10/10');
    next();
});
app.get('/', (req, res) => {
    res.send('Hello');
});
app.use('/product', productApi_1.default);
app.listen(5000, () => { console.log('Server running'); });
