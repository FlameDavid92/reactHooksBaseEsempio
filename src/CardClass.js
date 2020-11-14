import React from 'react';

export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opened: false
        };
    }

    toggleShowText = () => {
        this.setState((prevState)=>{
            return {opened: !prevState.opened}
        });
    }

    render(){
        return(
            <>
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0">
                        <button className="btn btn-link" onClick={this.toggleShowText}>
                            {this.props.titolo+" "+this.props.data}
                        </button>
                    </h5>
                </div>
            </div>

            {this.state.opened ? (
                <div className="collapse show">
                    <div className="card-body">
                        {this.props.testo}
                    </div>
                </div>) : ""}
            </>
        )
    }
}