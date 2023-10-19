import {useEffect, useState} from 'react';

const Modal = ({heading}) => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setModal(prev => !prev);
        }, 10000);

        return () => clearTimeout(id);
    }, []);

    if (modal)  {
        return (
            <div>
                <h1>{heading}</h1>
            </div>
        );
    }
    else {
        return null;
    }
};

export default Modal;