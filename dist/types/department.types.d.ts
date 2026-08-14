export interface CreateDepartmentDTO {
    name: string;
    leaderId: string;
}
export interface UpdateDepartmentDTO {
    name?: string;
    leaderId?: string;
    status?: "ACTIVE" | "INACTIVE";
}
//# sourceMappingURL=department.types.d.ts.map