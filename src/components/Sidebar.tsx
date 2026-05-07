import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import NewCallModal from "./NewCallModal";

function Sidebar() {
  const { user, logout } = useUser();

  const [openNewCallModal, setOpenNewCallModal] = useState<boolean>(false);

  const handleOpenModal = () => setOpenNewCallModal(true);
  const handleCloseModal = () => setOpenNewCallModal(false);

  const handleSaveCall = (formData: any) => {
    if (!user) return;

    console.log(formData)

    handleCloseModal();
  };

  const navItems = [
    { label: "Gerenciar chamados", icon: "⚙️", adminOnly: true },
    { label: "Meus Chamados", icon: "📋" },
    { label: "Criar Chamado", icon: "➕", onClick: handleOpenModal },
    { label: "Minha conta", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col border-r border-gray-200">
      {/* Cabeçalho */}
      <div className="p-6 border-b border-gray-100 flex flex-col items-center gap-4 text-center">
        <span className="font-bold text-black text-xs leading-tight">
          Sistema Informatizado de Chamados do HMAR
        </span>
        <div className="bg-white p-3 rounded-full shadow-sm border border-gray-50">
          <img
            src="https://sandra.hmar.eb.mil.br/imagens/organizacoes/60210.png"
            alt="HMAR"
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* Perfil Simplificado EDITAR DEPOIS */}
      <div className="w-full p-4 bg-blue-50 flex items-center gap-3">
        <div className="bg-white p-2 rounded-full shadow-sm text-sm">👤</div>
        <span className="text-sm font-semibold truncate">{user?.fullname || "Usuário"}</span>
      </div>

      {/* Links de Navegação Mapeados */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          // Só renderiza se não for adminOnly OU se o usuário for nível 1
          if (item.adminOnly && user?.role !== 'admin') return null;

          return (
            <button
              key={item.label}
              className="w-full flex items-center p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors font-medium text-sm group cursor-pointer"
              onClick={item.onClick}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.label}
            </button>
          );
        })}

        <div className="w-full h-px bg-black/30 my-4" />
        <button
          onClick={logout}
          className="w-full flex items-center p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium text-sm mt-4 cursor-pointer"
        >
          <span className="mr-3 text-lg">🚪</span>
          Sair
        </button>
      </nav>

      <NewCallModal
        openStatus={openNewCallModal}
        onClose={handleCloseModal}
        onSubmit={handleSaveCall}
      />

      <div className="p-4 border-t border-gray-100 text-[10px] text-gray-400 text-center tracking-widest uppercase">
        HMAR - STI
      </div>
    </aside>
  );
}

export default Sidebar;