import React, { useEffect, useState } from "react";
import "./style.css"
import AddComponent from "../../components/AddComponent/AddComponent";
import FieldList from "../../components/FieldList/FieldList";
import MyComponent from "../../components/ReactSelect/DropdownSelect";
import UpdateComponent from "../../components/UpdateComponent/UpdateComponent";
import styles from "./ComponentExplorer.module.css";

import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Link from "../../components/Link/Link";
import { connect } from "react-redux";
import Tree from "../../components/Tree/Tree";
import { getComponentById_API } from "../../helpers/api";
import { IComponentDef } from "../../interfaces/IComponent";
import { updateComponentDefDetails } from "../../store/actions/dataManagerAction";

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
  onUpdateComponentDefDetails: any;
}

const ComponentExplorer = (props: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const getComponentDefById = async (compDefParam: IComponentDef) => {
    let compDef = await getComponentById_API(compDefParam.Id);
    if (compDef) {
      console.log("compDef", compDef);
      props.onUpdateComponentDefDetails({...compDef})
    }
  }

  useEffect(() => {
    getComponentDefById(props.dataManagerRed.componentParamDef);
    return () => { }
  }, [props.dataManagerRed.componentParamDef])

  console.log('store', props.dataManagerRed);
  return (
    <>

      <div className={`${styles.top_band}`}>
        <div className={`${styles.svg_icon}`}>
          <svg width="16px" height="16px">
            <path
              fillRule="evenodd"
              opacity="0"
              fill="rgb(111, 110, 224)"
              d="M-0.000,-0.000 L16.000,-0.000 L16.000,16.000 L-0.000,16.000 L-0.000,-0.000 Z"
            ></path>
            <path
              fillRule="evenodd"
              fill="rgb(111, 110, 224)"
              d="M4.371,8.999 C4.165,8.999 3.996,8.806 3.996,8.571 L3.996,7.429 C3.996,7.194 4.165,7.001 4.371,7.001 L11.629,7.001 C11.835,7.001 12.004,7.194 12.004,7.429 L12.004,8.571 C12.004,8.806 11.835,8.999 11.629,8.999 L4.371,8.999 ZM15.992,1.720 L15.992,14.280 C15.992,15.225 15.225,15.992 14.280,15.992 L1.720,15.992 C0.775,15.992 0.008,15.225 0.008,14.280 L0.008,1.720 C0.008,0.775 0.775,0.008 1.720,0.008 L14.280,0.008 C15.225,0.008 15.992,0.775 15.992,1.720 ZM13.998,13.794 L13.998,2.206 C13.998,2.094 13.906,2.002 13.794,2.002 L2.206,2.002 C2.094,2.002 2.002,2.094 2.002,2.206 L2.002,13.794 C2.002,13.906 2.094,13.998 2.206,13.998 L13.794,13.998 C13.906,13.998 13.998,13.906 13.998,13.794 Z"
            ></path>
          </svg>
        </div>
        <div className={`${styles.title}`}>Component Explorer</div>
      </div>

      <div className={`${styles.wrapper}`}>
        <div className={`${styles.left_box}`}>
          <div className={`${styles.left_section}`}>

            {props.dataManagerRed.allScreenFlag.newComponentScrFlag ?
              <>
                <div className={`${styles.left_Sec_title}`}>Add Component</div>
                <AddComponent parentId={""} />
              </> :
              <>
                <div className={`${styles.left_Sec_title}`}>Component Details</div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    Basic Properties
                  </AccordionSummary>
                  <AccordionDetails>
                    <UpdateComponent dataManagerRed={undefined} />
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    Fields
                  </AccordionSummary>
                  <AccordionDetails>
                    <FieldList />
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    Link
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link />
                  </AccordionDetails>
                </Accordion>
              </>}
          </div>
        </div>
        <div className={`${styles.right_Section}`}>
          <div className={`${styles.bg_image}`}>
            {props.dataManagerRed.allScreenFlag.newComponentScrFlag ? null :
              <Tree />}
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
    onUpdateComponentDefDetails: (compDef: any) =>
      dispatch(updateComponentDefDetails(compDef)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentExplorer);