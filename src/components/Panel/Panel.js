import React from "react";
import { auth, database } from "../../utils/firebase";
import styles from "./Panel.scss";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
  }

  componentWillMount() {
    database.ref("users").on("value", snapshot => {
      console.log("data changed", snapshot.val());
      this.data = snapshot.val();
    });
  }

  render() {
    return (
      <div className={styles["panel-container"]}>
        <div className={styles["panel-container-first-line-wrapper"]}>
          <div className={styles["panel-container-header"]}>
            Learn Async Javascript
          </div>

          <div className={styles["panel-container-progress-bar"]}>
            <div className={styles["panel-container-progress-bar-line"]} />
            <div
              className={styles["panel-container-progress-bar-line-active"]}
            />
            <div className={styles["panel-container-progress-bar-number"]}>
              80%
            </div>
            {/* {JSON.stringify(this.data, null, 2)} */}
          </div>
        </div>
        <div className={styles["panel-container-descrip-header"]}>
          Get acquinted with Javascript’s async stuff....
        </div>

        <button className={styles["panel-container-button"]}>Workplan</button>
      </div>
    );
  }
}

export default Panel;
