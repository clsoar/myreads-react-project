import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './HomePage'
import SearchPage from './SearchPage'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
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
    BooksAPI.update(book, shelf).then(this.getBooks())
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomePage
            books={this.state.books}
            changeShelf = {this.changeShelf}  />
        )}/>
        <Route path="/search" render={() => (
          <SearchPage
            books = {this.state.books}
            changeShelf = {this.changeShelf}
          />
        )}/>
      </div>

  )}
}

export default BooksApp
