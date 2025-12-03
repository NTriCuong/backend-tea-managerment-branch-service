import pool from "../config/connection.js";

const getBranch=async()=>{
    const [rows]=await pool.query("SELECT * FROM BRANCHS");
    return rows;
}
const getBranchById=async(branchId)=>{
    const [rows]=await pool.query("SELECT * FROM BRANCHS WHERE Branch_id=?", [branchId]);
    return rows;
}
const postBranch=async(branchData)=>{ // id trigger tự sinh
    const {adress}= branchData;
    const [result]=await pool.query("INSERT INTO BRANCHS (Adress) VALUES (?)", [adress]);
    return result;
}
const putBranch=async(branchId, branchData)=>{
    const {adress}= branchData;
    const [result]=await pool.query("UPDATE BRANCHS SET Adress=? WHERE Branch_id=?", [adress, branchId]);
    return result;
}
const deleteBranch=async(branchId)=>{
    const [result]=await pool.query("DELETE FROM BRANCHS WHERE Branch_id=?", [branchId]);
    return result;
}
export {getBranch, getBranchById, postBranch, putBranch, deleteBranch }