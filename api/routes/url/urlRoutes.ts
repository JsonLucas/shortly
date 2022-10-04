import { Router } from 'express';

const urlRoutes = Router();
urlRoutes.post('/urls/shorten');
urlRoutes.get('/urls/:id');
urlRoutes.get('/urls/open/:shortUrl');
urlRoutes.delete('/urls/:id');

export default urlRoutes;