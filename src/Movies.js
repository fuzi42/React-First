import React, { Component } from "react";

import image from "./images/mp.jpg";
import image1 from "./images/mp1.jpg";
import image2 from "./images/mp2.jpg";
import image3 from "./images/mp3.jpg";
import image4 from "./images/mp4.jpg";
import image5 from "./images/mp5.jpg";
import image6 from "./images/mp6.jpg";
import image7 from "./images/mp7.png";
import image8 from "./images/mp8.jpg";
import image9 from "./images/mp9.png";
import image10 from "./images/mp10.jpg";
import image11 from "./images/mp11.jpg";
import image12 from "./images/mp12.jpg";
import image13 from "./images/mp13.jpg";
import "./font.css";

class Test extends Component {
  constructor() {
    super();
    this.state = { moviesUrl: "", moviePage: [], moviepage: 1 };
  }
  //  componentWillMount(){
  //   fetch("http://127.0.0.1:8000/getmoviesimages/",{
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     mode: 'cors'
  //   }).then(response => response.json()).then(data => { //data数据处理
  //      const image=data['movieImage'];

  //       this.setState({movieImage: image})

  //   }).then(response => response, error => error);

  //  }
  componentWillMount() {
    let script = document.querySelector("#script");
    if (script) {
      return;
    }
    script = document.createElement("script");
    script.id = "script";
    script.src = "../static/js/mouse.js";
    document.querySelector("body").appendChild(script);
    var moviesNameList1 = [];
    var moviesImageList1 = [];
    var moviePage = [];
    moviesNameList1[1] =
      "【书记舞】辉夜大小姐想让我告白 ED チカっとチカ千花っ♡  ";
    moviesNameList1[2] = "【IU】Sondia - 大人(我的大叔 OST)";
    moviesNameList1[3] = "【真人版】杀戮都市（下）";
    moviesNameList1[4] = "【真人版】浪客剑心";
    moviesNameList1[5] = "【真人版】犬屋敷";
    moviesNameList1[6] = "【真人版】杀戮都市（上）";
    moviesNameList1[7] = " 要听神明的话";
    moviesNameList1[8] = " 预告犯";
    moviesNameList1[9] = " 【日版】白夜行";
    moviesNameList1[10] = " 【SPEC】SPEC〜警視庁公安部公安第五課";
    moviesNameList1[11] = "【动画】rick and morty";
    moviesNameList1[12] = "【黑镜】第一集 国歌";
    moviesNameList1[13] = " 流感";
    moviesNameList1[14] = " 熔炉";
    moviesImageList1[1] = image;
    moviesImageList1[2] = image1;
    moviesImageList1[3] = image2;
    moviesImageList1[4] = image3;
    moviesImageList1[5] = image4;
    moviesImageList1[6] = image5;
    moviesImageList1[7] = image6;
    moviesImageList1[8] = image7;
    moviesImageList1[9] = image8;
    moviesImageList1[10] = image9;
    moviesImageList1[11] = image10;
    moviesImageList1[12] = image11;
    moviesImageList1[13] = image12;
    moviesImageList1[14] = image13;
    moviePage[1] = { name: moviesNameList1, image: moviesImageList1 };
    moviesNameList1 = [];
    moviesImageList1 = [];
    moviesNameList1[1] =
      "【书记舞】辉夜大小姐想让我告白 ED チカっとチカ千花っ♡  ";
    moviesNameList1[2] = "【IU】Sondia - 大人(我的大叔 OST)";
    moviesNameList1[3] = "【真人版】杀戮都市（下）";
    moviesImageList1[1] = image;
    moviesImageList1[2] = image1;
    moviesImageList1[3] = image2;
    moviePage[2] = { name: moviesNameList1, image: moviesImageList1 };

    moviesNameList1 = [];
    moviesImageList1 = [];
    moviesNameList1[1] =
      "【书记舞】辉夜大小姐想让我告白 ED チカっとチカ千花っ♡  ";
    moviesNameList1[2] = "【IU】Sondia - 大人(我的大叔 OST)";
    moviesNameList1[3] = "【真人版】杀戮都市（下）";
    moviesImageList1[1] = image;
    moviesImageList1[2] = image1;
    moviesImageList1[3] = image2;
    moviePage[3] = { name: moviesNameList1, image: moviesImageList1 };

    moviesNameList1 = [];
    moviesImageList1 = [];
    moviesNameList1[1] =
      "【书记舞】辉夜大小姐想让我告白 ED チカっとチカ千花っ♡  ";
    moviesNameList1[2] = "【IU】Sondia - 大人(我的大叔 OST)";
    moviesNameList1[3] = "【真人版】杀戮都市（下）";
    moviesImageList1[1] = image;
    moviesImageList1[2] = image1;
    moviesImageList1[3] = image2;
    moviePage[4] = { name: moviesNameList1, image: moviesImageList1 };
    this.setState({ moviePage: moviePage });

    fetch("http://127.0.0.1:8000/solvemovies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {})
      .then(response => response, error => error);
  }
  page(e) {
    this.setState({ moviepage: e });
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "50px 5px",
          background: "#1d1d1d"
        }}
      >
        <h1
          className="line welcome-message-anim"
          style={{ zIndex: 5000, position: "relative" }}
        >
          负子的个人影院
        </h1>
        <div
          style={{
            width: "40px",
            height: "100%",
            float: "left",
            textAlign: "center",
            lineHeight: "40px",
            zIndex: 5000,
            position: "absolute"
          }}
        >
          {/* <div><Icon type="caret-up" style={{fontSize: 30,color: 'white'}} /></div> */}
          <hr />
          <h3 onClick={this.page.bind(this, "1")}>1</h3>
          <h3 onClick={this.page.bind(this, "2")}>2</h3>
          <h3 onClick={this.page.bind(this, "3")}>3</h3>
          <h3 onClick={this.page.bind(this, "4")}>4</h3>
          <hr />
          {/* <div style={{position: 'absolute',bottom: 50,left:5}}><Icon type="caret-down" style={{fontSize: 30, color: 'white'}} /></div> */}
        </div>
        <Pages moviepage={this.state.moviePage[this.state.moviepage]} />

        <canvas
          style={{
            width: "93.5%",
            height: "100%",
            zIndex: "100",
            position: "absolute",
            top: 10
          }}
        />
      </div>
    );
  }
}
class Pages extends Component {
  render() {
    var pages = [];
    const moviepage = this.props.moviepage;

    for (var i = 1; i < moviepage.image.length; i++) {
      pages[i] = (
        <Pian
          movieId={i}
          movieImage={moviepage.image[i]}
          movieName={moviepage.name[i]}
          key={i}
        />
      );
    }
    return (
      <div
        style={{
          width: "1400px",
          height: "100%",
          background: "#ffffff0a",
          zIndex: 5000,
          position: "absolute",
          left: "4.2%"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "auto",
            margin: "auto",
            padding: 17,
            zIndex: 1000,
            position: "absolute"
          }}
        >
          {pages}
        </div>
      </div>
    );
  }
}
class Pian extends Component {
  movie(e) {
    console.log(e);

    fetch("http://127.0.0.1:8000/getmovies/" + e, {
      method: "GET",

      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        //data数据处理

        window.location.href = data["movieUrl"];
      })
      .then(response => response, error => error);
  }
  render() {
    const mo = {
      width: "200px",
      height: "160px",
      margin: "5px 1%",
      float: "left",
      cursor: "pointer",
      textAlign: "center"
    };
    return (
      <div style={mo} onClick={this.movie.bind(this, this.props.movieId)}>
        <img
          src={this.props.movieImage}
          alt=""
          style={{ width: "100%", height: "120px" }}
        />
        <h5 style={{ color: "white", margin: "2px" }}>
          {this.props.movieName}
        </h5>
      </div>
    );
  }
}
export default Test;
