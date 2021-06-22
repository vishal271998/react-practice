import React, {Component} from "react";

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            imgUrl: 'https://picsum.photos/200',
            tags: ['tag1', 'tag2', 'tag3'],
        };
        this.styles = {
            fontSize: 10,
            fontWeight: "bold"
        };
    }

    render() {
        return (
            <div>
                <p>{ this.props.name }</p>
                <img src={this.state.imgUrl} alt=""/>
                <span style={this.styles} className={this.getCBadgeClasses()}>{this.formarCount()}</span>
                <button className="btn- btn-secondary btn-sm ">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li >{ tag }</li>)}
                </ul>

            </div>
        );
    }

    getCBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary"
        return classes;
    }

    formarCount(){
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
export default Counter;