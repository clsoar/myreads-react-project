# MyReads Bookshelf Project

This is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.

The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Getting Started

Navigate to [https://clsoar.github.io/myreads-react-project/](https://clsoar.github.io/myreads-react-project/) to view the application.

OR

Download or clone the project files and then:

* install all project dependencies with `npm install`
* start the server with `npm start`

The app will be opened in your browser.

## App Use

The app allows you to customize a virtual bookshelf with 3 virtual shelves - "Currently Reading", "Want to Read", and "Read".

The arrow in the bottom right corner of each book cover allows you to move books between shelves, from the search results to a shelf, or remove a book from the shelf (by selecting none).

At the lower right  of the screen, a plus sign will lead you to a serach page where new books can be searched for. These books will include those from your bookshelf and new ones. The drop-down selection option will tell you the current shelf, if any, that a book resides on, and allow you the same adding, moving, and removing functionality as the home page. Changes made on either page will be reflected on both pages. Changes persist through page refreshes.

The back arrow in your browser or found on the search bar will take you back to the home bookshelf page.

## Important Backend Server Notes
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend server. 

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

## Credits

Starter repository provided by Udacity for the Front End Nanodegree.

Special thanks to Maeva Nguyen Anh Phuong for her webinar on problem solving through this project. 

