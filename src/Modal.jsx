import React, { Fragment } from 'react';
import "./Modal.css";


function Modal(props) {
    const { isOpen, onClose,title } = props;

    return (
        <Fragment>
            {isOpen && (
                <div className="modal">
                    <button onClick={onClose}>Close</button>
                    <h3>{title}</h3>
                </div>
            )}
        </Fragment>

    )
}

export default Modal;
