import React from 'react';

class AddContact extends React.Component{

    render(){
        return (
            <form>
                <div>
                    <div>
                        <h1>Contact info</h1>
                    </div>
                    <p>
                        <label>First Name</label>
                        <input type="text" id="fName"/>
                    </p>
                    <p>
                        <label>Last Name</label>
                        <input type="text" id="lName"/>
                    </p>
                    <p>
                        <label>Phone Number</label>
                        <input type="text" id="phone"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" id="email"/>
                    </p>
                    <p>
                        <input type="button" id="send" value="Add" />
                    </p>
                </div>
            </form>
        )

    }
}

export default AddContact;