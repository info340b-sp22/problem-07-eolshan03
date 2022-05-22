import React from 'react'; //import React library

//example senator data objects:
// { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
// { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }

/* Your code goes here */
export function SenatorRow(props) {
    let name = props.senatorData.name;
    let party = props.senatorData.party.substring(0, 1);
    let state = party + " - " + props.senatorData.state;
    let phoneLink = "tel:" + props.senatorData.phone;
    let twitterLink = "https://twitter.com/" + props.senatorData.twitter;
    let twitter = "@" + props.senatorData.twitter;
    return (
        <tr>
            <td>{name}</td>
            <td>{state}</td>
            <td><a href={phoneLink}>{props.senatorData.phone}</a></td>
            <td><a href={twitterLink}>{twitter}</a></td>
        </tr>
    )
}