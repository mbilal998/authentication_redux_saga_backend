import { Router } from 'express';

import { register, login, is_verify } from '../app/api/controllers/userController';
import validInfo from '../middleware/validinfo';
import authorization from '../middleware/authorization';

const router = Router();

router.post('/register', validInfo, register);
router.post('/login', validInfo, login);
router.get('/is-verify', authorization, is_verify);

export default router; 
