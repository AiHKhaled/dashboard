import React, { Component } from "react";
//import Chart from "./Chart";
import ChartTest from "./TestChart";
import { Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;
export default class Segmentation extends Component {
  render() {
    return (
      <div>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <section
          style={{ fontFamily: "Roboto" }}
          className=" section is-top-padded"
        >
          <Title level={3}>Segmentation</Title>

          <div id="awardsRating" className="tile is-ancestor">
            <div className="tile is-6 is-vertical is-parent">
              <article
                className="tile is-12 is-child box"
                style={{
                  borderRadius: "10px !important",
                }}
              >
                <p className="sub-caption">Global Subscribers</p>
                <p className="is-smaller">Year Wise(In Million)</p>

                <ChartTest />
              </article>
            </div>

            <div className="tile is-6 is-vertical is-parent">
              <article
                className="tile is-12 is-child box"
                style={{ borderRadius: "10px !important" }}
              >
                <p className="sub-caption">Global Subscribers</p>
                <p className="is-smaller">Year Wise(In Million)</p>

                <ChartTest />
              </article>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="sub-caption">Emmy Awards</p>
              <p className="is-smaller">Nominations vs Wins</p>
            </div>

            {/*  </div>
          </div> */}
            <div className="column is-half-desktop is-half-fullhd">
              {/*  <span className="has-image">
                            <span className="badge is-star">
                                <img src={this.props.ratingIcon} alt="" /></span>  <h3 className="snapshot image-has-text">Ratings</h3>
                            <span className="rect is-status">
                                {this.props.ratingValue}
                            </span>
                        </span> */}
              <div className="card">
                <div className="card-content">
                  <p className="sub-caption">IMDb Ratings</p>
                  <p className="is-smaller">Genre Wise</p>
                  {/* <Chart datasource={this.props.datasource.imdbRatingConfig} /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

{
  /* <div className="columns is-multiline is-paddingless">
          <div className="column  is-half-desktop is-half-fullhd"> */
}
{
  /*  <span className="has-image">
                            <span className="badge is-trophy">
                                <img src={this.props.awardIcon} alt="" /></span>  <h3 className="snapshot image-has-text">Awards</h3>
                            <span className="rect is-status">
                                {this.props.awardValue}
                            </span>
                        </span> */
}
{
  /* <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content"></div>
            </div>
          </article>
        </div> */
}
