import React from "react";
import { SketchPicker } from "react-color";
import style from "./ColorPicker.module.css";

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            color: "#9999ff",
        };
    }

    handleChange = (color) => {
        this.setState({ color: color.hex });
    };

    handleOpen = () => {
        this.setState({ open: !this.state.open });
        console.log(this.state.open);
    }

    handleClose = () => {
        this.setState({ open: false });
        console.log(this.state.open);
    }

    render() {
        return (
            <>
                <div className={style.container} style={{ background: this.state.color }}>
                    <h1 className={style.color__title}>Color Picker</h1>
                    <div className={style.under_construction}>Under Construction</div>
                    <div className={style.color__text}>Selected : {this.state.color}</div>
                    <button className={style.color__button} onClick={this.handleOpen}>Select color</button>
                    {this.state.open && (
                        <div className={style.color__overlay} onClick={this.handleClose}></div>
                    )}
                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                </div>
            </>
        );
    }
}
export default ColorPicker;
