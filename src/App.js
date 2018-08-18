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
    //update the shelf with the update shelf method from BooksAPI
    BooksAPI.update(book, shelf).then(handleResponse => {
      //handle the response
      //set new shelf
      book.shelf = shelf

      //update state with changed shelf
      /*filter to find book that is being moved and then update state
      with changed book/shelf using concat()
      */
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat(book)
      }))
    })
  }

  updateBooks = (book, shelf) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))

    this.changeShelf(book, shelf)

    this.setState((state) => ({
      books: state.books.concat([ book ])
    }))
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
