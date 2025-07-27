import express from 'express';

const router = express.Router();

// Import all routes
import { verifyJWT } from '../middlewares/jwt';

import { auth } from '../controllers/auth';
import { helloWorld } from '../controllers/index';

// Define the routes
router.get('/', helloWorld);

router.post('/auth/login', auth.login);

router.get('/whoami', verifyJWT, auth.whoami);

// Export the router
export { router };