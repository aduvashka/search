import React, { Fragment } from 'react';
import "./Modal.css";


function Modal(props) {
    const { closeModal } = props;

    return (
        <Fragment>
            <div className="modal">

            <button onClick={closeModal}>Close</button>
          </div>
        </Fragment>

    )
}

export default Modal;
