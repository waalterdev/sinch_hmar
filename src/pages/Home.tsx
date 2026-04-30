import CallCard from "../components/CallCard"
import Sidebar from "../components/Sidebar"


function Home() {
    return (
        <div className="flex w-full min-h-screen bg-gray-100">
            <Sidebar />

            <main className="flex-1 p-8">
                {/* Header dentro do Main (Como na imagem) */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Meus Chamados</h1>
                    <p className="text-gray-500">Bem-vindo ao Sistema Informatizado de Chamados do HMAR. Qualquer problema, entrar em contato com o setor de informática.</p>
                </div>

                {/* Card de Conteúdo */}
                <div className="w-full flex flex-wrap gap-4">
                    <CallCard />
                    <CallCard />
                    <CallCard />
                    <CallCard />
                </div>
            </main>
        </div>
    )
}

export default Home