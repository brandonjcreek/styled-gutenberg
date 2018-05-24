import React from "react";
import Styles from "./Styles";

const Gutenberg = props => (
  <Styles dangerouslySetInnerHTML={{ __html: props.children }} />
);

export default Gutenberg;
