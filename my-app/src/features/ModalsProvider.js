import React, { useMemo, useState } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from './ModalsContext';
import Modals from '../components/modals';

const ModalsProvider = ({ children }) => {
    const [openedModals, setOpenedModals] = useState([]);

    const open = (Component, props) => {
        setOpenedModals((modals) => {
            return [...modals, {Component, props}];
        });
     };
    const close = (Component) => {
        setOpenedModals((modals)=>{
            return modals.filter((modals)=>{
                return modals.Component !== Component;
            })
        })
     };
    const dispatch = useMemo(()=>({open,close}), []);

    return (
        <ModalsStateContext.Provider value={openedModals}>
            <ModalsDispatchContext.Provider value={dispatch}>  
                {children}
                <Modals></Modals>
            </ModalsDispatchContext.Provider>
        </ModalsStateContext.Provider>
    );
};

export default ModalsProvider;

/*https://nakta.dev/how-to-manage-modals-1*/ 