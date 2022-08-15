
const axios = require ('axios');
const {expect} = require ('chai');
const randomstring = require ('../helpers/helper');

describe('Bookstore', async ()=> {
      it('GET BOOK: you can get a single book by book ID', async()=> {
        const book = await axios.get('https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/988b88a7495be6855fc196f2d3a273d0');
        expect(book.data.id).equal('988b88a7495be6855fc196f2d3a273d0');
        
    });

      it('GET ALL BOOKS: get all books in one call', async()=> {
        const book = await axios.get('https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/books');
        expect(book.data.statusCode).equal(200);
       
      });
    
      it.only('CREATE BOOK: create a book with Title, and Author', async()=> {
        const newTitle = randomstring;
        const newAuthor = randomstring;
        const credentials = {title: newTitle, author: newAuthor};
        const book = await axios.post('https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/books', credentials);
        const id = book.data.id;
        const getBook = await axios.get('https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/' + id);
        expect(getBook.status).equal(200);

      });
        
      it('UPDATE BOOK: update title and Author based on book id',async () => {
        const newTitle = randomstring;
        const newAuthor = randomstring;
        const credentials = {title: newTitle, author: newAuthor};
        const book = await axios.put('https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/988b88a7495be6855fc196f2d3a273d0',credentials);
        expect(book.data.title).eql(newTitle);
        expect(book.data.author).eql(newAuthor);
      });  

      it('DELETE BOOK: you can remove a book by ID', async()=> {
        const newTitle = randomstring;
        const newAuthor = randomstring;
        const credentials = {title: newTitle, author: newAuthor};
        const book = await axios.post('https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/books', credentials);
        const id = book.data.id
        const bookDel = await axios.delete('https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/' +id);
        expect(bookDel.status).eql(200);
        
      });
});