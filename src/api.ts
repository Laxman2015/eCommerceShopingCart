import axios from 'axios';

const bookListApi = "https://my-json-server.typicode.com/Laxman2015/bookList/bookLists";
const orderedListApi = "https://my-json-server.typicode.com/Laxman2015/bookList/orderedList"; 
export const getBookListData = async() => {
    const res = await axios.get(bookListApi).then(response => {
        return response.data;
    })
    return res;
} 

export const getOrderedBookListData = async() => {
    const res = await axios.get(orderedListApi).then(response => {
        return response.data;
    })
    return res;
} 