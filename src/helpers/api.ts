import {
    PLUGIN_CONST,
    CmsStore,
    BASE_PATH,
    ROOT_PATH,
} from "../helpers/constants";
import axios from "axios";
import { ISLIVE } from "../helpers/config";
import { IComponent, ISaveComponent } from "../interfaces/IComponent";

// dummy old data
import compList from "../mockdata/componentListData.json";
import tableList from "../mockdata/tableListData.json";
import compDef from "../mockdata/componentDefData.json";
import busCompField from "../mockdata/getCompObjectData.json";
import componentField from "../mockdata/getBusComFieldData.json";
import picklistData from "../mockdata/picklistData.json";

// dummy new data
import compNewList from "../newmockdata/componentListData.json";

export const GET_CMSSTORE_ADDON = (strKey: string) => {
    let data: any = null;
    if (strKey) {
        let CmsStore = (window as any).CmsStore;
        if (CmsStore && CmsStore.Addon && CmsStore.Addon[strKey]) {
            data = CmsStore.Addon[strKey].Get();
        }
    }
    return data;
};

export const GET_CMSSTORE_CUSTOMDATA = (strKey: string) => {
    let data: any = null;
    if (strKey) {
        let CmsStore = (window as any).CmsStore;
        if (CmsStore && CmsStore.Custom && CmsStore.Custom[strKey]) {
            data = CmsStore.Custom[strKey].Get();
        }
    }
    return data;
};

export const API_GETDATA = async (url: string, req: any) => {
    const apiPath = BASE_PATH + url;
    if (CmsStore) {
        let result = await axios.post(apiPath, req);
        return result;
    } else {
        return null;
    }
};


export const getLoggedInUserId = () => {
    const userInfoObj = GET_CMSSTORE_CUSTOMDATA("User");
    if (userInfoObj && userInfoObj.UserId) {
        return userInfoObj.UserId;
    }
    return null;
};

export const GetAjaxCallResponse = async (
    pluginName: string,
    methodName: string,
    dataString: string
) => {
    let objRequest = {
        pluginName: pluginName,
        methodName: methodName,
        dataString: dataString,
    };
    let data = await axios.post(BASE_PATH + PLUGIN_CONST.PLUGIN_URL, objRequest);
    if (
        methodName === "GetUsersListByClientId" &&
        data &&
        data.data !== "" &&
        typeof data.data === "string"
    ) {
        data.data = data.data.replace(',"Er', "}");
        data.data = JSON.parse(data.data);
    }

    return data;
};

// sample plugin api called

export const getResponseBySurvey = async (id: number) => {
    let dataString = JSON.stringify({
        appType: "CSAT",
        collectorId: "" + id,
        fromDate: null,
        toDate: null,
    });
    let getApiData: any = null;
    // let getApiData: any = await GetAjaxCallResponse(
    //     PLUGIN_CONST.PLUGIN_SURVEY_API,
    //     PLUGIN_CONST.METHOD_RESPONSE_BY_SURVEY,
    //     dataString
    // );
    if (CmsStore) {
        if (
            getApiData &&
            getApiData.data &&
            getApiData.data.Data &&
            getApiData.data.Data.success
        ) {
            return getApiData.data.Data.data;
        } else {
            return [];
        }
    } else {
        // offline data
        return [];
    }
};

// start general api
export const getComponentList_API = async () => {

    if (ISLIVE) {
        let respData: any;
        try {
            let apiElementUrl = BASE_PATH + "GetComponents";
            let apiData = await axios
                .get(apiElementUrl, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response: any) => {
                    respData = response.data;
                    if (respData.Status === 200) {
                        if (respData && respData.Success) {
                            return respData.Success || [];
                        } else {
                            return [];
                        }
                    } else {
                        return [];
                    }
                })
                .catch((error) => {
                    console.log("error ---", error);
                    return [];
                });
            return apiData;
        } catch (excption) {
            console.log("excption --- ", excption);
            return [];
        }
    } else {
        return compNewList;
    }

}

export const saveComponent_API = async (postData: ISaveComponent) => {

    let respData: any;
    try {
        let apiElementUrl = BASE_PATH + "CreateComponent";
        let postParams = { ...postData };
        let apiData = await axios
            .post(apiElementUrl, postParams, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response: any) => {
                // console.log("response -----> ");
                // console.log(response);

                respData = response.data;
                if (respData.Status === 200) {
                    if (respData.Success) {
                        return respData.Success;
                    } else {
                        return {};
                    }
                } else {
                    return { Error: true };
                }
            })
            .catch((error) => {
                console.log("error ---", error);
                return [];
            });
        return apiData;
    } catch (excption) {
        console.log("excption --- ", excption);
        return [];
    }

}

export const componentNameCheck_API = async (name: string) => {

    let respData: any;
    try {
        let apiElementUrl = BASE_PATH + "CheckComponentExists";
        let postParams = { componentName: name };
        let apiData = await axios
            .post(apiElementUrl, postParams, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response: any) => {
                // console.log("response -----> ");
                // console.log(response);

                respData = response.data;
                console.log('CheckComponentExists resp', respData);

                if (respData.Status === 200 && respData.Success) {
                    return respData.Success;
                } else {
                    return { Error: true };
                }
            })
            .catch((error) => {
                console.log("error ---", error);
                return [];
            });
        return apiData;
    } catch (excption) {
        console.log("excption --- ", excption);
        return [];
    }

}

export const getTableList_API = async () => {

    if (ISLIVE) {
        let respData: any;
        try {
            let apiElementUrl = BASE_PATH + "GetTableList";
            let postParams = {};
            let apiData = await axios
                .post(apiElementUrl, postParams, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response: any) => {
                    // console.log("response -----> ");
                    // console.log(response);

                    respData = response.data;
                    if (response.status == 200) {
                        if (respData) {
                            return respData || [];
                        } else {
                            return [];
                        }
                    } else {
                        return [];
                    }
                })
                .catch((error) => {
                    console.log("error ---", error);
                    return [];
                });
            return apiData;
        } catch (excption) {
            console.log("excption --- ", excption);
            return [];
        }
    } else {
        return tableList;
    }

}

export const getComponentById_API = async (compId: number) => {
    if (ISLIVE) {
        let respData: any;
        try {
            let apiElementUrl = BASE_PATH + "GetComponentById";
            let postParams = { id: compId };
            let apiData = await axios
                .post(apiElementUrl, postParams, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response: any) => {
                    // console.log("response -----> ");
                    // console.log(response);

                    respData = response.data;
                    if (response.status == 200) {
                        if (respData) {
                            return respData || {};
                        } else {
                            return {};
                        }
                    } else {
                        return { success: false };
                    }
                })
                .catch((error) => {
                    console.log("error ---", error);
                    return [];
                });
            return apiData;
        } catch (excption) {
            console.log("excption --- ", excption);
            return [];
        }
    } else {
        return compDef;
    }
}

export const getBusCompField_API = async (compId: number) => {
    if (ISLIVE) {
        let respData: any;
        try {
            let apiElementUrl = BASE_PATH + "getBusCompObjects";
            let postParams = { id: compId };
            let apiData = await axios
                .post(apiElementUrl, postParams, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response: any) => {
                    // console.log("response -----> ");
                    // console.log(response);

                    respData = response.data;
                    if (response.status == 200) {
                        if (respData) {
                            return respData || {};
                        } else {
                            return {};
                        }
                    } else {
                        return { success: false };
                    }
                })
                .catch((error) => {
                    console.log("error ---", error);
                    return [];
                });
            return apiData;
        } catch (excption) {
            console.log("excption --- ", excption);
            return [];
        }
    } else {
        return busCompField.Table;
    }
}

export const getComponentField_API = async (compId: number) => {
    if (ISLIVE) {
        let respData: any;
        try {
            let apiElementUrl = BASE_PATH + "getBusCompFields";
            let postParams = { id: compId };
            let apiData = await axios
                .post(apiElementUrl, postParams, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response: any) => {
                    // console.log("response -----> ");
                    // console.log(response);

                    respData = response.data;
                    if (response.status == 200) {
                        if (respData) {
                            return respData || {};
                        } else {
                            return {};
                        }
                    } else {
                        return { success: false };
                    }
                })
                .catch((error) => {
                    console.log("error ---", error);
                    return [];
                });
            return apiData;
        } catch (excption) {
            console.log("excption --- ", excption);
            return [];
        }
    } else {
        return componentField.Table;
    }
}

export const getBuscompJoins_API = async (compId: number) => {
    if (ISLIVE) {
        let respData: any;
        try {
            let apiElementUrl = BASE_PATH + "getBusCompFields";
            let postParams = { id: compId };
            let apiData = await axios
                .post(apiElementUrl, postParams, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response: any) => {
                    // console.log("response -----> ");
                    // console.log(response);

                    respData = response.data;
                    if (response.status == 200) {
                        if (respData) {
                            return respData || {};
                        } else {
                            return {};
                        }
                    } else {
                        return { success: false };
                    }
                })
                .catch((error) => {
                    console.log("error ---", error);
                    return [];
                });
            return apiData;
        } catch (excption) {
            console.log("excption --- ", excption);
            return [];
        }
    } else {
        return componentField.Table;
    }
}

export const getPickList_API = async (id: number, name: string) => {
    if (ISLIVE) {
        let respData: any;
        try {
            let apiElementUrl = BASE_PATH + "getPickList";
            let postParams = { Id: id, Name: name };
            let apiData = await axios
                .post(apiElementUrl, postParams, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response: any) => {
                    // console.log("response -----> ");
                    // console.log(response);

                    respData = response.data;
                    if (response.status == 200) {
                        if (respData) {
                            return respData || {};
                        } else {
                            return {};
                        }
                    } else {
                        return { success: false };
                    }
                })
                .catch((error) => {
                    console.log("error ---", error);
                    return [];
                });
            return apiData;
        } catch (excption) {
            console.log("excption --- ", excption);
            return [];
        }
    } else {
        if (name === "APP - Field Type") return picklistData["FieldType"]["properties"]["Table"];
        if (name === "APP - Picklist") return picklistData["Picklist"]["properties"]["Table"];
        if (name === "APP - Regular Expression") return picklistData["RegularExpression"]["properties"]["Table"];
    }
}