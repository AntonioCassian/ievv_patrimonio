import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: 'User';
    readonly Department: 'Department';
    readonly PasswordReset: 'PasswordReset';
    readonly Asset: 'Asset';
    readonly Loan: 'Loan';
    readonly AssetOperation: 'AssetOperation';
    readonly UsufructHistory: 'UsufructHistory';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly email: 'email';
    readonly phone: 'phone';
    readonly password: 'password';
    readonly role: 'role';
    readonly status: 'status';
    readonly temporaryPassword: 'temporaryPassword';
    readonly lastLoginAt: 'lastLoginAt';
    readonly departmentId: 'departmentId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const DepartmentScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly status: 'status';
    readonly leaderId: 'leaderId';
    readonly createdById: 'createdById';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const PasswordResetScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly tokenHash: 'tokenHash';
    readonly expiresAt: 'expiresAt';
    readonly usedAt: 'usedAt';
    readonly createdAt: 'createdAt';
};
export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum];
export declare const AssetScalarFieldEnum: {
    readonly id: 'id';
    readonly code: 'code';
    readonly name: 'name';
    readonly description: 'description';
    readonly category: 'category';
    readonly type: 'type';
    readonly value: 'value';
    readonly acquisitionDate: 'acquisitionDate';
    readonly imageUrl: 'imageUrl';
    readonly status: 'status';
    readonly quantity: 'quantity';
    readonly quantityAvailable: 'quantityAvailable';
    readonly departmentId: 'departmentId';
    readonly responsibleId: 'responsibleId';
    readonly createdById: 'createdById';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum];
export declare const LoanScalarFieldEnum: {
    readonly id: 'id';
    readonly assetId: 'assetId';
    readonly responsibleId: 'responsibleId';
    readonly createdById: 'createdById';
    readonly purpose: 'purpose';
    readonly withdrawalDate: 'withdrawalDate';
    readonly expectedReturnDate: 'expectedReturnDate';
    readonly returnedAt: 'returnedAt';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum];
export declare const AssetOperationScalarFieldEnum: {
    readonly id: 'id';
    readonly type: 'type';
    readonly status: 'status';
    readonly assetId: 'assetId';
    readonly quantity: 'quantity';
    readonly operationDate: 'operationDate';
    readonly observations: 'observations';
    readonly responsibleId: 'responsibleId';
    readonly startDate: 'startDate';
    readonly endDate: 'endDate';
    readonly purpose: 'purpose';
    readonly donor: 'donor';
    readonly donationDate: 'donationDate';
    readonly document: 'document';
    readonly createdById: 'createdById';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type AssetOperationScalarFieldEnum = (typeof AssetOperationScalarFieldEnum)[keyof typeof AssetOperationScalarFieldEnum];
export declare const UsufructHistoryScalarFieldEnum: {
    readonly id: 'id';
    readonly operationId: 'operationId';
    readonly type: 'type';
    readonly previousEndDate: 'previousEndDate';
    readonly newEndDate: 'newEndDate';
    readonly justification: 'justification';
    readonly createdById: 'createdById';
    readonly createdAt: 'createdAt';
};
export type UsufructHistoryScalarFieldEnum = (typeof UsufructHistoryScalarFieldEnum)[keyof typeof UsufructHistoryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map