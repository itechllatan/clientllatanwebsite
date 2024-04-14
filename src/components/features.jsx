import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="col-md-10 col-md-offset-4 section-title">
          <h2 className="feat-title">Caracteristicas</h2>
        </div>
      <div className="container">
        
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-16 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
