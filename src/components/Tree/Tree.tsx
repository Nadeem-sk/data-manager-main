import React from "react";
import MinusRoundIcon from "../../Icons/MinusRoundIcon";
import PlusIcon from "../../Icons/PlusIcon";
import PlusRoundIcon from "../../Icons/PlusRoundIcon";
import style from "./Tree.module.css";

const NodeTree = () => {
  return (
    <div className={`${style.node_tree} ${style.nice_scroll}`}>
      <div className={`${style.node} ${style.first_node}`}>
        <div className={`${style.expand_colapse} ${style.node_expand}`}>
          <PlusRoundIcon cclass={style.plus_circle} pathFill={"#6f6ee0"} />
          <MinusRoundIcon cclass={style.minus_circle} pathFill={"#222"} />
        </div>
        <div className={`${style.node_label}`}>CM Contact</div>
        <div className={`${style.node_add}`}>
          <PlusIcon cclass={""} pathFill={"white"} />
        </div>
      </div>
      <ul className={style.tree}>
        <li>
          <div className={`${style.node} `}>
            <div className={style.node_link_lbl} title="Id - ContactId">
              Id - ContactId
            </div>
            <div className={`${style.expand_colapse} `}>
              <PlusRoundIcon cclass={style.plus_circle} pathFill={"#6f6ee0"} />
              <MinusRoundIcon cclass={style.minus_circle} pathFill={"#222"} />
            </div>
            <div className={`${style.node_label}`}>QC Record</div>
            <div className={`${style.node_add}`}>
              <PlusIcon cclass={""} pathFill={"white"} />
            </div>
          </div>
        </li>
        <li>
          <div className={`${style.node} `}>
            <div className={style.node_link_lbl} title="Id - ContactId">
              Id - ContactId
            </div>
            <div className={`${style.expand_colapse} ${style.node_expand} `}>
              <PlusRoundIcon cclass={style.plus_circle} pathFill={"#6f6ee0"} />
              <MinusRoundIcon cclass={style.minus_circle} pathFill={"#222"} />
            </div>
            <div className={`${style.node_label}`}>CM Contact Address</div>
            <div className={`${style.node_add}`}>
              <PlusIcon cclass={""} pathFill={"white"} />
            </div>
          </div>
          <ul className={style.tree}>
            <li>
              <div className={`${style.node} ${style.active} `}>
                <div className={style.node_link_lbl} title="Id - ContactId">
                  Id - ContactId
                </div>
                <div className={`${style.expand_colapse} `}>
                  <PlusRoundIcon cclass={style.plus_circle} pathFill={"#6f6ee0"} />
                  <MinusRoundIcon cclass={style.minus_circle} pathFill={"#222"} />
                </div>
                <div className={`${style.node_label}`}>QC Record</div>
                <div className={`${style.node_add}`}>
                  <PlusIcon cclass={""} pathFill={"white"} />
                </div>
              </div>
            </li>
            <li>
              <div className={`${style.node} `}>
                <div className={style.node_link_lbl} title="Id - ContactId">
                  Id - ContactId
                </div>
                <div className={`${style.expand_colapse} `}>
                  <PlusRoundIcon cclass={style.plus_circle} pathFill={"#6f6ee0"} />
                  <MinusRoundIcon cclass={style.minus_circle} pathFill={"#222"} />
                </div>
                <div className={`${style.node_label}`}>CM Contact Address</div>
                <div className={`${style.node_add}`}>
                  <PlusIcon cclass={""} pathFill={"white"} />
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div className={`${style.node} `}>
            <div className={style.node_link_lbl} title="Id - ContactId">
              Id - ContactId
            </div>
            <div className={`${style.expand_colapse} `}>
              <PlusRoundIcon cclass={style.plus_circle} pathFill={"#6f6ee0"} />
              <MinusRoundIcon cclass={style.minus_circle} pathFill={"#222"} />
            </div>
            <div className={`${style.node_label}`}>CM Contact Address</div>
            <div className={`${style.node_add}`}>
              <PlusIcon cclass={""} pathFill={"white"} />
            </div>
          </div>
        </li>
        <li>
          <div className={`${style.node} `}>
            <div className={style.node_link_lbl} title="Id - ContactId">
              Id - ContactId
            </div>
            <div className={`${style.expand_colapse} `}>
              <PlusRoundIcon cclass={style.plus_circle} pathFill={"#6f6ee0"} />
              <MinusRoundIcon cclass={style.minus_circle} pathFill={"#222"} />
            </div>
            <div className={`${style.node_label}`}>CM Payment</div>
            <div className={`${style.node_add}`}>
              <PlusIcon cclass={""} pathFill={"white"} />
            </div>
          </div>
        </li>
        <li>
          <div className={`${style.node} `}>
            <div className={style.node_link_lbl} title="Id - ContactId">
              Id - ContactId
            </div>
            <div className={`${style.expand_colapse} `}>
              <PlusRoundIcon cclass={style.plus_circle} pathFill={"#6f6ee0"} />
              <MinusRoundIcon cclass={style.minus_circle} pathFill={"#222"} />
            </div>
            <div className={`${style.node_label}`}>CM Cashflows Stored</div>
            <div className={`${style.node_add}`}>
              <PlusIcon cclass={""} pathFill={"white"} />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NodeTree;
