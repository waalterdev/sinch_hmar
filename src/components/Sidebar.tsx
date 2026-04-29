function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md flex flex-col border-r border-gray-200">
            {/* Espaço para o Logo/Cabeçalho da Sidebar */}
            <div className="p-6 border-b border-gray-100 flex justify-center items-center flex-col gap-2">
                <span className="font-bold text-black text-sm text-center">Sistema Informatizado de Chamados do HMAR</span>


                <div className="bg-white/90 p-3 rounded-full mb-4 shadow-sm">
                    <img
                        src="https://sandra.hmar.eb.mil.br/imagens/organizacoes/60210.png"
                        alt="HMAR"
                        className="w-16 h-16 object-contain"
                    />
                </div>
            </div>

            <div className="w-full p-4 bg-blue-50 flex gap-4 justify-center items-center">
                <div className="bg-white p-2 rounded-full shadow-sm">
                    <span>👤</span>
                </div>
                <span className="text-left text-sm font-semibold">Sd EV Sherman</span>
            </div>

            {/* Links de Navegação */}
            <nav className="flex-1 p-4 space-y-2">
                <button className="w-full flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium cursor-pointer group">
                    <span className="mr-3">📋</span>
                    Meus Chamados
                </button>

                <button className="w-full flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium cursor-pointer group">
                    <span className="mr-3">➕</span>
                    Criar Chamados
                </button>

                <button className="w-full flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium cursor-pointer group">
                    <span className="mr-3">⚙️</span>
                    Minha conta
                </button>
                <button className="w-full flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium cursor-pointer group">
                    <span className="mr-3">🚪</span>
                    Sair
                </button>
            </nav>

            {/* Rodapé da Sidebar (Opcional) */}
            <div className="p-4 border-t border-gray-100 text-[10px] text-gray-400 text-center uppercase tracking-widest">
                HMAR - STI
            </div>
        </aside>
    )
}

export default Sidebar