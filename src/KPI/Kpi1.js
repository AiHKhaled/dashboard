import React, { Component } from "react";
class Kpi extends Component {
  render() {
    const cardlist = this.props.cards.map((kpi) => {
      return (
        <a
          className="column is-tablet is-one-quarter-desktop is-half-tablet is-full-mobile"
          key={kpi.id}
          href="#section"
          onClick={() => {
            this.props.handleClick(kpi.id);
          }}
        >
          <div className="card">
            <div className="card-content">
              <div className="columns columns-kpi ">
                <div className="column header">
                  <div className="column indicator">{kpi.value}</div>
                  <div className={kpi.iconType}>
                    <img src={kpi.icon} alt="" />
                  </div>
                </div>
              </div>
              <div className="sub-indicator">{kpi.id}</div>
            </div>
          </div>
        </a>
      );
    });
    return <div className="columns is-mobile">{cardlist}</div>;
  }
}
export default Kpi;
