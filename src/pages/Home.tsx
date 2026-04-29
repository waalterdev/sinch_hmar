import Sidebar from "../components/Sidebar"

function Home() {
    return (
        <div className="flex w-full min-h-screen bg-gray-100">
            {/* SIDEBAR */}
            <Sidebar />

            {/* ÁREA PRINCIPAL (MAIN) */}
            <main className="flex-1 p-8">
                {/* Header dentro do Main (Como na imagem) */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Hello World</h1>
                    <p className="text-gray-500">Bem-vindo ao sistema de chamados.</p>
                </div>

                {/* Card de Conteúdo */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    Aqui vai o conteúdo da sua página.
                </div>
            </main>
        </div>
    )
}

export default Home