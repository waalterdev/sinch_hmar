import LocationIcon from "@mui/icons-material/PlaceOutlined"
import PrioridadeIcon from '@mui/icons-material/ReportProblemOutlined';
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';

function CallCard() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 xl:w-[calc(50%-0.5rem)]">
            <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold">ID: #2026-0001</span>
                <span className="text-lg font-semibold px-6 py-1 bg-amber-400 rounded-lg">Problema</span>
            </div>
            <div className="flex flex-col justify-center items-start">
                <h1 className="text-xl font-bold">Internet Instável</h1>
                <p className="text-sm">Não consigo acessar o sistema SANDRA de jeito nenhum, já tentei de todas as formas, reiniciei o computador e tirei e coloquei o cabo e nada funciona.</p>
                <div className="px-6 py-4 border-2 border-black/20 rounded-2xl w-full mt-2 flex items-center justify-between">
                    <div className="flex justify-center items-center gap-2">
                        <LocationIcon className="text-black" />
                        <span className="text-lg font-semibold">Setor:</span>
                    </div>
                    <span className="font-semibold text-lg">Odontopediatria</span>
                </div>
                <div className="px-6 py-4 border-2 border-black/20 rounded-2xl w-full mt-2 flex items-center justify-between">
                    <div className="flex justify-center items-center gap-2">
                        <PrioridadeIcon className="text-black" />
                        <span className="text-lg font-semibold">Prioridade:</span>
                    </div>
                    <span className="text-lg font-semibold px-6 py-1 bg-red-500 rounded-lg text-white">Urgente</span>
                </div>
                <div className="px-6 py-4 border-2 border-black/20 rounded-2xl w-full mt-2 flex items-center justify-between">
                    <div className="flex justify-center items-center gap-2">
                        <CalendarIcon className="text-black" />
                        <span className="text-lg font-semibold">Aberto em:</span>
                    </div>
                    <span className="font-semibold text-lg">30/04/2026 14:26</span>
                </div>
                <div className="w-full h-px bg-black/30 my-4" />
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">
                            <div className="w-14 h-14 overflow-hidden border border-gray-200 rounded-full">
                                <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <span>Solicitante:</span>
                                <span className="font-semibold">3° Sgt Yago</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <div className="w-14 h-14 overflow-hidden border border-gray-200 rounded-full">
                                <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <span>Atendente:</span>
                                <span className="font-semibold">Sd EV Sherman</span>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="bg-blue-500 w-full mt-4 text-center py-3 text-white font-semibold rounded-2xl cursor-pointer">Abrir discussão</button>
                </div>
            </div>
        </div>
    );
}

export default CallCard;