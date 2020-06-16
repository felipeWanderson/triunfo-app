import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FormController from './app/controllers/FormController';
import CityController from './app/controllers/CityController';
import TypeController from './app/controllers/TypeController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/cities', CityController.index);
routes.post('/cities', CityController.store);

routes.get('/types', TypeController.index);
routes.post('/types', TypeController.store);

routes.get('/forms', FormController.index);
routes.get('/forms/filter', FormController.show);
routes.post('/forms', FormController.store);

export default routes;
