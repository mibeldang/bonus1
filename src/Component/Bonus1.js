import React, { Component } from 'react';

class Bonus1 extends Component {
    render() {
        const data = [{
            firstname: 'Juan',
            lastname: 'De la Cruz',
            age: 21
        },
        {
            firstname: 'Mark',
            lastname: 'Paul',
            age: 22
        },
        {
            firstname: 'Paul',
            lastname: 'Mark',
            age: 23
        }]

        const listItems = data.map((d) => <ul key={d.firstname}>{d.firstname}{" "}{d.lastname}{" "}{d.age}</ul>);


        return (
            <center>
                <div>
                    {listItems}
                </div>
            </center>
        )
    }
}
export default Bonus1;
