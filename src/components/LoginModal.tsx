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
      ? 'https://sua-api.com/login'
      : 'https://sua-api.com/register';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.detail || 'Erro ao fazer login');
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