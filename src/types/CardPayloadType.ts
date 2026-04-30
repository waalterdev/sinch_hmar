export type CardPayload = {
    id: string;
    titulo: string;
    descricao: string;
    status: {
        label: string;
        cor: string;
    }
    setor: string;
    prioridade: {
        label: string;
        cor: string;
    }
    dataAbertura: string;
    solicitante: {
        nome: string;
        avatar: string;
    }
    atendente: {
        nome: string;
        avatar: string;
    }
}