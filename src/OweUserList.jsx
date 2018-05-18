import React from 'react';
import PropTypes from 'prop-types';
import OweUser from './OweUser';

const OweUserList = (props) => {
    return(
        <ul className="OweUserList">
            {props.users
                .map((user) => {
                    return(
                        <OweUser
                            submitNewChargeHandler={() => {props.submitNewChargeHandler(user.id)}}
                            showUserOweList={() => {props.toggleShowUserOweList(user.id)}}

                            name={user.name}
                            oweList={user.owe}
                            pendingChargeName={user.pendingChargeName}
                            pendingAmount={user.pendingAmount}
                            taxBool={user.taxBool}

                            toggleOweEdit={(oweId) => {props.toggleOweEdit(user.id, oweId)}}

                            addChargeBool={user.showAddCharge}
                            showOweListBool={user.showOweList}

                            removeUserButton={() => {props.removeUserButtonHandler(user.id)}}

                            showAddCharge={() => {props.toggleShowAddCharge(user.id)}}
                            removeChargeHandler={(text) => {props.removeChargeHandler(user.id, text)}}
                            userChargeName={(text) => {props.userChargeNameHandler(text, user.id)}}
                            userChargeAmount={(number) => {props.userChargeAmountHandler(number, user.id)}}

                            editChargeName={(text, oweID) => {props.editChargeName(user.id, oweID, text)}}
                            editChargeAmount={(number, oweID) => {props.editChargeAmount(user.id, oweID, number)}}
                            editChargeDate={(text, oweID) => {props.editChargeDate(user.id, oweID, text)}}

                            toggleTaxCharge={(event) => {props.toggleTaxCharge(user.id, event)}}

                            paidAll={() => {props.paidAllHandler(user.id)}}

                            toggleViewPassedPaid={() => {props.toggleViewPassedPaidHandler(user.id)}}
                            viewAllPaid={user.viewPassedPaid}
                            paidList={user.paid}

                            removePaid={(paidID) => {props.removePaidHandler(user.id, paidID)}}

                            paidSingle={(oweID) => {props.paidSingleHandler(user.id, oweID)}}

                            toggleShowButtonOption={(oweID) => {props.toggleShowButtonOption(user.id, oweID)}}
                        />
                    ); 
            })}
        </ul>
    );
};

OweUserList.propTypes = {
    submitNewChargeHandler: PropTypes.func.isRequired,
    removeChargeHandler: PropTypes.func.isRequired,
    toggleOweEdit: PropTypes.func.isRequired,

    users: PropTypes.array.isRequired,
    removeUserButtonHandler: PropTypes.func.isRequired,

    toggleShowUserOweList: PropTypes.func.isRequired,
    toggleShowAddCharge: PropTypes.func.isRequired,

    userChargeNameHandler: PropTypes.func.isRequired,
    userChargeAmountHandler: PropTypes.func.isRequired,

    editChargeName: PropTypes.func.isRequired,
    editChargeAmount: PropTypes.func.isRequired,

    toggleTaxCharge: PropTypes.func.isRequired,

    paidAllHandler: PropTypes.func.isRequired,
    toggleViewPassedPaidHandler: PropTypes.func.isRequired,

    removePaidHandler: PropTypes.func.isRequired,

    paidSingleHandler: PropTypes.func.isRequired,

    toggleShowButtonOption: PropTypes.func.isRequired,
};

export default OweUserList;