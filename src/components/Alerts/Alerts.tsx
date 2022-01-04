import React, { useEffect, useState } from "react";
import { ALERT_STATUS } from "../../helpers/constants";
import style from "./Alerts.module.css";

export default function Alerts(props: any) {

  // {status:false,value: "",message: ""}

  const { status, message ,value } = props.alert;
  const [updatedStatus, setUpdatedStatus] = useState(value);

  useEffect(() => {
    
    let clearStatus = setTimeout(() => {
      setUpdatedStatus("");
    }, 5000);

    return () => {
      clearTimeout(clearStatus)
    }
  }, []);

  return (
    <div className={`${style.alertBox} `}>
      {updatedStatus === ALERT_STATUS.success ? (<div className={`${style.alert}  ${style.success_alert} `}>
        <svg
          role="img"
          width="16"
          height="16"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <g fill="white">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417L5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </g>
        </svg>
        {message}
      </div>) : updatedStatus === ALERT_STATUS.fail ? (<div className={`${style.alert}  ${style.error_alert} `}>

        <svg
          role="img"
          width="18"
          height="18"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M12 22A9.99 9.99 0 0 1 2 12v-.2a10.005 10.005 0 0 1 17.074-6.874A10 10 0 0 1 12 22zm0-8.59L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.411v-.001z"
              fill="white"
            />
          </g>
        </svg>{" "}
        {message}
      </div>) : null}

    </div>
  );
}
