import { Router } from 'express';
import auth from '../../middlewares/auth';
import { AdminController } from './admin.controller';

const router = Router();

router.patch('/users/:userId/block', auth('admin'), AdminController.blockUser);
router.delete('/blogs/:id', auth('admin'), AdminController.deleteBlog);
export const AdminRoutes = router;
