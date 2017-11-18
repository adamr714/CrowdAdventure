import default from "redux-form/lib/isInvalid";


// export default function Person(props) {
//     return (
//         <div>
//             <div>{props.name}</div>
//             <div><img src={props.imageURL} /></div>
//             <div>{props.job}</div>
//         </div>
//     )
// }

// import Person from './test-review';


export class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            highlight: !this.state.highlight
        });
    }

    render() {
        const classes = `person ${this.state.highlight ? 'highlight' : ''}`;
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
}

export default Person;