export interface IComponent {
  _id: string | null;
  Name: string;
  PrimaryTable: string | null;
  Created: Date;
  Updated: Date | null;
  CreatedBy: number;
  UpdatedBy: number | null;
  Sort: Sort | null;
  PrimaryColumn: string | null;
  ReportingName: string | null;
  DbProvider: string;
  Fields?: (FieldEntity)[] | null;
}

export interface IComponentLists extends Array<IComponent> { }

export interface ISaveComponent {
  Name: string;
  PrimaryTable: string | null;
  ReportingName: string | null;
  DbProvider: string;
}
export interface Sort {
  Order: string;
  Field: string;
}
export interface FieldEntity {
  FieldId: string;
  FeildType: string;
  Name: string;
  Datatype: string;
  PickList: PickList;
  Default: string;
  Regex: string;
  RangeFrom: number;
  RangeTo: number;
  Length: number;
  Precision: number;
  Scale: number;
  Permission: Permission;
  CmsControlPermission: CmsControlPermission;
  Comments: string;
  CalType: string;
  IsCached: boolean;
  CalcSql: string;
  SqlLarge: string;
  TargetComp: string;
  JoinOn: string;
  TargetField: string;
  Created: string;
  Updated: string;
  CreatedBy: number;
  UpdatedBy: number;
}
export interface PickList {
  Id: number;
  IsStoreListId: boolean;
}
export interface Permission {
  IsCmFlag: boolean;
  IsReadONly: boolean;
  IsPerSonalData: boolean;
  IsApiFlag: boolean;
  IsRequired: boolean;
  IsSensitiveData: boolean;
  IsAllowXss: boolean;
}
export interface CmsControlPermission {
  IsGet: boolean;
  IsPost: boolean;
  IsSecuredGet: boolean;
  IsSecuredPost: boolean;
}

export interface IFieldOperation extends FieldEntity {
  CompName: string,
  CompId: string;
  OperationType: string,
  OldFieldName: string | null,
}

export interface ITableList {
  Id: number,
  Name: string
}

export interface ITableLists extends Array<ITableList> { }

export interface IComponentDef {
  Id: number,
  Name: string
}

export interface IFieldList {
  "Id": number,
  "Name": string,
  "Column": string,
  "Len": number,
  "Type": string,
  "Read Only": boolean,
  "Required": boolean,
  "Pick List": string | null,
  "Default": string,
  "Join": string | null,
  "Link": string | null,
  "Validation": string | null,
  "Encrypt": boolean,
  TypeLen?: string | null,
}

export interface IFieldLists extends Array<IFieldList> { }

export interface ILinkInfo {
  Id: string,
  ObjectId: string,
  SourceCompId: string,
  TargetCompId: string,
  SourceFieldId: string,
  TargetFieldId: string,
  SourceFieldName: string,
  TargetFieldName: string,
  Name: string,
  ObjectName: string,
  ObjectReportName: string | null,
}

export interface IDataField {
  "id": number,
  "name": string,
  "type": string,
  "joinid": number,
  "allowxss": boolean,
  "readonly": boolean,
  "cachedFlag": boolean | null,
  "required": boolean,
  "APIFlag": boolean,
  "cmFlag": boolean,
  "allowGet": boolean,
  "allowSecureGet": boolean,
  "allowPost": boolean,
  "allowSecurePost": boolean,
  "created": string,
  "targetBusCompId": number,
  "colid": number,
  "personalFlag": boolean,
  "sensitiveFlag": boolean,
  "Owner": string
}

export interface IDataFields extends Array<IDataField> { }