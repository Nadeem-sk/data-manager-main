// import React from "react";
import styles from "./JoinAddon.module.css";
import "./style.css";
import { connect } from "react-redux";
import { Icon } from '@iconify/react';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { updateAllScreenFlag } from "../../../store/actions/dataManagerAction";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

type Props = {
  dataManagerRed: any;
  onUpdateAllScreenFlag: any;
}

const JoinAddon = (props: Props) => {

  const onBackBtn = () => {
    props.onUpdateAllScreenFlag({ ...props.dataManagerRed.allScreenFlag, joinAddonScrFlag: false, manageFieldScrFlag: true })
  }

  return (
    <>
      <div className={`${styles.all_field}`}>
        <div className={`${styles.field} ${styles.nice_scroll}`}>

          <div className={`${styles.fld_row}`}>
            <div className={`${styles.fld_col}`}>
              <label>Join</label>
              <input type="text" />
            </div>
            <div className={`${styles.fld_col}`}>
              <label>Source Column</label>
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
              <label>Target Column</label>
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
            <div className={`${styles.fld_col}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label="Store List ID"
                labelPlacement="end"
              />
            </div>
          </div>

        </div>
        <div className={`${styles.footer_btn}`}>
          <div className={`${styles.save}`}>
            <div className={`${styles.save_icon}`}><Icon icon="bx:bx-save" color="white" width="16" height="16" margin-top="4px" fr={undefined} /></div>
            <div className={`${styles.txt}`}>Save Join</div>
          </div>
          <div className={`${styles.cancel}`}>
            <div className={`${styles.cancel_icon}`}><Icon icon="fa:arrow-left" color="white" width="12" height="12" fr={undefined} /></div>
            <div className={`${styles.txt}`} onClick={onBackBtn}>back</div>
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
  return {
    onUpdateAllScreenFlag: (flag: any) =>
      dispatch(updateAllScreenFlag(flag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinAddon);