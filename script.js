
// Click handler for search button
const captureSearchValue = () => {
    let searchTerm = document.getElementById('search-bar').value;
    return searchTerm;
  };

  // Filter books based on search input
  const filterBooks = (searchTerm, books) => {
    let filteredBooks = [];
    const flattenBooks = flattenObjectValuesIntoArray(books); 
    const filtered = flattenBooks.filter(item => {
      if (item.includes(searchTerm)){
        return item
      }
    });
    filtered.forEach(item => {
      let book = {
        title: item[0],
        author: item[1],
        tags: item.slice(2,)
      }
      filteredBooks.push(book);
    })
    return filteredBooks;
  };


  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (books) => {
  let elements = [];
  books.forEach(book => {
   elements.push(structureBookAsHtml(book));
  })
  return elements;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  let searchString = captureSearchValue();
  let matchedBooks = filterBooks(searchString, books);
  let listOfDivs = structureBooksAsHtml(matchedBooks);
  renderBooksToDom(listOfDivs);
}

// Grab search button from the DOM
const searchBtn = document.getElementById('search-btn');

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });


 
  