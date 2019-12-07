import React from "react";

const PageWrapper = ({ children, column = false }) => {
  return (
    <React.Fragment>
      <div className="pageWrapper">{children}</div>
      <style jsx>{`
        .pageWrapper {
          display: flex;
          flex-direction: ${column ? "column" : "row"};
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          flex-wrap: wrap;
        }
      `}</style>
    </React.Fragment>
  );
};

export { PageWrapper };
