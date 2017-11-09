import React from 'react'
import {SortableElement} from 'react-sortable-hoc'

export default SortableElement(({value}) =>
    <li>{value}</li>
);
