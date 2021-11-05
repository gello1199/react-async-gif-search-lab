import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";


export default class GiftListContainer extends React.Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=pfJt9OkIzMd4FuLBsOFo309pURHUsJdP&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }))})})
    }

    componentDidMount() {
        this.fetchGifs()
    }
}