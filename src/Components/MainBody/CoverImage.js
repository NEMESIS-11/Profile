import React from "react"
import "../../CSS/CoverImage.css"
class CoverImage extends React.Component {
render() {
        return (
            <div>
                <img className="coverImage" src={this.props.coverImage} alt="cover-image" />
            </div>
        );
    }
}
export default CoverImage
