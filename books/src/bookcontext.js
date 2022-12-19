import React, { useContext, useEffect, useState } from 'react'
import {
    addDoc,
    deleteDoc,
    doc,
    onSnapshot
} from 'firebase/firestore'

import {
   booksColRef,
   db
} from './firebase'

const BookContext = React.createContext()


const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const [error, setError] = useState('')
    
    function fetchBooks() {
        onSnapshot(booksColRef, (snapshot) => {
            let tempBooks = []
            snapshot.docs.forEach((doc) => {
                tempBooks.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            console.log("hello")
            setBooks(books)
        })
    }

    function uploadBooks(obj) {
        addDoc(booksColRef, obj).then(() => {
            console.log("successfully uploaded")
        }).catch(err => {
            console.log(err)
        })
    }

    function deleteBooks(id) {
        const bookdocRef = doc(db, 'books', id)
        deleteDoc(bookdocRef)
            .then(() => {
                console.log("succesfully deleted")
            }).catch(err => {
                console.log("error deleting book")
            })
    }

    useEffect(() => {
        const listener = onSnapshot(booksColRef, (snapshot) => {
            let tempBooks = []
            snapshot.docs.forEach((doc) => {
                tempBooks.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            console.log("hello")
            setBooks(tempBooks)
        })
        return () => listener()
    }, [])

    return <BookContext.Provider value={{
         books,
         deleteBooks,
         uploadBooks
    }}>
        {
            children
        }
    </BookContext.Provider>
}

export const useGlobalBookContext = () => {
    return useContext(BookContext)
}

export { BookProvider }