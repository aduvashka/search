import React, { Fragment } from 'react';
import "./Modal.css";


function Modal(props) {
    const { isOpen, onClose } = props;

    return (
        <Fragment>
            {isOpen && (
                <div className="modal">
                    <button onClick={onClose}>Close</button>
                </div>
            )}
        </Fragment>

    )
}

export default Modal;
