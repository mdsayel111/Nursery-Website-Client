import Modal from '@mui/material/Modal';
import * as React from 'react';
import { MdCancel } from 'react-icons/md';

// create modal type
type TModal = {
    open: boolean
    handleOpen: any;
    handleClose: any;
    children: React.ReactNode
    id?: string
}

export default function BasicModal({ open, handleOpen, handleClose, children }: TModal) {


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className=' mx-auto flex justify-center items-center  h-[100vh] '>

                <div className='h-fit bg-white w-fit p-4  relative rounded-xl'>
                    <button onClick={handleClose} className='text-red-600 absolute right-4 text-4xl ml-auto inline-block'><MdCancel /></button>
                    {children}
                </div>
            </div>
        </Modal>
    );
}
