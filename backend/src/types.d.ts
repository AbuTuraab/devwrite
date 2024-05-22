import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "users";
    readonly columns: readonly [
      {
        readonly name: "firstName";
        readonly type: "string";
      },
      {
        readonly name: "lastName";
        readonly type: "string";
      },
      {
        readonly name: "email";
        readonly type: "email";
        readonly unique: true;
      },
      {
        readonly name: "password";
        readonly type: "string";
      }
    ];
  }
];
export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;
export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;
export type DatabaseSchema = {
  users: UsersRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
