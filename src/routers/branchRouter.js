import {getAllBranches, findBranchById, createBranch, updateBranchById, deleteBranchById} from '../controllers/branchController.js';
import {verifyAccessToken, requireAdmin} from '../controllers/verifyAccessToken.js';
import express from 'express';
const router=express.Router();

router.get('/',verifyAccessToken, requireAdmin, getAllBranches);
router.get('/:branchId',verifyAccessToken, requireAdmin, findBranchById);
router.post('/',verifyAccessToken, requireAdmin, createBranch);
router.put('/:branchId',verifyAccessToken, requireAdmin, updateBranchById);
router.delete('/:branchId',verifyAccessToken, requireAdmin, deleteBranchById);

export default router;