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