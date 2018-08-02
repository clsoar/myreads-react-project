import React from 'react'
import HomePage from './HomePage'
import SearchPage from './SearchPage'


import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: "true"
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            books = {this.state.books} />) :
          (<HomePage
            books={this.state.books} />)
        }
      </div>

  )}
}

export default BooksApp
