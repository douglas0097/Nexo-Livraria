import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';
import { protect } from '../middleware/authMiddleware'; // <--- Importar o middleware

const router = Router();

// Rota de Registro
// POST /api/usuarios/registrar
router.post('/registrar', UsuarioController.registrarUsuario);

// Rota de Login
// POST /api/usuarios/login
router.post('/login', UsuarioController.loginUsuario);

// Rota de Perfil (PROTEGIDA) - Só acessível com token válido
router.get('/perfil', protect, UsuarioController.getProfile);

export default router;