import React from "react";
import Page from "../utlis/page/page";
import { Row, Typography, Card, Button, Col } from "antd";
import ReactCardSlider from "react-card-slider-component";
import CardData from "./card";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

// const data = [
//   {
//     image: "../img5.png",
//   },
//   {
//     image: "../img4.png",
//   },
//   {
//     image: "../img3.png",
//   },
//   {
//     image: "../img2.png",
//   },
//   {
//     image: "../img1.png",
//   },
//   {
//     image: "../img1.png",
//   },
//   {
//     image: "../img1.png",
//   },
//   {
//     image: "../img1.png",
//   },
// ];

class CardDesign extends React.Component {
  render() {
    return (
      <>
        <div className="image">
          <img
            src="../img.png"
            preview={false}
            style={{ width: "100%", height: "400px" }}
          />
          <div>
            <Typography class="title">NAFFCO DIGITAL APPS STORE</Typography>
            <Typography class="title1">
              For Smart Connected Fire Protection System
            </Typography>
          </div>
        </div>

        <Row>
          <Col style={{ marginTop: "16px" }}>
            <div>
              <AiFillLeftCircle
                style={{
                  width: "50px",
                  height: "100px",
                  color: "white",
                }}
              />

              <img
                src="../img5.png"
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "200px",
                  marginTop: "70px",
                  marginLeft: "1px",
                }}
              />

              <img
                src="../img4.png"
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "200px",
                  marginLeft: "15px",
                  marginTop: "70px",
                }}
              />
              <img
                src="../img3.png"
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "200px",
                  marginLeft: "15px",
                  marginTop: "70px",
                }}
              />
              <img
                src="../img2.png"
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "200px",
                  marginLeft: "15px",
                  marginTop: "70px",
                }}
              />

              <AiFillRightCircle
                style={{
                  width: "50px",
                  height: "100px",
                  color: "white",
                }}
              />
            </div>
          </Col>
        </Row>

        <Card size="small" style={{ background: "#f5f5f5" }}>
          <CardData />
        </Card>
      </>
    );
  }
}

export default CardDesign;

{
  /* <Row>
          <Col style={{ width: "100%" }}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "20px",
              }}
            >
              Remote Service Apps
            </Typography>

            <br></br>
          </Col>

          {[
            {
              title: " Remote Asset Monitoring",
              subtitle: "Real-Time Energy Monitoring and Diagnostics",
            },
            {
              title: " Energy Monitoring & Analytics",
              subtitle: "Energy Monitoring and Analytics",
            },
            { title: "Digital Twin", subtitle: "Replica of reality" },
          ].map((e) => (
            <Col xs={24} sm={12} md={6}>
              <CardData {...e} />
            </Col>
          ))}
        </Row> */
}
