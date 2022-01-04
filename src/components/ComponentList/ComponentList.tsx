import React, { useEffect, useState } from "react";
import { getComponentList_API } from "../../helpers/api";
import { IComponentDef, IComponent, IComponentLists } from "../../interfaces/IComponent";
import styles from "./ComponentList.module.css";
import { connect } from "react-redux";
import {
  updateAllScreenFlag,
  updateComponentParamDef,
  updateComponentList,
  updateManageComponentScreenFlag,
} from "../../store/actions/dataManagerAction";
import { formatDateTime } from "../../helpers/common";

type Props = {
  onUpdateComponentList: any;
  onUpdateAllScreenFlag: any;
  onUpdateManageComponentScreenFlag: any;
  dataManagerRed: any;
  onUpdateComponentDef: any;
};

const ComponentList = (props: Props) => {
  // start useState method
  const [filteredCompListData, setFilteredCompListData] =
    useState<IComponentLists>([]);
  const [searchVal, setSearchVal] = useState("");
  const [searchIcon, setSearchIcon] = useState(true);

  // start general function
  const getCompList = async () => {
    let data = await getComponentList_API();
    if (data && data.length > 0) {
      props.onUpdateComponentList(data);
      setFilteredCompListData(data);
    }
  };

  const onSearchComp = (ev: any) => {
    setSearchVal(ev.target.value);
  };

  const filteredCompListDataFun = () => {
    if (searchVal !== "") {
      setSearchIcon(false);
      let filteredCompList = props.dataManagerRed.componentList.filter(
        (item: IComponent) => {
          return item.Name.toLowerCase().includes(searchVal.toLowerCase());
        }
      );
      setFilteredCompListData(filteredCompList);
    } else {
      setFilteredCompListData(props.dataManagerRed.componentList);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      filteredCompListDataFun();
    }
  };

  const onCompDetails = (id: string, name: string) => {
    props.onUpdateAllScreenFlag({
      ...props.dataManagerRed.allScreenFlag,
      componentListScrFlag: false,
    });
    // console.log(id,name);
    props.onUpdateComponentDef({ ...props.dataManagerRed.componentParamDef, Id: id, Name: name })
  };

  const onNewComponent = () => {
    props.onUpdateAllScreenFlag({
      ...props.dataManagerRed.allScreenFlag,
      newComponentScrFlag: true,
      componentListScrFlag: false,
    });
  };

  // start useEffect method
  useEffect(() => {
    getCompList();
    return () => { };
  }, []);

  return (
    <div className={`${styles.bg_img}`}>
      <div className={`${styles.dm_wrap}`}>
        <div className={`${styles.band_02}`}>
          <div className={`${styles.left_Sec}`}>
            <div className={`${styles.svg_icon}`}>
              <svg width="16px" height="16px">
                <path
                  fillRule="evenodd"
                  opacity="0"
                  fill="rgb(238, 238, 238)"
                  d="M-0.000,-0.000 L16.000,-0.000 L16.000,16.000 L-0.000,16.000 L-0.000,-0.000 Z"
                />
                <path
                  fillRule="evenodd"
                  fill="rgb(111, 110, 224)"
                  d="M14.500,1.000 L1.500,1.000 C0.672,1.000 -0.000,1.672 -0.000,2.500 L-0.000,13.500 C-0.000,14.328 0.672,15.000 1.500,15.000 L14.500,15.000 C15.328,15.000 16.000,14.328 16.000,13.500 L16.000,2.500 C16.000,1.672 15.328,1.000 14.500,1.000 ZM14.313,13.500 L1.687,13.500 C1.584,13.500 1.500,13.416 1.500,13.312 L1.500,2.688 C1.500,2.584 1.584,2.500 1.687,2.500 L14.313,2.500 C14.416,2.500 14.500,2.584 14.500,2.688 L14.500,13.312 C14.500,13.416 14.416,13.500 14.313,13.500 ZM13.000,10.625 C13.000,10.418 12.832,10.250 12.625,10.250 L6.375,10.250 C6.168,10.250 6.000,10.418 6.000,10.625 L6.000,11.375 C6.000,11.582 6.168,11.750 6.375,11.750 L12.625,11.750 C12.832,11.750 13.000,11.582 13.000,11.375 L13.000,10.625 ZM13.000,7.625 C13.000,7.418 12.832,7.250 12.625,7.250 L6.375,7.250 C6.168,7.250 6.000,7.418 6.000,7.625 L6.000,8.375 C6.000,8.582 6.168,8.750 6.375,8.750 L12.625,8.750 C12.832,8.750 13.000,8.582 13.000,8.375 L13.000,7.625 ZM13.000,4.625 C13.000,4.418 12.832,4.250 12.625,4.250 L6.375,4.250 C6.168,4.250 6.000,4.418 6.000,4.625 L6.000,5.375 C6.000,5.582 6.168,5.750 6.375,5.750 L12.625,5.750 C12.832,5.750 13.000,5.582 13.000,5.375 L13.000,4.625 ZM5.125,5.000 C5.125,4.379 4.621,3.875 4.000,3.875 C3.379,3.875 2.875,4.379 2.875,5.000 C2.875,5.621 3.379,6.125 4.000,6.125 C4.621,6.125 5.125,5.621 5.125,5.000 ZM5.125,8.000 C5.125,7.379 4.621,6.875 4.000,6.875 C3.379,6.875 2.875,7.379 2.875,8.000 C2.875,8.621 3.379,9.125 4.000,9.125 C4.621,9.125 5.125,8.621 5.125,8.000 ZM5.125,11.000 C5.125,10.379 4.621,9.875 4.000,9.875 C3.379,9.875 2.875,10.379 2.875,11.000 C2.875,11.621 3.379,12.125 4.000,12.125 C4.621,12.125 5.125,11.621 5.125,11.000 Z"
                />
              </svg>
            </div>
            <div className={`${styles.title}`}>Data Manager</div>
          </div>
          <div className={`${styles.search_band}`}>
            <div className={styles.search_box}>
              <input
                type="text"
                placeholder="Search"
                value={searchVal}
                onKeyDown={handleKeyDown}
                onChange={(ev: any) => onSearchComp(ev)}
              />

              {searchIcon ? (
                ""
              ) : (
                <svg
                  onClick={() => {
                    setSearchIcon(true);
                    setSearchVal("");
                    setFilteredCompListData(props.dataManagerRed.componentList);
                  }}
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
                onClick={() => filteredCompListDataFun()}
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
            </div>
          </div>
        </div>
        <div className={`${styles.table_band} `}>
          <div className={`${styles.tbl_head} ${styles.col_01} `}>Name</div>
          <div className={`${styles.tbl_head} ${styles.col_02} `}>Table</div>
          <div className={`${styles.tbl_head} ${styles.col_03} `}>Created</div>
          <div className={`${styles.tbl_head} ${styles.col_04} `}>Updated</div>
        </div>
        <div className={`${styles.number_row} ${styles.nice_scroll}`}>
          {filteredCompListData.map((item: IComponent) => {
            return (
              <div className={`${styles.row}`} key={item._id}>
                <div
                  className={`${styles.number_name} ${styles.col_01} ${styles.number_name} ${styles.link_col_01}`}
                  onClick={() => onCompDetails(item._id ? item._id : "", item.Name)}
                >
                  {item.Name}
                </div>
                <div className={`${styles.types} ${styles.col_02} `}>
                  {item.PrimaryTable}
                </div>
                <div className={`${styles.types} ${styles.col_03} `}>
                  {formatDateTime("" + item.Created, "")}
                </div>
                <div className={`${styles.types} ${styles.col_04} `}>
                  {formatDateTime("" + item.Updated, "")}
                </div>
              </div>
            );
          })}
        </div>
        <div className={`${styles.band_03}`}>
          <div className={`${styles.svg_icon}`}>
            <svg width="16px" height="16px">
              <path
                fillRule="evenodd"
                opacity="0"
                fill="rgb(238, 238, 238)"
                d="M-0.000,-0.000 L16.000,-0.000 L16.000,16.000 L-0.000,16.000 L-0.000,-0.000 Z"
              />
              <path
                fillRule="evenodd"
                fill="rgb(111, 110, 224)"
                d="M14.500,1.000 L1.500,1.000 C0.672,1.000 -0.000,1.672 -0.000,2.500 L-0.000,13.500 C-0.000,14.328 0.672,15.000 1.500,15.000 L14.500,15.000 C15.328,15.000 16.000,14.328 16.000,13.500 L16.000,2.500 C16.000,1.672 15.328,1.000 14.500,1.000 ZM14.313,13.500 L1.687,13.500 C1.584,13.500 1.500,13.416 1.500,13.312 L1.500,2.688 C1.500,2.584 1.584,2.500 1.687,2.500 L14.313,2.500 C14.416,2.500 14.500,2.584 14.500,2.688 L14.500,13.312 C14.500,13.416 14.416,13.500 14.313,13.500 ZM13.000,10.625 C13.000,10.418 12.832,10.250 12.625,10.250 L6.375,10.250 C6.168,10.250 6.000,10.418 6.000,10.625 L6.000,11.375 C6.000,11.582 6.168,11.750 6.375,11.750 L12.625,11.750 C12.832,11.750 13.000,11.582 13.000,11.375 L13.000,10.625 ZM13.000,7.625 C13.000,7.418 12.832,7.250 12.625,7.250 L6.375,7.250 C6.168,7.250 6.000,7.418 6.000,7.625 L6.000,8.375 C6.000,8.582 6.168,8.750 6.375,8.750 L12.625,8.750 C12.832,8.750 13.000,8.582 13.000,8.375 L13.000,7.625 ZM13.000,4.625 C13.000,4.418 12.832,4.250 12.625,4.250 L6.375,4.250 C6.168,4.250 6.000,4.418 6.000,4.625 L6.000,5.375 C6.000,5.582 6.168,5.750 6.375,5.750 L12.625,5.750 C12.832,5.750 13.000,5.582 13.000,5.375 L13.000,4.625 ZM5.125,5.000 C5.125,4.379 4.621,3.875 4.000,3.875 C3.379,3.875 2.875,4.379 2.875,5.000 C2.875,5.621 3.379,6.125 4.000,6.125 C4.621,6.125 5.125,5.621 5.125,5.000 ZM5.125,8.000 C5.125,7.379 4.621,6.875 4.000,6.875 C3.379,6.875 2.875,7.379 2.875,8.000 C2.875,8.621 3.379,9.125 4.000,9.125 C4.621,9.125 5.125,8.621 5.125,8.000 ZM5.125,11.000 C5.125,10.379 4.621,9.875 4.000,9.875 C3.379,9.875 2.875,10.379 2.875,11.000 C2.875,11.621 3.379,12.125 4.000,12.125 C4.621,12.125 5.125,11.621 5.125,11.000 Z"
              />
            </svg>
          </div>
          <div className={`${styles.new_comp_title}`} onClick={onNewComponent}>
            New Component
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
    onUpdateComponentList: (componentList: IComponentLists) =>
      dispatch(updateComponentList(componentList)),
    onUpdateManageComponentScreenFlag: (flag: boolean) =>
      dispatch(updateManageComponentScreenFlag(flag)),
    onUpdateAllScreenFlag: (allScreenFlag: any) =>
      dispatch(updateAllScreenFlag(allScreenFlag)),
    onUpdateComponentDef: (compDef: IComponentDef) =>
      dispatch(updateComponentParamDef(compDef)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentList);
