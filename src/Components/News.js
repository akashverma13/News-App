// Let's import React, our styles and React Async
import React from 'react';
import './News.css';
class News extends React.Component {
    state = {
        error: null,
        items: null,
        isLoaded: null
    }

    render() {
        const { items, isLoaded } = this.state;
        if (!isLoaded) {
            return (
                <div class="pagination-centered center-block">
                    <form>
                    <div>
                        <div class="input-group input-group-lg">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-lg">News</span>
                            </div>
                            <input autocomplete="off" placeholder="Bitcoin" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="text" name="keyword" id="keyowrd" onChange={e => {
                                fetch(`wss://gentle-hollows-81970.herokuapp.com/api/news/${e.target.value}`)
                                    .then(response => response.json())
                                    .then(resData => {
                                        this.setState({ items: resData, isLoaded: true }); //this is an asynchronous function
                                        console.log(this.state.items);
                                    })
                            }} />
                        </div>

                    </div>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div class="pagination-centered center-block">
                    <form>
                    <div>
                        <div class="input-group input-group-lg">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-lg">News</span>
                            </div>
                            <input autocomplete="off" placeholder="Bitcoin" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="text" name="keyword" id="keyowrd" onChange={e => {
                                fetch(`wss://gentle-hollows-81970.herokuapp.com/api/news/${e.target.value}`)
                                    .then(response => response.json())
                                    .then(resData => {
                                        this.setState({ items: resData, isLoaded: true }); //this is an asynchronous function
                                        console.log(this.state.items);
                                    })
                            }} />
                        </div>

                    </div>
                    <div class="pagination-centered center-block">
                        {items.map(item => (
                            <a href={item.url}>
                                <div class="card text-white bg-dark mb-3">
                                    <div class="card-header">{item.author}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    </form>
                </div>
            )
        }
    }
}
export default News;