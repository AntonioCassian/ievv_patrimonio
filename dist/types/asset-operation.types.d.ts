export type OperationType = "USUFRUTO" | "DOACAO";
export type OperationStatus = "ACTIVE" | "FINISHED" | "CANCELLED";
export interface CreateAssetOperationDTO {
    tipoOperacao: OperationType;
    patrimonioId: string;
    quantidade: number;
    dataOperacao: Date;
    observacoes?: string;
    responsavelId?: string;
    dataInicio?: Date;
    dataFim?: Date;
    finalidade?: string;
    doador?: string;
    dataDoacao?: Date;
    documento?: string;
}
export interface UpdateAssetOperationDTO {
    observacoes?: string;
    finalidade?: string;
    responsavelId?: string;
}
export interface RenewUsufructDTO {
    novaDataTermino: Date;
    justificativa: string;
    usuarioResponsavel: string;
}
//# sourceMappingURL=asset-operation.types.d.ts.map