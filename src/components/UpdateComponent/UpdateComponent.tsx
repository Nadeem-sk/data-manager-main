import React, { useEffect, useState } from "react";
import styles from "./UpdateComponent.module.css";
import ReactSelect from "../ReactSelect/DropdownSelect";
import "./style.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { connect } from "react-redux";
import { IComponent } from "../../interfaces/IComponent";
import { SORT_DATA } from "../../helpers/constants";

type Props = {
  dataManagerRed: any;
}

const UpdateComponent = (props: Props) => {

  const [saveComponent, setSaveComponent] = useState<IComponent>({
    _id: null,
    Name: "",
    PrimaryTable: null,
    Created: new Date(),
    Updated: null,
    CreatedBy: 0,
    UpdatedBy: null,
    Sort: null,
    PrimaryColumn: null,
    ReportingName: null,
    DbProvider: "",
    Fields: null,
  });


  useEffect(() => {
    if (props.dataManagerRed.componentDefDetails && props.dataManagerRed.componentDefDetails.componentBase) {
      setSaveComponent({
        ...saveComponent,
        Name: props.dataManagerRed.componentDefDetails.componentBase.name,
        PrimaryTable: props.dataManagerRed.componentDefDetails.componentBase.tableId,
        Sort: props.dataManagerRed.componentDefDetails.componentBase.sortSpec,
        ReportingName: props.dataManagerRed.componentDefDetails.componentBase.reportName,
      })
    }

    return () => { }
  }, [props.dataManagerRed.componentDefDetails])

  return (
    <>
      <div className={`${styles.fld_col}`}>
        <label>Name</label>
        <input type="text" value={saveComponent?.Name} />
      </div>
      <div className={styles.dropdown_section}>
        <label>Sort Order</label>
        <Autocomplete
          id="combo-box-demo"
          className="drops"
          options={props.dataManagerRed.componentDefDetails?.componentFields?.Table}
          getOptionLabel={(option: any) => option.Name}
          // onChange={handleSelectInput}
          renderInput={(params) => <TextField {...params} />}
        />
        <div className={styles.fld_col}>
          <Autocomplete
            id="combo-box-demo"
            className="drops"
            options={SORT_DATA}
            getOptionLabel={(option: any) => option.value}

            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className={styles.fld_col}>
          <label>Owner Column Id</label>
          <Autocomplete
            id="combo-box-demo"
            className="drops"
            options={props.dataManagerRed.componentDefDetails?.componentFields?.Table}
            getOptionLabel={(option: any) => option.Name}
            // onChange={handleSelectInput}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className={`${styles.fld_col}`}>
          <label>Reporting Name</label>
          <input type="text" value={saveComponent?.ReportingName ?? ""} />
        </div>
        <div className={`${styles.btn_sec}`}>
          <div className={`${styles.save}`}>
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
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateComponent);