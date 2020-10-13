import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ 
                savedBooks: savedBooks 
            }))
            .catch(err => console.error(err));
    }

    handleSave = book => {
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({
                    savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) 
                }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({
                    savedBooks: this.state.savedBooks.concat([savedBook]) 
                }))
                .catch(err => console.error(err));
        }}

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                    <div>
                        {this.props.books.map(result => (
                            <div className="card mb-3" 
                                key={result._id}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="img-fluid" 
                                            src={result.image}
                                            alt={result.title} />
                                    </div>

                                    <div className="col-md-10">
                                        {/* Title and Author */}
                                        <h4 className="card-title">
                                            {result.title} by {result.authors}
                                        </h4>
                                        {/* View and Save buttons */}
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <button className="bg-primary">
                                                    <a href={result.link} 
                                                        className="btn-primary mt-2" 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                    > View
                                                    </a>
                                                </button>
                                                <button onClick={() => this.handleSave(result)} className="btn-primary mt-2 ml-2">
                                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? ( 
                                                    "Unsave" 
                                                ) : ( 
                                                    "Save"
                                                )}
                                                </button>
                                            </div>
                                        </div>
                                        {/* Description */}
                                        <p className="card-text">{result.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

export default Results;