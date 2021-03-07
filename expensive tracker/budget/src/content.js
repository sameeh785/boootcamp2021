import React,{createContext ,useReducer } from "react";
import contextReducer from "./contentReducer";

let intialization = [{
    type : 'cash',
    amount : 1000
},{
    type : 'cash1',
    amount : 200
}];

export const Content = createContext(intialization);

export const ContextProvider = ({children}) =>{

    let [state , dispatch]= useReducer(contextReducer,intialization);
    function addTransaction(transObj) {
        dispatch({
            type : "New Transaction",
            payload: { 
                type: transObj.type, 
                amount: transObj.amount, 
               
            },
        })    
    }
    function deleteFromTransaction(newTransaction) {
        dispatch({
            type : "Delete Transaction",
            data : newTransaction
        })
        
    }
    return (<Content.Provider value={{
        transactions: state,
        addTransaction,
        deleteFromTransaction
    }}>
        {children}
    </Content.Provider> )


}