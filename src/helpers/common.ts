import { IDataFields } from "../interfaces/IComponent";
import { GROUP_BY_FIELD_DATA, MONTHS } from "./constants";

export const formatDateTime = (d: string, type: string) => {
    if (d) {
        let md = new Date(d);
        let date = new Date(md);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        let min = minutes < 10 ? "0" + minutes : minutes;
        let strTime = hours + ":" + min + " " + ampm;
        if (type === "date") {
            return (
                date.getDate() +
                " " +
                MONTHS[date.getMonth()] +
                " " +
                date.getFullYear()
            );
        } else if (type === "time") {
            return strTime;
        } else {
            return (
                date.getDate() +
                " " +
                MONTHS[date.getMonth()] +
                " " +
                date.getFullYear() +
                " " +
                strTime
            );
        }
    } else {
        return;
    }
};

export const fieldDataFilter = (type: string,data: IDataFields) => {
    let filteredData: IDataFields = [];
    switch (type) {
        case "simple":
            filteredData = data.filter((d: any) => (d.joinid == 0 && !(d.type.startsWith("CALC"))));
            break;
        case "join":
            filteredData = data.filter((d: any) => d.joinid != 0);
            break;
        case "calc":
            filteredData = data.filter((d: any) => d.type.startsWith("CALC"));
            break;
        default: break;
    }
    return filteredData;
};