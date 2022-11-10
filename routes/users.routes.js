import routerx from 'express-promise-router'
import  usersController  from '../controllers/users.controllers'

const router = routerx();

router.get('/', usersController.getAll);
//router.get('/:id', usersController.getById);
//router.post('/', usersController.create);
//router.put('/:id', usersController.update);
//router.delete('/:id', usersController.delete);

export default router;
