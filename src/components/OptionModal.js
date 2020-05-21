import React from 'react';
import Modal from 'react-modal';


const OptionModal= (props)=>(
    <Modal
        isOpen={!!props.SelectedOption}
        contentLabel="Selected option"
        onRequestClose={props.handlemodal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h1 className="modal__title">selected option</h1>
        {props.SelectedOption && <p className="modal__body">{props.SelectedOption}</p>}
        <button className="button" onClick={props.handlemodal}>okay</button>
    </Modal>
);

export default OptionModal;