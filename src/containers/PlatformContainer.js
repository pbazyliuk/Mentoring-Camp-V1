import React from "react";

import Header from "../components/Header/Header";
import ContentContainer from "./ContentContainer";
import styles from "./MainContainer.scss";

class PlatformContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles["container"]}>
        {/* <Header /> */}
        <ContentContainer />
      </div>
    );
  }
}

export default PlatformContainer;
