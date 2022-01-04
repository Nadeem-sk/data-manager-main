import React, { useState } from "react";
import styles from "./ManageField.module.css";
import { connect } from "react-redux";
import List from "../../components/FieldComponents/List/List";
import SimpleField from "../../components/FieldComponents/Simple/Simple";
import { Icon } from "@iconify/react";
import { updateAllScreenFlag } from "../../store/actions/dataManagerAction";
import CalcField from "../../components/FieldComponents/Calc/Calc";
import JoinField from "../../components/FieldComponents/Join/Join";
import JoinAddon from "../../components/FieldComponents/JoinAddon/JoinAddon";

type Props = {
    dataManagerRed: any;
    onUpdateAllScreenFlag: any;
}

const ManageField = (props: Props) => {

    const [selectedTab, setSelectedTab] = useState("");

    const onReturn = () => {
        props.onUpdateAllScreenFlag({ ...props.dataManagerRed.allScreenFlag, manageFieldScrFlag: false, componentListScrFlag: false })
    }

    const onSelectTab = (sel: string) => {
        setSelectedTab(sel);
    }

    const displayTabContent = () => {
        switch (selectedTab) {
            case "simple":
                return <SimpleField />
                break;

            case "calc":
                return <CalcField />
                break;

            case "join":
                return <JoinField />
                break;

            default:
                break;
        }
    }

    return (
        <>
            <div className={`${styles.top_band}`}>
                <div className={`${styles.title}`}><svg
                    width="16px" height="16px">
                    <path fillRule="evenodd" opacity="0" fill="rgb(238, 238, 238)"
                        d="M-0.000,-0.000 L16.000,-0.000 L16.000,16.000 L-0.000,16.000 L-0.000,-0.000 Z" />
                    <path fillRule="evenodd" fill="rgb(111, 110, 224)"
                        d="M14.500,1.000 L1.500,1.000 C0.672,1.000 -0.000,1.672 -0.000,2.500 L-0.000,13.500 C-0.000,14.328 0.672,15.000 1.500,15.000 L14.500,15.000 C15.328,15.000 16.000,14.328 16.000,13.500 L16.000,2.500 C16.000,1.672 15.328,1.000 14.500,1.000 ZM14.313,13.500 L1.687,13.500 C1.584,13.500 1.500,13.416 1.500,13.312 L1.500,2.688 C1.500,2.584 1.584,2.500 1.687,2.500 L14.313,2.500 C14.416,2.500 14.500,2.584 14.500,2.688 L14.500,13.312 C14.500,13.416 14.416,13.500 14.313,13.500 ZM13.000,10.625 C13.000,10.418 12.832,10.250 12.625,10.250 L6.375,10.250 C6.168,10.250 6.000,10.418 6.000,10.625 L6.000,11.375 C6.000,11.582 6.168,11.750 6.375,11.750 L12.625,11.750 C12.832,11.750 13.000,11.582 13.000,11.375 L13.000,10.625 ZM13.000,7.625 C13.000,7.418 12.832,7.250 12.625,7.250 L6.375,7.250 C6.168,7.250 6.000,7.418 6.000,7.625 L6.000,8.375 C6.000,8.582 6.168,8.750 6.375,8.750 L12.625,8.750 C12.832,8.750 13.000,8.582 13.000,8.375 L13.000,7.625 ZM13.000,4.625 C13.000,4.418 12.832,4.250 12.625,4.250 L6.375,4.250 C6.168,4.250 6.000,4.418 6.000,4.625 L6.000,5.375 C6.000,5.582 6.168,5.750 6.375,5.750 L12.625,5.750 C12.832,5.750 13.000,5.582 13.000,5.375 L13.000,4.625 ZM5.125,5.000 C5.125,4.379 4.621,3.875 4.000,3.875 C3.379,3.875 2.875,4.379 2.875,5.000 C2.875,5.621 3.379,6.125 4.000,6.125 C4.621,6.125 5.125,5.621 5.125,5.000 ZM5.125,8.000 C5.125,7.379 4.621,6.875 4.000,6.875 C3.379,6.875 2.875,7.379 2.875,8.000 C2.875,8.621 3.379,9.125 4.000,9.125 C4.621,9.125 5.125,8.621 5.125,8.000 ZM5.125,11.000 C5.125,10.379 4.621,9.875 4.000,9.875 C3.379,9.875 2.875,10.379 2.875,11.000 C2.875,11.621 3.379,12.125 4.000,12.125 C4.621,12.125 5.125,11.621 5.125,11.000 Z" />
                </svg>_Example Comp</div>
                <div className={`${styles.return}`}>
                    <div className={`${styles.return_icon}`}><Icon icon="fa:arrow-left" color="white" width="12" height="12" fr={undefined} /></div>
                    <div className={`${styles.txt}`} onClick={onReturn}>Return</div>
                </div>
            </div>
            <div className={`${styles.datamanager}`}>
                <List />
                <div className={`${styles.all_field}`}>
                    {props.dataManagerRed.allScreenFlag.joinAddonScrFlag ?
                        <JoinAddon /> :
                        <>
                            <div className={` ${styles.tabs}`}>
                                <label>Add New...</label>
                                <div className={`${styles.new_fld_sel}`}>
                                    <div className={`${styles.box} ${selectedTab === "simple" ? styles.active : ""}`} onClick={() => onSelectTab("simple")}>
                                        <div className={`${styles.img01}`}>
                                            <img src="https://tpointdevstorage.blob.core.windows.net/basedevpubliccontainer/1639420169992.svg" />
                                        </div>
                                        <div className={`${styles.img02}`}>
                                            {" "}
                                            <img src="https://tpointdevstorage.blob.core.windows.net/basedevpubliccontainer/1639420170001.svg" />{" "}
                                        </div>
                                        <div className={`${styles.txt}`}>
                                            Simple
                                            <br />
                                            Field
                                        </div>
                                    </div>
                                    <div className={`${styles.box}  ${selectedTab === "calc" ? styles.active : ""}`} onClick={() => onSelectTab("calc")}>

                                        <div className={`${styles.img01}`}>
                                            <img src="https://tpointdevstorage.blob.core.windows.net/basedevpubliccontainer/1639419693053.svg" />
                                        </div>
                                        <div className={`${styles.img02}`}>
                                            {" "}
                                            <img src="https://tpointdevstorage.blob.core.windows.net/basedevpubliccontainer/1639419693062.svg" />{" "}
                                        </div>
                                        <div className={`${styles.txt}`}>
                                            Calc
                                            <br />
                                            Field
                                        </div>
                                    </div>
                                    <div className={`${styles.box} ${selectedTab === "join" ? styles.active : ""}`} onClick={() => onSelectTab("join")}>
                                        <div className={`${styles.img01}`}>
                                            <img src="https://tpointdevstorage.blob.core.windows.net/basedevpubliccontainer/1639420394508.svg" />
                                        </div>
                                        <div className={`${styles.img02}`}>
                                            <img src="https://tpointdevstorage.blob.core.windows.net/basedevpubliccontainer/1639420394497.svg" />{" "}
                                        </div>
                                        <div className={`${styles.txt}`}>
                                            Join
                                            <br />
                                            Field
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {displayTabContent()}</>}
                </div>
            </div>
        </>
    );
};

// map state to props for redux
const mapStateToProps = (state: any) => {
    return {
        dataManagerRed: state.dataManagerRed,
    };
};
// map dispatch to props for redux
const mapDispatchToProps = (dispatch: any) => {
    return {
        onUpdateAllScreenFlag: (flag: any) =>
            dispatch(updateAllScreenFlag(flag)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageField);