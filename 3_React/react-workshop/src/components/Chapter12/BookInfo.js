import {useState, useEffect} from "react";

const BookInfo = ({isbn}) => {
    const [book, setBook] = useState(false);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(data => data.json())
            .then(res => setBook(res.items[0].volumeInfo.title))
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            {book && <h1>{book}</h1>}
        </>
    );
};

export default BookInfo;
