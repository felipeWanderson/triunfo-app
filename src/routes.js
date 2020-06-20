import { Router } from 'express';

import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FormController from './app/controllers/FormController';
import CityController from './app/controllers/CityController';
import TypeController from './app/controllers/TypeController';
import BuilderController from './app/controllers/BuilderController';
import PropertyController from './app/controllers/PropertyController';

import authMiddleware from './app/middlewares/auth';
import { multerConfig } from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/cities', CityController.index);
routes.post('/cities', CityController.store);
routes.put('/cities/:id', CityController.update);
routes.delete('/cities/:id', CityController.delete);

routes.get('/types', TypeController.index);
routes.post('/types', TypeController.store);
routes.put('/types/:id', TypeController.update);
routes.delete('/types/:id', TypeController.delete);

routes.get('/forms', FormController.index);
routes.get('/forms/filter', FormController.show);
routes.post('/forms', FormController.store);
routes.put('/forms/:id', FormController.update);
routes.delete('/forms/:id', FormController.delete);

routes.post('/builders', BuilderController.store);
routes.get('/builders', BuilderController.index);
routes.get('/builders/filter', BuilderController.show);
routes.put('/builders/:id', BuilderController.update);
routes.delete('/builders/:id', BuilderController.delete);

routes.get('/properties', PropertyController.index);
routes.post('/properties', upload.single('file'), PropertyController.store);
routes.put('/properties/:id', upload.single('file'), PropertyController.update);
routes.delete('/properties/:id', PropertyController.delete);

export default routes;
