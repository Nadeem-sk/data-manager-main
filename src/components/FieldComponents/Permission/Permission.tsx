import React, { useState } from "react";
import styles from "./Permission.module.css";
import "./style.css";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { updateAllScreenFlag } from "../../../store/actions/dataManagerAction";

type Props = {
  dataManagerRed: any;
  onUpdateAllScreenFlag: any;
}

const FiedlAccessControl = (props: Props) => {

  const onSaveReturn = () => {
    props.onUpdateAllScreenFlag({ ...props.dataManagerRed.allScreenFlag, permissionScrFlag: false, manageFieldScrFlag: true })
  }

  return (
    <div className={`${styles.dm_wrap}`}>
      <div className={`${styles.band_02}`}>
        <div className={`${styles.left_Sec}`}>
          <div className={`${styles.title}`}>FIELD ACCESS CONTROL</div>
        </div>
        <div className={`${styles.save_return}`}>
          <div className={styles.save_btn} onClick={onSaveReturn}>Save & Return</div>
        </div>
      </div>
      <div className={`${styles.table_band} `}>
        <div className={`${styles.tbl_head} ${styles.col_01} `}>
          Field Name
          <span>
            <input
              className="textBox SearchKeyword"
              type="text"
              placeholder="Keywords"
            />
          </span>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_02} `}>Field Type</div>
        <div className={`${styles.tbl_head} ${styles.col_03} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>allowXSS</span>
          </div>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_04} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>sensitiveFlag</span>
          </div>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_04} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>personalFlag</span>
          </div>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_04} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>allowSecurePost</span>
          </div>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_04} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>allowSecureGet</span>
          </div>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_04} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>allowPost</span>
          </div>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_04} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>allowGet</span>
          </div>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_04} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>APIFlag</span>
          </div>
        </div>
        <div className={`${styles.tbl_head} ${styles.col_04} `}>
          <div className={`${styles.checbox_col}`}>
            <FormControlLabel
              value="end"
              className="checks"
              control={<Checkbox color="primary" name="new" />}
              label=""
              labelPlacement="end"
            />
            <span className={`${styles.checbox_lbl}`}>cmFlag</span>
          </div>
        </div>
      </div>
      <div className={`${styles.number_row} ${styles.nice_scroll}`}>
        <div className={`${styles.row} `}>
          <div className={`${styles.tbl_head} ${styles.col_01} `}>
            Calc Created By
          </div>
          <div className={`${styles.tbl_head} ${styles.col_02} `}>
            CALCULATEDINT
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.row} `}>
          <div className={`${styles.tbl_head} ${styles.col_01} `}>
            Calc Created By
          </div>
          <div className={`${styles.tbl_head} ${styles.col_02} `}>
            CALCULATEDINT
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.row} `}>
          <div className={`${styles.tbl_head} ${styles.col_01} `}>
            Calc Created By
          </div>
          <div className={`${styles.tbl_head} ${styles.col_02} `}>
            CALCULATEDINT
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.row} `}>
          <div className={`${styles.tbl_head} ${styles.col_01} `}>
            Calc Created By
          </div>
          <div className={`${styles.tbl_head} ${styles.col_02} `}>
            CALCULATEDINT
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.row} `}>
          <div className={`${styles.tbl_head} ${styles.col_01} `}>
            Calc Created By
          </div>
          <div className={`${styles.tbl_head} ${styles.col_02} `}>
            CALCULATEDINT
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.row} `}>
          <div className={`${styles.tbl_head} ${styles.col_01} `}>
            Calc Created By
          </div>
          <div className={`${styles.tbl_head} ${styles.col_02} `}>
            CALCULATEDINT
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.row} `}>
          <div className={`${styles.tbl_head} ${styles.col_01} `}>
            Calc Created By
          </div>
          <div className={`${styles.tbl_head} ${styles.col_02} `}>
            CALCULATEDINT
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>
            <div className={`${styles.checbox_margin}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label=""
                labelPlacement="end"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FiedlAccessControl);