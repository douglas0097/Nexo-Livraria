import axios from 'axios';

// Cria uma instância customizada do Axios
const apiClient = axios.create({
  // Usa o proxy /api configurado no vite.config.ts
  baseURL: '/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: Adiciona o Token JWT a CADA requisição antes de ser enviada
apiClient.interceptors.request.use(
  (config) => {
    // 1. Tenta obter as informações do usuário logado (inclui o token)
    const usuarioInfoString = localStorage.getItem('usuarioInfo');

    if (usuarioInfoString) {
      try {
        const { token } = JSON.parse(usuarioInfoString);
        
        // 2. Se o token existir, anexa o cabeçalho Authorization
        if (token) {
          // O formato 'Bearer TOKEN' é o que o middleware 'protect' espera
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Erro ao parsear usuarioInfo no interceptor:", error);
        // Opcional: Deslogar o usuário se o localStorage estiver corrompido
        // localStorage.removeItem('usuarioInfo');
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;