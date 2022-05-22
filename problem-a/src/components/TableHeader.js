import React from 'react'; //import React library

/* Your code goes here */
export function TableHeader(props) {
    let th = props.columnNames.map((arrayItem) => 
        <th key={arrayItem}>{arrayItem}</th>);
    return (
        <thead>
            <tr>{th}</tr>
        </thead>
    )
}