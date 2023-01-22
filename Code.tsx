import React, {Component} from "react";

interface CodeProps {
    lang: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

class Code extends Component<CodeProps> {
    render() {
        return (
        <div className="container" style={{backgroundColor:"yellowgreen"}}>
            <div style={{width:"100%", backgroundColor:"green"}}>{this.props.lang}</div>
            <div className="codeblock" style={{marginLeft:"12px", backgroundColor:"yellow"}}>
                {this.props.children}
            </div>
        </div>
        )
    }
}

export default Code;