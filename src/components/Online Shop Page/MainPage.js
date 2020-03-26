
import React, {useEffect, useState} from 'react';
import Preloader from "../Preloader/Preloader";
import ProductsList from "./ProductsList";

const MainPage = (props) => {

    const [books, setStateBooks] = useState([]);

    useEffect( () => {
        fetch(props.url).then(response => response.json())
            .then(data => {
                setStateBooks(data);
            });
    },[books.length]);

    return (
        <div>
            {
                books.length === 0 ?  <Preloader/>
                    : <ProductsList books = {books} />
            }

        </div>
    );
};

export default MainPage;





// import React, {Component} from 'react';
// import ProductsList from "./ProductsList";
// import Preloader from "../Preloader/Preloader";
//
//
// class MainPage extends Component {
//     state = {
//         books: [],
//
//     };
//
//     componentDidMount() {
//
//         fetch(this.props.url)
//             .then((response) => {
//                return  response.json();
//             })
//             .then(data => {
//                 this.setState({books:[...data]});
//             });
//     };
//
//     render() {
//         const books= [ ...this.state.books];
//
//         return (
//             <div>
//                 {
//                     books.length === 0  ? <Preloader/>
//                     : <ProductsList books={books} />
//                 }
//
//             </div>
//         );
//     }
// }
//
// export default MainPage;




