import React from 'react'
export default function Display({ ticket, place, name, rs }) {

    let isValid = 'Invalid'
    if (typeof (ticket) === 'number' &&
        typeof (place) === 'string' &&
        typeof (name) === 'string' &&
        name.length > 3 &&
        place.length > 2 &&
        rs > 49 &&
        typeof (rs) === 'number') {
        isValid = 'valid';
    }
    console.log(33 )
    // console.log('prdops', ticket, place, name, rs.length)

    return (
        <div style={{width:'23'}}>
            <h4>Ticket:{ticket}</h4>
            <h4>fromPlace:{place}</h4>
            <h4>PassName:{name}</h4>
            <h4>rs:{rs}</h4>
            {< h1 > {isValid} Ticket </h1 >}
        </div>
    )
}