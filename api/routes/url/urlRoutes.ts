import { Router } from 'express';
import { 
	createUrlController, 
	deleteUrlController, 
	getUrlsController, 
	updateVisitCountController 
} from '../../controllers/urlsController';
import { authMiddlware } from '../../middlewares/usersMiddleware';

const urlRoutes = Router();
urlRoutes.post('/urls/shorten', authMiddlware, createUrlController);
urlRoutes.get('/urls', authMiddlware, getUrlsController);
urlRoutes.get('/urls/:id');
urlRoutes.get('/urls/open/:shortUrl', updateVisitCountController);
urlRoutes.delete('/urls/:id', authMiddlware, deleteUrlController);

export default urlRoutes;