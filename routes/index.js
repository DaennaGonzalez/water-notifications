import routerx from 'express-promise-router'
import usersRoutes from '../routes/users.routes';

const router = routerx();

router.use('/users', usersRoutes);

export default router;

