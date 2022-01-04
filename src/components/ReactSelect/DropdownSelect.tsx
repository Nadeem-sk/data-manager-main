import React, { Component } from "react";
import styles from "./ReactSelect.module.css";
import Select from "react-select";
import "./style.css"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// for designing sortby selection
const customStyles = {
  menu: (provided: any, state: any) => ({
    ...provided,
    padding: 10,
  }),

  control: (provided: any, state: any) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    minHeight: "22px",
    height: "26px",
    borderRadius: "0",
    alignItem: "left",
   
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: "26px",
    padding: "0 6px",
    alignItem: "left",
    width: "89%"
  }),

  input: (provided: any, state: any) => ({
    ...provided,
    margin: "-6px 0 0 0",
    padding: "-15px 0 0 0",
    fontSize: "12px",
    alignItem: "left",
  }),
  indicatorSeparator: (state: any) => ({
    display: "none",
    fontSize: "13px",
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    height: "26px",
    alignItem: "left",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontSize: "13px",
    marginTop: "-5px",
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    marginTop: "-6px",
    alignItem: "left",
    fontSize: "13px"
  }),
};

type Props = {
  isDisabled?: boolean;

}

const ReactSelect = (props: Props) => <Select options={options} isDisabled={props.isDisabled} styles={customStyles} />;
export default ReactSelect;
