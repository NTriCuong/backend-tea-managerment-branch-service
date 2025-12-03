import {getAllBranches, findBranchById, createBranch, updateBranchById, deleteBranchById} from '../controllers/branchController.js';

import express from 'express';
const router=express.Router();

router.get('/', getAllBranches);
router.get('/:branchId', findBranchById);
router.post('/', createBranch);
router.put('/:branchId', updateBranchById);
router.delete('/:branchId', deleteBranchById);

export default router;