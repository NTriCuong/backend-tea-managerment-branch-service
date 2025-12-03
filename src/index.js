import express from 'express' //sử dụng cú pháp import thay vì require do đã khai báo "type": "module" trong package.json
import morgan from 'morgan' //import morgan để log các request HTTP
import bodyParser from 'body-parser'
import branchRouter from './routers/branchRouter.js';


const app = express();
app.use(morgan('combined')) // xử dụng để xem log của resquest HTTP
app.use(bodyParser.urlencoded({ extended: false })) // Sử dụng body-parser để phân tích cú pháp URL-encoded trong các yêu cầu đến
app.use(bodyParser.json()) // Sử dụng body-parser để phân tích cú pháp JSON trong các yêu cầu đến

app.use('/branches', branchRouter);


app.listen(3002, () => {
    console.log('Branch service is running on port 3002');
});