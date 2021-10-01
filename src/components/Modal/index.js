import React from "react"
import "../css/modal.scss"


const Modal = ({ children, Close, title, className, noClose, index, style }) => {

    /**
     * 
     * @param {React.MouseEvent} e 
     */

    const CloseModal = (e) => {
        if (!noClose) {
            console.log(e.target.className)
            if (e.target.className === 'modal-close' || e.target.className === 'modal-outer') {
                Close()
            }
        }
    }

    return (
        <div className='modal-outer' style={{ zIndex: index }} onClick={CloseModal}>
            <div className={className ? `modal-inner ${className}` : 'modal-inner'} style={style}>
                {(title && !noClose) &&
                    <div className="modal-top">
                        <h1>
                            {title}
                        </h1>
                        {!noClose &&
                            <span className="modal-close">x</span>
                        }
                    </div>
                }
                {children}
            </div>
        </div>
    )
}

export default Modal