import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner'; // opcional, se você usa notificação

interface LoginModalProps {
  children: React.ReactNode;
}

const LoginModal = ({ children }: LoginModalProps) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error('Preencha todos os campos');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      toast.error('Senhas não coincidem');
      return;
    }

    const url = isLogin
      ? 'http://127.0.0.1:8000/login'
      : 'http://127.0.0.1:8000/register';
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
    isLogin
      ? { email, password } // se for login, envia só isso
      : { email, password, confirm_password: confirmPassword } // se for cadastro, envia o campo extra
  ),
      });

      const data = await res.json();

      if (!res.ok) {
        const detail = data.detail;

  // Se for string, mostra direto
  if (typeof detail === 'string') {
    toast.error(detail);
  }
  // Se for array ou objeto (como o erro diz), mostra a primeira mensagem
  else if (Array.isArray(detail) && detail.length > 0 && detail[0].msg) {
    toast.error(detail[0].msg);
  }
  // Fallback genérico
  else {
    toast.error('Erro ao fazer login');
  }

  return;
      }

      toast.success(data.msg || 'Login realizado');
      // Se você usa JWT, pode salvar aqui:
      // localStorage.setItem("token", data.token)
    } catch (err) {
      toast.error('Erro de conexão com o servidor');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-mixvinicius-green">
            {isLogin ? 'Entrar na sua conta' : 'Criar nova conta'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">E-mail</label>
            <Input id="email" type="email" placeholder="seu@email.com" className="w-full"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Senha</label>
            <Input id="password" type="password" placeholder="••••••••" className="w-full"
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">Confirmar Senha</label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" className="w-full"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          )}

          <Button
            onClick={handleSubmit}
            className="w-full bg-mixvinicius-green hover:bg-mixvinicius-green-dark"
          >
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </Button>

          <div className="text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-mixvinicius-green hover:underline"
            >
              {isLogin ? 'Não tem conta? Criar uma' : 'Já tem conta? Entrar'}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;