import React, { Component } from "react";

import image from "./images/bg.jpg";
import "./animate.min.css";
import Typed from "../node_modules/typed.js/src/typed";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      content: "",
      juzi: ""
    };
    this.movie = this.movie.bind(this);
    this.article = this.article.bind(this);
    this.musiclist = this.musiclist.bind(this);
  }

  componentDidMount() {
    fetch("https://v1.hitokoto.cn/?c=f&encode=text ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(response => response.text())
      .then(data => {
        //data数据处理

        console.log(data);
        var strings = [];
        strings.push(data);
        strings.push("  ");
        var typed = new Typed("#a", {
          strings: strings,
          typeSpeed: 30
        });
      })
      .then(response => response, error => error);
  }
  movie() {
    window.location.href = "movies";
  }
  article() {
    window.location.href = "article";
  }
  musiclist() {
    window.location.href = "music";
  }

  render() {
    setTimeout(() => {
      fetch("https://v1.hitokoto.cn/?c=f&encode=text ", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors"
      })
        .then(response => response.text())
        .then(data => {
          //data数据处理

          console.log(data);
          var strings = [];
          strings.push(data);
          strings.push("  ");
          var typed = new Typed("#a", {
            strings: strings,
            typeSpeed: 30
          });
          this.setState({ content: data });
        })
        .then(response => response, error => error);
    }, 7000);
    //  4750
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          background: "url(" + image + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 5000,
          position: "absolute"
        }}
      >
        <div
          style={{
            width: 200,
            height: 400,
            zIndex: 100,
            position: "absolute",
            left: 70,
            top: 200,
            textAlign: "center"
          }}
        >
          <h2
            className="animated slideInLeft "
            style={{ color: "white", marginBottom: 100 }}
          >
            负子的世界
          </h2>
          <div style={{ margin: "40px 0" }}>
            <h3
              className="animated slideInLeft faster delay-1s"
              style={{ color: "#ff9292", textDecoration: "none" }}
              onClick={this.movie}
            >
              影院
            </h3>
          </div>
          <div style={{ margin: "40px 0" }}>
            <h3
              className="animated slideInLeft fast delay-1s"
              style={{ color: "#ff9292", textDecoration: "none" }}
              onClick={this.article}
            >
              文章
            </h3>
          </div>
          <div style={{ margin: "40px 0" }}>
            <h3
              className="animated slideInLeft  delay-1s"
              style={{ color: "#ff9292", textDecoration: "none" }}
              onClick={this.musiclist}
            >
              歌单
            </h3>
          </div>
        </div>
        <div
          id="a"
          style={{
            width: 800,
            color: "white",
            marginTop: 200,
            zIndex: 100,
            position: "absolute",
            top: 500,
            left: 40
          }}
        />

        <div>
          <svg
            viewBox="0 0 2880 1600"
            height="100%"
            preserveAspectRatio="xMaxYMax slice"
          >
            <polygon opacity="0.7" points="2000,1620 0,1820 0,0 500,0 " />
          </svg>
        </div>
      </div>
    );
  }
}
export default Home;
