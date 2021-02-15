import { Router } from 'express';

import { register } from '../app/api/controllers/userController';

const router = Router();

router.post('/register', register);

export default router;
