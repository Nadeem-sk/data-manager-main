// import React from "react";
import styles from "./Join.module.css";
import "./style.css";
import { connect } from "react-redux";
import { Icon } from "@iconify/react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { updateAllScreenFlag } from "../../../store/actions/dataManagerAction";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from "react";
import { getComponentField_API, getComponentList_API, getPickList_API } from "../../../helpers/api";
import { IDataFields } from "../../../interfaces/IComponent";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

type Props = {
  dataManagerRed: any;
  onUpdateAllScreenFlag: any;
}

const Join = (props: Props) => {

  const [fieldList, setFieldList] = useState([]);
  const [compList, setCompList] = useState([]);
  const [compBusCompList, setCompBusCompList] = useState<IDataFields>([]);

  const onJoinAddon = () => {
    props.onUpdateAllScreenFlag({ ...props.dataManagerRed.allScreenFlag, joinAddonScrFlag: true });
  }

  const getPickListData = async () => {
    let fieldList = await getPickList_API(0, "APP - Field Type");
    if (fieldList && fieldList.length > 0) {
      setFieldList(fieldList);
    }
  }

  const getCompList = async () => {
    let data = await getComponentList_API();
    if (data && data.length > 0) {
      setCompList(data);
    }
  };

  const getCompFieldData = async (compId: number) => {
    let fData: IDataFields = await getComponentField_API(compId);
    if (fData && fData.length > 0) {
      setCompBusCompList(fData)
    }
  }

  useEffect(() => {
    getPickListData();
    getCompList();
    return () => { }
  }, [])

  useEffect(() => {
    getCompFieldData(props.dataManagerRed.componentParamDef.Id);
    return () => { }
  }, [props.dataManagerRed.componentParamDef])


  return (
    <>
      <div className={`${styles.field} ${styles.nice_scroll}`}>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col}`}>
            <label>Name</label>
            <input type="text" />
          </div>
          <div className={`${styles.fld_col}`}>
            <label>Type</label>
            <Autocomplete
              id="combo-box-demo"
              className="dropdowns"
              options={fieldList}
              getOptionLabel={(option: any) => option.name}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </div>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col}`}>
            <label>Target Component</label>
            <Autocomplete
              id="combo-box-demo"
              className="dropdowns"
              options={options}
              getOptionLabel={(option: any) => option.Name}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className={`${styles.fld_col}`}>
            <label>Join</label>
            <Autocomplete
              id="combo-box-demo"
              className="dropdowns"
              options={options}
              getOptionLabel={(option: any) => option.Name}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>

          <div className={`${styles.add}`} onClick={onJoinAddon}>+</div>
        </div>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col}`}>
            <label>Target Field</label>
            <Autocomplete
              id="combo-box-demo"
              className="dropdowns"
              options={options}
              getOptionLabel={(option: any) => option.Name}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </div>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col2}`}>
            <label>Length</label>
            <input type="text" />
          </div>
          <div className={`${styles.fld_col2}`}>
            <label>Precision</label>
            <input type="text" />
          </div>
          <div className={`${styles.fld_col2}`}>
            <label>Scale</label>
            <input type="text" />
          </div>
        </div>
        <label>Permissions</label>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="CM Flag"
              labelPlacement="end"
            />
          </div>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Read Only"
              labelPlacement="end"
            />
          </div>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Personal Data"
              labelPlacement="end"
            />
          </div>
        </div>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="API Flag"
              labelPlacement="end"
            />
          </div>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Required"
              labelPlacement="end"
            />
          </div>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Sensitive Data"
              labelPlacement="end"
            />
          </div>
        </div>
        <div className={`${styles.fld_row} ${styles.MaR_B30}`}>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Allow XSS"
              labelPlacement="end"
            />
          </div>
        </div>
        <label>CMS Control Permissions</label>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="GET"
              labelPlacement="end"
            />
          </div>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="POST"
              labelPlacement="end"
            />
          </div>
        </div>
        <div className={`${styles.fld_row} ${styles.MaR_B30}`}>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Secure GET"
              labelPlacement="end"
            />
          </div>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Secure POST"
              labelPlacement="end"
            />
          </div>
        </div>
        <label>Commnets</label>
        <div className={`${styles.fld_row}`}>
          <input type="text" />
        </div>

      </div>
      <div className={`${styles.footer_btn}`}>
        <div className={`${styles.save}`}>
          <div className={`${styles.save_icon}`}>
            <Icon
              icon="bx:bx-save"
              color="white"
              width="16"
              height="16"
              margin-top="4px" fr={undefined} />
          </div>
          <div className={`${styles.txt}`}>Save</div>
        </div>
        <div className={`${styles.cancel}`}>
          <div className={`${styles.cancel_icon}`}>
            <Icon icon="fa:arrow-left" color="white" width="12" height="12" fr={undefined} />
          </div>
          <div className={`${styles.txt}`}>back</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Join);