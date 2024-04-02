import React from "react";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
    state = {
        color: "#fff",
    };
    
    handleChange = (color) => {
        this.setState({ color: color.hex });
    };
    
    render() {
        return (
            <div>
            <SketchPicker color={this.state.color} onChange={this.handleChange} />
            </div>
            );
        }
    }
export default ColorPicker;
