import React from 'react';
import PropTypes from 'prop-types';

const Owe = (props) => {
    return (
        [   
            props.oweEdit ?
            <tr className="OweInput">
                <td><input className="editInput" type="text" value={props.oweName} onChange={props.editChargeName}/></td>
                <td><input className="editInput" type="text" value={props.oweAmount} onChange={props.editChargeAmount}/></td>
                <td><input className="editInput" type="text" value={props.oweDate} onChange={props.editChargeDate}/></td>
            </tr> 
            :
            <tr className="tOwe" onClick={props.toggleShowButtonOption}>
                <td>{props.oweName}</td>
                <td>${props.oweAmount}</td>
                <td>{props.oweDate}</td>
            </tr>
            ,
            <tr>
                {
                    props.showButtonOptionsBool ? 
                    <td colSpan="4">
                        {props.oweEdit ? <button className="mod-btn-save" onClick={props.toggleOweEdit}>SAVE</button> : <button className="mod-btn-edit" onClick={props.toggleOweEdit}>EDIT</button>}
                        <button className="mod-btn-remove" onClick={props.removeCharge}>REMOVE</button>
                        <button className="mod-btn-paid" onClick={props.paidSingle}>PAID</button>
                    </td>
                    :
                        null
                }
            </tr>  
        ]
    );
};

Owe.propTypes = {
    oweName: PropTypes.string.isRequired,
    oweAmount: PropTypes.number.isRequired,
    oweDate: PropTypes.string.isRequired,
    oweEdit: PropTypes.bool.isRequired,

    showOweList: PropTypes.bool.isRequired,

    toggleOweEdit: PropTypes.func.isRequired,
    removeCharge: PropTypes.func.isRequired,

    editChargeName: PropTypes.func.isRequired,
    editChargeAmount: PropTypes.func.isRequired,
    editChargeDate: PropTypes.func.isRequired,

    paidSingle: PropTypes.func.isRequired,

    toggleShowButtonOption: PropTypes.func.isRequired,
    showButtonOptionsBool: PropTypes.bool.isRequired,
};

export default Owe;