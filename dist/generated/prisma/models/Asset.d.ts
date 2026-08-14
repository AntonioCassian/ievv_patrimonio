import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Asset
 *
 */
export type AssetModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetPayload>;
export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type AssetAvgAggregateOutputType = {
    value: runtime.Decimal | null;
    quantity: number | null;
    quantityAvailable: number | null;
};
export type AssetSumAggregateOutputType = {
    value: runtime.Decimal | null;
    quantity: number | null;
    quantityAvailable: number | null;
};
export type AssetMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    category: string | null;
    type: string | null;
    value: runtime.Decimal | null;
    acquisitionDate: Date | null;
    imageUrl: string | null;
    status: $Enums.AssetStatus | null;
    quantity: number | null;
    quantityAvailable: number | null;
    departmentId: string | null;
    responsibleId: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AssetMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    category: string | null;
    type: string | null;
    value: runtime.Decimal | null;
    acquisitionDate: Date | null;
    imageUrl: string | null;
    status: $Enums.AssetStatus | null;
    quantity: number | null;
    quantityAvailable: number | null;
    departmentId: string | null;
    responsibleId: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AssetCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    description: number;
    category: number;
    type: number;
    value: number;
    acquisitionDate: number;
    imageUrl: number;
    status: number;
    quantity: number;
    quantityAvailable: number;
    departmentId: number;
    responsibleId: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AssetAvgAggregateInputType = {
    value?: true;
    quantity?: true;
    quantityAvailable?: true;
};
export type AssetSumAggregateInputType = {
    value?: true;
    quantity?: true;
    quantityAvailable?: true;
};
export type AssetMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    category?: true;
    type?: true;
    value?: true;
    acquisitionDate?: true;
    imageUrl?: true;
    status?: true;
    quantity?: true;
    quantityAvailable?: true;
    departmentId?: true;
    responsibleId?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AssetMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    category?: true;
    type?: true;
    value?: true;
    acquisitionDate?: true;
    imageUrl?: true;
    status?: true;
    quantity?: true;
    quantityAvailable?: true;
    departmentId?: true;
    responsibleId?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AssetCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    category?: true;
    type?: true;
    value?: true;
    acquisitionDate?: true;
    imageUrl?: true;
    status?: true;
    quantity?: true;
    quantityAvailable?: true;
    departmentId?: true;
    responsibleId?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: Prisma.AssetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Assets to fetch.
     */
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AssetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Assets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType;
};
export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
    [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAsset[P]> : Prisma.GetScalarType<T[P], AggregateAsset[P]>;
};
export type AssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithAggregationInput | Prisma.AssetOrderByWithAggregationInput[];
    by: Prisma.AssetScalarFieldEnum[] | Prisma.AssetScalarFieldEnum;
    having?: Prisma.AssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetCountAggregateInputType | true;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type AssetGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    description: string | null;
    category: string;
    type: string;
    value: runtime.Decimal | null;
    acquisitionDate: Date | null;
    imageUrl: string | null;
    status: $Enums.AssetStatus;
    quantity: number;
    quantityAvailable: number;
    departmentId: string;
    responsibleId: string | null;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]>;
}>>;
export type AssetWhereInput = {
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    id?: Prisma.StringFilter<"Asset"> | string;
    code?: Prisma.StringFilter<"Asset"> | string;
    name?: Prisma.StringFilter<"Asset"> | string;
    description?: Prisma.StringNullableFilter<"Asset"> | string | null;
    category?: Prisma.StringFilter<"Asset"> | string;
    type?: Prisma.StringFilter<"Asset"> | string;
    value?: Prisma.DecimalNullableFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.DateTimeNullableFilter<"Asset"> | Date | string | null;
    imageUrl?: Prisma.StringNullableFilter<"Asset"> | string | null;
    status?: Prisma.EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus;
    quantity?: Prisma.IntFilter<"Asset"> | number;
    quantityAvailable?: Prisma.IntFilter<"Asset"> | number;
    departmentId?: Prisma.StringFilter<"Asset"> | string;
    responsibleId?: Prisma.StringNullableFilter<"Asset"> | string | null;
    createdById?: Prisma.StringFilter<"Asset"> | string;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    responsible?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    loans?: Prisma.LoanListRelationFilter;
    operations?: Prisma.AssetOperationListRelationFilter;
};
export type AssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    quantityAvailable?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    responsibleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    responsible?: Prisma.UserOrderByWithRelationInput;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    loans?: Prisma.LoanOrderByRelationAggregateInput;
    operations?: Prisma.AssetOperationOrderByRelationAggregateInput;
};
export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    name?: Prisma.StringFilter<"Asset"> | string;
    description?: Prisma.StringNullableFilter<"Asset"> | string | null;
    category?: Prisma.StringFilter<"Asset"> | string;
    type?: Prisma.StringFilter<"Asset"> | string;
    value?: Prisma.DecimalNullableFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.DateTimeNullableFilter<"Asset"> | Date | string | null;
    imageUrl?: Prisma.StringNullableFilter<"Asset"> | string | null;
    status?: Prisma.EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus;
    quantity?: Prisma.IntFilter<"Asset"> | number;
    quantityAvailable?: Prisma.IntFilter<"Asset"> | number;
    departmentId?: Prisma.StringFilter<"Asset"> | string;
    responsibleId?: Prisma.StringNullableFilter<"Asset"> | string | null;
    createdById?: Prisma.StringFilter<"Asset"> | string;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    responsible?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    loans?: Prisma.LoanListRelationFilter;
    operations?: Prisma.AssetOperationListRelationFilter;
}, "id" | "code">;
export type AssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    quantityAvailable?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    responsibleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AssetCountOrderByAggregateInput;
    _avg?: Prisma.AssetAvgOrderByAggregateInput;
    _max?: Prisma.AssetMaxOrderByAggregateInput;
    _min?: Prisma.AssetMinOrderByAggregateInput;
    _sum?: Prisma.AssetSumOrderByAggregateInput;
};
export type AssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    category?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    value?: Prisma.DecimalNullableWithAggregatesFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Asset"> | Date | string | null;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    status?: Prisma.EnumAssetStatusWithAggregatesFilter<"Asset"> | $Enums.AssetStatus;
    quantity?: Prisma.IntWithAggregatesFilter<"Asset"> | number;
    quantityAvailable?: Prisma.IntWithAggregatesFilter<"Asset"> | number;
    departmentId?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    responsibleId?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    createdById?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string;
};
export type AssetCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: Prisma.DepartmentCreateNestedOneWithoutAssetsInput;
    responsible?: Prisma.UserCreateNestedOneWithoutResponsibleAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAssetsInput;
    loans?: Prisma.LoanCreateNestedManyWithoutAssetInput;
    operations?: Prisma.AssetOperationCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    departmentId: string;
    responsibleId?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutAssetInput;
    operations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutAssetsNestedInput;
    responsible?: Prisma.UserUpdateOneWithoutResponsibleAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAssetsNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutAssetNestedInput;
    operations?: Prisma.AssetOperationUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutAssetNestedInput;
    operations?: Prisma.AssetOperationUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    departmentId: string;
    responsibleId?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetListRelationFilter = {
    every?: Prisma.AssetWhereInput;
    some?: Prisma.AssetWhereInput;
    none?: Prisma.AssetWhereInput;
};
export type AssetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    quantityAvailable?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    responsibleId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    quantityAvailable?: Prisma.SortOrder;
};
export type AssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    quantityAvailable?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    responsibleId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    quantityAvailable?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    responsibleId?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AssetSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    quantityAvailable?: Prisma.SortOrder;
};
export type AssetScalarRelationFilter = {
    is?: Prisma.AssetWhereInput;
    isNot?: Prisma.AssetWhereInput;
};
export type AssetCreateNestedManyWithoutResponsibleInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutResponsibleInput, Prisma.AssetUncheckedCreateWithoutResponsibleInput> | Prisma.AssetCreateWithoutResponsibleInput[] | Prisma.AssetUncheckedCreateWithoutResponsibleInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutResponsibleInput | Prisma.AssetCreateOrConnectWithoutResponsibleInput[];
    createMany?: Prisma.AssetCreateManyResponsibleInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCreatedByInput, Prisma.AssetUncheckedCreateWithoutCreatedByInput> | Prisma.AssetCreateWithoutCreatedByInput[] | Prisma.AssetUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCreatedByInput | Prisma.AssetCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.AssetCreateManyCreatedByInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUncheckedCreateNestedManyWithoutResponsibleInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutResponsibleInput, Prisma.AssetUncheckedCreateWithoutResponsibleInput> | Prisma.AssetCreateWithoutResponsibleInput[] | Prisma.AssetUncheckedCreateWithoutResponsibleInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutResponsibleInput | Prisma.AssetCreateOrConnectWithoutResponsibleInput[];
    createMany?: Prisma.AssetCreateManyResponsibleInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCreatedByInput, Prisma.AssetUncheckedCreateWithoutCreatedByInput> | Prisma.AssetCreateWithoutCreatedByInput[] | Prisma.AssetUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCreatedByInput | Prisma.AssetCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.AssetCreateManyCreatedByInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUpdateManyWithoutResponsibleNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutResponsibleInput, Prisma.AssetUncheckedCreateWithoutResponsibleInput> | Prisma.AssetCreateWithoutResponsibleInput[] | Prisma.AssetUncheckedCreateWithoutResponsibleInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutResponsibleInput | Prisma.AssetCreateOrConnectWithoutResponsibleInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutResponsibleInput | Prisma.AssetUpsertWithWhereUniqueWithoutResponsibleInput[];
    createMany?: Prisma.AssetCreateManyResponsibleInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutResponsibleInput | Prisma.AssetUpdateWithWhereUniqueWithoutResponsibleInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutResponsibleInput | Prisma.AssetUpdateManyWithWhereWithoutResponsibleInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCreatedByInput, Prisma.AssetUncheckedCreateWithoutCreatedByInput> | Prisma.AssetCreateWithoutCreatedByInput[] | Prisma.AssetUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCreatedByInput | Prisma.AssetCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.AssetUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.AssetCreateManyCreatedByInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.AssetUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutCreatedByInput | Prisma.AssetUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUncheckedUpdateManyWithoutResponsibleNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutResponsibleInput, Prisma.AssetUncheckedCreateWithoutResponsibleInput> | Prisma.AssetCreateWithoutResponsibleInput[] | Prisma.AssetUncheckedCreateWithoutResponsibleInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutResponsibleInput | Prisma.AssetCreateOrConnectWithoutResponsibleInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutResponsibleInput | Prisma.AssetUpsertWithWhereUniqueWithoutResponsibleInput[];
    createMany?: Prisma.AssetCreateManyResponsibleInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutResponsibleInput | Prisma.AssetUpdateWithWhereUniqueWithoutResponsibleInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutResponsibleInput | Prisma.AssetUpdateManyWithWhereWithoutResponsibleInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutCreatedByInput, Prisma.AssetUncheckedCreateWithoutCreatedByInput> | Prisma.AssetCreateWithoutCreatedByInput[] | Prisma.AssetUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutCreatedByInput | Prisma.AssetCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.AssetUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.AssetCreateManyCreatedByInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.AssetUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutCreatedByInput | Prisma.AssetUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutDepartmentInput, Prisma.AssetUncheckedCreateWithoutDepartmentInput> | Prisma.AssetCreateWithoutDepartmentInput[] | Prisma.AssetUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutDepartmentInput | Prisma.AssetCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.AssetCreateManyDepartmentInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutDepartmentInput, Prisma.AssetUncheckedCreateWithoutDepartmentInput> | Prisma.AssetCreateWithoutDepartmentInput[] | Prisma.AssetUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutDepartmentInput | Prisma.AssetCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.AssetCreateManyDepartmentInputEnvelope;
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
};
export type AssetUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutDepartmentInput, Prisma.AssetUncheckedCreateWithoutDepartmentInput> | Prisma.AssetCreateWithoutDepartmentInput[] | Prisma.AssetUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutDepartmentInput | Prisma.AssetCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.AssetUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.AssetCreateManyDepartmentInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.AssetUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutDepartmentInput | Prisma.AssetUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type AssetUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutDepartmentInput, Prisma.AssetUncheckedCreateWithoutDepartmentInput> | Prisma.AssetCreateWithoutDepartmentInput[] | Prisma.AssetUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutDepartmentInput | Prisma.AssetCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.AssetUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.AssetCreateManyDepartmentInputEnvelope;
    set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[];
    update?: Prisma.AssetUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.AssetUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.AssetUpdateManyWithWhereWithoutDepartmentInput | Prisma.AssetUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EnumAssetStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssetStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AssetCreateNestedOneWithoutLoansInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutLoansInput, Prisma.AssetUncheckedCreateWithoutLoansInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutLoansInput;
    connect?: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateOneRequiredWithoutLoansNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutLoansInput, Prisma.AssetUncheckedCreateWithoutLoansInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutLoansInput;
    upsert?: Prisma.AssetUpsertWithoutLoansInput;
    connect?: Prisma.AssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutLoansInput, Prisma.AssetUpdateWithoutLoansInput>, Prisma.AssetUncheckedUpdateWithoutLoansInput>;
};
export type AssetCreateNestedOneWithoutOperationsInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutOperationsInput, Prisma.AssetUncheckedCreateWithoutOperationsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutOperationsInput;
    connect?: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateOneRequiredWithoutOperationsNestedInput = {
    create?: Prisma.XOR<Prisma.AssetCreateWithoutOperationsInput, Prisma.AssetUncheckedCreateWithoutOperationsInput>;
    connectOrCreate?: Prisma.AssetCreateOrConnectWithoutOperationsInput;
    upsert?: Prisma.AssetUpsertWithoutOperationsInput;
    connect?: Prisma.AssetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutOperationsInput, Prisma.AssetUpdateWithoutOperationsInput>, Prisma.AssetUncheckedUpdateWithoutOperationsInput>;
};
export type AssetCreateWithoutResponsibleInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: Prisma.DepartmentCreateNestedOneWithoutAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAssetsInput;
    loans?: Prisma.LoanCreateNestedManyWithoutAssetInput;
    operations?: Prisma.AssetOperationCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutResponsibleInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    departmentId: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutAssetInput;
    operations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutResponsibleInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutResponsibleInput, Prisma.AssetUncheckedCreateWithoutResponsibleInput>;
};
export type AssetCreateManyResponsibleInputEnvelope = {
    data: Prisma.AssetCreateManyResponsibleInput | Prisma.AssetCreateManyResponsibleInput[];
    skipDuplicates?: boolean;
};
export type AssetCreateWithoutCreatedByInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: Prisma.DepartmentCreateNestedOneWithoutAssetsInput;
    responsible?: Prisma.UserCreateNestedOneWithoutResponsibleAssetsInput;
    loans?: Prisma.LoanCreateNestedManyWithoutAssetInput;
    operations?: Prisma.AssetOperationCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    departmentId: string;
    responsibleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutAssetInput;
    operations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutCreatedByInput, Prisma.AssetUncheckedCreateWithoutCreatedByInput>;
};
export type AssetCreateManyCreatedByInputEnvelope = {
    data: Prisma.AssetCreateManyCreatedByInput | Prisma.AssetCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type AssetUpsertWithWhereUniqueWithoutResponsibleInput = {
    where: Prisma.AssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetUpdateWithoutResponsibleInput, Prisma.AssetUncheckedUpdateWithoutResponsibleInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutResponsibleInput, Prisma.AssetUncheckedCreateWithoutResponsibleInput>;
};
export type AssetUpdateWithWhereUniqueWithoutResponsibleInput = {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutResponsibleInput, Prisma.AssetUncheckedUpdateWithoutResponsibleInput>;
};
export type AssetUpdateManyWithWhereWithoutResponsibleInput = {
    where: Prisma.AssetScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutResponsibleInput>;
};
export type AssetScalarWhereInput = {
    AND?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
    OR?: Prisma.AssetScalarWhereInput[];
    NOT?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[];
    id?: Prisma.StringFilter<"Asset"> | string;
    code?: Prisma.StringFilter<"Asset"> | string;
    name?: Prisma.StringFilter<"Asset"> | string;
    description?: Prisma.StringNullableFilter<"Asset"> | string | null;
    category?: Prisma.StringFilter<"Asset"> | string;
    type?: Prisma.StringFilter<"Asset"> | string;
    value?: Prisma.DecimalNullableFilter<"Asset"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.DateTimeNullableFilter<"Asset"> | Date | string | null;
    imageUrl?: Prisma.StringNullableFilter<"Asset"> | string | null;
    status?: Prisma.EnumAssetStatusFilter<"Asset"> | $Enums.AssetStatus;
    quantity?: Prisma.IntFilter<"Asset"> | number;
    quantityAvailable?: Prisma.IntFilter<"Asset"> | number;
    departmentId?: Prisma.StringFilter<"Asset"> | string;
    responsibleId?: Prisma.StringNullableFilter<"Asset"> | string | null;
    createdById?: Prisma.StringFilter<"Asset"> | string;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
};
export type AssetUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.AssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetUpdateWithoutCreatedByInput, Prisma.AssetUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutCreatedByInput, Prisma.AssetUncheckedCreateWithoutCreatedByInput>;
};
export type AssetUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutCreatedByInput, Prisma.AssetUncheckedUpdateWithoutCreatedByInput>;
};
export type AssetUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.AssetScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutCreatedByInput>;
};
export type AssetCreateWithoutDepartmentInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    responsible?: Prisma.UserCreateNestedOneWithoutResponsibleAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAssetsInput;
    loans?: Prisma.LoanCreateNestedManyWithoutAssetInput;
    operations?: Prisma.AssetOperationCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    responsibleId?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutAssetInput;
    operations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutDepartmentInput, Prisma.AssetUncheckedCreateWithoutDepartmentInput>;
};
export type AssetCreateManyDepartmentInputEnvelope = {
    data: Prisma.AssetCreateManyDepartmentInput | Prisma.AssetCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type AssetUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.AssetWhereUniqueInput;
    update: Prisma.XOR<Prisma.AssetUpdateWithoutDepartmentInput, Prisma.AssetUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutDepartmentInput, Prisma.AssetUncheckedCreateWithoutDepartmentInput>;
};
export type AssetUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.AssetWhereUniqueInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutDepartmentInput, Prisma.AssetUncheckedUpdateWithoutDepartmentInput>;
};
export type AssetUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.AssetScalarWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutDepartmentInput>;
};
export type AssetCreateWithoutLoansInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: Prisma.DepartmentCreateNestedOneWithoutAssetsInput;
    responsible?: Prisma.UserCreateNestedOneWithoutResponsibleAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAssetsInput;
    operations?: Prisma.AssetOperationCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutLoansInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    departmentId: string;
    responsibleId?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    operations?: Prisma.AssetOperationUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutLoansInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutLoansInput, Prisma.AssetUncheckedCreateWithoutLoansInput>;
};
export type AssetUpsertWithoutLoansInput = {
    update: Prisma.XOR<Prisma.AssetUpdateWithoutLoansInput, Prisma.AssetUncheckedUpdateWithoutLoansInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutLoansInput, Prisma.AssetUncheckedCreateWithoutLoansInput>;
    where?: Prisma.AssetWhereInput;
};
export type AssetUpdateToOneWithWhereWithoutLoansInput = {
    where?: Prisma.AssetWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutLoansInput, Prisma.AssetUncheckedUpdateWithoutLoansInput>;
};
export type AssetUpdateWithoutLoansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutAssetsNestedInput;
    responsible?: Prisma.UserUpdateOneWithoutResponsibleAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAssetsNestedInput;
    operations?: Prisma.AssetOperationUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutLoansInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    operations?: Prisma.AssetOperationUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateWithoutOperationsInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: Prisma.DepartmentCreateNestedOneWithoutAssetsInput;
    responsible?: Prisma.UserCreateNestedOneWithoutResponsibleAssetsInput;
    createdBy: Prisma.UserCreateNestedOneWithoutCreatedAssetsInput;
    loans?: Prisma.LoanCreateNestedManyWithoutAssetInput;
};
export type AssetUncheckedCreateWithoutOperationsInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    departmentId: string;
    responsibleId?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loans?: Prisma.LoanUncheckedCreateNestedManyWithoutAssetInput;
};
export type AssetCreateOrConnectWithoutOperationsInput = {
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateWithoutOperationsInput, Prisma.AssetUncheckedCreateWithoutOperationsInput>;
};
export type AssetUpsertWithoutOperationsInput = {
    update: Prisma.XOR<Prisma.AssetUpdateWithoutOperationsInput, Prisma.AssetUncheckedUpdateWithoutOperationsInput>;
    create: Prisma.XOR<Prisma.AssetCreateWithoutOperationsInput, Prisma.AssetUncheckedCreateWithoutOperationsInput>;
    where?: Prisma.AssetWhereInput;
};
export type AssetUpdateToOneWithWhereWithoutOperationsInput = {
    where?: Prisma.AssetWhereInput;
    data: Prisma.XOR<Prisma.AssetUpdateWithoutOperationsInput, Prisma.AssetUncheckedUpdateWithoutOperationsInput>;
};
export type AssetUpdateWithoutOperationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutAssetsNestedInput;
    responsible?: Prisma.UserUpdateOneWithoutResponsibleAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAssetsNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutOperationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetCreateManyResponsibleInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    departmentId: string;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetCreateManyCreatedByInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    departmentId: string;
    responsibleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateWithoutResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAssetsNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutAssetNestedInput;
    operations?: Prisma.AssetOperationUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutAssetNestedInput;
    operations?: Prisma.AssetOperationUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateManyWithoutResponsibleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutAssetsNestedInput;
    responsible?: Prisma.UserUpdateOneWithoutResponsibleAssetsNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutAssetNestedInput;
    operations?: Prisma.AssetOperationUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutAssetNestedInput;
    operations?: Prisma.AssetOperationUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCreateManyDepartmentInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category: string;
    type: string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Date | string | null;
    imageUrl?: string | null;
    status?: $Enums.AssetStatus;
    quantity?: number;
    quantityAvailable?: number;
    responsibleId?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AssetUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    responsible?: Prisma.UserUpdateOneWithoutResponsibleAssetsNestedInput;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutCreatedAssetsNestedInput;
    loans?: Prisma.LoanUpdateManyWithoutAssetNestedInput;
    operations?: Prisma.AssetOperationUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loans?: Prisma.LoanUncheckedUpdateManyWithoutAssetNestedInput;
    operations?: Prisma.AssetOperationUncheckedUpdateManyWithoutAssetNestedInput;
};
export type AssetUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumAssetStatusFieldUpdateOperationsInput | $Enums.AssetStatus;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityAvailable?: Prisma.IntFieldUpdateOperationsInput | number;
    responsibleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AssetCountOutputType
 */
export type AssetCountOutputType = {
    loans: number;
    operations: number;
};
export type AssetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    loans?: boolean | AssetCountOutputTypeCountLoansArgs;
    operations?: boolean | AssetCountOutputTypeCountOperationsArgs;
};
/**
 * AssetCountOutputType without action
 */
export type AssetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: Prisma.AssetCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AssetCountOutputType without action
 */
export type AssetCountOutputTypeCountLoansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoanWhereInput;
};
/**
 * AssetCountOutputType without action
 */
export type AssetCountOutputTypeCountOperationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetOperationWhereInput;
};
export type AssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    type?: boolean;
    value?: boolean;
    acquisitionDate?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    quantity?: boolean;
    quantityAvailable?: boolean;
    departmentId?: boolean;
    responsibleId?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.Asset$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    loans?: boolean | Prisma.Asset$loansArgs<ExtArgs>;
    operations?: boolean | Prisma.Asset$operationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    type?: boolean;
    value?: boolean;
    acquisitionDate?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    quantity?: boolean;
    quantityAvailable?: boolean;
    departmentId?: boolean;
    responsibleId?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.Asset$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    type?: boolean;
    value?: boolean;
    acquisitionDate?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    quantity?: boolean;
    quantityAvailable?: boolean;
    departmentId?: boolean;
    responsibleId?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.Asset$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    type?: boolean;
    value?: boolean;
    acquisitionDate?: boolean;
    imageUrl?: boolean;
    status?: boolean;
    quantity?: boolean;
    quantityAvailable?: boolean;
    departmentId?: boolean;
    responsibleId?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "description" | "category" | "type" | "value" | "acquisitionDate" | "imageUrl" | "status" | "quantity" | "quantityAvailable" | "departmentId" | "responsibleId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["asset"]>;
export type AssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.Asset$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    loans?: boolean | Prisma.Asset$loansArgs<ExtArgs>;
    operations?: boolean | Prisma.Asset$operationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AssetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.Asset$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    responsible?: boolean | Prisma.Asset$responsibleArgs<ExtArgs>;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Asset";
    objects: {
        department: Prisma.$DepartmentPayload<ExtArgs>;
        responsible: Prisma.$UserPayload<ExtArgs> | null;
        createdBy: Prisma.$UserPayload<ExtArgs>;
        loans: Prisma.$LoanPayload<ExtArgs>[];
        operations: Prisma.$AssetOperationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string;
        type: string;
        value: runtime.Decimal | null;
        acquisitionDate: Date | null;
        imageUrl: string | null;
        status: $Enums.AssetStatus;
        quantity: number;
        quantityAvailable: number;
        departmentId: string;
        responsibleId: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["asset"]>;
    composites: {};
};
export type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetPayload, S>;
export type AssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetCountAggregateInputType | true;
};
export interface AssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Asset'];
        meta: {
            name: 'Asset';
        };
    };
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     *
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AssetFindManyArgs>(args?: Prisma.SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     *
     */
    create<T extends AssetCreateArgs>(args: Prisma.SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AssetCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     *
     */
    delete<T extends AssetDeleteArgs>(args: Prisma.SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AssetUpdateArgs>(args: Prisma.SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AssetUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.updateManyAndReturn({
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
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: Prisma.SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(args?: Prisma.Subset<T, AssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Prisma.Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>;
    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Asset model
     */
    readonly fields: AssetFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Asset.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    department<T extends Prisma.DepartmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepartmentDefaultArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    responsible<T extends Prisma.Asset$responsibleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$responsibleArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    loans<T extends Prisma.Asset$loansArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$loansArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    operations<T extends Prisma.Asset$operationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$operationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Asset model
 */
export interface AssetFieldRefs {
    readonly id: Prisma.FieldRef<"Asset", 'String'>;
    readonly code: Prisma.FieldRef<"Asset", 'String'>;
    readonly name: Prisma.FieldRef<"Asset", 'String'>;
    readonly description: Prisma.FieldRef<"Asset", 'String'>;
    readonly category: Prisma.FieldRef<"Asset", 'String'>;
    readonly type: Prisma.FieldRef<"Asset", 'String'>;
    readonly value: Prisma.FieldRef<"Asset", 'Decimal'>;
    readonly acquisitionDate: Prisma.FieldRef<"Asset", 'DateTime'>;
    readonly imageUrl: Prisma.FieldRef<"Asset", 'String'>;
    readonly status: Prisma.FieldRef<"Asset", 'AssetStatus'>;
    readonly quantity: Prisma.FieldRef<"Asset", 'Int'>;
    readonly quantityAvailable: Prisma.FieldRef<"Asset", 'Int'>;
    readonly departmentId: Prisma.FieldRef<"Asset", 'String'>;
    readonly responsibleId: Prisma.FieldRef<"Asset", 'String'>;
    readonly createdById: Prisma.FieldRef<"Asset", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Asset", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Asset", 'DateTime'>;
}
/**
 * Asset findUnique
 */
export type AssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Asset to fetch.
     */
    where: Prisma.AssetWhereUniqueInput;
};
/**
 * Asset findUniqueOrThrow
 */
export type AssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Asset to fetch.
     */
    where: Prisma.AssetWhereUniqueInput;
};
/**
 * Asset findFirst
 */
export type AssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Asset to fetch.
     */
    where?: Prisma.AssetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Assets to fetch.
     */
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Assets.
     */
    cursor?: Prisma.AssetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Assets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Assets.
     */
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
/**
 * Asset findFirstOrThrow
 */
export type AssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Asset to fetch.
     */
    where?: Prisma.AssetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Assets to fetch.
     */
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Assets.
     */
    cursor?: Prisma.AssetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Assets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Assets.
     */
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
/**
 * Asset findMany
 */
export type AssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Assets to fetch.
     */
    where?: Prisma.AssetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Assets to fetch.
     */
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Assets.
     */
    cursor?: Prisma.AssetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Assets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Assets.
     */
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
/**
 * Asset create
 */
export type AssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Asset.
     */
    data: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
};
/**
 * Asset createMany
 */
export type AssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Asset createManyAndReturn
 */
export type AssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: Prisma.AssetSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Asset
     */
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    /**
     * The data used to create many Assets.
     */
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssetIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Asset update
 */
export type AssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Asset.
     */
    data: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
    /**
     * Choose, which Asset to update.
     */
    where: Prisma.AssetWhereUniqueInput;
};
/**
 * Asset updateMany
 */
export type AssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    /**
     * Filter which Assets to update
     */
    where?: Prisma.AssetWhereInput;
    /**
     * Limit how many Assets to update.
     */
    limit?: number;
};
/**
 * Asset updateManyAndReturn
 */
export type AssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: Prisma.AssetSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Asset
     */
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    /**
     * The data used to update Assets.
     */
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    /**
     * Filter which Assets to update
     */
    where?: Prisma.AssetWhereInput;
    /**
     * Limit how many Assets to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AssetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Asset upsert
 */
export type AssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: Prisma.AssetWhereUniqueInput;
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
};
/**
 * Asset delete
 */
export type AssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Asset to delete.
     */
    where: Prisma.AssetWhereUniqueInput;
};
/**
 * Asset deleteMany
 */
export type AssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: Prisma.AssetWhereInput;
    /**
     * Limit how many Assets to delete.
     */
    limit?: number;
};
/**
 * Asset.responsible
 */
export type Asset$responsibleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Asset.loans
 */
export type Asset$loansArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Asset.operations
 */
export type Asset$operationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Asset without action
 */
export type AssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Asset.d.ts.map