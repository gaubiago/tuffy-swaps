import React from "react";

class ErrorMsg extends React.Component {
  render() {
    return (
      <div
        className={"error-msg " + (this.props.hidden ? "" : "error-msg-active")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="form-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default ErrorMsg;