import React, { Component } from "react";
import image1 from "./images/bg.jpg";
import image2 from "./images/bg2.jpg";
import image3 from "./images/bg3.jpg";
import image4 from "./images/bg4.jpg";
import image5 from "./images/bg5.jpg";

class Article extends Component {
  constructor() {
    super();
    this.state = {
      article: "",
      imagelist: [],
      url: ""
    };
    this.content = this.content.bind(this);
  }
  async componentWillMount() {
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
    document.getElementById("container").style.visibility = "hidden";

    var curDate = new Date();
    var url = [];
    url[0] = ["https://interface.meiriyiwen.com/article/today?dev=1"];
    var img = [];
    var list = [];
    img[0] = image1;
    img[1] = image2;
    img[2] = image3;
    img[3] = image4;
    img[4] = image5;
    for (var i = 0; i < 5; i++) {
      const z = Math.floor(Math.random() * (5 - i));
      list[i] = img[z];
      img.splice(z, 1);

      var preDate = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
      var day = preDate.getDate();
      var year = preDate.getFullYear();
      var month = preDate.getMonth() + 1;
      if (month / 10 < 1) {
        month = "0" + month;
      }
      if (day / 10 < 1) {
        day = "0" + day;
      }
      var time = "" + year + month + day;
      curDate = preDate;
      url[i + 1] =
        "https://interface.meiriyiwen.com/article/day?dev=1&date=" + time;
    }
    this.setState({ imagelist: list, url: url });
    console.log(url);
  }

  content(e) {
    this.props.history.push({
      pathname: "/content",
      state: {
        title: e.title,
        author: e.author,
        digest: e.digest,
        content: e.content,
        date: e.date
      }
    });
  }

  render() {
    var article = [];

    for (var i = 0; i < 5; i++) {
      article[i] = (
        <Content
          id={i}
          key={i}
          url={this.state.url[i]}
          img={this.state.imagelist[i]}
          contents={this.content}
        />
      );
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white ",
          zIndex: 5000,
          position: "absolute"
        }}
      >
        {article}
        <div
          style={{
            width: 420,
            height: 100,
            top: 0,
            left: 330,
            borderRight: "#eee 1px solid",
            position: "relative"
          }}
        />
      </div>
    );
  }
}
class Content extends Component {
  constructor() {
    super();
    this.state = {
      article: ""
    };
    this.content = this.content.bind(this);
  }
  async componentWillMount() {
    await this.getData(this.props.url);
    console.log(this.props.url);
  }
  async getData(url, i) {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        //data数据处理
        const title = data["data"]["title"];
        const author = data["data"]["author"];
        const digest = data["data"]["digest"] + "...";
        var content = data["data"]["content"];
        const date = data["data"]["date"]["curr"];
        const prev = data["data"]["date"]["prev"];
        content = content.replace(/<p>/g, "|");
        content = content.replace(/<[^>]+>/g, "");
        content = content.split("|");
        const all = {
          title: title,
          author: author,
          digest: digest,
          content: content,
          date: date,
          prev: prev
        };
        this.setState({ article: all });
      })
      .then(response => response, error => error);
  }
  content() {
    const e = {
      title: this.state.article.title,
      author: this.state.article.author,
      digest: this.state.article.digest,
      content: this.state.article.content,
      date: this.state.article.date
    };
    this.props.contents(e);
  }
  render() {
    const content = {
      width: "100%",
      height: 400,
      marginLeft: "12%",
      marginTop: 0,
      position: "relative"
    };
    var text1 = {
      width: "420px",
      height: 250,
      top: 50,
      left: 0,
      padding: 30,
      border: "#eee 1px solid",
      position: "absolute",
      cursor: "pointer"
    };
    const text2 = {
      width: "420px",
      height: 250,
      top: 50,
      left: 699,
      padding: 30,
      border: "#eee 1px solid",
      position: "absolute",
      cursor: "pointer"
    };
    var img1 = { width: 700, height: 400, position: "relative", left: 480 };
    const img2 = { width: 700, height: 400, position: "relative", left: 0 };
    if (this.props.id % 2 !== 0) {
      text1 = text2;
      img1 = img2;
    }
    return (
      <div>
        <div
          style={{
            width: 420,
            height: 100,
            top: 0,
            left: 330,
            borderRight: "#eee 1px solid",
            position: "relative"
          }}
        />
        <div style={content}>
          <div style={text1} onClick={this.content}>
            <h2>{this.state.article.title}</h2>
            <h4>{this.state.article.author}</h4>
            <h4 style={{ color: "gray" }}>{this.state.article.digest}</h4>
            <h5 style={{ color: "gray" }}>{this.state.article.date}</h5>
          </div>
          <img src={this.props.img} style={img1} alt="" />
        </div>
      </div>
    );
  }
}
export default Article;
