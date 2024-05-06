import loadable from '@loadable/component';
import React, { useContext } from "react";
import { ModalsDispatchContext, ModalsStateContext } from '../features/ModalsContext';

export const modals = {
    modal_T: loadable(()=> import('../practice/modal_T')),
    itemDetail: loadable(()=> import('../components/ItemDetail')),
};


const Modals = () => {
    const openedModals = useContext(ModalsStateContext);
    const { close } = useContext(ModalsDispatchContext);

    return openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const {onSubmit, ...restProps} = props;
        
        const onClose = () => {
            close(Component);
        };

        const handleSubmit = async () => {
            if(typeof onsubmit === 'function') {
                await onSubmit();
            }
            onClose();
        };

        return <Component
            {...restProps}
            key={index}
            onClose={onClose}
            onSubmit={handleSubmit}
        />;
    });
};

export default Modals;

/*https://nakta.dev/how-to-manage-modals-1*/ 