import { useState } from 'react';
import backgroundImage from '../assets/background-image.jpg';
import { Link } from 'react-router';
import { useUser, type User } from '../contexts/UserContext';
import { v4 as uuidv4 } from 'uuid';

function Cadastro() {
    const [cpf, setCpf] = useState<string>('');
    const [fullname, setFullname] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { register } = useUser();

    const formatCPF = (val: string) => {
        return val
            .replace(/\D/g, '') // Remove tudo o que não é dígito
            .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os 3 primeiros números
            .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os 6 primeiros números
            .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Coloca hífen após os 9 primeiros números
            .replace(/(-\d{2})\d+?$/, '$1'); // Impede que digite mais de 11 números
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setCpf(formatCPF(inputValue));
    };

    const handleRegister = (e : React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();

        const user : User = {
            id: uuidv4(),
            cpf,
            password,
            fullname,
            isLogged: false,
        }

        register(user);

        setCpf('');
        setPassword('');
        setFullname('');
    };

    return (
        <div
            className="w-full min-h-screen flex flex-col justify-center items-center p-4 bg-gray-900 bg-cover bg-center bg-no-repeat transition-all duration-500"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="w-full max-w-md bg-black/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
                <div className="flex flex-col justify-center items-center mb-8">
                    <div className="bg-white/90 p-3 rounded-full mb-4 shadow-sm">
                        <img
                            src="https://sandra.hmar.eb.mil.br/imagens/organizacoes/60210.png"
                            alt="HMAR"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-white drop-shadow-md">Bem-vindo ao SInCh!</h1>
                    <p className="mt-2 text-center text-sm text-white/95 font-medium">
                        Sistema Informatizado de Chamados do HMAR
                    </p>
                </div>

                <form className="space-y-4" onSubmit={handleRegister}>

                    <div className="space-y-1">
                        <label className="block text-xs font-bold text-white uppercase ml-1">Nome completo</label>
                        <input
                            type="text"
                            placeholder="Seu nome completo"
                            className="w-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 outline-none px-4 py-3 rounded-xl transition-all focus:bg-white/30 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            value={fullname}
                            onChange={e => setFullname(e.target.value)}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs font-bold text-white uppercase ml-1">CPF</label>
                        <input
                            type="text"
                            placeholder="000.000.000-00"
                            className="w-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 outline-none px-4 py-3 rounded-xl transition-all focus:bg-white/30 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            maxLength={14}
                            value={cpf}
                            onChange={handleCpfChange}
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs font-bold text-white uppercase ml-1">Senha</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Sua senha"
                                className="w-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 outline-none px-4 py-3 rounded-xl transition-all focus:bg-white/30 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 cursor-pointer hover:text-blue-600 transition-colors"
                            >
                                {showPassword ? (
                                    <span className="text-xs font-bold">Ocultar</span>
                                ) : (
                                    <span className="text-xs font-bold">Mostrar</span>
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <span className='text-white'>Já tem uma conta?</span>
                        <Link
                            to="/login"
                            className='text-white font-semibold'
                        >Entre agora.</Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-blue-500/40 active:scale-95 mt-4 cursor-pointer"
                    >
                        Cadastrar-se
                    </button>
                </form>

                <div className="mt-8 flex flex-col items-center">
                    <div className="w-12 h-0.5 bg-white/20 mb-4"></div>
                    <p className="text-[10px] text-white/60 font-bold uppercase tracking-[0.2em]">
                        Hospital Militar de Área de Recife
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;