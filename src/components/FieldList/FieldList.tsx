import React, { useEffect, useState } from "react";
import MyComponent from "../ReactSelect/DropdownSelect";
import styles from "./FieldList.module.css";
import "./style.css";
import { connect } from "react-redux";
import { updateAllScreenFlag } from "../../store/actions/dataManagerAction";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IFieldList, IFieldLists } from "../../interfaces/IComponent";
import SaveIcon from "../../Icons/SaveIcon";

type Props = {
  onUpdateAllScreenFlag: any;
  dataManagerRed: any;
};

const FieldsComponent = (props: Props) => {

  const [filteredParentField, setFilteredParentField] = useState([]);
  const [filteredChildField, setFilteredChildField] = useState<IFieldLists>([]);

  const onManageClicked = () => {
    props.onUpdateAllScreenFlag({
      ...props.dataManagerRed.allScreenFlag,
      manageFieldScrFlag: true,
    });
  };

  const onChangeParentField = (e: any, type: any) => {
    let filteredFieldList = type.toLowerCase() === 'all' ? props.dataManagerRed.componentDefDetails.componentFields.Table : props.dataManagerRed.componentDefDetails.componentFields.Table.filter((item: IFieldList) => item.Type === type);
    let updateFilteredFieldList = filteredFieldList.map((item: IFieldList) => {
      return {
        ...item,
        TypeLen: type.toLowerCase() === 'all' ? item.Type : item.Len
      }
    })
    setFilteredChildField(updateFilteredFieldList);
  }

  useEffect(() => {
    if (props.dataManagerRed.componentDefDetails && props.dataManagerRed.componentDefDetails.componentFields && props.dataManagerRed.componentDefDetails.componentFields.Table) {
      setFilteredChildField(props.dataManagerRed.componentDefDetails.componentFields.Table);
      let parentList: any = Array.from(new Set(props.dataManagerRed.componentDefDetails.componentFields.Table.map((item: any) => item.Type)));
      parentList.unshift('All')
      setFilteredParentField(parentList);
    }
    return () => { }
  }, [props.dataManagerRed.componentDefDetails])


  return (
    <>
      <div className={`${styles.dropdown_section}`}>
        <label>Show...</label>
        <Autocomplete
          id="combo-box-demo"
          className="drops"
          options={filteredParentField}
          defaultValue={'All'}
          renderInput={(params) => <TextField {...params} />}
          onChange={onChangeParentField}
        />
      </div>

      <div className={`${styles.fields_section}`}>
        <div className={`${styles.fields_count}`}>Fields (9)</div>
        <div className={`${styles.fields_box} ${styles.nice_scroll}`}>
          {filteredChildField.map((item: IFieldList,index: number) => {
            return <div className={`${styles.fields_row}`} key={index}>
              <div className={`${styles.fields_text}`}>{item.Name}</div>
              <div className={`${styles.fields_tag}`}>{item.TypeLen ?? item.Type}</div>
            </div>
          })}
        </div>
        <div className={`${styles.btn_sec}`}>
          <div className={`${styles.manage}`}>
            <div className={`${styles.manage_icon}`}>
              <SaveIcon cclass={""} pathFill={"#fff"} />
            </div>
            <div className={`${styles.txt}`} onClick={onManageClicked}>Manage </div>
          </div>
        </div>
        {/* <div className={styles.save_btn} onClick={onManageClicked}>Manage</div> */}
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
    onUpdateAllScreenFlag: (flag: boolean) =>
      dispatch(updateAllScreenFlag(flag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FieldsComponent);
