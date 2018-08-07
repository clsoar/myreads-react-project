import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchPage extends Component {

  state = {
    query: '',
    bookResults: []
  }

  getBookResults = (query) => {

  }

  updateBookResults = (query) => {
    if (query) {
      BooksAPI.search(query).then((bookResults) => {
        (bookResults.error) ? (
          this.setState({ bookResults: [] })
        ) :
        (this.setState({ bookResults: bookResults }))
      })
    }else {
      this.setState({ bookResults: []})
    }
  }


  updateQuery = (query) => {
    let trimmedQuery = query.replace(/^\s+/,'')
    this.setState({ query: trimmedQuery })
    this.updateBookResults(query)
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              className="book-search-input"
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.bookResults.map((bookResults) => {
              let shelf = "none"

              this.props.books.map((book) => {
                return(
                  book.id === bookResults.id ?
                  shelf = book.shelf : ""
                )

              })

              return (
                <li key={bookResults.id}>
                  <Book
                    book={ bookResults }
                    changeShelf={this.props.changeShelf}
                    currentShelf={ shelf }
                  />
                </li>
            )
          })}
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchPage
