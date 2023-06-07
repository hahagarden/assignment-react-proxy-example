const DisplayBoard = ({ numberOfContents, getAllContent, children }) => {
  return (
    <div className="display-wrapper">
      <div className="display-box">
        <div className="display-board">
          <h4>생성된 수</h4>
          <div className="number">{numberOfContents}</div>
        </div>
        <div className="get-button">
          <button onClick={() => getAllContent()}>Get all {children}s</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
