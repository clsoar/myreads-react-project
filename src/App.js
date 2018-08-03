import React from 'react'

import HomePage from './HomePage'
import SearchPage from './SearchPage'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)

    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            books = {this.state.books}
            changeShelf = {this.changeShelf}
             />) :
          (<HomePage
            books={this.state.books}
            changeShelf = {this.changeShelf}  />)
        }
      </div>

  )}
}

export default BooksApp
