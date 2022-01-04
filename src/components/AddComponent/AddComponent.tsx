import React, { useEffect, useState } from "react";
import { ISaveComponent, ITableList, ITableLists } from "../../interfaces/IComponent";
import SelectComp from "../ReactSelect/DropdownSelect";
import styles from "./AddComponent.module.css";
import { componentNameCheck_API, getTableList_API, saveComponent_API } from "../../helpers/api";
import { ALERT_STATUS, DB_PROVIDER } from "../../helpers/constants";
import Alerts from "../Alerts/Alerts";
import { connect } from "react-redux";
import { updateAllScreenFlag, updateComponentDefDetails, updateTableList } from "../../store/actions/dataManagerAction";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./style.css";

type Props = {
  parentId: string;
  dataManagerRed: any;
  onUpdateAllScreenFlag: any;
  onUpdateTableList: any;
  onUpdateComponentDefDetails: any;
};

const AddComponent = (props: Props) => {
  const [switchAddComp, setSwitchAddComp] = useState(false);
  const [isSuccess, setIsSuccess] = useState({ status: false, value: "", message: "" });
  const [compNameAvailableStatus, setCompNameAvailableStatus] = useState(false);
  const [saveComponent, setSaveComponent] = useState<ISaveComponent>({
    Name: "",
    PrimaryTable: null,
    ReportingName: null,
    DbProvider: "",
  });

  const onSwitchAddCompUi = () => {
    setSwitchAddComp(!switchAddComp ? true : false);
  };

  const handleNameInput = async (e: any) => {
    let { name, value } = e.target;
    let primaryTable = value.trim().replace(/[^A-Z0-9]/ig, "");
    setSaveComponent({
      ...saveComponent,
      [name]: value,
      PrimaryTable: primaryTable,
    });
  };

  const handleReportingNameInput = async (e: any) => {
    let { name, value } = e.target;
    setSaveComponent({
      ...saveComponent,
      [name]: value,
    });
  };

  const handleSelectInput = (e: any, item: any) => {
    if (item) {
      setSaveComponent({
        ...saveComponent,
        ["DbProvider"]: item.value,
      });
    }
  };

  const saveComponentData = async () => {
    // console.log('saveComponent', saveComponent);

    if (compNameAvailableStatus) {
      let compResult = await saveComponent_API(saveComponent);
      // console.log('compResult', compResult);

      if (compResult) {
        props.onUpdateComponentDefDetails({...compResult})
        setIsSuccess({ status: false, value: "", message: "" });
        setIsSuccess({ status: true, value: ALERT_STATUS.fail, message: "Component saved successfully." });
        props.onUpdateAllScreenFlag({ ...props.dataManagerRed.allScreenFlag, componentListScrFlag: false, newComponentScrFlag: false })
        // console.log('component saved successfully.');
      } else {
        setIsSuccess({ status: false, value: "", message: "" });
        setIsSuccess({ status: true, value: ALERT_STATUS.fail, message: "Component not saved." });
        // console.log('component not saved.');
      }
    } else {

      if (saveComponent.Name !== "") {
        console.log('hit save Comp else');
        setCompNameAvailableStatus(false);
        setIsSuccess({ status: false, value: "", message: "" });
        setIsSuccess({ status: true, value: ALERT_STATUS.fail, message: "Entered name already exists." });
      }
    }
  }
  // console.log('isSucces', isSuccess);


  const componentNameCheck = async (e: any) => {
    let success = await componentNameCheck_API(e.target.value);

    if (success) {

      if (success.length === 0) {
        setCompNameAvailableStatus(true);
      } else {
        setCompNameAvailableStatus(false);
        setIsSuccess({ status: false, value: "", message: "" });
        setIsSuccess({ status: true, value: ALERT_STATUS.fail, message: "Entered name already exists." });
      }
    } else if (success.Error) {
      setIsSuccess({ status: false, value: "", message: "" });
      setIsSuccess({ status: true, value: ALERT_STATUS.fail, message: "Something went wrong!" });

    }
  }

  const onCancel = () => {
    props.onUpdateAllScreenFlag({ ...props.dataManagerRed, newComponentScrFlag: false, componentListScrFlag: true })
  }

  // unused
  const getTableList = async () => {
    let list = await getTableList_API();
    if (list && list.TableList && list.TableList.Table && list.TableList.Table.length > 0) {
      props.onUpdateTableList(list.TableList.Table);
    }
  }

  useEffect(() => {
    // getTableList();
    return () => {
    }
  }, [])

  return (
    <>
      {isSuccess.status ? <Alerts alert={isSuccess} /> : null}
      {props.parentId === "" ? (
        ""
      ) : (
        <div className={`${styles.radio_Section}`}>
          <form>
            <input
              type="radio"
              name="switchAddComp"
              onClick={onSwitchAddCompUi}
              checked={!switchAddComp ? true : false}
            />
            <span className={`${styles.radio}`}>Existing</span>
            <input
              type="radio"
              name="switchAddComp"
              style={{ marginLeft: "40px" }}
              onClick={onSwitchAddCompUi}
            />
            <span className={`${styles.radio}`}>New</span>
          </form>
        </div>
      )}

      {!switchAddComp && props.parentId !== "" ? (
        <SelectComp />
      ) : (
        <>
          <div className={`${styles.fld_col}`}>
            <label>Name {compNameAvailableStatus ? <span style={{ color: "green", fontWeight: 600, fontSize: "14px", float: "right" }}>Available</span> : ""}</label>
            <input type="text" name="Name" onChange={handleNameInput} onBlur={componentNameCheck} />
          </div>
          <div className={styles.fld_col}>
            <label>DB Provider</label>
            <Autocomplete
              id="combo-box-demo"
              className="dropdowns"
              options={DB_PROVIDER}
              getOptionLabel={(option: any) => option.label || ""}
              onChange={handleSelectInput}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className={`${styles.fld_col}`}>
            <label>Reporting Name</label>
            <input type="text" name="ReportingName" onChange={handleReportingNameInput} />
          </div>
        </>
      )}

      <div className={styles.btn_section}>
        <div className={`${styles.btn_sec}`}>
          <div className={`${styles.save}`} onClick={saveComponentData}>
            <div className={`${styles.save_icon}`}>
              <svg
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M27.71 9.29l-5-5A1 1 0 0 0 22 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a1 1 0 0 0-.29-.71zM12 6h8v4h-8zm8 20h-8v-8h8zm2 0v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8H6V6h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.41l4 4V26z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={`${styles.txt}`}>Save </div>
          </div>
        </div>
        <div className={styles.cancel_btn} onClick={onCancel}>Cancel</div>
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
    onUpdateTableList: (list: ITableLists) => dispatch(updateTableList(list)),
    onUpdateComponentDefDetails: (compDef: any) =>
      dispatch(updateComponentDefDetails(compDef)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);