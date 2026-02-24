import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// đọc biến môi trường từ file .evn.db
dotenv.config(); 
// tạo pool chuẩn kết nối


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectionLimit: 10, // Số kết nối tối đa trong pool 
    queueLimit: 0,                     // Giới hạn hàng chờ (0 = không giới hạn)
    charset: 'utf8mb4_general_ci',      // Bộ mã ký tự (hỗ trợ tiếng Việt, emoji)
    timezone: '+07:00',                  // Múi giờ (UTC+7 cho Việt Nam)
    dateStrings: true                   // Trả về giá trị ngày tháng dưới dạng chuỗi Data object
});
export default pool;