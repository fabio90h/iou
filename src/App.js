import React, { Component } from 'react';
import './App.css';
import OweUserList from './components/OweUserList';

class App extends Component {
  // STATE 
  state = {
    pendingName: "",
    users: [
      {
        id: 0,

        pendingOweId: 2,
        pendingChargeName: "", 
        pendingAmount: undefined,

        name:'Achilles',
        showOweList: true,
        showAddCharge: false,
        taxBool: false,

        paid: [],
        viewPassedPaid: false,

        owe: [
          {
            oweId: 'Achilles0',
            oweName: 'Dinner',
            oweAmount: 10,
            oweDate: "4/14/2018",

            showButtonOption: false,
            editOwe: false,
          },
          {
            oweId: 'Achilles1',
            oweName: 'Coffee',
            oweAmount: 5,
            oweDate: "4/13/2018",

            showButtonOption: false,
            editOwe: false,
          }
        ],
      },
      {
        id: 1,

        pendingOweId: 1,
        pendingChargeName: "",
        pendingAmount: undefined,
        
        name: 'Machida',
        showOweList: false,
        showAddCharge: false,
        taxBool: false,

        paid: [],
        viewPassedPaid: false,

        owe: [
          {
            oweId: 'Machida0',
            oweName: 'Soccer',
            oweAmount: 10,
            oweDate: "4/12/2018",

            showButtonOption: false,
            editOwe: false,
          }
        ],
      }
    ],
  };

  //VARIABLE: Unique id for each user
  id = 1;

  //**********************************PAID SETTING****************************************//
    //==============================PAID SETTING SET/TOGGLE==============================//
    //HANDLER: Setting the owe properties for booleans
    togglePaidProperty = (property, id, paidId) => {
      this.setState(
        {
          users: this.state.users.map(
            (user) => {
              if (id === user.id) {
                return (
                  {
                    ...user,
                    paid: user.paid.map(
                      (paidSingle) => {
                        if (paidId === paidSingle.oweId) {
                          return (
                            {
                              ...paidSingle,
                              [property]: !paidSingle[property]
                            }
                          );
                        }
                        return paidSingle
                      }
                    )
                  }
                );
              }
              return user
            }
          )
        }
      )
    };
  //**********************************PAID SETTING****************************************//


  //**********************************OWE SETTING****************************************//
    //==============================OWE SETTING SET/TOGGLE==============================//
    //HANDLER: Setting the owe properties for string
    setOweProperty = (property, id, oweId, inputText) => {
      this.setState(
        {
          users: this.state.users.map(
            (user) => {
              if (id === user.id) {
                return (
                  {
                    ...user,
                    owe: user.owe.map(
                      (singleOwe) => {
                        if (singleOwe.oweId === oweId) {
                          return (
                            {
                              ...singleOwe,
                              [property]: inputText,
                            }
                          );
                        }
                        return singleOwe
                      }
                    )
                  }
                );
              }
              return user
            }
          )
        }
      )
    }
    //HANDLER: Setting the owe properties for booleans
    toggleOweProperty = (property, id, oweId) => {
      this.setState(
        {
          users: this.state.users.map(
            (user) => {
              if (id === user.id) {
                return (
                  {
                    ...user,
                    owe: user.owe.map(
                      (oweSingle) => {
                        if (oweId === oweSingle.oweId) {
                          return (
                            {
                              ...oweSingle,
                              [property]: !oweSingle[property]
                            }
                          );
                        }
                        return oweSingle
                      }
                    )
                  }
                );
              }
              return user
            }
          )
        }
      )
    };
    //==============================SET OWE PROPERTY==============================//
    editChargeName = (id, oweId, inputText) => {
      this.setOweProperty("oweName", id, oweId, inputText)
    };

    editChargeAmount = (id, oweId, inputText) => {
      this.setOweProperty("oweAmount", id, oweId, inputText)
    };

    editChargeDate = (id, oweId, inputText) => {
      this.setOweProperty("oweDate", id, oweId, inputText)
    };
  //**********************************/OWE SETTING***************************************//

  //*********************************USER SETTING**************************************//
    //==============================SETTING SET/TOGGLE=============================//
    //HANDLER: Setting the user properties for string
    setUserProperty = (property, id, inputText) => {
      this.setState(
        {
          users: this.state.users.map(
            (user) => {
              if (id === user.id) {
                return {
                  ...user,
                  [property]: inputText,
                }
              }
              return user
            }
          ),
        }
      );
    };
    //HANDLER: Setting the user properties for booleans
    toggleUserProperty = (property, id) => {
      this.setState(
        {
          users: this.state.users.map(
            (user) => {
              if (id === user.id) {
                return {
                  ...user,
                  [property]: !user[property],
                };
              }
              return user;
            }
          )
        }
      );
    };
    //HANDLER: Remove Owe Charge
    removeUserProperty= (property, id, oweId) => {
      this.setState(
        {
          users: this.state.users.map(
            (user) => {
              if (user.id === id) {
                return(
                  {
                    ...user,
                    [property]: user[property].filter((singleOwe) => singleOwe.oweId !== oweId),
                  }
                );
              }
              return user
            }
          )
        }
      )
    };
    //==============================SETTING SET/TOGGLE==============================//

    //==============================SET PROPERTY==============================//
    //HANDLER: Set charge name
    setPropertyChargeName = (text, id) => {
      this.setUserProperty("pendingChargeName", id, text)
    }
    //HANDLER: Set charge amount
    setPropertyChargeAmount = (number, id) => {
      this.setUserProperty("pendingAmount", id, number)
    }
    //==============================SET PROPERTY==============================//

    //==============================TOGGLE==============================//
    //HANDLER: Show user owe list
    toggleShowUserOweList = (id) => {
      this.toggleUserProperty('showOweList', id)
    }
    //HANDLER: Switching Bool value for Add Charge
    toggleShowAddCharge = (id) => {
      this.toggleUserProperty('showAddCharge', id)
    }
    toggleTaxCharge = (id, event) => {
      event.preventDefault();
      this.toggleUserProperty('taxBool', id)
    };
    //HANDLER: Enable this so that you have ability to edit owe
    toggleOweEdit = (id, oweId) => {
      this.toggleOweProperty("editOwe", id, oweId)
    }
    //HANDLER: View all past paid
    toggleViewPassedPaidHandler = (id) => {
      this.toggleUserProperty("viewPassedPaid", id)
    }
    toggleShowButtonOption = (id, oweId) => {
      this.toggleOweProperty("showButtonOption", id, oweId)
    }
    //==============================TOGGLE==============================// 
  //*********************************/USER SETTING*************************************//

  //HANDLER: Set the pending text name when the user is typing
  userTextNameHandler = (e) =>
    this.setState(
      {
        pendingName: e.target.value
      }
    );
  //HANDLER: Submit a new Owe Charge
  submitNewChargeHandler = (e, id) => {
    e.preventDefault();
    var time = this.getCurrentDateHandler();
    this.setState(
      {
        users: this.state.users.map(
          (user) => {
            if (id === user.id) {
              if(user.taxBool) {
                return(
                  {
                    ...user,
                    pendingOweId: user.pendingOweId + 1,
                    pendingChargeName: "", 
                    pendingAmount: "",
                    
                    owe: [
                      {
                        oweId: user.name + user.pendingOweId,
                        oweName: user.pendingChargeName,
                        oweAmount: Math.ceil((parseFloat(user.pendingAmount, 10) + parseFloat(user.pendingAmount * 0.06, 10))*100)/100,
                        oweDate: time,
  
                        showButtonOption: false,
                        editOwe: false
                      },
                      ...user.owe
                    ]
                  }
                );
              }
              return(
                {
                  ...user,
                  pendingOweId: user.pendingOweId + 1,
                  pendingChargeName: "", 
                  pendingAmount: "",
                  
                  owe: [
                    {
                      oweId: user.name + user.pendingOweId,
                      oweName: user.pendingChargeName,
                      oweAmount: user.pendingAmount,
                      oweDate: time,

                      editOwe: false
                    },
                    ...user.owe
                  ]
                }
              );
            }
            return user;
          }
        )
      }
    );
  };
  //HANDLER: Remove Owe Charge
  removeChargeHandler = (id, oweId) => {
    this.removeUserProperty("owe", id, oweId)
  };
  //HANDLER: Remove Paid Charge
  removePaidHandler = (id, paidId) => {
    this.removeUserProperty("paid", id, paidId)
  };
  //HANDLER: Get current date
  getCurrentDateHandler = () => {
    var currentdate = new Date(); 
    var datetime = 
      (currentdate.getMonth()+1)  + "/"
      + currentdate.getDate() + "/"
      + currentdate.getFullYear()
    return datetime;
  };
  //HANDLER: Paid All
  paidAllHandler = (id) => {
    this.setState(
      {
        users: this.state.users.map(
          (user) => {
            if (user.id === id) {
              return (
                {
                  ...user,
                  owe: [],
                  paid: [
                    ...user.paid,
                    ...user.owe
                  ],
                }
              );
            }
            return user
          }
        )
      }
    )
  };
  //HANDLER: Paid Single
  paidSingleHandler = (id, oweId) => (
    this.setState(
      {
        users: this.state.users.map(
          (user) => {
            if (user.id === id) {
              return(
                {
                  ...user,
                  owe: user.owe.filter((oweSingle) => oweSingle.oweId !== oweId),
                  paid: [
                    ...user.owe.filter((oweSingle) => oweSingle.oweId === oweId),
                    ...user.paid
                  ]
                }
              );
            }
            return user
          }
        )
      }
    )
  );


  //==============================ADD/REMOVE USER==============================//
    //HANDLER: When the button add (user) is clicked
    addUserButtonHandler = (e) => {
      e.preventDefault();
      this.id += 1;
      this.setState(
        {       
          users: [
            ...this.state.users,
            {
              id: this.id,
              pendingChargeName: "",
              pendingAmount: null,
              pendingOweId: 0,
              name: this.state.pendingName,
              showOweList: true,
              showAddCharge: true,
              taxBool: false,

              paid: [],
              owe:[],

              viewPassedPaid: false,
            }
          ],
          pendingName: "",
        }
      );
    };
    //HANDLE: When the remove button (user) is clicked
    removeUserButtonHandler = (id) => {
      this.setState(
        {
          users: this.state.users.filter(user => id !== user.id)
        }
      );
    };
  //==============================ADD/REMOVE USER==============================//
  
  //RENDERING
  render() {
    return (
      <div className="App">
        <header>
          {/* ADD USERS */}
          <form className="AddUserForm" onSubmit={this.addUserButtonHandler}>
            <input className="AddUserInput" type="text" value={this.state.pendingName} onChange={this.userTextNameHandler} placeholder="Enter the name you want to add"/>
            <button className="AddUserButton" type='submit'>+</button>
          </form>
        </header>
        <main>
          {/* DISPLAY WHAT EACH OWES*/}
          <div>
            <OweUserList 
              submitNewChargeHandler = {this.submitNewChargeHandler}
              removeChargeHandler = {this.removeChargeHandler}
              toggleOweEdit = {this.toggleOweEdit}

              users={this.state.users} 
              removeUserButtonHandler={this.removeUserButtonHandler}

              toggleShowUserOweList={this.toggleShowUserOweList}
              toggleShowAddCharge={this.toggleShowAddCharge}

              userChargeNameHandler = {this.setPropertyChargeName}
              userChargeAmountHandler={this.setPropertyChargeAmount}

              editChargeName = {this.editChargeName}
              editChargeAmount = {this.editChargeAmount}
              editChargeDate = {this.editChargeDate}

              toggleTaxCharge={this.toggleTaxCharge}

              paidAllHandler={this.paidAllHandler}
              toggleViewPassedPaidHandler={this.toggleViewPassedPaidHandler}

              removePaidHandler={this.removePaidHandler}
              
              paidSingleHandler={this.paidSingleHandler}

              toggleShowButtonOption={this.toggleShowButtonOption}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
