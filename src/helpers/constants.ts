export const CmsStore = (window as any).CmsStore;

export const BASE_PATH = (() => {
    let CmsStore = (window as any).CmsStore;
    if (
        CmsStore &&
        CmsStore.System &&
        CmsStore.System.Path &&
        CmsStore.System.Path.ApiUrl
    ) {
        return CmsStore.System.Path.ApiUrl;
    }
    return "https://2994-20-117-143-58.ngrok.io/DataManager/Api/";
})();


export const ROOT_PATH = (() => {
    if (
        CmsStore &&
        CmsStore.System &&
        CmsStore.System.Path &&
        CmsStore.System.Path.RootUrl
    ) {
        return CmsStore.System.Path.RootUrl;
    }
    return "";
})();

export const PLUGIN_CONST = {
    PLUGIN_URL: "api/elementAPI/processPlugin",
}

export const ALERT_STATUS = {
    success: "success",
    fail: "fail"
}

export const SORT_DATA = [{ "key": "asc", "value": "ASC" }, { "key": "desc", "value": "DESC" }];

export const GROUP_BY_FIELD_DATA = ['simple', 'join', 'calc'];

export const DATETIME_CONST = {
    DATE: "date",
    TIME: "time",
};

export const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const DB_PROVIDER = [
    { label: "SIMPLE", value: "SqlServer" },
    { label: "ADVANCE", value: "Sqlite" },
];