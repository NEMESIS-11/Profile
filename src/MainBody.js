import React from "react"
import "./font-awesome/css/font-awesome.min.css"
import twitter from './Images/twitter.png';
import linkedin from './Images/linkedin.png';
import facebook from './Images/facebook.png';
import badge from './Images/badge.png';
import UserData from "./UserData.js"
class MainBody extends React.Component {
    constructor(){
      super();
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
            <img className="coverImage" src={this.state.coverImage} alt="cover-image" />
            <div className="grid-container" >
                <div className="Box-1">
                    <img className="Profile-Image" src={this.state.profileImage} alt="your-image" />
                    <div className="User-Data">
                        <div id= "User-Data" className="User-Data-1">
                            <div className="User-Name">
                                {this.state.name}
                            </div>
                            <div className="User-Nickname">
                                {this.state.nickName}
                            </div>
                            <div className="Social-Media-Links">
                                <a href={this.state.linkedinId}>
                                  <img
                                    id="Icons"
                                    className="Limkedin-Icon"
                                    src={linkedin}
                                    alt="linkedin"
                                  />
                                </a>
                                <a href={this.state.facebookId}>
                                  <img
                                    id="Icons"
                                    className="Facebook-Icon"
                                    src={facebook}
                                    alt="facebook"
                                  />
                                </a>
                                <a href={this.state.twitterId}>
                                  <img
                                    id="Icons"
                                    className="Twitter-Icon"
                                    src={twitter}
                                    alt="twitter"
                                  />
                                </a>
                            </div>
                        </div>
                        <div id= "User-Data" className="User-Data-2">
                            <div id="User-Review-Rating">
                                {this.state.aiRating}
                            </div>
                            <div className="User-Info">
                                REVIEW RATING
                            </div>

                            <div id="User-Mail">
                                {this.state.email}
                            </div>
                            <div className="User-Info">
                                EMAIL
                            </div>
                        </div>

                        <div id= "User-Data" className="User-Data-3">
                            <div id="User-Review-Rating">
                                {this.state.reviewRating}
                            </div>
                            <div className="User-Info">
                                AI RATING
                            </div>

                            <div id="User-Mail">
                                {this.state.city}
                            </div>
                            <div className="User-Info">
                                LOCATION
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Box-2">
                    <div className="Skilllies-Earned">
                        <div className="Skilllies-Heading">Skilllies Earned</div>
                        <div id="Skilllies-Earned">{this.state.SkillliesEarned}</div>
                    </div>
                    <div className="Bagdes-Recieved">
                        <div className="Bagdes-Heading">Badges Received</div>
                        <ul className="Badges-List">
                            <li className="Bagde">
                              <img className="Badge-Image" src={badge}/>
                              {this.state.badgesReceived[0]}
                            </li>
                            <li className="Bagde">
                              <img className="Badge-Image" src={badge}/>
                              {this.state.badgesReceived[1]}
                            </li>
                            <li className="Bagde">
                              <img className="Badge-Image" src={badge}/>
                              {this.state.badgesReceived[2]}
                            </li>
                            <li className="Bagde">
                              <img className="Badge-Image" src={badge}/>
                              {this.state.badgesReceived[3]}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Box-3">
                    <div className="About-Me-Heading">
                        About Me
                    </div>
                    <div className="About-Me-Details">
                        <p>
                            {this.state.aboutMe}
                        </p>
                    </div>
                </div>
            </div>

        </div>
      )
    }
}
export default MainBody
