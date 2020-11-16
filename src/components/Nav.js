import React from 'react';

class Nav extends React.Component{

    render(){
        return (
            <nav>
                <button>+</button>
                <input type="text" placeholder="Type Here"/>
                <button type="button"  class="fa fa-search">Search</button>
                
            </nav>
        );
    }
}

export default Nav;