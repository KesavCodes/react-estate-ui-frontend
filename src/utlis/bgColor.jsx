const BgColor = ({ additionalClasses }) => {
  return (
    <div
      className={`container-lg position-absolute vh-100 w-100 top-0 d-none justify-content-end z-n1 px-5 ${additionalClasses}`}
    >
      <div className="bg-info bg-opacity-10" style={{ width: "30%" }}></div>
    </div>
  );
};

export default BgColor;
