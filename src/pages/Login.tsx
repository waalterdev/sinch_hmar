function Login() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mb-4">
                <img src="https://sandra.hmar.eb.mil.br/imagens/organizacoes/60210.png" alt="HMAR" className="w-30" />
                <span className="text-xl font-semibold">Bem-vindo ao SInCh!</span>
                <p className="max-w-md text-center text-black/70">Para acessar o Sistema Informatizado de Chamados do HMAR, é necessário se cadastrar previamente usando seu CPF.</p>
            </div>
            <div className="w-1/4 bg-black/50 h-px mb-4"></div>
            <form className="">
                <input type="text" placeholder="CPF" className="w-full border border-black/70 outline-none px-4 py-2 rounded transition-all focus:border-blue-600/70 focus:border-2" />
            </form>
        </div>
    )
}

export default Login