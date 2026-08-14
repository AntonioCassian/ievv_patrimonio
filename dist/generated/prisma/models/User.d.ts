import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    password: string | null;
    role: $Enums.Role | null;
    status: $Enums.UserStatus | null;
    temporaryPassword: boolean | null;
    lastLoginAt: Date | null;
    departmentId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    password: string | null;
    role: $Enums.Role | null;
    status: $Enums.UserStatus | null;
    temporaryPassword: boolean | null;
    lastLoginAt: Date | null;
    departmentId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    password: number;
    role: number;
    status: number;
    temporaryPassword: number;
    lastLoginAt: number;
    departmentId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    password?: true;
    role?: true;
    status?: true;
    temporaryPassword?: true;
    lastLoginAt?: true;
    departmentId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    password?: true;
    role?: true;
    status?: true;
    temporaryPassword?: true;
    lastLoginAt?: true;
    departmentId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    password?: true;
    role?: true;
    status?: true;
    temporaryPassword?: true;
    lastLoginAt?: true;
    departmentId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    password: string | null;
    role: $Enums.Role;
    status: $Enums.UserStatus;
    temporaryPassword: boolean;
    lastLoginAt: Date | null;
    departmentId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    departmentId?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    ledDepartments?: Prisma.DepartmentListRelationFilter;
    createdDepartments?: Prisma.DepartmentListRelationFilter;
    passwordResets?: Prisma.PasswordResetListRelationFilter;
    responsibleAssets?: Prisma.AssetListRelationFilter;
    createdAssets?: Prisma.AssetListRelationFilter;
    loansAsResponsible?: Prisma.LoanListRelationFilter;
    createdLoans?: Prisma.LoanListRelationFilter;
    operationResponsible?: Prisma.AssetOperationListRelationFilter;
    createdOperations?: Prisma.AssetOperationListRelationFilter;
    usufructHistoryCreated?: Prisma.UsufructHistoryListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    temporaryPassword?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    ledDepartments?: Prisma.DepartmentOrderByRelationAggregateInput;
    createdDepartments?: Prisma.DepartmentOrderByRelationAggregateInput;
    passwordResets?: Prisma.PasswordResetOrderByRelationAggregateInput;
    responsibleAssets?: Prisma.AssetOrderByRelationAggregateInput;
    createdAssets?: Prisma.AssetOrderByRelationAggregateInput;
    loansAsResponsible?: Prisma.LoanOrderByRelationAggregateInput;
    createdLoans?: Prisma.LoanOrderByRelationAggregateInput;
    operationResponsible?: Prisma.AssetOperationOrderByRelationAggregateInput;
    createdOperations?: Prisma.AssetOperationOrderByRelationAggregateInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    departmentId?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    ledDepartments?: Prisma.DepartmentListRelationFilter;
    createdDepartments?: Prisma.DepartmentListRelationFilter;
    passwordResets?: Prisma.PasswordResetListRelationFilter;
    responsibleAssets?: Prisma.AssetListRelationFilter;
    createdAssets?: Prisma.AssetListRelationFilter;
    loansAsResponsible?: Prisma.LoanListRelationFilter;
    createdLoans?: Prisma.LoanListRelationFilter;
    operationResponsible?: Prisma.AssetOperationListRelationFilter;
    createdOperations?: Prisma.AssetOperationListRelationFilter;
    usufructHistoryCreated?: Prisma.UsufructHistoryListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    temporaryPassword?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    password?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    departmentId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    temporaryPassword?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    temporaryPassword?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    temporaryPassword?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutLedDepartmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLedDepartmentsInput, Prisma.UserUncheckedCreateWithoutLedDepartmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLedDepartmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserCreateNestedOneWithoutCreatedDepartmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedDepartmentsInput, Prisma.UserUncheckedCreateWithoutCreatedDepartmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedDepartmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateOneRequiredWithoutLedDepartmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLedDepartmentsInput, Prisma.UserUncheckedCreateWithoutLedDepartmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLedDepartmentsInput;
    upsert?: Prisma.UserUpsertWithoutLedDepartmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLedDepartmentsInput, Prisma.UserUpdateWithoutLedDepartmentsInput>, Prisma.UserUncheckedUpdateWithoutLedDepartmentsInput>;
};
export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutDepartmentInput | Prisma.UserUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUpdateOneWithoutCreatedDepartmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedDepartmentsInput, Prisma.UserUncheckedCreateWithoutCreatedDepartmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedDepartmentsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedDepartmentsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedDepartmentsInput, Prisma.UserUpdateWithoutCreatedDepartmentsInput>, Prisma.UserUncheckedUpdateWithoutCreatedDepartmentsInput>;
};
export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutDepartmentInput | Prisma.UserUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutPasswordResetsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPasswordResetsInput, Prisma.UserUncheckedCreateWithoutPasswordResetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPasswordResetsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPasswordResetsInput, Prisma.UserUncheckedCreateWithoutPasswordResetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPasswordResetsInput;
    upsert?: Prisma.UserUpsertWithoutPasswordResetsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPasswordResetsInput, Prisma.UserUpdateWithoutPasswordResetsInput>, Prisma.UserUncheckedUpdateWithoutPasswordResetsInput>;
};
export type UserCreateNestedOneWithoutResponsibleAssetsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResponsibleAssetsInput, Prisma.UserUncheckedCreateWithoutResponsibleAssetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResponsibleAssetsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutCreatedAssetsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedAssetsInput, Prisma.UserUncheckedCreateWithoutCreatedAssetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedAssetsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutResponsibleAssetsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutResponsibleAssetsInput, Prisma.UserUncheckedCreateWithoutResponsibleAssetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutResponsibleAssetsInput;
    upsert?: Prisma.UserUpsertWithoutResponsibleAssetsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutResponsibleAssetsInput, Prisma.UserUpdateWithoutResponsibleAssetsInput>, Prisma.UserUncheckedUpdateWithoutResponsibleAssetsInput>;
};
export type UserUpdateOneRequiredWithoutCreatedAssetsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedAssetsInput, Prisma.UserUncheckedCreateWithoutCreatedAssetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedAssetsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedAssetsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedAssetsInput, Prisma.UserUpdateWithoutCreatedAssetsInput>, Prisma.UserUncheckedUpdateWithoutCreatedAssetsInput>;
};
export type UserCreateNestedOneWithoutLoansAsResponsibleInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoansAsResponsibleInput, Prisma.UserUncheckedCreateWithoutLoansAsResponsibleInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoansAsResponsibleInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutCreatedLoansInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedLoansInput, Prisma.UserUncheckedCreateWithoutCreatedLoansInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedLoansInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLoansAsResponsibleNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoansAsResponsibleInput, Prisma.UserUncheckedCreateWithoutLoansAsResponsibleInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoansAsResponsibleInput;
    upsert?: Prisma.UserUpsertWithoutLoansAsResponsibleInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLoansAsResponsibleInput, Prisma.UserUpdateWithoutLoansAsResponsibleInput>, Prisma.UserUncheckedUpdateWithoutLoansAsResponsibleInput>;
};
export type UserUpdateOneRequiredWithoutCreatedLoansNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedLoansInput, Prisma.UserUncheckedCreateWithoutCreatedLoansInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedLoansInput;
    upsert?: Prisma.UserUpsertWithoutCreatedLoansInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedLoansInput, Prisma.UserUpdateWithoutCreatedLoansInput>, Prisma.UserUncheckedUpdateWithoutCreatedLoansInput>;
};
export type UserCreateNestedOneWithoutOperationResponsibleInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOperationResponsibleInput, Prisma.UserUncheckedCreateWithoutOperationResponsibleInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOperationResponsibleInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutCreatedOperationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedOperationsInput, Prisma.UserUncheckedCreateWithoutCreatedOperationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedOperationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutOperationResponsibleNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOperationResponsibleInput, Prisma.UserUncheckedCreateWithoutOperationResponsibleInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOperationResponsibleInput;
    upsert?: Prisma.UserUpsertWithoutOperationResponsibleInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOperationResponsibleInput, Prisma.UserUpdateWithoutOperationResponsibleInput>, Prisma.UserUncheckedUpdateWithoutOperationResponsibleInput>;
};
export type UserUpdateOneRequiredWithoutCreatedOperationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedOperationsInput, Prisma.UserUncheckedCreateWithoutCreatedOperationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedOperationsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedOperationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedOperationsInput, Prisma.UserUpdateWithoutCreatedOperationsInput>, Prisma.UserUncheckedUpdateWithoutCreatedOperationsInput>;
};
export type UserCreateNestedOneWithoutUsufructHistoryCreatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUsufructHistoryCreatedInput, Prisma.UserUncheckedCreateWithoutUsufructHistoryCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUsufructHistoryCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUsufructHistoryCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUsufructHistoryCreatedInput, Prisma.UserUncheckedCreateWithoutUsufructHistoryCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUsufructHistoryCreatedInput;
    upsert?: Prisma.UserUpsertWithoutUsufructHistoryCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUsufructHistoryCreatedInput, Prisma.UserUpdateWithoutUsufructHistoryCreatedInput>, Prisma.UserUncheckedUpdateWithoutUsufructHistoryCreatedInput>;
};
export type UserCreateWithoutLedDepartmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutLedDepartmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutLedDepartmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLedDepartmentsInput, Prisma.UserUncheckedCreateWithoutLedDepartmentsInput>;
};
export type UserCreateWithoutDepartmentInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput>;
};
export type UserCreateManyDepartmentInputEnvelope = {
    data: Prisma.UserCreateManyDepartmentInput | Prisma.UserCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type UserCreateWithoutCreatedDepartmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutCreatedDepartmentsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutCreatedDepartmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedDepartmentsInput, Prisma.UserUncheckedCreateWithoutCreatedDepartmentsInput>;
};
export type UserUpsertWithoutLedDepartmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLedDepartmentsInput, Prisma.UserUncheckedUpdateWithoutLedDepartmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLedDepartmentsInput, Prisma.UserUncheckedCreateWithoutLedDepartmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLedDepartmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLedDepartmentsInput, Prisma.UserUncheckedUpdateWithoutLedDepartmentsInput>;
};
export type UserUpdateWithoutLedDepartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutLedDepartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutDepartmentInput, Prisma.UserUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput>;
};
export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDepartmentInput, Prisma.UserUncheckedUpdateWithoutDepartmentInput>;
};
export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutDepartmentInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFilter<"User"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    departmentId?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
};
export type UserUpsertWithoutCreatedDepartmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedDepartmentsInput, Prisma.UserUncheckedUpdateWithoutCreatedDepartmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedDepartmentsInput, Prisma.UserUncheckedCreateWithoutCreatedDepartmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedDepartmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedDepartmentsInput, Prisma.UserUncheckedUpdateWithoutCreatedDepartmentsInput>;
};
export type UserUpdateWithoutCreatedDepartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedDepartmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutPasswordResetsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutPasswordResetsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutPasswordResetsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPasswordResetsInput, Prisma.UserUncheckedCreateWithoutPasswordResetsInput>;
};
export type UserUpsertWithoutPasswordResetsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPasswordResetsInput, Prisma.UserUncheckedUpdateWithoutPasswordResetsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPasswordResetsInput, Prisma.UserUncheckedCreateWithoutPasswordResetsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPasswordResetsInput, Prisma.UserUncheckedUpdateWithoutPasswordResetsInput>;
};
export type UserUpdateWithoutPasswordResetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutPasswordResetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutResponsibleAssetsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutResponsibleAssetsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutResponsibleAssetsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutResponsibleAssetsInput, Prisma.UserUncheckedCreateWithoutResponsibleAssetsInput>;
};
export type UserCreateWithoutCreatedAssetsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutCreatedAssetsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutCreatedAssetsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedAssetsInput, Prisma.UserUncheckedCreateWithoutCreatedAssetsInput>;
};
export type UserUpsertWithoutResponsibleAssetsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutResponsibleAssetsInput, Prisma.UserUncheckedUpdateWithoutResponsibleAssetsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutResponsibleAssetsInput, Prisma.UserUncheckedCreateWithoutResponsibleAssetsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutResponsibleAssetsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutResponsibleAssetsInput, Prisma.UserUncheckedUpdateWithoutResponsibleAssetsInput>;
};
export type UserUpdateWithoutResponsibleAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutResponsibleAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserUpsertWithoutCreatedAssetsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedAssetsInput, Prisma.UserUncheckedUpdateWithoutCreatedAssetsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedAssetsInput, Prisma.UserUncheckedCreateWithoutCreatedAssetsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedAssetsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedAssetsInput, Prisma.UserUncheckedUpdateWithoutCreatedAssetsInput>;
};
export type UserUpdateWithoutCreatedAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedAssetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutLoansAsResponsibleInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutLoansAsResponsibleInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutLoansAsResponsibleInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoansAsResponsibleInput, Prisma.UserUncheckedCreateWithoutLoansAsResponsibleInput>;
};
export type UserCreateWithoutCreatedLoansInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutCreatedLoansInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutCreatedLoansInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedLoansInput, Prisma.UserUncheckedCreateWithoutCreatedLoansInput>;
};
export type UserUpsertWithoutLoansAsResponsibleInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLoansAsResponsibleInput, Prisma.UserUncheckedUpdateWithoutLoansAsResponsibleInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoansAsResponsibleInput, Prisma.UserUncheckedCreateWithoutLoansAsResponsibleInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLoansAsResponsibleInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLoansAsResponsibleInput, Prisma.UserUncheckedUpdateWithoutLoansAsResponsibleInput>;
};
export type UserUpdateWithoutLoansAsResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutLoansAsResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserUpsertWithoutCreatedLoansInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedLoansInput, Prisma.UserUncheckedUpdateWithoutCreatedLoansInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedLoansInput, Prisma.UserUncheckedCreateWithoutCreatedLoansInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedLoansInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedLoansInput, Prisma.UserUncheckedUpdateWithoutCreatedLoansInput>;
};
export type UserUpdateWithoutCreatedLoansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedLoansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutOperationResponsibleInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutOperationResponsibleInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutOperationResponsibleInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOperationResponsibleInput, Prisma.UserUncheckedCreateWithoutOperationResponsibleInput>;
};
export type UserCreateWithoutCreatedOperationsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutCreatedOperationsInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutCreatedOperationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedOperationsInput, Prisma.UserUncheckedCreateWithoutCreatedOperationsInput>;
};
export type UserUpsertWithoutOperationResponsibleInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOperationResponsibleInput, Prisma.UserUncheckedUpdateWithoutOperationResponsibleInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOperationResponsibleInput, Prisma.UserUncheckedCreateWithoutOperationResponsibleInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOperationResponsibleInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOperationResponsibleInput, Prisma.UserUncheckedUpdateWithoutOperationResponsibleInput>;
};
export type UserUpdateWithoutOperationResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutOperationResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserUpsertWithoutCreatedOperationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedOperationsInput, Prisma.UserUncheckedUpdateWithoutCreatedOperationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedOperationsInput, Prisma.UserUncheckedCreateWithoutCreatedOperationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedOperationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedOperationsInput, Prisma.UserUncheckedUpdateWithoutCreatedOperationsInput>;
};
export type UserUpdateWithoutCreatedOperationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedOperationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateWithoutUsufructHistoryCreatedInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    ledDepartments?: Prisma.DepartmentCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationCreateNestedManyWithoutCreatedByInput;
};
export type UserUncheckedCreateWithoutUsufructHistoryCreatedInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    departmentId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutLeaderInput;
    createdDepartments?: Prisma.DepartmentUncheckedCreateNestedManyWithoutCreatedByInput;
    passwordResets?: Prisma.PasswordResetUncheckedCreateNestedManyWithoutUserInput;
    responsibleAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutResponsibleInput;
    createdAssets?: Prisma.AssetUncheckedCreateNestedManyWithoutCreatedByInput;
    loansAsResponsible?: Prisma.LoanUncheckedCreateNestedManyWithoutResponsibleInput;
    createdLoans?: Prisma.LoanUncheckedCreateNestedManyWithoutCreatedByInput;
    operationResponsible?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput;
    createdOperations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput;
};
export type UserCreateOrConnectWithoutUsufructHistoryCreatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUsufructHistoryCreatedInput, Prisma.UserUncheckedCreateWithoutUsufructHistoryCreatedInput>;
};
export type UserUpsertWithoutUsufructHistoryCreatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUsufructHistoryCreatedInput, Prisma.UserUncheckedUpdateWithoutUsufructHistoryCreatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUsufructHistoryCreatedInput, Prisma.UserUncheckedCreateWithoutUsufructHistoryCreatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUsufructHistoryCreatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUsufructHistoryCreatedInput, Prisma.UserUncheckedUpdateWithoutUsufructHistoryCreatedInput>;
};
export type UserUpdateWithoutUsufructHistoryCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutUsufructHistoryCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserCreateManyDepartmentInput = {
    id?: string;
    name: string;
    email: string;
    phone?: string | null;
    password?: string | null;
    role: $Enums.Role;
    status?: $Enums.UserStatus;
    temporaryPassword?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ledDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutLeaderNestedInput;
    createdDepartments?: Prisma.DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput;
    passwordResets?: Prisma.PasswordResetUncheckedUpdateManyWithoutUserNestedInput;
    responsibleAssets?: Prisma.AssetUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdAssets?: Prisma.AssetUncheckedUpdateManyWithoutCreatedByNestedInput;
    loansAsResponsible?: Prisma.LoanUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdLoans?: Prisma.LoanUncheckedUpdateManyWithoutCreatedByNestedInput;
    operationResponsible?: Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput;
    createdOperations?: Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput;
    usufructHistoryCreated?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput;
};
export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    temporaryPassword?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    ledDepartments: number;
    createdDepartments: number;
    passwordResets: number;
    responsibleAssets: number;
    createdAssets: number;
    loansAsResponsible: number;
    createdLoans: number;
    operationResponsible: number;
    createdOperations: number;
    usufructHistoryCreated: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ledDepartments?: boolean | UserCountOutputTypeCountLedDepartmentsArgs;
    createdDepartments?: boolean | UserCountOutputTypeCountCreatedDepartmentsArgs;
    passwordResets?: boolean | UserCountOutputTypeCountPasswordResetsArgs;
    responsibleAssets?: boolean | UserCountOutputTypeCountResponsibleAssetsArgs;
    createdAssets?: boolean | UserCountOutputTypeCountCreatedAssetsArgs;
    loansAsResponsible?: boolean | UserCountOutputTypeCountLoansAsResponsibleArgs;
    createdLoans?: boolean | UserCountOutputTypeCountCreatedLoansArgs;
    operationResponsible?: boolean | UserCountOutputTypeCountOperationResponsibleArgs;
    createdOperations?: boolean | UserCountOutputTypeCountCreatedOperationsArgs;
    usufructHistoryCreated?: boolean | UserCountOutputTypeCountUsufructHistoryCreatedArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLedDepartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCreatedDepartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPasswordResetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PasswordResetWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountResponsibleAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCreatedAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLoansAsResponsibleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoanWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCreatedLoansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoanWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOperationResponsibleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetOperationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCreatedOperationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetOperationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountUsufructHistoryCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsufructHistoryWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    password?: boolean;
    role?: boolean;
    status?: boolean;
    temporaryPassword?: boolean;
    lastLoginAt?: boolean;
    departmentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
    ledDepartments?: boolean | Prisma.User$ledDepartmentsArgs<ExtArgs>;
    createdDepartments?: boolean | Prisma.User$createdDepartmentsArgs<ExtArgs>;
    passwordResets?: boolean | Prisma.User$passwordResetsArgs<ExtArgs>;
    responsibleAssets?: boolean | Prisma.User$responsibleAssetsArgs<ExtArgs>;
    createdAssets?: boolean | Prisma.User$createdAssetsArgs<ExtArgs>;
    loansAsResponsible?: boolean | Prisma.User$loansAsResponsibleArgs<ExtArgs>;
    createdLoans?: boolean | Prisma.User$createdLoansArgs<ExtArgs>;
    operationResponsible?: boolean | Prisma.User$operationResponsibleArgs<ExtArgs>;
    createdOperations?: boolean | Prisma.User$createdOperationsArgs<ExtArgs>;
    usufructHistoryCreated?: boolean | Prisma.User$usufructHistoryCreatedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    password?: boolean;
    role?: boolean;
    status?: boolean;
    temporaryPassword?: boolean;
    lastLoginAt?: boolean;
    departmentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    password?: boolean;
    role?: boolean;
    status?: boolean;
    temporaryPassword?: boolean;
    lastLoginAt?: boolean;
    departmentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    password?: boolean;
    role?: boolean;
    status?: boolean;
    temporaryPassword?: boolean;
    lastLoginAt?: boolean;
    departmentId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "role" | "status" | "temporaryPassword" | "lastLoginAt" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
    ledDepartments?: boolean | Prisma.User$ledDepartmentsArgs<ExtArgs>;
    createdDepartments?: boolean | Prisma.User$createdDepartmentsArgs<ExtArgs>;
    passwordResets?: boolean | Prisma.User$passwordResetsArgs<ExtArgs>;
    responsibleAssets?: boolean | Prisma.User$responsibleAssetsArgs<ExtArgs>;
    createdAssets?: boolean | Prisma.User$createdAssetsArgs<ExtArgs>;
    loansAsResponsible?: boolean | Prisma.User$loansAsResponsibleArgs<ExtArgs>;
    createdLoans?: boolean | Prisma.User$createdLoansArgs<ExtArgs>;
    operationResponsible?: boolean | Prisma.User$operationResponsibleArgs<ExtArgs>;
    createdOperations?: boolean | Prisma.User$createdOperationsArgs<ExtArgs>;
    usufructHistoryCreated?: boolean | Prisma.User$usufructHistoryCreatedArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        department: Prisma.$DepartmentPayload<ExtArgs> | null;
        ledDepartments: Prisma.$DepartmentPayload<ExtArgs>[];
        createdDepartments: Prisma.$DepartmentPayload<ExtArgs>[];
        passwordResets: Prisma.$PasswordResetPayload<ExtArgs>[];
        responsibleAssets: Prisma.$AssetPayload<ExtArgs>[];
        createdAssets: Prisma.$AssetPayload<ExtArgs>[];
        loansAsResponsible: Prisma.$LoanPayload<ExtArgs>[];
        createdLoans: Prisma.$LoanPayload<ExtArgs>[];
        operationResponsible: Prisma.$AssetOperationPayload<ExtArgs>[];
        createdOperations: Prisma.$AssetOperationPayload<ExtArgs>[];
        usufructHistoryCreated: Prisma.$UsufructHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        password: string | null;
        role: $Enums.Role;
        status: $Enums.UserStatus;
        temporaryPassword: boolean;
        lastLoginAt: Date | null;
        departmentId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    department<T extends Prisma.User$departmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$departmentArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ledDepartments<T extends Prisma.User$ledDepartmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ledDepartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdDepartments<T extends Prisma.User$createdDepartmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdDepartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    passwordResets<T extends Prisma.User$passwordResetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PasswordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    responsibleAssets<T extends Prisma.User$responsibleAssetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$responsibleAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdAssets<T extends Prisma.User$createdAssetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    loansAsResponsible<T extends Prisma.User$loansAsResponsibleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$loansAsResponsibleArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdLoans<T extends Prisma.User$createdLoansArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdLoansArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    operationResponsible<T extends Prisma.User$operationResponsibleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$operationResponsibleArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdOperations<T extends Prisma.User$createdOperationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdOperationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    usufructHistoryCreated<T extends Prisma.User$usufructHistoryCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$usufructHistoryCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly status: Prisma.FieldRef<"User", 'UserStatus'>;
    readonly temporaryPassword: Prisma.FieldRef<"User", 'Boolean'>;
    readonly lastLoginAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly departmentId: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.department
 */
export type User$departmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Department
     */
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
};
/**
 * User.ledDepartments
 */
export type User$ledDepartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Department
     */
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
/**
 * User.createdDepartments
 */
export type User$createdDepartmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Department
     */
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
/**
 * User.passwordResets
 */
export type User$passwordResetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordReset
     */
    select?: Prisma.PasswordResetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PasswordReset
     */
    omit?: Prisma.PasswordResetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PasswordResetInclude<ExtArgs> | null;
    where?: Prisma.PasswordResetWhereInput;
    orderBy?: Prisma.PasswordResetOrderByWithRelationInput | Prisma.PasswordResetOrderByWithRelationInput[];
    cursor?: Prisma.PasswordResetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PasswordResetScalarFieldEnum | Prisma.PasswordResetScalarFieldEnum[];
};
/**
 * User.responsibleAssets
 */
export type User$responsibleAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: Prisma.AssetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Asset
     */
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
/**
 * User.createdAssets
 */
export type User$createdAssetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: Prisma.AssetSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Asset
     */
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssetInclude<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
/**
 * User.loansAsResponsible
 */
export type User$loansAsResponsibleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: Prisma.LoanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Loan
     */
    omit?: Prisma.LoanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoanInclude<ExtArgs> | null;
    where?: Prisma.LoanWhereInput;
    orderBy?: Prisma.LoanOrderByWithRelationInput | Prisma.LoanOrderByWithRelationInput[];
    cursor?: Prisma.LoanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoanScalarFieldEnum | Prisma.LoanScalarFieldEnum[];
};
/**
 * User.createdLoans
 */
export type User$createdLoansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Loan
     */
    select?: Prisma.LoanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Loan
     */
    omit?: Prisma.LoanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoanInclude<ExtArgs> | null;
    where?: Prisma.LoanWhereInput;
    orderBy?: Prisma.LoanOrderByWithRelationInput | Prisma.LoanOrderByWithRelationInput[];
    cursor?: Prisma.LoanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoanScalarFieldEnum | Prisma.LoanScalarFieldEnum[];
};
/**
 * User.operationResponsible
 */
export type User$operationResponsibleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetOperation
     */
    select?: Prisma.AssetOperationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AssetOperation
     */
    omit?: Prisma.AssetOperationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssetOperationInclude<ExtArgs> | null;
    where?: Prisma.AssetOperationWhereInput;
    orderBy?: Prisma.AssetOperationOrderByWithRelationInput | Prisma.AssetOperationOrderByWithRelationInput[];
    cursor?: Prisma.AssetOperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetOperationScalarFieldEnum | Prisma.AssetOperationScalarFieldEnum[];
};
/**
 * User.createdOperations
 */
export type User$createdOperationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetOperation
     */
    select?: Prisma.AssetOperationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AssetOperation
     */
    omit?: Prisma.AssetOperationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssetOperationInclude<ExtArgs> | null;
    where?: Prisma.AssetOperationWhereInput;
    orderBy?: Prisma.AssetOperationOrderByWithRelationInput | Prisma.AssetOperationOrderByWithRelationInput[];
    cursor?: Prisma.AssetOperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetOperationScalarFieldEnum | Prisma.AssetOperationScalarFieldEnum[];
};
/**
 * User.usufructHistoryCreated
 */
export type User$usufructHistoryCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsufructHistory
     */
    select?: Prisma.UsufructHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsufructHistory
     */
    omit?: Prisma.UsufructHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsufructHistoryInclude<ExtArgs> | null;
    where?: Prisma.UsufructHistoryWhereInput;
    orderBy?: Prisma.UsufructHistoryOrderByWithRelationInput | Prisma.UsufructHistoryOrderByWithRelationInput[];
    cursor?: Prisma.UsufructHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsufructHistoryScalarFieldEnum | Prisma.UsufructHistoryScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
//# sourceMappingURL=User.d.ts.map