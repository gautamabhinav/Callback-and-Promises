// Define an array of book objects
const books = [
    {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
    {title: "1984", author: "George Orwell", year: 1949},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925},
    {title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967},
    {title: "Brave New World", author: "Aldous Huxley", year: 1932},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
  ];
  
  // Define the callback function to log the titles
  function logTitles(titles) {
    console.log(titles.join("\n"));
  }
  
  // Extract only the titles from the books array using map
  const titles = books.map(book => book.title);
  
  // Sort the titles in alphabetical order
  titles.sort();
  
  // Call the callback function with the sorted titles array
  logTitles(titles);
  