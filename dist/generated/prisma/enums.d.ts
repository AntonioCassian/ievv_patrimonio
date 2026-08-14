export declare const Role: {
    readonly ADMINISTRADOR: 'ADMINISTRADOR';
    readonly PASTOR: 'PASTOR';
    readonly SUPERVISOR: 'SUPERVISOR';
    readonly LIDER: 'LIDER';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const UserStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly INACTIVE: 'INACTIVE';
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const DepartmentStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly INACTIVE: 'INACTIVE';
};
export type DepartmentStatus = (typeof DepartmentStatus)[keyof typeof DepartmentStatus];
export declare const AssetStatus: {
    readonly AVAILABLE: 'AVAILABLE';
    readonly IN_USE: 'IN_USE';
    readonly MAINTENANCE: 'MAINTENANCE';
    readonly DISPOSED: 'DISPOSED';
};
export type AssetStatus = (typeof AssetStatus)[keyof typeof AssetStatus];
export declare const LoanStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly RETURNED: 'RETURNED';
    readonly CANCELLED: 'CANCELLED';
};
export type LoanStatus = (typeof LoanStatus)[keyof typeof LoanStatus];
export declare const OperationType: {
    readonly USUFRUTO: 'USUFRUTO';
    readonly DOACAO: 'DOACAO';
};
export type OperationType = (typeof OperationType)[keyof typeof OperationType];
export declare const OperationStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly FINISHED: 'FINISHED';
    readonly CANCELLED: 'CANCELLED';
};
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];
export declare const UsufructHistoryType: {
    readonly CREATED: 'CREATED';
    readonly RENEWED: 'RENEWED';
};
export type UsufructHistoryType = (typeof UsufructHistoryType)[keyof typeof UsufructHistoryType];
//# sourceMappingURL=enums.d.ts.map