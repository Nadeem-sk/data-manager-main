import { dataManagerConst } from '../storeConstant'
import { IActionType } from "../../interfaces/IActionType";
const initialState = {
    componentList: [],
    allScreenFlag: {
        componentListScrFlag: true,
        newComponentScrFlag: false,
        manageFieldScrFlag: false,
        joinAddonScrFlag: false,
        permissionScrFlag: false,
    },
    manageComponentScreenFlag: true,
    tableList: [],
    componentParamDef: {
        Id: 0,
        Name: "",
    },
    componentDefDetails: {},
    prvComponentDefDetails: {},
    fieldData: [],
}

const dataManagerReducer = (state = initialState, action: IActionType) => {
    switch (action.type) {
        case dataManagerConst.UPDATE_COMPONENT_LIST:
            return {
                ...state,
                componentList: action.payload.componentList
            }

        case dataManagerConst.UPDATE_ALL_SCREEN_FLAG:
            return {
                ...state,
                allScreenFlag: { ...action.payload.allScreenFlag }
            }

        case dataManagerConst.UPDATE_MANAGE_COMPONENT_SCREEN_FLAG:
            return {
                ...state,
                manageComponentScreenFlag: action.payload.manageComponentScreenFlag
            }

        case dataManagerConst.UPDATE_COMPONENT_PARAM_DEF:
            return {
                ...state,
                componentParamDef: { ...action.payload.componentParamDef }
            }

        case dataManagerConst.UPDATE_COMPONENT_DEF_DETAILS:
            return {
                ...state,
                componentDefDetails: { ...action.payload.componentDefDetails }
            }

        case dataManagerConst.UPDATE_PRV_COMPONENT_DEF_DETAILS:
            return {
                ...state,
                prvComponentDefDetails: { ...action.payload.prvComponentDefDetails }
            }

        case dataManagerConst.UPDATE_FIELD_DATA:
            return {
                ...state,
                fieldData: action.payload.fieldData
            }

    }
    return state;
}

export default dataManagerReducer;