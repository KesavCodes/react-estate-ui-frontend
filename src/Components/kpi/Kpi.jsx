const Kpi = () => {
  const kpiValues = [
    { heading: "16+", content: "Years of Experience" },
    { heading: "200", content: "Awards Gained" },
    { heading: "1200+", content: "Property Ready" },
  ];
  return (
    <div className="boxes d-flex justify-content-between">
      {kpiValues.map((kpi) => {
        return (
          <div className="box" key={kpi.heading}>
            <h2 className="fs-2">{kpi.heading}</h2>
            <h3 className="fs-5 fw-light">{kpi.content}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Kpi;
