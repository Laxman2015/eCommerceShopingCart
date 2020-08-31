import { combineReducers } from "redux";
import {
  AddToCart,
  GetBookLists,
  CartList,
  BookLists,
  OrderedBook,
  OrderedBookLists,
  GetOrderedBookLists,
} from "../actions";

import { ADD_TO_CART, GET_BOOK_LIST, GET_ORDERED_LIST } from "../constant";

const initialCartState: CartList = {
  cartList: [],
};

const initialBookState: BookLists = {
  bookLists: [],
};

const initialOrderedState: OrderedBookLists = {
  orderedList: [],
};

export function cartReducer(
  state = initialCartState,
  action: AddToCart
): CartList {
  switch (action.type) {
    case ADD_TO_CART:
      let newCartList;
      const isItemExist = state.cartList.some(
        (item) => item.id == action.payload.id
      );
      if (!isItemExist) {
        newCartList = [...state.cartList, action.payload];
      } else {
        newCartList = state.cartList.map((item) => {
          if (item.id == action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return {
            ...item,
            quantity: item.quantity,
          };
        });
      }

      return {
        ...state,
        cartList: [...newCartList],
      };
    default:
      return state;
  }
}

export function bookListReducer(
  state = initialBookState,
  action: GetBookLists
): BookLists {
  switch (action.type) {
    case GET_BOOK_LIST:
      return {
        ...state,
        bookLists: [...state.bookLists, action.payload],
      };
    default:
      return state;
  }
}

export function orderedBooks(
  state = initialOrderedState,
  action: GetOrderedBookLists
): OrderedBookLists {
  switch (action.type) {
    case GET_ORDERED_LIST:
      return {
        ...state,
        orderedList: [...state.orderedList, action.payload],
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  bookList: bookListReducer,
  cartList: cartReducer,
  orderedList: orderedBooks,
});

export type RootState = ReturnType<typeof rootReducer>;
