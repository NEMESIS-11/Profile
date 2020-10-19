import React from "react"
import "../font-awesome/css/font-awesome.min.css"
import "../CSS/MainBody.css"
import UserData from "../Data/UserData.js"
import CoverImage from "./MainBody/CoverImage.js"
import Box1 from "./MainBody/Box1.js"
import Box2 from "./MainBody/Box2.js"
import Box3 from "./MainBody/Box3.js"
class MainBody extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        id: 0,
        name: "",
        nickName: "",
        profileImage: "",
        coverImage: "",
        city: "",
        country: "",
        email: "",
        facebookId: "",
        twitterId: "",
        linkedinId: "",
        aboutMe: "",
        aiRating: 0,
        reviewRating: 0,
        SkillliesEarned: 0,
        badgesReceived: []
      };
    }
    render(){

      this.state = UserData[0]

      return (
        <div id="main-body">
            <CoverImage coverImage={this.state.coverImage} />
            <div className="grid-container" >
                <Box1 data = {this.state} />
                <Box2 data = {this.state} />
                <Box3 data = {this.state} />
            </div>

        </div>
      )
    }
}




export default MainBody
