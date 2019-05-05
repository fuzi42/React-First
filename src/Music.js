import React, { Component } from "react";
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
class Music extends Component {
  constructor() {
    super();
    this.state = {
      musiclist: ""
    };
  }
  async componentWillMount() {
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
    document.getElementById("container").style.visibility = "hidden";
    await fetch("http://127.0.0.1:3000/musiclist.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        //data数据处理

        const musiclist = data["musiclist"];
        this.setState({ musiclist: musiclist });
      })
      .then(response => response, error => error);
  }
  render() {
    var audio = [];
    var musiclist = "";

    for (var i = 0; i < this.state.musiclist.length; i++) {
      musiclist = {
        name: this.state.musiclist[i],
        artist: " ",
        url: "../mp3/" + this.state.musiclist[i] + ".mp3",
        cover: "cover1.jpg",
        lrc: "lrc1.lrc",
        theme: "#ebd0c2"
      };

      audio.push(musiclist);
    }
    const ap = new APlayer({
      container: document.getElementById("player"),
      listFolded: false,
      listMaxHeight: 90,
      lrcType: 3,
      audio: audio
    });
    return <div />;
  }
}

export default Music;
