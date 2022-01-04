import React, { useState } from "react";
import ComponentList from '../../components/ComponentList/ComponentList';
import { connect } from "react-redux";
import { updateManageComponentScreenFlag } from "../../store/actions/dataManagerAction";
import ComponentExplorer from "../ComponentExplorer/ComponentExplorer";
import ManageField from "../ManageField/ManageField";
import Permission from "../../components/FieldComponents/Permission/Permission";

type Props = {
  onUpdateManageComponentScreenFlag: any;
  dataManagerRed: any;
}

const DataManager = (props: Props) => {
  console.log(props.dataManagerRed);

  const displayUi = () => {
    if (props.dataManagerRed.allScreenFlag.manageFieldScrFlag) {
      if (props.dataManagerRed.allScreenFlag.permissionScrFlag) {
        return <Permission />
      } else {
        return <ManageField />
      }
    } else {
      if (props.dataManagerRed.allScreenFlag.componentListScrFlag) {
        return <ComponentList />
      } else {
        return <ComponentExplorer />
      }
    }
  }

  return displayUi();
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
    onUpdateManageComponentScreenFlag: (flag: boolean) =>
      dispatch(updateManageComponentScreenFlag(flag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataManager);