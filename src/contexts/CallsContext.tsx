import { createContext, useContext } from "react";

export type CallStatusType = 'open' | 'in-progress' | 'closed';

export interface CallType {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    callerId: string;
    technicianId?: string;
    callerSector: string;
    status: CallStatusType;
}

export type NewCallType = Omit<CallType, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'technicianId'>

export interface CallContextType {
    createCall: (callData: NewCallType) => void;
    deleteCall: (callId: string) => void;
    updateStatus: (callId: string, newStatus: CallStatusType) => void;
}  

const CallsContext = createContext<CallContextType | undefined>(undefined);

const CallsProvider = ({ children }: { children: React.ReactNode }) => {

    const createCall = () => {
        console.log('createCall')
    };

    const deleteCall = () => {
        console.log('deleteCall')
    };
    const updateStatus = () => {
        console.log('updateStatus')
    };


    return (
        <CallsContext.Provider
            value={{
                createCall,
                deleteCall,
                updateStatus
            }}
        >
            { children }
        </CallsContext.Provider>
    )
}

export const useCalls = () => {
    const context = useContext(CallsContext);

    if (!context) throw new Error("O contexto de chamados precisa ser inicializado antes de ser usado.");

    return context;
}