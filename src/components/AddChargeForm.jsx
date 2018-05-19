import React from 'react';
import PropType from 'prop-types';

const AddChargeForm = (props) => {
    if (props.addCharge){
        return(
            <form className="AddChargeForm" onSubmit={props.submitNewCharge}>
                <input className="ChargeName" type="text" value={props.pendingChargeName} placeholder="Charge Description" onChange={props.chargeName} />
                <input className="ChargeAmount" type="text" value={props.pendingAmount} placeholder="How Much?" onChange={props.chargeAmount}/>
                <button className={props.taxBool ? 'TaxBoolActive' : 'TaxBool'} onClick={props.toggleTaxCharge}>Tax</button>  
                <input className="SubmitForm" type="submit" value="Submit"/>
            </form>
        );    
    }
    return null;
};

AddChargeForm.propType = {
    submitNewCharge: PropType.func.isRequired,

    addCharge: PropType.bool.isRequired,
    chargeName: PropType.func.isRequired,
    chargeAmount: PropType.func.isRequired,
    pendingChargeName: PropType.string.isRequired,
    pendingAmount: PropType.number.isRequired,

    toggleTaxCharge: PropType.func.isRequired,
    taxBool: PropType.bool.isRequired,
   
};

export default AddChargeForm;