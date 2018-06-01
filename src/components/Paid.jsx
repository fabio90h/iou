import React from 'react';
import PropTypes from 'prop-types';

const Paid = (props) => {
    return(
        <tr className="tPaid">
            <td>{props.paidName}</td>
            <td>{props.paidAmount}</td>
            <td>{props.paidDate}</td>
            <td><button className='removePaid' onClick={props.removePaid}>REMOVE</button></td>
        </tr>
    );
};

Paid.propTypes = {
    paidName: PropTypes.string.isRequired,
    paidAmount: PropTypes.number.isRequired,
    paidDate: PropTypes.string.isRequired,

    removePaid: PropTypes.func.isRequired,
};

export default Paid;