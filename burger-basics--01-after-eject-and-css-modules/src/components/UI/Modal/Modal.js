import React from 'react';

import clasess from './Modal.css'

const modal = (props) =>(
    <div className={clasess.Modal}>
        {props.children}
    </div>
);

export default modal;