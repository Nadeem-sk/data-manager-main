// import React from "react";
import styles from "./Simple.module.css";
import "./style.css";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Icon } from "@iconify/react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getPickList_API } from "../../../helpers/api";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];


const SimpleField = () => {

  const [fieldList, setFieldList] = useState([]);
  const [pickList, setPickList] = useState([]);
  const [regularExpression, setRegularExpression] = useState([]);

  const getPickListData = async () => {
    let fieldList = await getPickList_API(0, "APP - Field Type");
    let pickList = await getPickList_API(0, "APP - Picklist");
    let regularExpressionList = await getPickList_API(0, "APP - Regular Expression");
    if (fieldList && fieldList.length > 0) {
      setFieldList(fieldList);
    }
    if (pickList && pickList.length > 0) {
      setPickList(pickList);
    }
    if (regularExpressionList && regularExpressionList.length > 0) {
      setRegularExpression(regularExpressionList);
    }
  }

  useEffect(() => {
    getPickListData();
    return () => { }
  }, [])

  console.log('pick list => ', fieldList, pickList, regularExpression);



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
            <label>Data/Pick List</label>
            <Autocomplete
              id="combo-box-demo"
              className="dropdowns"
              options={pickList}
              getOptionLabel={(option: any) => option.name}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className={`${styles.fld_col} ${styles.pad_top}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Store List ID"
              labelPlacement="end"
            />
          </div>
        </div>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col}`}>
            <label>Default Value</label>
            <input type="text" />
          </div>
          <div className={`${styles.fld_col} `}>
            <label>Regular Expression</label>
            <Autocomplete
              id="combo-box-demo"
              className="dropdowns"
              options={regularExpression}
              getOptionLabel={(option: any) => option.name}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </div>
        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col}`}>
            <label>Range From</label>
            <input type="text" />
          </div>
          <div className={`${styles.fld_col} `}>
            <label>Range To</label>
            <input type="text" />
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
              label="Get"
              labelPlacement="end"
            />
          </div>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Post"
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
              label="Secure get"
              labelPlacement="end"
            />
          </div>
          <div className={`${styles.fld_col3}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Secure Post"
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
              margin-top="4px"
              fr={undefined}
            />
          </div>
          <div className={`${styles.txt}`}>Save</div>
        </div>
        <div className={`${styles.cancel}`}>
          <div className={`${styles.cancel_icon}`}>
            <Icon
              icon="fa:arrow-left"
              color="white"
              width="12"
              height="12"
              fr={undefined}
            />
          </div>
          <div className={`${styles.txt}`}>back</div>
        </div>
      </div>
    </>
  );
};

export default SimpleField;
