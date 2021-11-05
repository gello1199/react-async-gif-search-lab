import React, { Component } from "react";

class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmit = (e) => {
        e.preventDefalut()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}></input>
                </form>
            </div>
        )
    }
}

export default GifSearch