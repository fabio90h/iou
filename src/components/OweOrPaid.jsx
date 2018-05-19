import React from 'react';
import PropTypes from 'prop-types';
import Owe from './Owe';
import Paid from './Paid';

const OweOrPaid = (props) => {
    if (props.showOweListBool) {
        if (props.viewAllPaid) {
            return(
                <table border="0">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className="OweOrPaid">
                        {props.paidList.map(
                            (paid) => 
                            <Paid
                                paidName={paid.oweName}
                                paidAmount={paid.oweAmount}
                                paidDate={paid.oweDate}
        
                                removePaid={() => {props.removePaid(paid.oweId)}}
                            />
                        )}
                        <tr className="TotalPaid">
                            <td>Total Paid</td>
                            <td colSpan="2">$
                                {   
                                    props.paidList.reduce((total,current) => {
                                        if (!isNaN(current.oweAmount)){
                                            return Math.ceil((total + parseFloat(current.oweAmount, 10))*100)/100;
                                        }
                                        else{
                                            alert("Please enter a valid number")
                                            return null
                                        }
                                    },0)
                                }
                            </td>
                        </tr>       
                    </tbody>
                </table>
            );
        }
        else{
            return(
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className="OweOrPaid">
                        {props.oweList.map(
                            (owe) => 
                            <Owe
                                oweName={owe.oweName}
                                oweAmount={owe.oweAmount}
                                oweDate={owe.oweDate}
                                oweEdit={owe.editOwe}
        
                                toggleOweEdit={() => {props.toggleOweEdit(owe.oweId)}}
                                removeCharge={() => {props.removeChargeHandler(owe.oweId)}}
        
                                editChargeName={(e) => {props.editChargeName(e.target.value, owe.oweId)}}
                                editChargeAmount={(e) => {props.editChargeAmount(e.target.value, owe.oweId)}}
                                editChargeDate={(e) => {props.editChargeDate(e.target.value, owe.oweId)}}
        
                                paidSingle={() => {props.paidSingle(owe.oweId)}}

                                toggleShowButtonOption={() => {props.toggleShowButtonOption(owe.oweId)}}
                                showButtonOptionsBool={owe.showButtonOption}
                            />
                        )}
                        <tr className="TotalOwe">
                            <td>Total Owe</td>
                            <td>$
                                {   
                                    props.oweList.reduce((total,current) => {
                                        if (!isNaN(current.oweAmount)){
                                            return Math.ceil((total + parseFloat(current.oweAmount, 10))*100)/100;
                                        }
                                        else{
                                            alert("Please enter a valid number")
                                            return null
                                        }
                                    },0)
                                }
                            </td>
                            <button className="markAsPaid" onClick={props.paidAll}>ALL PAID</button>
                        </tr>
                    </tbody>
                </table>
            );
        }
    }
    return null
};

OweOrPaid.propTypes = {
    toggleOweEdit: PropTypes.func.isRequired, //used
    removeChargeHandler: PropTypes.func.isRequired, //used

    viewAllPaid: PropTypes.bool.isRequired, //used
    oweList: PropTypes.array.isRequired, //used
    paidList: PropTypes.array.isRequired,

    editChargeName: PropTypes.func.isRequired, //used
    editChargeAmount: PropTypes.func.isRequired, //used
    editChargeDate: PropTypes.func.isRequired, //used

    removePaid: PropTypes.func.isRequired,

    paidSingle: PropTypes.func.isRequired,

    paidAll: PropTypes.func.isRequired,

    toggleShowButtonOption: PropTypes.func.isRequired,
};

export default OweOrPaid;


