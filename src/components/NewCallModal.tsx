import Modal from '@mui/material/Modal';
import { useState } from 'react';

interface Props {
  openStatus: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void; // Depois você pode tipar com o 'NewCall' que criamos
}

function NewCallModal({ openStatus, onClose, onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onSubmit({ title, description, sector, priority });
    onClose();

    setTitle('');
    setDescription('');
    setSector('');
    setPriority('low');
  };

  return (
    <Modal open={openStatus} onClose={onClose}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-112.5 bg-zinc-800 border border-zinc-600 shadow-2xl p-6 rounded-2xl outline-none">

        {/* Header do Modal */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">Abrir Novo Chamado</h2>
          <p className="text-zinc-400 text-sm">Preencha os detalhes com clareza.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Título */}
          <div>
            <label className="text-xs font-semibold text-zinc-400 uppercase ml-1">Assunto</label>
            <input
              required
              className="w-full mt-1 bg-zinc-900 border border-zinc-700 text-white p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Ex: Internet não funciona"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Setor e Prioridade em Linha */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-xs font-semibold text-zinc-400 uppercase ml-1">Setor</label>
              <input
                required
                className="w-full mt-1 bg-zinc-900 border border-zinc-700 text-white p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Ex: STI"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="text-xs font-semibold text-zinc-400 uppercase ml-1">Prioridade</label>
              <select
                className="w-full mt-1 bg-zinc-900 border border-zinc-700 text-white p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Baixa</option>
                <option value="medium">Média</option>
                <option value="high">Alta / Urgente</option>
              </select>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="text-xs font-semibold text-zinc-400 uppercase ml-1">Descrição Detalhada</label>
            <textarea
              required
              rows={3}
              className="w-full mt-1 bg-zinc-900 border border-zinc-700 text-white p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Descreva o problema aqui..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Botões */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-zinc-700 text-white font-bold rounded-xl hover:bg-zinc-600 transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-900/20 transition-all active:scale-95 cursor-pointer"
            >
              Criar Chamado
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default NewCallModal;