import React from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from"./Header";
import Nav from"./Nav";


class Container extends React.Component{

    render(){
        return (
            <div className="container">
                <Header />
                <Nav />
                <ContactList />
                <AddContact />
            </div>
        );
    }
}

export default Container;