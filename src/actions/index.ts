import * as constants from '../constant';

export interface Book {
    id: number;
    title: string;
    desc: string;
  }

  export interface OrderedBook {
    id: number;
    title: string;
    desc: string;
    quantity: number;
  }
  

  export interface CartList {
    cartList: OrderedBook[],
  }

  export interface BookLists {
    bookLists: Book[],
  }

  export interface OrderedBookLists {
    orderedList: OrderedBook[],
  }

  export interface State {
    bookList: Book[],
    cartList: OrderedBook[],
    orderedList: OrderedBook[]

  }

//define action interfaces
export interface AddToCart {
    type: constants.ADD_TO_CART;
    payload: OrderedBook;
}
export interface GetBookLists {
    type: constants.GET_BOOK_LIST;
    payload: Book;
}

export interface GetOrderedBookLists {
  type: constants.GET_ORDERED_LIST;
  payload: OrderedBook;
}


//define actions

export function addToCart(newBook: OrderedBook): AddToCart {
    return {
      type: constants.ADD_TO_CART,
      payload: newBook
    }
  }

export function getBookLists(book: Book): GetBookLists {
  return{
    type: constants.GET_BOOK_LIST,
    payload: book
  } 
};

export function getOrderedBookLists(book: OrderedBook): GetOrderedBookLists {
  return{
    type: constants.GET_ORDERED_LIST,
    payload: book
  } 
};