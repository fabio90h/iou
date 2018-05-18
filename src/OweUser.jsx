import React from 'react';
import PropTypes from 'prop-types';
import AddChargeForm from './AddChargeForm';
import OweOrPaid from './OweOrPaid';

const OweUser = (props) => {

    return(
        <li className="OweUser">
            <div className="OweUserButtons">
                <button className="UserNameButton" onClick={props.showUserOweList}>{props.name}</button>
                <button className="RemoveUserButton" onClick={props.removeUserButton}>-</button>
                <button className="ShowAddCharge" onClick={props.showAddCharge}>+</button>
                <button 
                    className={props.viewAllPaid ? "viewAllOwe" : "viewAllPaid"} 
                    onClick={props.toggleViewPassedPaid}>{props.viewAllPaid ? "View Owe" : "View Paid"} 
                </button>
            </div>

            <AddChargeForm 
                submitNewCharge = {props.submitNewChargeHandler}
                addCharge={props.addChargeBool}

                chargeName={(e) => {props.userChargeName(e.target.value)}}
                chargeAmount={(e)=> {props.userChargeAmount(e.target.value)}}

                pendingChargeName={props.pendingChargeName}
                pendingAmount={props.pendingAmount}

                toggleTaxCharge={(event) => {props.toggleTaxCharge(event)}}
                taxBool={props.taxBool}
            />
            <OweOrPaid
                showOweListBool={props.showOweListBool}

                toggleOweEdit={(oweID) => {props.toggleOweEdit(oweID)}}
                removeChargeHandler={(oweID) => {props.removeChargeHandler(oweID)}}

                viewAllPaid={props.viewAllPaid}
                oweList={props.oweList}
                paidList={props.paidList}

                editChargeName={(text, oweID) => {props.editChargeName(text, oweID)}}
                editChargeAmount={(number, oweID) => {props.editChargeAmount(number, oweID)}}
                editChargeDate={(text, oweID) => {props.editChargeDate(text, oweID)}}

                removePaid={(paidID) => {props.removePaid(paidID)}}
                
                paidSingle={(oweID) => {props.paidSingle(oweID)}}

                paidAll={props.paidAll}

                toggleShowButtonOption={(oweID) => {props.toggleShowButtonOption(oweID)}}
            />
        </li>

    )
};

OweUser.propTypes = {
    submitNewChargeHandler: PropTypes.func.isRequired,
    showUserOweList: PropTypes.func.isRequired, 
    
    name: PropTypes.string.isRequired,
    oweList: PropTypes.array.isRequired,
    pendingChargeName: PropTypes.string.isRequired,
    pendingAmount: PropTypes.number.isRequired,
    taxBool: PropTypes.bool.isRequired,

    toggleOweEdit: PropTypes.func.isRequired,
    removeChargeHandler: PropTypes.func.isRequired,

    addChargeBool: PropTypes.bool.isRequired,
    showOweListBool: PropTypes.bool.isRequired,
    
    removeUserButton: PropTypes.func.isRequired,
    showAddCharge: PropTypes.func.isRequired,
    userChargeName: PropTypes.func.isRequired,
    userChargeAmount: PropTypes.func.isRequired,

    editChargeName: PropTypes.func.isRequired,
    editChargeAmount: PropTypes.func.isRequired,
    editChargeDate: PropTypes.func.isRequired,

    toggleTaxCharge: PropTypes.func.isRequired,

    paidAll: PropTypes.func.isRequired,

    toggleViewPassedPaid: PropTypes.func.isRequired,
    viewAllPaid: PropTypes.bool.isRequired,
    paidList: PropTypes.array.isRequired,

    removePaid: PropTypes.func.isRequired,

    paidSingle: PropTypes.func.isRequired,

    toggleShowButtonOption: PropTypes.func.isRequired,
};

export default OweUser;