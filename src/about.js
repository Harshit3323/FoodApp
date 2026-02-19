import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "harshit",
        pfp: "asdf",
        bio: "asasddsdf",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Harshit3323");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, avatar_url, bio } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} width={100}></img>
        <h2>{name}</h2>
        <h3>{bio}</h3>
      </div>
    );
  }
}
export default About;
