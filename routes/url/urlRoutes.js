import { Router } from 'express';
import urlByIdController from '../../controllers/urlByIdController.js';
import urlShortenController from '../../controllers/urlShortenController.js';
import urlShortenMiddleware from '../../middlewares/urlShortenMiddleware.js';

const urlRoutes = Router();
urlRoutes.post('/urls/shorten', urlShortenMiddleware, urlShortenController);
urlRoutes.get('/urls/:id', urlByIdController);

export default urlRoutes;