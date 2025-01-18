import express from 'express'; 
import { getAllServices, addService } from '../controllers/serviceController.js'; // Import functions correctly
const router = express.Router();

router.get('/', getAllServices);
router.post('/', addService);

export default router;
