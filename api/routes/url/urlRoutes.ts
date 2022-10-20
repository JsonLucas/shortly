import { Router } from 'express';
import { 
	createUrlController, 
	deleteUrlController, 
	getUrlRankingController, 
	getUrlsController, 
	updateVisitCountController 
} from '../../controllers/urlsController';
import { authMiddlware } from '../../middlewares/usersMiddleware';

const urlRoutes = Router();
urlRoutes.get('/urls', authMiddlware, getUrlsController);
urlRoutes.get('/urls/:id');
urlRoutes.get('/urls/open/:shortUrl', updateVisitCountController);
urlRoutes.get('/urls/ranking', getUrlRankingController);
urlRoutes.post('/urls/shorten', authMiddlware, createUrlController);
urlRoutes.delete('/urls/:id', authMiddlware, deleteUrlController);

export default urlRoutes;