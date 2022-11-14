import './Modal.css'

function Modal(props){
    return (
        <div className="modal">
            <div className="modal__overlay" onClick={() => props.onClose()}></div>
            <div className="modal__content">
                <button className="modal__close" onClick={() => props.onClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.414 21.414">
                        <g className="close-a" transform="translate(-1195.479 -108.479)">
                            <line className="close-b" x2="28.284" transform="translate(1196.186 109.186) rotate(45)"/>
                            <line className="close-b" x2="28.284" transform="translate(1196.186 129.186) rotate(-45)"/>
                        </g>
                    </svg>
                </button>
                { props.title && (
                    <div className="modal__title">
                        <h2>{props.title}</h2>
                        { props.description &&  <h5>{props.title}</h5> }
                    </div>
                )}
                <div className="modal__body">
                    {props.children}
                </div>
                { props.showFooter && (
                    <div className="modal__footer">
                        <button className="modal__button" onClick={() => props.onClose()}>Ok</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal