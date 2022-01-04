import { IComponentDef, IComponentLists, ITableLists } from "../../interfaces/IComponent";
import { dataManagerConst } from "../storeConstant";

export const updateComponentList = (componentList: IComponentLists) => {
  return {
    type: dataManagerConst.UPDATE_COMPONENT_LIST,
    payload: {
      componentList: componentList,
    },
  };
};

export const updateAllScreenFlag = (manageScreenFlags: any) => {
  return {
    type: dataManagerConst.UPDATE_ALL_SCREEN_FLAG,
    payload: {
      allScreenFlag: { ...manageScreenFlags },
    },
  };
};

export const updateManageComponentScreenFlag = (flag: Boolean) => {
  return {
    type: dataManagerConst.UPDATE_MANAGE_COMPONENT_SCREEN_FLAG,
    payload: {
      manageComponentScreenFlag: flag,
    },
  };
};

export const updateTableList = (tList: ITableLists) => {
  return {
    type: dataManagerConst.UPDATE_TABLE_LIST,
    payload: {
      tableList: tList,
    },
  };
};

export const updateComponentParamDef = (compDef: IComponentDef) => {
  return {
    type: dataManagerConst.UPDATE_COMPONENT_PARAM_DEF,
    payload: {
      componentParamDef: compDef,
    },
  };
};

export const updateComponentDefDetails = (compDef: any) => {
  return {
    type: dataManagerConst.UPDATE_COMPONENT_DEF_DETAILS,
    payload: {
      componentDefDetails: compDef,
    },
  };
};

export const updatePrvComponentDefDetails = (compDef: any) => {
  return {
    type: dataManagerConst.UPDATE_PRV_COMPONENT_DEF_DETAILS,
    payload: {
      prvComponentDefDetails: compDef,
    },
  };
};

export const updateFieldData = (data: any) => {
  return {
    type: dataManagerConst.UPDATE_FIELD_DATA,
    payload: {
      fieldData: [...data],
    },
  };
};