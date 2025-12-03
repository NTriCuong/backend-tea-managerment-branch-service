import {getBranch, getBranchById, postBranch, putBranch, deleteBranch } from "../models/branchModel.js";

const getAllBranches=async(req, res)=>{
    try{
        const data=await getBranch();
        res.status(200).json(data);
    }catch(error){
        console.log("Error in getAllBranches:", error);
        res.status(500).json({message: " server error: "+ error.message});
    }
}

const findBranchById=async(req, res)=>{
    try{
        const branchId=req.params.branchId;
        const data=await getBranchById(branchId);
        if(data.length===0){
            return res.status(404).json({message: "Branch not found"});
        }
        res.status(200).json(data[0]);
    }catch(error){
         console.log("Error in getAllBranches:", error);
        res.status(500).json({message: " server error: "+ error.message});
    }
}
const createBranch=async(req, res)=>{
    try{
        const data=req.body;
        const result=await postBranch(data);
        res.status(201).json({message: "Branch created", branchId: result.insertId});
    }catch(error){
         console.log("Error in createBranch:", error);
        res.status(500).json({message: " server error: "+ error.message});
    }
}
const updateBranchById=async(req, res)=>{
    try{
        const branchId=req.params.branchId;
        const data=req.body;
        const existingBranch=await getBranchById(branchId);
        if(existingBranch.length===0){
            return res.status(404).json({message: "Branch not found"});
        }
        await putBranch(branchId, data);
        res.status(200).json({message: "Branch updated"});
    }catch(error){
         console.log("Error in updateBranchById:", error);
        res.status(500).json({message: " server error: "+ error.message});
    }
}
const deleteBranchById=async(req, res)=>{
    try{
        const branchId=req.params.branchId;
        const existingBranch=await getBranchById(branchId); // kiểm tra branch có tồn tại không
        if(existingBranch.length===0){
            return res.status(404).json({message: "Branch not found"});
        }
        await deleteBranch(branchId); // xoá
        res.status(200).json({message: "Branch deleted"});
    }catch(error){
         console.log("Error in deleteBranchById:", error);
        res.status(500).json({message: " server error: "+ error.message});
    }
}
export {getAllBranches, findBranchById, createBranch, updateBranchById, deleteBranchById}