import { Router } from 'express';
import deleteUrlController from '../../controllers/deleteUrlController.js';
import openUrlController from '../../controllers/openUrlController.js';
import urlByIdController from '../../controllers/urlByIdController.js';
import urlShortenController from '../../controllers/urlShortenController.js';
import deleteUrlMiddleware from '../../middlewares/deleteUrlMiddleware.js';
import urlShortenMiddleware from '../../middlewares/urlShortenMiddleware.js';

const urlRoutes = Router();
urlRoutes.post('/urls/shorten', urlShortenMiddleware, urlShortenController);
urlRoutes.get('/urls/:id', urlByIdController);
urlRoutes.get('/urls/open/:shortUrl', openUrlController);
urlRoutes.delete('/urls/:id', deleteUrlMiddleware, deleteUrlController);

export default urlRoutes;