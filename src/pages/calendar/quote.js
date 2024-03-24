import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./quote.css";

function Quote({ data }) {
  if (!data) return "";
  // console.log(data);
  return (
    <div className={styles.quoteOrSomething}>
      {data.quote}
      <br />- {data.author}
    </div>
  );
}

const mapStateToProps = ({ quote }) => ({
  data: quote.quote,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
