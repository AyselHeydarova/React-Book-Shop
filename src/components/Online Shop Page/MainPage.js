import React, {Component} from 'react';
import ProductsList from "./ProductsList";
import Preloader from "../Preloader/Preloader";


class MainPage extends Component {
    state = {
        books: [],

    };

    componentDidMount() {

        fetch(this.props.url)
            .then((response) => {
               return  response.json();
            })
            .then(data => {
                this.setState({books:[...data]});
            });
    };

    render() {
        const books= [ ...this.state.books];

        return (
            <div>
                {
                    books.length === 0  ? <Preloader/>
                    : <ProductsList books={books} />
                }

            </div>
        );
    }
}

export default MainPage;

// import React, {useEffect, useState} from 'react';
// import ProductsList from "./ProductsList";
// import Preloader from "../Preloader/Preloader";
//
// const MainPage = props => {
//     const [books, setBooksState] = useState({books:[]});
//
//     useEffect(()=> {
//         fetch(props.url)
//           .then(response => response.json())
//           .then(data => {
//                setBooksState(data);
//                console.log(data)
//             });
//         }, [books.length]);
//
//     const booksList =[books] ;
//     console.log(booksList);
//
//     return (
//         <div>
//                 {
//                     booksList.length === 0  ? <Preloader/>
//                     : <ProductsList books={booksList} />
//                 }
//
//         </div>
//     );
// };
//
// export default MainPage;