import React from "react";
import UserInfo from "../utils/userInfo";
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
    let isDark = !true;
    const { name, avatar_url, bio } = this.state.userInfo;
    return (
      <>
        <UserInfo.Consumer>{({ name }) => <h3>{name}</h3>}</UserInfo.Consumer>
        <div className={`${isDark ? "bg-black" : " bg-white"} w-auto h-30`}>
          <img src={avatar_url} width={100}></img>
          <h2 className={`${!isDark ? "text-black" : " text-white"}`}>
            {name}
          </h2>
          <h3>{bio}</h3>
        </div>
      </>
    );
  }
}
export default About;
