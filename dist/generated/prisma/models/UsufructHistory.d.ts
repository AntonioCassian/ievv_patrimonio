import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model UsufructHistory
 *
 */
export type UsufructHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$UsufructHistoryPayload>;
export type AggregateUsufructHistory = {
    _count: UsufructHistoryCountAggregateOutputType | null;
    _min: UsufructHistoryMinAggregateOutputType | null;
    _max: UsufructHistoryMaxAggregateOutputType | null;
};
export type UsufructHistoryMinAggregateOutputType = {
    id: string | null;
    operationId: string | null;
    type: $Enums.UsufructHistoryType | null;
    previousEndDate: Date | null;
    newEndDate: Date | null;
    justification: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type UsufructHistoryMaxAggregateOutputType = {
    id: string | null;
    operationId: string | null;
    type: $Enums.UsufructHistoryType | null;
    previousEndDate: Date | null;
    newEndDate: Date | null;
    justification: string | null;
    createdById: string | null;
    createdAt: Date | null;
};
export type UsufructHistoryCountAggregateOutputType = {
    id: number;
    operationId: number;
    type: number;
    previousEndDate: number;
    newEndDate: number;
    justification: number;
    createdById: number;
    createdAt: number;
    _all: number;
};
export type UsufructHistoryMinAggregateInputType = {
    id?: true;
    operationId?: true;
    type?: true;
    previousEndDate?: true;
    newEndDate?: true;
    justification?: true;
    createdById?: true;
    createdAt?: true;
};
export type UsufructHistoryMaxAggregateInputType = {
    id?: true;
    operationId?: true;
    type?: true;
    previousEndDate?: true;
    newEndDate?: true;
    justification?: true;
    createdById?: true;
    createdAt?: true;
};
export type UsufructHistoryCountAggregateInputType = {
    id?: true;
    operationId?: true;
    type?: true;
    previousEndDate?: true;
    newEndDate?: true;
    justification?: true;
    createdById?: true;
    createdAt?: true;
    _all?: true;
};
export type UsufructHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UsufructHistory to aggregate.
     */
    where?: Prisma.UsufructHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsufructHistories to fetch.
     */
    orderBy?: Prisma.UsufructHistoryOrderByWithRelationInput | Prisma.UsufructHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UsufructHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsufructHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsufructHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UsufructHistories
    **/
    _count?: true | UsufructHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsufructHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsufructHistoryMaxAggregateInputType;
};
export type GetUsufructHistoryAggregateType<T extends UsufructHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateUsufructHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsufructHistory[P]> : Prisma.GetScalarType<T[P], AggregateUsufructHistory[P]>;
};
export type UsufructHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsufructHistoryWhereInput;
    orderBy?: Prisma.UsufructHistoryOrderByWithAggregationInput | Prisma.UsufructHistoryOrderByWithAggregationInput[];
    by: Prisma.UsufructHistoryScalarFieldEnum[] | Prisma.UsufructHistoryScalarFieldEnum;
    having?: Prisma.UsufructHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsufructHistoryCountAggregateInputType | true;
    _min?: UsufructHistoryMinAggregateInputType;
    _max?: UsufructHistoryMaxAggregateInputType;
};
export type UsufructHistoryGroupByOutputType = {
    id: string;
    operationId: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate: Date | null;
    newEndDate: Date | null;
    justification: string | null;
    createdById: string;
    createdAt: Date;
    _count: UsufructHistoryCountAggregateOutputType | null;
    _min: UsufructHistoryMinAggregateOutputType | null;
    _max: UsufructHistoryMaxAggregateOutputType | null;
};
export type GetUsufructHistoryGroupByPayload<T extends UsufructHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsufructHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsufructHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsufructHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsufructHistoryGroupByOutputType[P]>;
}>>;
export type UsufructHistoryWhereInput = {
    AND?: Prisma.UsufructHistoryWhereInput | Prisma.UsufructHistoryWhereInput[];
    OR?: Prisma.UsufructHistoryWhereInput[];
    NOT?: Prisma.UsufructHistoryWhereInput | Prisma.UsufructHistoryWhereInput[];
    id?: Prisma.StringFilter<"UsufructHistory"> | string;
    operationId?: Prisma.StringFilter<"UsufructHistory"> | string;
    type?: Prisma.EnumUsufructHistoryTypeFilter<"UsufructHistory"> | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.DateTimeNullableFilter<"UsufructHistory"> | Date | string | null;
    newEndDate?: Prisma.DateTimeNullableFilter<"UsufructHistory"> | Date | string | null;
    justification?: Prisma.StringNullableFilter<"UsufructHistory"> | string | null;
    createdById?: Prisma.StringFilter<"UsufructHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"UsufructHistory"> | Date | string;
    operation?: Prisma.XOR<Prisma.AssetOperationScalarRelationFilter, Prisma.AssetOperationWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UsufructHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    previousEndDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    newEndDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    justification?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    operation?: Prisma.AssetOperationOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
};
export type UsufructHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UsufructHistoryWhereInput | Prisma.UsufructHistoryWhereInput[];
    OR?: Prisma.UsufructHistoryWhereInput[];
    NOT?: Prisma.UsufructHistoryWhereInput | Prisma.UsufructHistoryWhereInput[];
    operationId?: Prisma.StringFilter<"UsufructHistory"> | string;
    type?: Prisma.EnumUsufructHistoryTypeFilter<"UsufructHistory"> | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.DateTimeNullableFilter<"UsufructHistory"> | Date | string | null;
    newEndDate?: Prisma.DateTimeNullableFilter<"UsufructHistory"> | Date | string | null;
    justification?: Prisma.StringNullableFilter<"UsufructHistory"> | string | null;
    createdById?: Prisma.StringFilter<"UsufructHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"UsufructHistory"> | Date | string;
    operation?: Prisma.XOR<Prisma.AssetOperationScalarRelationFilter, Prisma.AssetOperationWhereInput>;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type UsufructHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    previousEndDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    newEndDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    justification?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UsufructHistoryCountOrderByAggregateInput;
    _max?: Prisma.UsufructHistoryMaxOrderByAggregateInput;
    _min?: Prisma.UsufructHistoryMinOrderByAggregateInput;
};
export type UsufructHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsufructHistoryScalarWhereWithAggregatesInput | Prisma.UsufructHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsufructHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsufructHistoryScalarWhereWithAggregatesInput | Prisma.UsufructHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UsufructHistory"> | string;
    operationId?: Prisma.StringWithAggregatesFilter<"UsufructHistory"> | string;
    type?: Prisma.EnumUsufructHistoryTypeWithAggregatesFilter<"UsufructHistory"> | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.DateTimeNullableWithAggregatesFilter<"UsufructHistory"> | Date | string | null;
    newEndDate?: Prisma.DateTimeNullableWithAggregatesFilter<"UsufructHistory"> | Date | string | null;
    justification?: Prisma.StringNullableWithAggregatesFilter<"UsufructHistory"> | string | null;
    createdById?: Prisma.StringWithAggregatesFilter<"UsufructHistory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UsufructHistory"> | Date | string;
};
export type UsufructHistoryCreateInput = {
    id?: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdAt?: Date | string;
    operation: Prisma.AssetOperationCreateNestedOneWithoutHistoriesInput;
    createdBy: Prisma.UserCreateNestedOneWithoutUsufructHistoryCreatedInput;
};
export type UsufructHistoryUncheckedCreateInput = {
    id?: string;
    operationId: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type UsufructHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operation?: Prisma.AssetOperationUpdateOneRequiredWithoutHistoriesNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutUsufructHistoryCreatedNestedInput;
};
export type UsufructHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsufructHistoryCreateManyInput = {
    id?: string;
    operationId: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type UsufructHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsufructHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsufructHistoryListRelationFilter = {
    every?: Prisma.UsufructHistoryWhereInput;
    some?: Prisma.UsufructHistoryWhereInput;
    none?: Prisma.UsufructHistoryWhereInput;
};
export type UsufructHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UsufructHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    previousEndDate?: Prisma.SortOrder;
    newEndDate?: Prisma.SortOrder;
    justification?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsufructHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    previousEndDate?: Prisma.SortOrder;
    newEndDate?: Prisma.SortOrder;
    justification?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsufructHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    previousEndDate?: Prisma.SortOrder;
    newEndDate?: Prisma.SortOrder;
    justification?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsufructHistoryCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutCreatedByInput, Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput> | Prisma.UsufructHistoryCreateWithoutCreatedByInput[] | Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.UsufructHistoryCreateOrConnectWithoutCreatedByInput | Prisma.UsufructHistoryCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.UsufructHistoryCreateManyCreatedByInputEnvelope;
    connect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
};
export type UsufructHistoryUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutCreatedByInput, Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput> | Prisma.UsufructHistoryCreateWithoutCreatedByInput[] | Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.UsufructHistoryCreateOrConnectWithoutCreatedByInput | Prisma.UsufructHistoryCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.UsufructHistoryCreateManyCreatedByInputEnvelope;
    connect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
};
export type UsufructHistoryUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutCreatedByInput, Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput> | Prisma.UsufructHistoryCreateWithoutCreatedByInput[] | Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.UsufructHistoryCreateOrConnectWithoutCreatedByInput | Prisma.UsufructHistoryCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.UsufructHistoryUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.UsufructHistoryUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.UsufructHistoryCreateManyCreatedByInputEnvelope;
    set?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    disconnect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    delete?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    connect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    update?: Prisma.UsufructHistoryUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.UsufructHistoryUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.UsufructHistoryUpdateManyWithWhereWithoutCreatedByInput | Prisma.UsufructHistoryUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.UsufructHistoryScalarWhereInput | Prisma.UsufructHistoryScalarWhereInput[];
};
export type UsufructHistoryUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutCreatedByInput, Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput> | Prisma.UsufructHistoryCreateWithoutCreatedByInput[] | Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.UsufructHistoryCreateOrConnectWithoutCreatedByInput | Prisma.UsufructHistoryCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.UsufructHistoryUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.UsufructHistoryUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.UsufructHistoryCreateManyCreatedByInputEnvelope;
    set?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    disconnect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    delete?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    connect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    update?: Prisma.UsufructHistoryUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.UsufructHistoryUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.UsufructHistoryUpdateManyWithWhereWithoutCreatedByInput | Prisma.UsufructHistoryUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.UsufructHistoryScalarWhereInput | Prisma.UsufructHistoryScalarWhereInput[];
};
export type UsufructHistoryCreateNestedManyWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutOperationInput, Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput> | Prisma.UsufructHistoryCreateWithoutOperationInput[] | Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.UsufructHistoryCreateOrConnectWithoutOperationInput | Prisma.UsufructHistoryCreateOrConnectWithoutOperationInput[];
    createMany?: Prisma.UsufructHistoryCreateManyOperationInputEnvelope;
    connect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
};
export type UsufructHistoryUncheckedCreateNestedManyWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutOperationInput, Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput> | Prisma.UsufructHistoryCreateWithoutOperationInput[] | Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.UsufructHistoryCreateOrConnectWithoutOperationInput | Prisma.UsufructHistoryCreateOrConnectWithoutOperationInput[];
    createMany?: Prisma.UsufructHistoryCreateManyOperationInputEnvelope;
    connect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
};
export type UsufructHistoryUpdateManyWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutOperationInput, Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput> | Prisma.UsufructHistoryCreateWithoutOperationInput[] | Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.UsufructHistoryCreateOrConnectWithoutOperationInput | Prisma.UsufructHistoryCreateOrConnectWithoutOperationInput[];
    upsert?: Prisma.UsufructHistoryUpsertWithWhereUniqueWithoutOperationInput | Prisma.UsufructHistoryUpsertWithWhereUniqueWithoutOperationInput[];
    createMany?: Prisma.UsufructHistoryCreateManyOperationInputEnvelope;
    set?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    disconnect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    delete?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    connect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    update?: Prisma.UsufructHistoryUpdateWithWhereUniqueWithoutOperationInput | Prisma.UsufructHistoryUpdateWithWhereUniqueWithoutOperationInput[];
    updateMany?: Prisma.UsufructHistoryUpdateManyWithWhereWithoutOperationInput | Prisma.UsufructHistoryUpdateManyWithWhereWithoutOperationInput[];
    deleteMany?: Prisma.UsufructHistoryScalarWhereInput | Prisma.UsufructHistoryScalarWhereInput[];
};
export type UsufructHistoryUncheckedUpdateManyWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutOperationInput, Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput> | Prisma.UsufructHistoryCreateWithoutOperationInput[] | Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.UsufructHistoryCreateOrConnectWithoutOperationInput | Prisma.UsufructHistoryCreateOrConnectWithoutOperationInput[];
    upsert?: Prisma.UsufructHistoryUpsertWithWhereUniqueWithoutOperationInput | Prisma.UsufructHistoryUpsertWithWhereUniqueWithoutOperationInput[];
    createMany?: Prisma.UsufructHistoryCreateManyOperationInputEnvelope;
    set?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    disconnect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    delete?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    connect?: Prisma.UsufructHistoryWhereUniqueInput | Prisma.UsufructHistoryWhereUniqueInput[];
    update?: Prisma.UsufructHistoryUpdateWithWhereUniqueWithoutOperationInput | Prisma.UsufructHistoryUpdateWithWhereUniqueWithoutOperationInput[];
    updateMany?: Prisma.UsufructHistoryUpdateManyWithWhereWithoutOperationInput | Prisma.UsufructHistoryUpdateManyWithWhereWithoutOperationInput[];
    deleteMany?: Prisma.UsufructHistoryScalarWhereInput | Prisma.UsufructHistoryScalarWhereInput[];
};
export type EnumUsufructHistoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.UsufructHistoryType;
};
export type UsufructHistoryCreateWithoutCreatedByInput = {
    id?: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdAt?: Date | string;
    operation: Prisma.AssetOperationCreateNestedOneWithoutHistoriesInput;
};
export type UsufructHistoryUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    operationId: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdAt?: Date | string;
};
export type UsufructHistoryCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.UsufructHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutCreatedByInput, Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput>;
};
export type UsufructHistoryCreateManyCreatedByInputEnvelope = {
    data: Prisma.UsufructHistoryCreateManyCreatedByInput | Prisma.UsufructHistoryCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type UsufructHistoryUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.UsufructHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.UsufructHistoryUpdateWithoutCreatedByInput, Prisma.UsufructHistoryUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutCreatedByInput, Prisma.UsufructHistoryUncheckedCreateWithoutCreatedByInput>;
};
export type UsufructHistoryUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.UsufructHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.UsufructHistoryUpdateWithoutCreatedByInput, Prisma.UsufructHistoryUncheckedUpdateWithoutCreatedByInput>;
};
export type UsufructHistoryUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.UsufructHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.UsufructHistoryUpdateManyMutationInput, Prisma.UsufructHistoryUncheckedUpdateManyWithoutCreatedByInput>;
};
export type UsufructHistoryScalarWhereInput = {
    AND?: Prisma.UsufructHistoryScalarWhereInput | Prisma.UsufructHistoryScalarWhereInput[];
    OR?: Prisma.UsufructHistoryScalarWhereInput[];
    NOT?: Prisma.UsufructHistoryScalarWhereInput | Prisma.UsufructHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"UsufructHistory"> | string;
    operationId?: Prisma.StringFilter<"UsufructHistory"> | string;
    type?: Prisma.EnumUsufructHistoryTypeFilter<"UsufructHistory"> | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.DateTimeNullableFilter<"UsufructHistory"> | Date | string | null;
    newEndDate?: Prisma.DateTimeNullableFilter<"UsufructHistory"> | Date | string | null;
    justification?: Prisma.StringNullableFilter<"UsufructHistory"> | string | null;
    createdById?: Prisma.StringFilter<"UsufructHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"UsufructHistory"> | Date | string;
};
export type UsufructHistoryCreateWithoutOperationInput = {
    id?: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutUsufructHistoryCreatedInput;
};
export type UsufructHistoryUncheckedCreateWithoutOperationInput = {
    id?: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type UsufructHistoryCreateOrConnectWithoutOperationInput = {
    where: Prisma.UsufructHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutOperationInput, Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput>;
};
export type UsufructHistoryCreateManyOperationInputEnvelope = {
    data: Prisma.UsufructHistoryCreateManyOperationInput | Prisma.UsufructHistoryCreateManyOperationInput[];
    skipDuplicates?: boolean;
};
export type UsufructHistoryUpsertWithWhereUniqueWithoutOperationInput = {
    where: Prisma.UsufructHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.UsufructHistoryUpdateWithoutOperationInput, Prisma.UsufructHistoryUncheckedUpdateWithoutOperationInput>;
    create: Prisma.XOR<Prisma.UsufructHistoryCreateWithoutOperationInput, Prisma.UsufructHistoryUncheckedCreateWithoutOperationInput>;
};
export type UsufructHistoryUpdateWithWhereUniqueWithoutOperationInput = {
    where: Prisma.UsufructHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.UsufructHistoryUpdateWithoutOperationInput, Prisma.UsufructHistoryUncheckedUpdateWithoutOperationInput>;
};
export type UsufructHistoryUpdateManyWithWhereWithoutOperationInput = {
    where: Prisma.UsufructHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.UsufructHistoryUpdateManyMutationInput, Prisma.UsufructHistoryUncheckedUpdateManyWithoutOperationInput>;
};
export type UsufructHistoryCreateManyCreatedByInput = {
    id?: string;
    operationId: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdAt?: Date | string;
};
export type UsufructHistoryUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operation?: Prisma.AssetOperationUpdateOneRequiredWithoutHistoriesNestedInput;
};
export type UsufructHistoryUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsufructHistoryUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsufructHistoryCreateManyOperationInput = {
    id?: string;
    type: $Enums.UsufructHistoryType;
    previousEndDate?: Date | string | null;
    newEndDate?: Date | string | null;
    justification?: string | null;
    createdById: string;
    createdAt?: Date | string;
};
export type UsufructHistoryUpdateWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutUsufructHistoryCreatedNestedInput;
};
export type UsufructHistoryUncheckedUpdateWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsufructHistoryUncheckedUpdateManyWithoutOperationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumUsufructHistoryTypeFieldUpdateOperationsInput | $Enums.UsufructHistoryType;
    previousEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    newEndDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    justification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsufructHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    type?: boolean;
    previousEndDate?: boolean;
    newEndDate?: boolean;
    justification?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    operation?: boolean | Prisma.AssetOperationDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usufructHistory"]>;
export type UsufructHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    type?: boolean;
    previousEndDate?: boolean;
    newEndDate?: boolean;
    justification?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    operation?: boolean | Prisma.AssetOperationDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usufructHistory"]>;
export type UsufructHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    operationId?: boolean;
    type?: boolean;
    previousEndDate?: boolean;
    newEndDate?: boolean;
    justification?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    operation?: boolean | Prisma.AssetOperationDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usufructHistory"]>;
export type UsufructHistorySelectScalar = {
    id?: boolean;
    operationId?: boolean;
    type?: boolean;
    previousEndDate?: boolean;
    newEndDate?: boolean;
    justification?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
};
export type UsufructHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "operationId" | "type" | "previousEndDate" | "newEndDate" | "justification" | "createdById" | "createdAt", ExtArgs["result"]["usufructHistory"]>;
export type UsufructHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.AssetOperationDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UsufructHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.AssetOperationDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UsufructHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    operation?: boolean | Prisma.AssetOperationDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UsufructHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UsufructHistory";
    objects: {
        operation: Prisma.$AssetOperationPayload<ExtArgs>;
        createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        operationId: string;
        type: $Enums.UsufructHistoryType;
        previousEndDate: Date | null;
        newEndDate: Date | null;
        justification: string | null;
        createdById: string;
        createdAt: Date;
    }, ExtArgs["result"]["usufructHistory"]>;
    composites: {};
};
export type UsufructHistoryGetPayload<S extends boolean | null | undefined | UsufructHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload, S>;
export type UsufructHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsufructHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsufructHistoryCountAggregateInputType | true;
};
export interface UsufructHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UsufructHistory'];
        meta: {
            name: 'UsufructHistory';
        };
    };
    /**
     * Find zero or one UsufructHistory that matches the filter.
     * @param {UsufructHistoryFindUniqueArgs} args - Arguments to find a UsufructHistory
     * @example
     * // Get one UsufructHistory
     * const usufructHistory = await prisma.usufructHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsufructHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, UsufructHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsufructHistoryClient<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UsufructHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsufructHistoryFindUniqueOrThrowArgs} args - Arguments to find a UsufructHistory
     * @example
     * // Get one UsufructHistory
     * const usufructHistory = await prisma.usufructHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsufructHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsufructHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsufructHistoryClient<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UsufructHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsufructHistoryFindFirstArgs} args - Arguments to find a UsufructHistory
     * @example
     * // Get one UsufructHistory
     * const usufructHistory = await prisma.usufructHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsufructHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, UsufructHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsufructHistoryClient<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UsufructHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsufructHistoryFindFirstOrThrowArgs} args - Arguments to find a UsufructHistory
     * @example
     * // Get one UsufructHistory
     * const usufructHistory = await prisma.usufructHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsufructHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsufructHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsufructHistoryClient<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UsufructHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsufructHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsufructHistories
     * const usufructHistories = await prisma.usufructHistory.findMany()
     *
     * // Get first 10 UsufructHistories
     * const usufructHistories = await prisma.usufructHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usufructHistoryWithIdOnly = await prisma.usufructHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UsufructHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, UsufructHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UsufructHistory.
     * @param {UsufructHistoryCreateArgs} args - Arguments to create a UsufructHistory.
     * @example
     * // Create one UsufructHistory
     * const UsufructHistory = await prisma.usufructHistory.create({
     *   data: {
     *     // ... data to create a UsufructHistory
     *   }
     * })
     *
     */
    create<T extends UsufructHistoryCreateArgs>(args: Prisma.SelectSubset<T, UsufructHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__UsufructHistoryClient<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UsufructHistories.
     * @param {UsufructHistoryCreateManyArgs} args - Arguments to create many UsufructHistories.
     * @example
     * // Create many UsufructHistories
     * const usufructHistory = await prisma.usufructHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UsufructHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, UsufructHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UsufructHistories and returns the data saved in the database.
     * @param {UsufructHistoryCreateManyAndReturnArgs} args - Arguments to create many UsufructHistories.
     * @example
     * // Create many UsufructHistories
     * const usufructHistory = await prisma.usufructHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UsufructHistories and only return the `id`
     * const usufructHistoryWithIdOnly = await prisma.usufructHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UsufructHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsufructHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UsufructHistory.
     * @param {UsufructHistoryDeleteArgs} args - Arguments to delete one UsufructHistory.
     * @example
     * // Delete one UsufructHistory
     * const UsufructHistory = await prisma.usufructHistory.delete({
     *   where: {
     *     // ... filter to delete one UsufructHistory
     *   }
     * })
     *
     */
    delete<T extends UsufructHistoryDeleteArgs>(args: Prisma.SelectSubset<T, UsufructHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__UsufructHistoryClient<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UsufructHistory.
     * @param {UsufructHistoryUpdateArgs} args - Arguments to update one UsufructHistory.
     * @example
     * // Update one UsufructHistory
     * const usufructHistory = await prisma.usufructHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UsufructHistoryUpdateArgs>(args: Prisma.SelectSubset<T, UsufructHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__UsufructHistoryClient<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UsufructHistories.
     * @param {UsufructHistoryDeleteManyArgs} args - Arguments to filter UsufructHistories to delete.
     * @example
     * // Delete a few UsufructHistories
     * const { count } = await prisma.usufructHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UsufructHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsufructHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UsufructHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsufructHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsufructHistories
     * const usufructHistory = await prisma.usufructHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UsufructHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, UsufructHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UsufructHistories and returns the data updated in the database.
     * @param {UsufructHistoryUpdateManyAndReturnArgs} args - Arguments to update many UsufructHistories.
     * @example
     * // Update many UsufructHistories
     * const usufructHistory = await prisma.usufructHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UsufructHistories and only return the `id`
     * const usufructHistoryWithIdOnly = await prisma.usufructHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsufructHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsufructHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UsufructHistory.
     * @param {UsufructHistoryUpsertArgs} args - Arguments to update or create a UsufructHistory.
     * @example
     * // Update or create a UsufructHistory
     * const usufructHistory = await prisma.usufructHistory.upsert({
     *   create: {
     *     // ... data to create a UsufructHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsufructHistory we want to update
     *   }
     * })
     */
    upsert<T extends UsufructHistoryUpsertArgs>(args: Prisma.SelectSubset<T, UsufructHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__UsufructHistoryClient<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UsufructHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsufructHistoryCountArgs} args - Arguments to filter UsufructHistories to count.
     * @example
     * // Count the number of UsufructHistories
     * const count = await prisma.usufructHistory.count({
     *   where: {
     *     // ... the filter for the UsufructHistories we want to count
     *   }
     * })
    **/
    count<T extends UsufructHistoryCountArgs>(args?: Prisma.Subset<T, UsufructHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsufructHistoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UsufructHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsufructHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsufructHistoryAggregateArgs>(args: Prisma.Subset<T, UsufructHistoryAggregateArgs>): Prisma.PrismaPromise<GetUsufructHistoryAggregateType<T>>;
    /**
     * Group by UsufructHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsufructHistoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UsufructHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsufructHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: UsufructHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsufructHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsufructHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UsufructHistory model
     */
    readonly fields: UsufructHistoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UsufructHistory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UsufructHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    operation<T extends Prisma.AssetOperationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetOperationDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the UsufructHistory model
 */
export interface UsufructHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"UsufructHistory", 'String'>;
    readonly operationId: Prisma.FieldRef<"UsufructHistory", 'String'>;
    readonly type: Prisma.FieldRef<"UsufructHistory", 'UsufructHistoryType'>;
    readonly previousEndDate: Prisma.FieldRef<"UsufructHistory", 'DateTime'>;
    readonly newEndDate: Prisma.FieldRef<"UsufructHistory", 'DateTime'>;
    readonly justification: Prisma.FieldRef<"UsufructHistory", 'String'>;
    readonly createdById: Prisma.FieldRef<"UsufructHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"UsufructHistory", 'DateTime'>;
}
/**
 * UsufructHistory findUnique
 */
export type UsufructHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UsufructHistory to fetch.
     */
    where: Prisma.UsufructHistoryWhereUniqueInput;
};
/**
 * UsufructHistory findUniqueOrThrow
 */
export type UsufructHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UsufructHistory to fetch.
     */
    where: Prisma.UsufructHistoryWhereUniqueInput;
};
/**
 * UsufructHistory findFirst
 */
export type UsufructHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UsufructHistory to fetch.
     */
    where?: Prisma.UsufructHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsufructHistories to fetch.
     */
    orderBy?: Prisma.UsufructHistoryOrderByWithRelationInput | Prisma.UsufructHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UsufructHistories.
     */
    cursor?: Prisma.UsufructHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsufructHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsufructHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UsufructHistories.
     */
    distinct?: Prisma.UsufructHistoryScalarFieldEnum | Prisma.UsufructHistoryScalarFieldEnum[];
};
/**
 * UsufructHistory findFirstOrThrow
 */
export type UsufructHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UsufructHistory to fetch.
     */
    where?: Prisma.UsufructHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsufructHistories to fetch.
     */
    orderBy?: Prisma.UsufructHistoryOrderByWithRelationInput | Prisma.UsufructHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UsufructHistories.
     */
    cursor?: Prisma.UsufructHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsufructHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsufructHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UsufructHistories.
     */
    distinct?: Prisma.UsufructHistoryScalarFieldEnum | Prisma.UsufructHistoryScalarFieldEnum[];
};
/**
 * UsufructHistory findMany
 */
export type UsufructHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which UsufructHistories to fetch.
     */
    where?: Prisma.UsufructHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsufructHistories to fetch.
     */
    orderBy?: Prisma.UsufructHistoryOrderByWithRelationInput | Prisma.UsufructHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UsufructHistories.
     */
    cursor?: Prisma.UsufructHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsufructHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsufructHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UsufructHistories.
     */
    distinct?: Prisma.UsufructHistoryScalarFieldEnum | Prisma.UsufructHistoryScalarFieldEnum[];
};
/**
 * UsufructHistory create
 */
export type UsufructHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a UsufructHistory.
     */
    data: Prisma.XOR<Prisma.UsufructHistoryCreateInput, Prisma.UsufructHistoryUncheckedCreateInput>;
};
/**
 * UsufructHistory createMany
 */
export type UsufructHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsufructHistories.
     */
    data: Prisma.UsufructHistoryCreateManyInput | Prisma.UsufructHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UsufructHistory createManyAndReturn
 */
export type UsufructHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsufructHistory
     */
    select?: Prisma.UsufructHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UsufructHistory
     */
    omit?: Prisma.UsufructHistoryOmit<ExtArgs> | null;
    /**
     * The data used to create many UsufructHistories.
     */
    data: Prisma.UsufructHistoryCreateManyInput | Prisma.UsufructHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsufructHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * UsufructHistory update
 */
export type UsufructHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a UsufructHistory.
     */
    data: Prisma.XOR<Prisma.UsufructHistoryUpdateInput, Prisma.UsufructHistoryUncheckedUpdateInput>;
    /**
     * Choose, which UsufructHistory to update.
     */
    where: Prisma.UsufructHistoryWhereUniqueInput;
};
/**
 * UsufructHistory updateMany
 */
export type UsufructHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UsufructHistories.
     */
    data: Prisma.XOR<Prisma.UsufructHistoryUpdateManyMutationInput, Prisma.UsufructHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which UsufructHistories to update
     */
    where?: Prisma.UsufructHistoryWhereInput;
    /**
     * Limit how many UsufructHistories to update.
     */
    limit?: number;
};
/**
 * UsufructHistory updateManyAndReturn
 */
export type UsufructHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsufructHistory
     */
    select?: Prisma.UsufructHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UsufructHistory
     */
    omit?: Prisma.UsufructHistoryOmit<ExtArgs> | null;
    /**
     * The data used to update UsufructHistories.
     */
    data: Prisma.XOR<Prisma.UsufructHistoryUpdateManyMutationInput, Prisma.UsufructHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which UsufructHistories to update
     */
    where?: Prisma.UsufructHistoryWhereInput;
    /**
     * Limit how many UsufructHistories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UsufructHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * UsufructHistory upsert
 */
export type UsufructHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the UsufructHistory to update in case it exists.
     */
    where: Prisma.UsufructHistoryWhereUniqueInput;
    /**
     * In case the UsufructHistory found by the `where` argument doesn't exist, create a new UsufructHistory with this data.
     */
    create: Prisma.XOR<Prisma.UsufructHistoryCreateInput, Prisma.UsufructHistoryUncheckedCreateInput>;
    /**
     * In case the UsufructHistory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UsufructHistoryUpdateInput, Prisma.UsufructHistoryUncheckedUpdateInput>;
};
/**
 * UsufructHistory delete
 */
export type UsufructHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which UsufructHistory to delete.
     */
    where: Prisma.UsufructHistoryWhereUniqueInput;
};
/**
 * UsufructHistory deleteMany
 */
export type UsufructHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UsufructHistories to delete
     */
    where?: Prisma.UsufructHistoryWhereInput;
    /**
     * Limit how many UsufructHistories to delete.
     */
    limit?: number;
};
/**
 * UsufructHistory without action
 */
export type UsufructHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=UsufructHistory.d.ts.map