export const Collapse = ({ title }) => {
  return (
    <>
      <div className="collapse">
        <button className="collapse_button">
          {title}
          <span className="arrow"></span>
        </button>
      </div>
    </>
  );
};
