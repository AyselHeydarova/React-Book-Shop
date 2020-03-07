import React, {Component} from 'react';
import Button from "./Button";
import ModalWindow from "./ModalWindow";


class ModalWindowManager extends Component {
    state = {
        showFirstModal: false,
        showSecondModal: false,
        closeButton: true,
    };


    handleFirstBtn = ()=> {

        this.setState({showFirstModal: true});
        if (this.state.showSecondModal) {
            this.setState({showSecondModal:false})
        }

    };

    handleSecondBtn = ()=> {

        this.setState({showSecondModal: true});
        if (this.state.showFirstModal) {
            this.setState({showFirstModal: false})
        }

    };

    containerClickHandler = (event)=> {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            this.setState({showFirstModal: false});
            this.setState({showSecondModal: false})
        }

    };

    iconClickHandler =() => {
        this.setState({showFirstModal: false});
        this.setState({showSecondModal: false})
    };

    render() {

        const colorHandler = this.state.showFirstModal || this.state.showSecondModal ? 'gray' : null;

        return (
            <div className={colorHandler} onClick={this.containerClickHandler}>

                <Button text="Delete"
                        style={{backgroundColor: 'red'}}
                        onClick={this.handleFirstBtn}/>


                <Button text="Add to GitHub"
                        style={{backgroundColor: 'green'}}
                        onClick={this.handleSecondBtn}/>
                { this.state.showFirstModal ?
                    <ModalWindow header='Do you want to delete this file?'
                                 className={` modal-window`}
                                 text = "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
                                 actions={['OK', 'Cancel']}
                                 closeButton={this.state.closeButton}
                                 iconHandler={this.iconClickHandler}

                    /> : null

                }

                { this.state.showSecondModal ?
                    <ModalWindow header='Do you want to add file to GitHub?'
                                 className={`modal-window green-modal`}
                                 text = "You can add your files to Git account to store them safely. It will help you on version control of your projects."
                                 actions={['Yes, definitely', 'No,thanks']}
                                 closeButton={!this.state.closeButton}
                                 iconHandler={this.iconClickHandler}

                    /> : null
                }


            </div>

        );
    }
}

export default ModalWindowManager;