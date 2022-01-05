import * as React from 'react';
import "./style.css";
import { connect } from "react-redux";
import { Icon } from '@iconify/react';
import styles from "./List.module.css";
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SaveIcon from "../../../Icons/SaveIcon";
import { updateAllScreenFlag, updateFieldData } from '../../../store/actions/dataManagerAction';
import { getComponentField_API } from '../../../helpers/api';
import { useEffect, useState } from 'react';
import { IDataField, IDataFields, IFieldList } from '../../../interfaces/IComponent';
import { DATETIME_CONST, GROUP_BY_FIELD_DATA } from '../../../helpers/constants';
import { fieldDataFilter, formatDateTime } from '../../../helpers/common';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<svg role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708z" /></g></svg>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

type Props = {
  dataManagerRed: any;
  onUpdateAllScreenFlag: any;
  onUpdateFieldData: any;
}

const List = (props: Props) => {
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const [searchFilterText, setSearchFilterText] = useState("");
  const [simpleField, setSimpleField] = useState<IDataFields>([]);
  const [joinField, setJoinField] = useState<IDataFields>([]);
  const [calcField, setCalcField] = useState<IDataFields>([]);
  const [searchIcon, setSearchIcon] = useState(true);


  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const onPermission = () => {
    props.onUpdateAllScreenFlag({ ...props.dataManagerRed.allScreenFlag, permissionScrFlag: true })
  }

  const getCompFieldData = async (compId: number) => {
    let fData: IDataFields = await getComponentField_API(compId);
    if (fData && fData.length > 0) {
      props.onUpdateFieldData(fData)
    }
  }

  const filterDataBySearchText = (data: any, srchTxt: string) => {
    if (!isEmpty(srchTxt)) {
      let filteredData = [];
      srchTxt = srchTxt.toLowerCase();
      if (srchTxt[0].indexOf("*") > -1 || srchTxt[srchTxt.length - 1].indexOf("*") > -1) { //check for contains
        srchTxt = srchTxt.replace(/\*/g, "");
      }
      filteredData = data.filter((d: any) => d.name.toLowerCase().includes(srchTxt))
      console.log('search data ', filteredData);

      return filteredData;
    } else {
      return data;
    }
  }

  const isEmpty = (sVal: string) => {
    if (sVal === undefined || sVal === null || sVal.trim() === "") {
      return true;
    }
    return false;
  }

  const filterByType = (sFieldType: any) => {

    var filteredData: IDataFields = [];
    if (sFieldType == undefined || sFieldType == null) sFieldType = "";
    if (props.dataManagerRed.fieldData) {
      filteredData = fieldDataFilter(sFieldType, props.dataManagerRed.fieldData);
    }

    filteredData = filterDataBySearchText(filteredData, searchFilterText);
    return filteredData;

  }

  const setGroupByFieldData = () => {
    GROUP_BY_FIELD_DATA.forEach((type: any) => {
      switch (type) {
        case 'simple':
          setSimpleField(filterByType(type))
          break;
        case 'join':
          setJoinField(filterByType(type))
          break;
        case 'calc':
          setCalcField(filterByType(type))
          break;
        default:
          break;
      }
    })

  }

  const displayFieldCategory = (field: IDataField) => {
    let returnStr = [];
    if (field.required) {
      returnStr.push("Required");
    }
    if (field.APIFlag) {
      returnStr.push("API");
    }
    if (field.cmFlag) {
      returnStr.push("Campaign");
    }
    if (field.allowGet) {
      returnStr.push("Get");
    }
    if (field.allowSecureGet) {
      returnStr.push("Secure Get");
    }
    if (field.allowPost) {
      returnStr.push("Post");
    }
    if (field.allowSecurePost) {
      returnStr.push("Secure Post");
    }
    if (field.sensitiveFlag) {
      returnStr.push("Sensitive");
    }
    if (field.readonly) {
      returnStr.push("Read Only");
    }
    if (field.personalFlag) {
      returnStr.push("Personal Data");
    }
    if (field.allowxss) {
      returnStr.push("XSS");
    }
    return returnStr;
  }

  const onSearchField = (ev: any) => {
    setSearchFilterText(ev.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setSearchIcon(false);
      setGroupByFieldData();
    }
  };

  const searchBtn = () => {
    if (searchFilterText !== "") {
      setSearchIcon(false);
      setGroupByFieldData()
    }
  };

  const clearSearchBtn = () => {
    setSearchIcon(true);
    setSearchFilterText("");

    GROUP_BY_FIELD_DATA.forEach((type: any) => {
      if (props.dataManagerRed.fieldData) {
        switch (type) {
          case "simple":
            let simpleFiltData = props.dataManagerRed.fieldData.filter((d: any) => (d.joinid == 0 && !(d.type.startsWith("CALC"))))
            setSimpleField(simpleFiltData);
            break;
          case "join":
            let joinFiltData = props.dataManagerRed.fieldData.filter((d: any) => d.joinid != 0)
            setJoinField(joinFiltData)
            break;
          case "calc":
            let calcFiltData = props.dataManagerRed.fieldData.filter((d: any) => d.type.startsWith("CALC"));
            setCalcField(calcFiltData);
            break;
          default: break;
        }
      }
    })
  };

  useEffect(() => {
    setGroupByFieldData()

    return () => {
    }
  }, [props.dataManagerRed.fieldData])
  // console.log("simpleField ", simpleField);
  // console.log("joinField ", joinField);
  // console.log("calcField ", calcField);

  useEffect(() => {
    let compDefDetail = props.dataManagerRed.componentDefDetails.componentBase;
    if (compDefDetail) {
      getCompFieldData(compDefDetail.id);
    }
    return () => { }
  }, [props.dataManagerRed.componentDefDetails])

  console.log('searchFilterText', searchFilterText);


  return (
    <>
      <div className={`${styles.accord}`}>
        <div className={`${styles.accord_band}`}>
          <div className={styles.search_box}>
            <input
              type="text"
              placeholder="Search"
              value={searchFilterText}
              onKeyDown={handleKeyDown}
              onChange={(ev: any) => onSearchField(ev)}
            />
            {searchIcon ? (
              ""
            ) : (
              <svg
                onClick={() => clearSearchBtn()}
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8l-1.4 1.4z"
                  fill="#222"
                />
              </svg>
            )}

            <svg
              className={styles.search_icon}
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              onClick={() => searchBtn()}
            >
              <g fill="none">
                <path
                  d="M21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <SaveIcon cclass={""} pathFill={"#fff"} />
          </div>
          <div className={`${styles.save}`}>
            <div className={`${styles.save_icon}`}><Icon icon="bx:bx-save" color="white" width="16" height="16" margin-top="4px" fr={undefined} /></div>
            <div className={`${styles.txt}`} onClick={onPermission}>Permissions</div>
          </div>
        </div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Field <span>({simpleField.length})</span></Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className={`${styles.accord_cont} ${styles.nice_scroll}`}>
                <div className={`${styles.left_sec}`}>
                  <div className={`${styles.text01}`}>dfsd</div>
                  <div className={`${styles.text02}`}>fdd</div>
                </div>
                <div className={`${styles.right_sec}`}>
                  <div className={`${styles.all_val} `}>
        
                    <div className={`${styles.value}`}>abbd ofdddds </div>
                       <div className={`${styles.value}`}>abbd ofdddds sdd</div>
                       <div className={`${styles.value}`}>abc ffff</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abbd ofdddds sdd</div>
                       <div className={`${styles.value}`}>abc ffff</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abbd ofdddds sdd</div>
                       <div className={`${styles.value}`}>abc ffff</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abbd ofdddds sdd</div>
                       <div className={`${styles.value}`}>abc ffff</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abbd ofdddds sdd</div>
                       <div className={`${styles.value}`}>abc ffff</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abbd ofdddds sdd</div>
                       <div className={`${styles.value}`}>abc ffff</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abbd ofdddds sdd</div>
                       <div className={`${styles.value}`}>abc ffff</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                       <div className={`${styles.value}`}>abc</div>
                      
                
                  
                   
                  </div>
               
                  <div className={`${styles.owner_status}`}>Owner : haider Created : </div>
                </div>
                <Icon icon="vaadin:close-circle" fr={undefined} />
              </div>
          

          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Calc Field <span>({calcField.length})</span></Typography>
          </AccordionSummary>
          <AccordionDetails>
            {calcField.map((item: IDataField) => {
              return <div className={`${styles.accord_cont}`}>
                <div className={`${styles.left_sec}`}>
                  <div className={`${styles.text01}`}>{item.name}</div>
                  <div className={`${styles.text02}`}>{item.type}</div>
                </div>
                <div className={`${styles.right_sec}`}>
                  <div className={`${styles.all_val}`}>
                    {displayFieldCategory(item).map((str: any) => {
                      return <div className={`${styles.value}`}>{str}</div>
                    })}
                    <Icon icon="vaadin:close-circle" fr={undefined} />
                  </div>
                  <div className={`${styles.owner_status}`}>Owner : {item.Owner} Created : {formatDateTime(item.created, '')}</div>
                </div>
              </div>
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Join Field <span>({joinField.length})</span></Typography>
          </AccordionSummary>
          <AccordionDetails>
            {joinField.map((item: IDataField) => {
              return <div className={`${styles.accord_cont}`}>
                <div className={`${styles.left_sec}`}>
                  <div className={`${styles.text01}`}>{item.name}</div>
                  <div className={`${styles.text02}`}>{item.type}</div>
                </div>
                <div className={`${styles.right_sec}`}>
                  <div className={`${styles.all_val}`}>
                    {displayFieldCategory(item).map((str: any) => {
                      return <div className={`${styles.value}`}>{str}</div>
                    })}
                    <Icon icon="vaadin:close-circle" fr={undefined} />
                  </div>
                  <div className={`${styles.owner_status}`}>Owner : {item.Owner} Created : {formatDateTime(item.created, '')}</div>
                </div>
              </div>
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

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
    onUpdateFieldData: (data: IDataField) =>
      dispatch(updateFieldData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);