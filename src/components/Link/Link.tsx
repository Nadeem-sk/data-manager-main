import React, { useEffect, useState } from "react";
import styles from "./Link.module.css";
import "./style.css";
import ReactSelect from "../ReactSelect/DropdownSelect";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { connect } from "react-redux";
import { updateComponentDefDetails } from "../../store/actions/dataManagerAction";
import CrossIcon from "../../Icons/CrossIcon";
import SaveIcon from "../../Icons/SaveIcon";
import { getBusCompField_API } from "../../helpers/api";
import { ILinkInfo } from "../../interfaces/IComponent";

type Props = {
  dataManagerRed: any;
  onUpdateComponentDefDetails: any;
}

const Link = (props: Props) => {
  const [nameInputState, setNameInputState] = useState(false);
  const [groupInputState, setGroupInputState] = useState(false);
  const [componentLink, setComponentLink] = useState([]);
  const [groupNames, setGroupNames] = useState([]);
  const [sourceColumns, setSourceColumns] = useState([]);
  const [targetColumns, setTargetColumns] = useState([]);
  const [linkObjInfo, setLinkObjInfo] = useState<ILinkInfo>({
    Id: "0",
    ObjectId: "",
    SourceCompId: "",
    TargetCompId: "",
    SourceFieldId: "",
    TargetFieldId: "",
    SourceFieldName: "",
    TargetFieldName: "",
    Name: "",
    ObjectName: "",
    ObjectReportName: ""
  });

  const changeNameInput = () => {
    setNameInputState(!nameInputState ? true : false);
    if (nameInputState) {
      setLinkObjInfo({
        ...linkObjInfo,
        Id: "0",
        Name: "",
      });
    }
  };

  const changeGroupInput = () => {
    setGroupInputState(!groupInputState ? true : false);

    if (groupInputState) {
      setLinkObjInfo({
        ...linkObjInfo,
        ObjectId: "0",
        ObjectName: "",
      });
    }
  };

  const onChangeLink = (e: any, item: any) => {
    if (item && item.LinkId) {
      setLinkObjInfo({
        ...linkObjInfo,
        Id: item.LinkId,
        Name: item.LinkName
      });
    }
  }

  const onChangeGroup = (e: any, item: any) => {
    if (item && item.id) {
      setLinkObjInfo({
        ...linkObjInfo,
        ObjectId: item.id,
        ObjectName: item.name
      });
    }
  }

  const onChangeSourceColumn = (e: any, item: any) => {
    if (item && item.Id) {
      setLinkObjInfo({
        ...linkObjInfo,
        SourceFieldId: item.Id,
        SourceFieldName: item.Name,
      });
    }
  }

  const onChangeTargetColumn = (e: any, item: any) => {
    console.log(item);

    if (item && item.Id) {
      setLinkObjInfo({
        ...linkObjInfo,
        TargetFieldId: item.Id,
        TargetFieldName: item.Name,
      });
    }
  }

  const handleLinkNameTextInput = (e: any) => {
    let { name, value } = e.target;
    setLinkObjInfo({
      ...linkObjInfo,
      Id: "0",
      Name: value,
    });
  };

  const handleGroupNameTextInput = (e: any) => {
    let { name, value } = e.target;
    setLinkObjInfo({
      ...linkObjInfo,
      ObjectId: "0",
      ObjectName: value,
    });
  };


  // call api
  const getGroupNames = async (compId: number) => {
    let data = await getBusCompField_API(compId);
    if (data) {
      setGroupNames(data);
    }
  }

  useEffect(() => {
    if (props.dataManagerRed.componentParamDef) {
      getGroupNames(props.dataManagerRed.componentParamDef.Id);
    }
    return () => { }
  }, [props.dataManagerRed.componentParamDef])

  // current component def details
  useEffect(() => {
    if (props.dataManagerRed.componentDefDetails) {
      if (props.dataManagerRed.componentDefDetails.componentBase) {
        setLinkObjInfo({
          ...linkObjInfo,
          TargetCompId: "" + props.dataManagerRed.componentDefDetails.componentBase.id,
        });
      }
      if (props.dataManagerRed.componentDefDetails.componentLinks && props.dataManagerRed.componentDefDetails.componentLinks.Table) {
        setComponentLink(props.dataManagerRed.componentDefDetails.componentLinks.Table);
      }
      if (props.dataManagerRed.componentDefDetails.componentFields && props.dataManagerRed.componentDefDetails.componentFields.Table) {
        setTargetColumns(props.dataManagerRed.componentDefDetails.componentFields.Table);
      }
    }
    return () => { }
  }, [props.dataManagerRed.componentDefDetails])

  // prv component def details
  useEffect(() => {
    if (props.dataManagerRed.prvComponentDefDetails) {
      if (props.dataManagerRed.prvComponentDefDetails.componentBase) {
        setLinkObjInfo({
          ...linkObjInfo,
          SourceCompId: "" + props.dataManagerRed.prvComponentDefDetails.componentBase.id,
        });
      }
      if (props.dataManagerRed.prvComponentDefDetails.componentLinks) {
        // console.log('i m here');

        props.dataManagerRed.prvComponentDefDetails.componentLinks.forEach((item: any) => {
          if (item.buscompId === props.dataManagerRed.componentDefDetails.componentBase.id) {
            setLinkObjInfo({
              ...linkObjInfo,
              Id: "" + item.LinkId,
              SourceCompId: props.dataManagerRed.prvComponentDefDetails.componentBase.id,
              SourceFieldName: item.sourceColumnDisplayName,
              TargetFieldName: item.targetColumnDisplayName,
              Name: item.LinkName,
              // ObjectId: "",
              // SourceFieldId: "",
              // TargetFieldId: "",
              // ObjectName: "",
              // ObjectReportName: ""
            })
          }
        });
      }
    }
    return () => { }
  }, [props.dataManagerRed.prvComponentDefDetails, props.dataManagerRed.componentDefDetails])

  useEffect(() => {
    if (groupNames && groupNames.length > 0) {
      groupNames.forEach((item: any) => {
        setLinkObjInfo({
          ...linkObjInfo,
          ObjectId: "" + item.id,
          ObjectName: item.name,
        })
      });
    }
    return () => { }
  }, [groupNames])

  console.log('linkObjInfo', linkObjInfo);
  console.log('groupNames', groupNames);


  return (
    <>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.left_box}`}>
          <div className={`${styles.left_section}`}>
            <div className={`${styles.fld_col}`}>
              <label>Link Name</label>
              <div className={`${styles.add_btn}`}>
                {nameInputState ?
                  <input type="text" id="name" name="Name" value={linkObjInfo.Name} onChange={handleLinkNameTextInput} /> :
                  <Autocomplete
                    id="combo-box-demo"
                    className="drops"
                    options={componentLink}
                    getOptionLabel={(option: any) => option.buscompName}
                    renderInput={(params) => <TextField {...params} />}
                    value={componentLink.find((v: any) => "" + v.buscompId === linkObjInfo.Id) || ""}
                    onChange={onChangeLink}
                  />
                }
                <div className={`${styles.addBtn} ${nameInputState ? styles.cancel : styles.plus}`} onClick={changeNameInput} >
                  <span className={`${nameInputState ? styles.btnTransform : ""}`} >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.fld_col}>
              <label>Source Column</label>
              <Autocomplete
                id="combo-box-demo"
                className="drops"
                options={sourceColumns}
                getOptionLabel={(option: any) => option.Name}
                disabled={nameInputState ? false : true}
                renderInput={(params) => <TextField {...params} />}
                value={sourceColumns.find((v: any) => "" + v.Id === linkObjInfo.SourceFieldId) || ""}
                onChange={onChangeSourceColumn}
              />
              {/* <ReactSelect isDisabled={nameInputState ? false : true} /> */}
            </div>
            <div className={styles.fld_col}>
              <label>Target Column</label>
              <Autocomplete
                id="combo-box-demo"
                className="drops"
                options={targetColumns}
                getOptionLabel={(option: any) => option.Name}
                disabled={nameInputState ? false : true}
                renderInput={(params) => <TextField {...params} />}
                value={targetColumns.find((v: any) => "" + v.Id === linkObjInfo.TargetFieldId) || ""}
                onChange={onChangeTargetColumn}
              />
              {/* <ReactSelect isDisabled={nameInputState ? false : true} /> */}
            </div>
            <div className={styles.fld_col}>
              <label>Group Name</label>
              <div className={styles.select_width}>
                {groupInputState ?
                  <input type="text" id="ObjectName" name="ObjectName" value={linkObjInfo.ObjectName} onChange={handleGroupNameTextInput} /> :
                  <Autocomplete
                    id="combo-box-demo"
                    className="drops"
                    options={groupNames}
                    getOptionLabel={(option: any) => option.name}
                    value={groupNames.find((v: any) => "" + v.id === linkObjInfo.ObjectId) || ""}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={onChangeGroup}
                  />
                }
                <div
                  className={`${styles.addBtn} ${groupInputState ? styles.cancel : styles.plus
                    }`}
                  onClick={changeGroupInput}
                >
                  <span
                    className={`${groupInputState ? styles.btnTransform : ""}`}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className={`${styles.fld_col}`}>
              <FormControlLabel
                value="end"
                className="checks"
                control={<Checkbox color="primary" name="new" />}
                label="Show Lineage"
                labelPlacement="end"
              />
            </div>

            <div className={`${styles.btn_sec}`}>
              <div className={`${styles.save}`}>
                <div className={`${styles.save_icon}`}>
                  <SaveIcon cclass={""} pathFill={"#fff"} />
                </div>
                <div className={`${styles.txt}`}>Save</div>
              </div>
              <div className={`${styles.remove}`}>
                <div className={`${styles.remove_icon}`}>
                  <CrossIcon />
                </div>
                <div className={`${styles.txt}`}>Remove</div>
              </div>
            </div>
          </div>
          <div className={`${styles.right_section}`}></div>
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
    onUpdateComponentDefDetails: (compDef: any) =>
      dispatch(updateComponentDefDetails(compDef)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);