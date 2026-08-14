import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AssetOperation
 *
 */
export type AssetOperationModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetOperationPayload>;
export type AggregateAssetOperation = {
    _count: AssetOperationCountAggregateOutputType | null;
    _avg: AssetOperationAvgAggregateOutputType | null;
    _sum: AssetOperationSumAggregateOutputType | null;
    _min: AssetOperationMinAggregateOutputType | null;
    _max: AssetOperationMaxAggregateOutputType | null;
};
export type AssetOperationAvgAggregateOutputType = {
    quantity: number | null;
};
export type AssetOperationSumAggregateOutputType = {
    quantity: number | null;
};
export type AssetOperationMinAggregateOutputType = {
    id: string | null;
    type: $Enums.OperationType | null;
    status: $Enums.OperationStatus | null;
    assetId: string | null;
    quantity: number | null;
    operationDate: Date | null;
    observations: string | null;
    responsibleId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    purpose: string | null;
    donor: string | null;
    donationDate: Date | null;
    document: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AssetOperationMaxAggregateOutputType = {
    id: string | null;
    type: $Enums.OperationType | null;
    status: $Enums.OperationStatus | null;
    assetId: string | null;
    quantity: number | null;
    operationDate: Date | null;
    observations: string | null;
    responsibleId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    purpose: string | null;
    donor: string | null;
    donationDate: Date | null;
    document: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AssetOperationCountAggregateOutputType = {
    id: number;
    type: number;
    status: number;
    assetId: number;
    quantity: number;
    operationDate: number;
    observations: number;
    responsibleId: number;
    startDate: number;
    endDate: number;
    purpose: number;
    donor: number;
    donationDate: number;
    document: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AssetOperationAvgAggregateInputType = {
    quantity?: true;
};
export type AssetOperationSumAggregateInputType = {
    quantity?: true;
};
export type AssetOperationMinAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    assetId?: true;
    quantity?: true;
    operationDate?: true;
    observations?: true;
    responsibleId?: true;
    startDate?: true;
    endDate?: true;
    purpose?: true;
    donor?: true;
    donationDate?: true;
    document?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AssetOperationMaxAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    assetId?: true;
    quantity?: true;
    operationDate?: true;
    observations?: true;
    responsibleId?: true;
    startDate?: true;
    endDate?: true;
    purpose?: true;
    donor?: true;
    donationDate?: true;
    document?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AssetOperationCountAggregateInputType = {
    id?: true;
    type?: true;
    status?: true;
    assetId?: true;
    quantity?: true;
    operationDate?: true;
    observations?: true;
    responsibleId?: true;
    startDate?: true;
    endDate?: true;
    purpose?: true;
    donor?: true;
    donationDate?: true;
    document?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AssetOperationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AssetOperation to aggregate.
     */
    where?: Prisma.AssetOperationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AssetOperations to fetch.
     */
    orderBy?: Prisma.AssetOperationOrderByWithRelationInput | Prisma.AssetOperationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AssetOperationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AssetOperations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AssetOperations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AssetOperations
    **/
    _count?: true | AssetOperationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AssetOperationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AssetOperationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AssetOperationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AssetOperationMaxAggregateInputType;
};
export type GetAssetOperationAggregateType<T extends AssetOperationAggregateArgs> = {
    [P in keyof T & keyof AggregateAssetOperation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAssetOperation[P]> : Prisma.GetScalarType<T[P], AggregateAssetOperation[P]>;
};
export type AssetOperationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetOperationWhereInput;
    orderBy?: Prisma.AssetOperationOrderByWithAggregationInput | Prisma.AssetOperationOrderByWithAggregationInput[];
    by: Prisma.AssetOperationScalarFieldEnum[] | Prisma.AssetOperationScalarFieldEnum;
    having?: Prisma.AssetOperationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetOperationCountAggregateInputType | true;
    _avg?: AssetOperationAvgAggregateInputType;
    _sum?: AssetOperationSumAggregateInputType;
    _min?: AssetOperationMinAggregateInputType;
    _max?: AssetOperationMaxAggregateInputType;
};
export type AssetOperationGroupByOutputType = {
    id: string;
    type: $Enums.OperationType;
    status: $Enums.OperationStatus;
    assetId: string;
    quantity: number;
    operationDate: Date;
    observations: string | null;
    responsibleId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    purpose: string | null;
    donor: string | null;
    donationDate: Date | null;
    document: string | null;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AssetOperationCountAggregateOutputType | null;
    _avg: AssetOperationAvgAggregateOutputType | null;
    _sum: AssetOperationSumAggregateOutputType | null;
    _min: AssetOperationMinAggregateOutputType | null;
    _max: AssetOperationMaxAggregateOutputType | null;
};
export type GetAssetOperationGroupByPayload<T extends AssetOperationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetOperationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetOperationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetOperationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetOperationGroupByOutputType[P]>;
}>>;
export type AssetOperationWhereInput = {
    AND?: Prisma.AssetOperationWhereInput | Prisma.AssetOperationWhereInput[];
    OR?: Prisma.AssetOperationWhereInput[];
    NOT?: Prisma.AssetOperationWhereInput | Prisma.AssetOperationWhereInput[];
    id?: Prisma.StringFilter<"AssetOperation"> | string;
    type?: Prisma.EnumOperationTypeFilter<"AssetOperation"> | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFilter<"AssetOperation"> | $Enums.OperationStatus;
    assetId?: Prisma.StringFilter<"AssetOperation"> | string;
    quantity?: Prisma.IntFilter<"AssetOperation"> | number;
    operationDate?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
    observations?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    responsibleId?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    purpose?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    donor?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    donationDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    document?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    createdById?: Prisma.StringFilter<"AssetOperation"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
    responsible?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    histories?: Prisma.UsufructHistoryListRelationFilter;
};
export type AssetOperationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    operationDate?: Prisma.SortOrder;
    observations?: Prisma.SortOrderInput | Prisma.SortOrder;
    responsibleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    purpose?: Prisma.SortOrderInput | Prisma.SortOrder;
    donor?: Prisma.SortOrderInput | Prisma.SortOrder;
    donationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    document?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    asset?: Prisma.AssetOrderByWithRelationInput;
    responsible?: Prisma.UserOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    histories?: Prisma.UsufructHistoryOrderByRelationAggregateInput;
};
export type AssetOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssetOperationWhereInput | Prisma.AssetOperationWhereInput[];
    OR?: Prisma.AssetOperationWhereInput[];
    NOT?: Prisma.AssetOperationWhereInput | Prisma.AssetOperationWhereInput[];
    type?: Prisma.EnumOperationTypeFilter<"AssetOperation"> | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFilter<"AssetOperation"> | $Enums.OperationStatus;
    assetId?: Prisma.StringFilter<"AssetOperation"> | string;
    quantity?: Prisma.IntFilter<"AssetOperation"> | number;
    operationDate?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
    observations?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    responsibleId?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    purpose?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    donor?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    donationDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    document?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    createdById?: Prisma.StringFilter<"AssetOperation"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
    responsible?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    histories?: Prisma.UsufructHistoryListRelationFilter;
}, "id">;
export type AssetOperationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    operationDate?: Prisma.SortOrder;
    observations?: Prisma.SortOrderInput | Prisma.SortOrder;
    responsibleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    purpose?: Prisma.SortOrderInput | Prisma.SortOrder;
    donor?: Prisma.SortOrderInput | Prisma.SortOrder;
    donationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    document?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AssetOperationCountOrderByAggregateInput;
    _avg?: Prisma.AssetOperationAvgOrderByAggregateInput;
    _max?: Prisma.AssetOperationMaxOrderByAggregateInput;
    _min?: Prisma.AssetOperationMinOrderByAggregateInput;
    _sum?: Prisma.AssetOperationSumOrderByAggregateInput;
};
export type AssetOperationScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetOperationScalarWhereWithAggregatesInput | Prisma.AssetOperationScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetOperationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetOperationScalarWhereWithAggregatesInput | Prisma.AssetOperationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AssetOperation"> | string;
    type?: Prisma.EnumOperationTypeWithAggregatesFilter<"AssetOperation"> | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusWithAggregatesFilter<"AssetOperation"> | $Enums.OperationStatus;
    assetId?: Prisma.StringWithAggregatesFilter<"AssetOperation"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"AssetOperation"> | number;
    operationDate?: Prisma.DateTimeWithAggregatesFilter<"AssetOperation"> | Date | string;
    observations?: Prisma.StringNullableWithAggregatesFilter<"AssetOperation"> | string | null;
    responsibleId?: Prisma.StringNullableWithAggregatesFilter<"AssetOperation"> | string | null;
    startDate?: Prisma.DateTimeNullableWithAggregatesFilter<"AssetOperation"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"AssetOperation"> | Date | string | null;
    purpose?: Prisma.StringNullableWithAggregatesFilter<"AssetOperation"> | string | null;
    donor?: Prisma.StringNullableWithAggregatesFilter<"AssetOperation"> | string | null;
    donationDate?: Prisma.DateTimeNullableWithAggregatesFilter<"AssetOperation"> | Date | string | null;
    document?: Prisma.StringNullableWithAggregatesFilter<"AssetOperation"> | string | null;
    createdById?: Prisma.StringWithAggregatesFilter<"AssetOperation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AssetOperation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AssetOperation"> | Date | string;
};
export type AssetOperationCreateInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutOperationsInput;
    responsible?: Prisma.UserCreateNestedOneWithoutOperationResponsibleInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedOperationsInput;
    histories?: Prisma.UsufructHistoryCreateNestedManyWithoutOperationInput;
};
export type AssetOperationUncheckedCreateInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    assetId: string;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    responsibleId?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    histories?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutOperationInput;
};
export type AssetOperationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutOperationsNestedInput;
    responsible?: Prisma.UserUpdateOneWithoutOperationResponsibleNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedOperationsNestedInput;
    histories?: Prisma.UsufructHistoryUpdateManyWithoutOperationNestedInput;
};
export type AssetOperationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    histories?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutOperationNestedInput;
};
export type AssetOperationCreateManyInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    assetId: string;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    responsibleId?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetOperationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetOperationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetOperationListRelationFilter = {
    every?: Prisma.AssetOperationWhereInput;
    some?: Prisma.AssetOperationWhereInput;
    none?: Prisma.AssetOperationWhereInput;
};
export type AssetOperationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetOperationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    operationDate?: Prisma.SortOrder;
    observations?: Prisma.SortOrder;
    responsibleId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    donor?: Prisma.SortOrder;
    donationDate?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetOperationAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type AssetOperationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    operationDate?: Prisma.SortOrder;
    observations?: Prisma.SortOrder;
    responsibleId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    donor?: Prisma.SortOrder;
    donationDate?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetOperationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    assetId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    operationDate?: Prisma.SortOrder;
    observations?: Prisma.SortOrder;
    responsibleId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    purpose?: Prisma.SortOrder;
    donor?: Prisma.SortOrder;
    donationDate?: Prisma.SortOrder;
    document?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetOperationSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type AssetOperationScalarRelationFilter = {
    is?: Prisma.AssetOperationWhereInput;
    isNot?: Prisma.AssetOperationWhereInput;
};
export type AssetOperationCreateNestedManyWithoutResponsibleInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutResponsibleInput, Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput> | Prisma.AssetOperationCreateWithoutResponsibleInput[] | Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutResponsibleInput | Prisma.AssetOperationCreateOrConnectWithoutResponsibleInput[];
    createMany?: Prisma.AssetOperationCreateManyResponsibleInputEnvelope;
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
};
export type AssetOperationCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutCreatedByInput, Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput> | Prisma.AssetOperationCreateWithoutCreatedByInput[] | Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutCreatedByInput | Prisma.AssetOperationCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.AssetOperationCreateManyCreatedByInputEnvelope;
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
};
export type AssetOperationUncheckedCreateNestedManyWithoutResponsibleInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutResponsibleInput, Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput> | Prisma.AssetOperationCreateWithoutResponsibleInput[] | Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutResponsibleInput | Prisma.AssetOperationCreateOrConnectWithoutResponsibleInput[];
    createMany?: Prisma.AssetOperationCreateManyResponsibleInputEnvelope;
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
};
export type AssetOperationUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutCreatedByInput, Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput> | Prisma.AssetOperationCreateWithoutCreatedByInput[] | Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutCreatedByInput | Prisma.AssetOperationCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.AssetOperationCreateManyCreatedByInputEnvelope;
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
};
export type AssetOperationUpdateManyWithoutResponsibleNestedInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutResponsibleInput, Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput> | Prisma.AssetOperationCreateWithoutResponsibleInput[] | Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutResponsibleInput | Prisma.AssetOperationCreateOrConnectWithoutResponsibleInput[];
    upsert?: Prisma.AssetOperationUpsertWithWhereUniqueWithoutResponsibleInput | Prisma.AssetOperationUpsertWithWhereUniqueWithoutResponsibleInput[];
    createMany?: Prisma.AssetOperationCreateManyResponsibleInputEnvelope;
    set?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    disconnect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    delete?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    update?: Prisma.AssetOperationUpdateWithWhereUniqueWithoutResponsibleInput | Prisma.AssetOperationUpdateWithWhereUniqueWithoutResponsibleInput[];
    updateMany?: Prisma.AssetOperationUpdateManyWithWhereWithoutResponsibleInput | Prisma.AssetOperationUpdateManyWithWhereWithoutResponsibleInput[];
    deleteMany?: Prisma.AssetOperationScalarWhereInput | Prisma.AssetOperationScalarWhereInput[];
};
export type AssetOperationUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutCreatedByInput, Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput> | Prisma.AssetOperationCreateWithoutCreatedByInput[] | Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutCreatedByInput | Prisma.AssetOperationCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.AssetOperationUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.AssetOperationUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.AssetOperationCreateManyCreatedByInputEnvelope;
    set?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    disconnect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    delete?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    update?: Prisma.AssetOperationUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.AssetOperationUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.AssetOperationUpdateManyWithWhereWithoutCreatedByInput | Prisma.AssetOperationUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.AssetOperationScalarWhereInput | Prisma.AssetOperationScalarWhereInput[];
};
export type AssetOperationUncheckedUpdateManyWithoutResponsibleNestedInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutResponsibleInput, Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput> | Prisma.AssetOperationCreateWithoutResponsibleInput[] | Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutResponsibleInput | Prisma.AssetOperationCreateOrConnectWithoutResponsibleInput[];
    upsert?: Prisma.AssetOperationUpsertWithWhereUniqueWithoutResponsibleInput | Prisma.AssetOperationUpsertWithWhereUniqueWithoutResponsibleInput[];
    createMany?: Prisma.AssetOperationCreateManyResponsibleInputEnvelope;
    set?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    disconnect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    delete?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    update?: Prisma.AssetOperationUpdateWithWhereUniqueWithoutResponsibleInput | Prisma.AssetOperationUpdateWithWhereUniqueWithoutResponsibleInput[];
    updateMany?: Prisma.AssetOperationUpdateManyWithWhereWithoutResponsibleInput | Prisma.AssetOperationUpdateManyWithWhereWithoutResponsibleInput[];
    deleteMany?: Prisma.AssetOperationScalarWhereInput | Prisma.AssetOperationScalarWhereInput[];
};
export type AssetOperationUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutCreatedByInput, Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput> | Prisma.AssetOperationCreateWithoutCreatedByInput[] | Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutCreatedByInput | Prisma.AssetOperationCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.AssetOperationUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.AssetOperationUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.AssetOperationCreateManyCreatedByInputEnvelope;
    set?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    disconnect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    delete?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    update?: Prisma.AssetOperationUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.AssetOperationUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.AssetOperationUpdateManyWithWhereWithoutCreatedByInput | Prisma.AssetOperationUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.AssetOperationScalarWhereInput | Prisma.AssetOperationScalarWhereInput[];
};
export type AssetOperationCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutAssetInput, Prisma.AssetOperationUncheckedCreateWithoutAssetInput> | Prisma.AssetOperationCreateWithoutAssetInput[] | Prisma.AssetOperationUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutAssetInput | Prisma.AssetOperationCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AssetOperationCreateManyAssetInputEnvelope;
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
};
export type AssetOperationUncheckedCreateNestedManyWithoutAssetInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutAssetInput, Prisma.AssetOperationUncheckedCreateWithoutAssetInput> | Prisma.AssetOperationCreateWithoutAssetInput[] | Prisma.AssetOperationUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutAssetInput | Prisma.AssetOperationCreateOrConnectWithoutAssetInput[];
    createMany?: Prisma.AssetOperationCreateManyAssetInputEnvelope;
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
};
export type AssetOperationUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutAssetInput, Prisma.AssetOperationUncheckedCreateWithoutAssetInput> | Prisma.AssetOperationCreateWithoutAssetInput[] | Prisma.AssetOperationUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutAssetInput | Prisma.AssetOperationCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AssetOperationUpsertWithWhereUniqueWithoutAssetInput | Prisma.AssetOperationUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AssetOperationCreateManyAssetInputEnvelope;
    set?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    disconnect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    delete?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    update?: Prisma.AssetOperationUpdateWithWhereUniqueWithoutAssetInput | Prisma.AssetOperationUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AssetOperationUpdateManyWithWhereWithoutAssetInput | Prisma.AssetOperationUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AssetOperationScalarWhereInput | Prisma.AssetOperationScalarWhereInput[];
};
export type AssetOperationUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutAssetInput, Prisma.AssetOperationUncheckedCreateWithoutAssetInput> | Prisma.AssetOperationCreateWithoutAssetInput[] | Prisma.AssetOperationUncheckedCreateWithoutAssetInput[];
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutAssetInput | Prisma.AssetOperationCreateOrConnectWithoutAssetInput[];
    upsert?: Prisma.AssetOperationUpsertWithWhereUniqueWithoutAssetInput | Prisma.AssetOperationUpsertWithWhereUniqueWithoutAssetInput[];
    createMany?: Prisma.AssetOperationCreateManyAssetInputEnvelope;
    set?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    disconnect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    delete?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    connect?: Prisma.AssetOperationWhereUniqueInput | Prisma.AssetOperationWhereUniqueInput[];
    update?: Prisma.AssetOperationUpdateWithWhereUniqueWithoutAssetInput | Prisma.AssetOperationUpdateWithWhereUniqueWithoutAssetInput[];
    updateMany?: Prisma.AssetOperationUpdateManyWithWhereWithoutAssetInput | Prisma.AssetOperationUpdateManyWithWhereWithoutAssetInput[];
    deleteMany?: Prisma.AssetOperationScalarWhereInput | Prisma.AssetOperationScalarWhereInput[];
};
export type EnumOperationTypeFieldUpdateOperationsInput = {
    set?: $Enums.OperationType;
};
export type EnumOperationStatusFieldUpdateOperationsInput = {
    set?: $Enums.OperationStatus;
};
export type AssetOperationCreateNestedOneWithoutHistoriesInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutHistoriesInput, Prisma.AssetOperationUncheckedCreateWithoutHistoriesInput>;
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutHistoriesInput;
    connect?: Prisma.AssetOperationWhereUniqueInput;
};
export type AssetOperationUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: Prisma.XOR<Prisma.AssetOperationCreateWithoutHistoriesInput, Prisma.AssetOperationUncheckedCreateWithoutHistoriesInput>;
    connectOrCreate?: Prisma.AssetOperationCreateOrConnectWithoutHistoriesInput;
    upsert?: Prisma.AssetOperationUpsertWithoutHistoriesInput;
    connect?: Prisma.AssetOperationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetOperationUpdateToOneWithWhereWithoutHistoriesInput, Prisma.AssetOperationUpdateWithoutHistoriesInput>, Prisma.AssetOperationUncheckedUpdateWithoutHistoriesInput>;
};
export type AssetOperationCreateWithoutResponsibleInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutOperationsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedOperationsInput;
    histories?: Prisma.UsufructHistoryCreateNestedManyWithoutOperationInput;
};
export type AssetOperationUncheckedCreateWithoutResponsibleInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    assetId: string;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    histories?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutOperationInput;
};
export type AssetOperationCreateOrConnectWithoutResponsibleInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetOperationCreateWithoutResponsibleInput, Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput>;
};
export type AssetOperationCreateManyResponsibleInputEnvelope = {
    data: Prisma.AssetOperationCreateManyResponsibleInput | Prisma.AssetOperationCreateManyResponsibleInput[];
    skipDuplicates?: boolean;
};
export type AssetOperationCreateWithoutCreatedByInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutOperationsInput;
    responsible?: Prisma.UserCreateNestedOneWithoutOperationResponsibleInput;
    histories?: Prisma.UsufructHistoryCreateNestedManyWithoutOperationInput;
};
export type AssetOperationUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    assetId: string;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    responsibleId?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    histories?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutOperationInput;
};
export type AssetOperationCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetOperationCreateWithoutCreatedByInput, Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput>;
};
export type AssetOperationCreateManyCreatedByInputEnvelope = {
    data: Prisma.AssetOperationCreateManyCreatedByInput | Prisma.AssetOperationCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type AssetOperationUpsertWithWhereUniqueWithoutResponsibleInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetOperationUpdateWithoutResponsibleInput, Prisma.AssetOperationUncheckedUpdateWithoutResponsibleInput>;
    create: Prisma.XOR<Prisma.AssetOperationCreateWithoutResponsibleInput, Prisma.AssetOperationUncheckedCreateWithoutResponsibleInput>;
};
export type AssetOperationUpdateWithWhereUniqueWithoutResponsibleInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetOperationUpdateWithoutResponsibleInput, Prisma.AssetOperationUncheckedUpdateWithoutResponsibleInput>;
};
export type AssetOperationUpdateManyWithWhereWithoutResponsibleInput = {
    where: Prisma.AssetOperationScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetOperationUpdateManyMutationInput, Prisma.AssetOperationUncheckedUpdateManyWithoutResponsibleInput>;
};
export type AssetOperationScalarWhereInput = {
    AND?: Prisma.AssetOperationScalarWhereInput | Prisma.AssetOperationScalarWhereInput[];
    OR?: Prisma.AssetOperationScalarWhereInput[];
    NOT?: Prisma.AssetOperationScalarWhereInput | Prisma.AssetOperationScalarWhereInput[];
    id?: Prisma.StringFilter<"AssetOperation"> | string;
    type?: Prisma.EnumOperationTypeFilter<"AssetOperation"> | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFilter<"AssetOperation"> | $Enums.OperationStatus;
    assetId?: Prisma.StringFilter<"AssetOperation"> | string;
    quantity?: Prisma.IntFilter<"AssetOperation"> | number;
    operationDate?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
    observations?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    responsibleId?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    purpose?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    donor?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    donationDate?: Prisma.DateTimeNullableFilter<"AssetOperation"> | Date | string | null;
    document?: Prisma.StringNullableFilter<"AssetOperation"> | string | null;
    createdById?: Prisma.StringFilter<"AssetOperation"> | string;
    createdAt?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AssetOperation"> | Date | string;
};
export type AssetOperationUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetOperationUpdateWithoutCreatedByInput, Prisma.AssetOperationUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.AssetOperationCreateWithoutCreatedByInput, Prisma.AssetOperationUncheckedCreateWithoutCreatedByInput>;
};
export type AssetOperationUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetOperationUpdateWithoutCreatedByInput, Prisma.AssetOperationUncheckedUpdateWithoutCreatedByInput>;
};
export type AssetOperationUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.AssetOperationScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetOperationUpdateManyMutationInput, Prisma.AssetOperationUncheckedUpdateManyWithoutCreatedByInput>;
};
export type AssetOperationCreateWithoutAssetInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responsible?: Prisma.UserCreateNestedOneWithoutOperationResponsibleInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedOperationsInput;
    histories?: Prisma.UsufructHistoryCreateNestedManyWithoutOperationInput;
};
export type AssetOperationUncheckedCreateWithoutAssetInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    responsibleId?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    histories?: Prisma.UsufructHistoryUncheckedCreateNestedManyWithoutOperationInput;
};
export type AssetOperationCreateOrConnectWithoutAssetInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetOperationCreateWithoutAssetInput, Prisma.AssetOperationUncheckedCreateWithoutAssetInput>;
};
export type AssetOperationCreateManyAssetInputEnvelope = {
    data: Prisma.AssetOperationCreateManyAssetInput | Prisma.AssetOperationCreateManyAssetInput[];
    skipDuplicates?: boolean;
};
export type AssetOperationUpsertWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetOperationUpdateWithoutAssetInput, Prisma.AssetOperationUncheckedUpdateWithoutAssetInput>;
    create: Prisma.XOR<Prisma.AssetOperationCreateWithoutAssetInput, Prisma.AssetOperationUncheckedCreateWithoutAssetInput>;
};
export type AssetOperationUpdateWithWhereUniqueWithoutAssetInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetOperationUpdateWithoutAssetInput, Prisma.AssetOperationUncheckedUpdateWithoutAssetInput>;
};
export type AssetOperationUpdateManyWithWhereWithoutAssetInput = {
    where: Prisma.AssetOperationScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetOperationUpdateManyMutationInput, Prisma.AssetOperationUncheckedUpdateManyWithoutAssetInput>;
};
export type AssetOperationCreateWithoutHistoriesInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    asset: Prisma.AssetCreateNestedOneWithoutOperationsInput;
    responsible?: Prisma.UserCreateNestedOneWithoutOperationResponsibleInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedOperationsInput;
};
export type AssetOperationUncheckedCreateWithoutHistoriesInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    assetId: string;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    responsibleId?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetOperationCreateOrConnectWithoutHistoriesInput = {
    where: Prisma.AssetOperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetOperationCreateWithoutHistoriesInput, Prisma.AssetOperationUncheckedCreateWithoutHistoriesInput>;
};
export type AssetOperationUpsertWithoutHistoriesInput = {
    update: Prisma.XOR<Prisma.AssetOperationUpdateWithoutHistoriesInput, Prisma.AssetOperationUncheckedUpdateWithoutHistoriesInput>;
    create: Prisma.XOR<Prisma.AssetOperationCreateWithoutHistoriesInput, Prisma.AssetOperationUncheckedCreateWithoutHistoriesInput>;
    where?: Prisma.AssetOperationWhereInput;
};
export type AssetOperationUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: Prisma.AssetOperationWhereInput;
    data: Prisma.XOR<Prisma.AssetOperationUpdateWithoutHistoriesInput, Prisma.AssetOperationUncheckedUpdateWithoutHistoriesInput>;
};
export type AssetOperationUpdateWithoutHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutOperationsNestedInput;
    responsible?: Prisma.UserUpdateOneWithoutOperationResponsibleNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedOperationsNestedInput;
};
export type AssetOperationUncheckedUpdateWithoutHistoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetOperationCreateManyResponsibleInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    assetId: string;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetOperationCreateManyCreatedByInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    assetId: string;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    responsibleId?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetOperationUpdateWithoutResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutOperationsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedOperationsNestedInput;
    histories?: Prisma.UsufructHistoryUpdateManyWithoutOperationNestedInput;
};
export type AssetOperationUncheckedUpdateWithoutResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    histories?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutOperationNestedInput;
};
export type AssetOperationUncheckedUpdateManyWithoutResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetOperationUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asset?: Prisma.AssetUpdateOneRequiredWithoutOperationsNestedInput;
    responsible?: Prisma.UserUpdateOneWithoutOperationResponsibleNestedInput;
    histories?: Prisma.UsufructHistoryUpdateManyWithoutOperationNestedInput;
};
export type AssetOperationUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    histories?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutOperationNestedInput;
};
export type AssetOperationUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    assetId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetOperationCreateManyAssetInput = {
    id?: string;
    type: $Enums.OperationType;
    status?: $Enums.OperationStatus;
    quantity: number;
    operationDate: Date | string;
    observations?: string | null;
    responsibleId?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    purpose?: string | null;
    donor?: string | null;
    donationDate?: Date | string | null;
    document?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetOperationUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsible?: Prisma.UserUpdateOneWithoutOperationResponsibleNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedOperationsNestedInput;
    histories?: Prisma.UsufructHistoryUpdateManyWithoutOperationNestedInput;
};
export type AssetOperationUncheckedUpdateWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    histories?: Prisma.UsufructHistoryUncheckedUpdateManyWithoutOperationNestedInput;
};
export type AssetOperationUncheckedUpdateManyWithoutAssetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType;
    status?: Prisma.EnumOperationStatusFieldUpdateOperationsInput | $Enums.OperationStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    operationDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observations?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    purpose?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    document?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AssetOperationCountOutputType
 */
export type AssetOperationCountOutputType = {
    histories: number;
};
export type AssetOperationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    histories?: boolean | AssetOperationCountOutputTypeCountHistoriesArgs;
};
/**
 * AssetOperationCountOutputType without action
 */
export type AssetOperationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetOperationCountOutputType
     */
    select?: Prisma.AssetOperationCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AssetOperationCountOutputType without action
 */
export type AssetOperationCountOutputTypeCountHistoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsufructHistoryWhereInput;
};
export type AssetOperationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    assetId?: boolean;
    quantity?: boolean;
    operationDate?: boolean;
    observations?: boolean;
    responsibleId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    purpose?: boolean;
    donor?: boolean;
    donationDate?: boolean;
    document?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.AssetOperation$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    histories?: boolean | Prisma.AssetOperation$historiesArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetOperationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetOperation"]>;
export type AssetOperationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    assetId?: boolean;
    quantity?: boolean;
    operationDate?: boolean;
    observations?: boolean;
    responsibleId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    purpose?: boolean;
    donor?: boolean;
    donationDate?: boolean;
    document?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.AssetOperation$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetOperation"]>;
export type AssetOperationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    status?: boolean;
    assetId?: boolean;
    quantity?: boolean;
    operationDate?: boolean;
    observations?: boolean;
    responsibleId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    purpose?: boolean;
    donor?: boolean;
    donationDate?: boolean;
    document?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.AssetOperation$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["assetOperation"]>;
export type AssetOperationSelectScalar = {
    id?: boolean;
    type?: boolean;
    status?: boolean;
    assetId?: boolean;
    quantity?: boolean;
    operationDate?: boolean;
    observations?: boolean;
    responsibleId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    purpose?: boolean;
    donor?: boolean;
    donationDate?: boolean;
    document?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AssetOperationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "status" | "assetId" | "quantity" | "operationDate" | "observations" | "responsibleId" | "startDate" | "endDate" | "purpose" | "donor" | "donationDate" | "document" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["assetOperation"]>;
export type AssetOperationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.AssetOperation$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    histories?: boolean | Prisma.AssetOperation$historiesArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetOperationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssetOperationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.AssetOperation$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AssetOperationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.AssetOperation$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AssetOperationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AssetOperation";
    objects: {
        asset: Prisma.$AssetPayload<ExtArgs>;
        responsible: Prisma.$UserPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        histories: Prisma.$UsufructHistoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        type: $Enums.OperationType;
        status: $Enums.OperationStatus;
        assetId: string;
        quantity: number;
        operationDate: Date;
        observations: string | null;
        responsibleId: string | null;
        startDate: Date | null;
        endDate: Date | null;
        purpose: string | null;
        donor: string | null;
        donationDate: Date | null;
        document: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["assetOperation"]>;
    composites: {};
};
export type AssetOperationGetPayload<S extends boolean | null | undefined | AssetOperationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload, S>;
export type AssetOperationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetOperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetOperationCountAggregateInputType | true;
};
export interface AssetOperationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AssetOperation'];
        meta: {
            name: 'AssetOperation';
        };
    };
    /**
     * Find zero or one AssetOperation that matches the filter.
     * @param {AssetOperationFindUniqueArgs} args - Arguments to find a AssetOperation
     * @example
     * // Get one AssetOperation
     * const assetOperation = await prisma.assetOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetOperationFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetOperationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AssetOperation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetOperationFindUniqueOrThrowArgs} args - Arguments to find a AssetOperation
     * @example
     * // Get one AssetOperation
     * const assetOperation = await prisma.assetOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetOperationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetOperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AssetOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetOperationFindFirstArgs} args - Arguments to find a AssetOperation
     * @example
     * // Get one AssetOperation
     * const assetOperation = await prisma.assetOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetOperationFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetOperationFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AssetOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetOperationFindFirstOrThrowArgs} args - Arguments to find a AssetOperation
     * @example
     * // Get one AssetOperation
     * const assetOperation = await prisma.assetOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetOperationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetOperationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AssetOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetOperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetOperations
     * const assetOperations = await prisma.assetOperation.findMany()
     *
     * // Get first 10 AssetOperations
     * const assetOperations = await prisma.assetOperation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const assetOperationWithIdOnly = await prisma.assetOperation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AssetOperationFindManyArgs>(args?: Prisma.SelectSubset<T, AssetOperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AssetOperation.
     * @param {AssetOperationCreateArgs} args - Arguments to create a AssetOperation.
     * @example
     * // Create one AssetOperation
     * const AssetOperation = await prisma.assetOperation.create({
     *   data: {
     *     // ... data to create a AssetOperation
     *   }
     * })
     *
     */
    create<T extends AssetOperationCreateArgs>(args: Prisma.SelectSubset<T, AssetOperationCreateArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AssetOperations.
     * @param {AssetOperationCreateManyArgs} args - Arguments to create many AssetOperations.
     * @example
     * // Create many AssetOperations
     * const assetOperation = await prisma.assetOperation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AssetOperationCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetOperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AssetOperations and returns the data saved in the database.
     * @param {AssetOperationCreateManyAndReturnArgs} args - Arguments to create many AssetOperations.
     * @example
     * // Create many AssetOperations
     * const assetOperation = await prisma.assetOperation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AssetOperations and only return the `id`
     * const assetOperationWithIdOnly = await prisma.assetOperation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AssetOperationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetOperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AssetOperation.
     * @param {AssetOperationDeleteArgs} args - Arguments to delete one AssetOperation.
     * @example
     * // Delete one AssetOperation
     * const AssetOperation = await prisma.assetOperation.delete({
     *   where: {
     *     // ... filter to delete one AssetOperation
     *   }
     * })
     *
     */
    delete<T extends AssetOperationDeleteArgs>(args: Prisma.SelectSubset<T, AssetOperationDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AssetOperation.
     * @param {AssetOperationUpdateArgs} args - Arguments to update one AssetOperation.
     * @example
     * // Update one AssetOperation
     * const assetOperation = await prisma.assetOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AssetOperationUpdateArgs>(args: Prisma.SelectSubset<T, AssetOperationUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AssetOperations.
     * @param {AssetOperationDeleteManyArgs} args - Arguments to filter AssetOperations to delete.
     * @example
     * // Delete a few AssetOperations
     * const { count } = await prisma.assetOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AssetOperationDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetOperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AssetOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetOperations
     * const assetOperation = await prisma.assetOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AssetOperationUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetOperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AssetOperations and returns the data updated in the database.
     * @param {AssetOperationUpdateManyAndReturnArgs} args - Arguments to update many AssetOperations.
     * @example
     * // Update many AssetOperations
     * const assetOperation = await prisma.assetOperation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AssetOperations and only return the `id`
     * const assetOperationWithIdOnly = await prisma.assetOperation.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssetOperationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetOperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AssetOperation.
     * @param {AssetOperationUpsertArgs} args - Arguments to update or create a AssetOperation.
     * @example
     * // Update or create a AssetOperation
     * const assetOperation = await prisma.assetOperation.upsert({
     *   create: {
     *     // ... data to create a AssetOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetOperation we want to update
     *   }
     * })
     */
    upsert<T extends AssetOperationUpsertArgs>(args: Prisma.SelectSubset<T, AssetOperationUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetOperationClient<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AssetOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetOperationCountArgs} args - Arguments to filter AssetOperations to count.
     * @example
     * // Count the number of AssetOperations
     * const count = await prisma.assetOperation.count({
     *   where: {
     *     // ... the filter for the AssetOperations we want to count
     *   }
     * })
    **/
    count<T extends AssetOperationCountArgs>(args?: Prisma.Subset<T, AssetOperationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetOperationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AssetOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetOperationAggregateArgs>(args: Prisma.Subset<T, AssetOperationAggregateArgs>): Prisma.PrismaPromise<GetAssetOperationAggregateType<T>>;
    /**
     * Group by AssetOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetOperationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AssetOperationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetOperationGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetOperationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AssetOperation model
     */
    readonly fields: AssetOperationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AssetOperation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AssetOperationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    responsible<T extends Prisma.AssetOperation$responsibleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetOperation$responsibleArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    histories<T extends Prisma.AssetOperation$historiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AssetOperation$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsufructHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the AssetOperation model
 */
export interface AssetOperationFieldRefs {
    readonly id: Prisma.FieldRef<"AssetOperation", 'String'>;
    readonly type: Prisma.FieldRef<"AssetOperation", 'OperationType'>;
    readonly status: Prisma.FieldRef<"AssetOperation", 'OperationStatus'>;
    readonly assetId: Prisma.FieldRef<"AssetOperation", 'String'>;
    readonly quantity: Prisma.FieldRef<"AssetOperation", 'Int'>;
    readonly operationDate: Prisma.FieldRef<"AssetOperation", 'DateTime'>;
    readonly observations: Prisma.FieldRef<"AssetOperation", 'String'>;
    readonly responsibleId: Prisma.FieldRef<"AssetOperation", 'String'>;
    readonly startDate: Prisma.FieldRef<"AssetOperation", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"AssetOperation", 'DateTime'>;
    readonly purpose: Prisma.FieldRef<"AssetOperation", 'String'>;
    readonly donor: Prisma.FieldRef<"AssetOperation", 'String'>;
    readonly donationDate: Prisma.FieldRef<"AssetOperation", 'DateTime'>;
    readonly document: Prisma.FieldRef<"AssetOperation", 'String'>;
    readonly createdById: Prisma.FieldRef<"AssetOperation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AssetOperation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AssetOperation", 'DateTime'>;
}
/**
 * AssetOperation findUnique
 */
export type AssetOperationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AssetOperation to fetch.
     */
    where: Prisma.AssetOperationWhereUniqueInput;
};
/**
 * AssetOperation findUniqueOrThrow
 */
export type AssetOperationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AssetOperation to fetch.
     */
    where: Prisma.AssetOperationWhereUniqueInput;
};
/**
 * AssetOperation findFirst
 */
export type AssetOperationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AssetOperation to fetch.
     */
    where?: Prisma.AssetOperationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AssetOperations to fetch.
     */
    orderBy?: Prisma.AssetOperationOrderByWithRelationInput | Prisma.AssetOperationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AssetOperations.
     */
    cursor?: Prisma.AssetOperationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AssetOperations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AssetOperations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AssetOperations.
     */
    distinct?: Prisma.AssetOperationScalarFieldEnum | Prisma.AssetOperationScalarFieldEnum[];
};
/**
 * AssetOperation findFirstOrThrow
 */
export type AssetOperationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AssetOperation to fetch.
     */
    where?: Prisma.AssetOperationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AssetOperations to fetch.
     */
    orderBy?: Prisma.AssetOperationOrderByWithRelationInput | Prisma.AssetOperationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AssetOperations.
     */
    cursor?: Prisma.AssetOperationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AssetOperations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AssetOperations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AssetOperations.
     */
    distinct?: Prisma.AssetOperationScalarFieldEnum | Prisma.AssetOperationScalarFieldEnum[];
};
/**
 * AssetOperation findMany
 */
export type AssetOperationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AssetOperations to fetch.
     */
    where?: Prisma.AssetOperationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AssetOperations to fetch.
     */
    orderBy?: Prisma.AssetOperationOrderByWithRelationInput | Prisma.AssetOperationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AssetOperations.
     */
    cursor?: Prisma.AssetOperationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AssetOperations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AssetOperations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AssetOperations.
     */
    distinct?: Prisma.AssetOperationScalarFieldEnum | Prisma.AssetOperationScalarFieldEnum[];
};
/**
 * AssetOperation create
 */
export type AssetOperationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a AssetOperation.
     */
    data: Prisma.XOR<Prisma.AssetOperationCreateInput, Prisma.AssetOperationUncheckedCreateInput>;
};
/**
 * AssetOperation createMany
 */
export type AssetOperationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetOperations.
     */
    data: Prisma.AssetOperationCreateManyInput | Prisma.AssetOperationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AssetOperation createManyAndReturn
 */
export type AssetOperationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetOperation
     */
    select?: Prisma.AssetOperationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AssetOperation
     */
    omit?: Prisma.AssetOperationOmit<ExtArgs> | null;
    /**
     * The data used to create many AssetOperations.
     */
    data: Prisma.AssetOperationCreateManyInput | Prisma.AssetOperationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssetOperationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AssetOperation update
 */
export type AssetOperationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a AssetOperation.
     */
    data: Prisma.XOR<Prisma.AssetOperationUpdateInput, Prisma.AssetOperationUncheckedUpdateInput>;
    /**
     * Choose, which AssetOperation to update.
     */
    where: Prisma.AssetOperationWhereUniqueInput;
};
/**
 * AssetOperation updateMany
 */
export type AssetOperationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetOperations.
     */
    data: Prisma.XOR<Prisma.AssetOperationUpdateManyMutationInput, Prisma.AssetOperationUncheckedUpdateManyInput>;
    /**
     * Filter which AssetOperations to update
     */
    where?: Prisma.AssetOperationWhereInput;
    /**
     * Limit how many AssetOperations to update.
     */
    limit?: number;
};
/**
 * AssetOperation updateManyAndReturn
 */
export type AssetOperationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetOperation
     */
    select?: Prisma.AssetOperationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AssetOperation
     */
    omit?: Prisma.AssetOperationOmit<ExtArgs> | null;
    /**
     * The data used to update AssetOperations.
     */
    data: Prisma.XOR<Prisma.AssetOperationUpdateManyMutationInput, Prisma.AssetOperationUncheckedUpdateManyInput>;
    /**
     * Filter which AssetOperations to update
     */
    where?: Prisma.AssetOperationWhereInput;
    /**
     * Limit how many AssetOperations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssetOperationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AssetOperation upsert
 */
export type AssetOperationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the AssetOperation to update in case it exists.
     */
    where: Prisma.AssetOperationWhereUniqueInput;
    /**
     * In case the AssetOperation found by the `where` argument doesn't exist, create a new AssetOperation with this data.
     */
    create: Prisma.XOR<Prisma.AssetOperationCreateInput, Prisma.AssetOperationUncheckedCreateInput>;
    /**
     * In case the AssetOperation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AssetOperationUpdateInput, Prisma.AssetOperationUncheckedUpdateInput>;
};
/**
 * AssetOperation delete
 */
export type AssetOperationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which AssetOperation to delete.
     */
    where: Prisma.AssetOperationWhereUniqueInput;
};
/**
 * AssetOperation deleteMany
 */
export type AssetOperationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AssetOperations to delete
     */
    where?: Prisma.AssetOperationWhereInput;
    /**
     * Limit how many AssetOperations to delete.
     */
    limit?: number;
};
/**
 * AssetOperation.responsible
 */
export type AssetOperation$responsibleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.UserWhereInput;
};
/**
 * AssetOperation.histories
 */
export type AssetOperation$historiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AssetOperation without action
 */
export type AssetOperationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=AssetOperation.d.ts.map