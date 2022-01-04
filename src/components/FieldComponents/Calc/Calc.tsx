// import React from "react";
import styles from "./Calc.module.css";
import "./style.css";
import React, { Component, useEffect, useState } from "react";
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

const Calc = () => {
  
  const [fieldList, setFieldList] = useState([]);

  const getPickListData = async () => {
    let fieldList = await getPickList_API(0, "APP - Field Type");
    if (fieldList && fieldList.length > 0) {
      setFieldList(fieldList);
    }
  }

  useEffect(() => {
    getPickListData();
    return () => { }
  }, [])

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
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label="Cached?"
              labelPlacement="end"
            />
          </div>
        </div>
        <label>Calc SQL</label>
        <div className={`${styles.fld_row}`}>
          <input type="text" />
        </div>
        <label>SQL Large</label>
        <div className={`${styles.fld_row}`}>
          <textarea />
        </div>

        <div className={`${styles.fld_row}`}>
          <div className={`${styles.fld_col2}`}>
            <label>Length</label>
            <input type="text" />
          </div>
          <div className={`${styles.fld_col2}`}>
            <label>Precision</label>
            <input type="text" style={{ background: "#ddd" }} />
          </div>
          <div className={`${styles.fld_col2}`}>
            <label>Scale</label>
            <input type="text" style={{ background: "#ddd" }} />
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

export default Calc;
