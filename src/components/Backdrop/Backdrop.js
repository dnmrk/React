import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClases = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose' ];
    return <div className={cssClases.join(' ')}></div>
};

export default backdrop;
