import React, { Component } from "react";

class Content extends Component {
  state = { musiclist: [] };
  componentDidMount() {
    document.getElementById("first").scrollIntoView(true);
    fetch("http://127.0.0.1:3000/musiclist.json", {
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
        const z = Math.floor(Math.random() * musiclist.length);
        this.setState({ musiclist: musiclist[z] });
      })
      .then(response => response, error => error);
  }
  render() {
    var messages = this.props.location.state;
    const content = messages["content"];
    var contents = [];
    for (var i = 1; i < content.length; i++) {
      contents[i - 1] = <p key={i}>{content[i]}</p>;
    }
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <audio
          id="first"
          src={"../mp3/" + this.state.musiclist + ".mp3"}
          controls="controls"
          autoPlay="autoplay"
          loop="loop"
          style={{ width: "100%", backgroundColor: "#f1f3f4" }}
        />
        <div
          style={{
            width: 800,
            height: "auto",
            margin: "50px auto",
            padding: "10px"
          }}
        >
          <h2>{messages["title"]}</h2>
          <h4>{messages["author"]}</h4>
          {contents}
          <p>{messages["date"]}</p>
        </div>
      </div>
    );
  }
}

export default Content;
