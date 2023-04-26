import { useCallback, useRef, useState } from "react";
import '../styles/Components/UploadImageForm.css'
import Modal from 'react-modal';
import Webcam from "react-webcam";
import initiumLogo from '../images/Initium-logo.png';


const UploadImageForm = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const [modalIsOpen, setIsOpen] = useState(false);

    let subtitle;

    const webcamRef = useRef(null);

    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setSelectedImage(imageSrc);
            setIsOpen(false);
        },
        [webcamRef]
    );

    const customStylesModal = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const videoConstraints = {
        width: 480,
        height: 480,
        facingMode: "user"
    };

    const handlerSubmitImage = (event) => {
        event.preventDefault();
    }

    const openModal = () => {
        setIsOpen(true);
    }

    /* const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    } */

    const closeModal = () => {
        setIsOpen(false);
    }


    const handleSelectFile = (event) => {

        const selectedFile = event.target.files;
        const urlObject = URL.createObjectURL(selectedFile[0]);

        setSelectedImage(urlObject)
    }

    return (
        <div className="wrap-contact100">
            <div className="contact100-pic js-tilt" data-tilt>
                <img src={initiumLogo} alt="IMG" />
            </div>

            {/* Start Form */}
            <form className="contact100-form" onSubmit={handlerSubmitImage}>

                <span className="contact100-form-title text-center">
                    Sube una Selfie
                </span>

                <Modal
                    isOpen={modalIsOpen}
                    /* onAfterOpen={afterOpenModal} */
                    onRequestClose={closeModal}
                    style={customStylesModal}
                    contentLabel="Example Modal"
                >
                    <Webcam
                        audio={false}
                        height={480}
                        screenshotFormat="image/jpeg"
                        ref={webcamRef}
                        width={280}
                        videoConstraints={videoConstraints}
                    />
                    <div>
                        <button onClick={capture}>Tomar foto</button>
                    </div>
                </Modal>

                <div className="wrap-btn-camera-and-inputfile">

                    {/* BTN tomar una foto */}
                    <div className="wrap-btn-openmodal-shoot-picture-camera" onClick={openModal}>
                        <i className="fa fa-camera" aria-hidden="true" />
                        <span className="text-btn-handler-take-photo">Toma una foto</span>
                    </div>

                    {/* Input upload File */}

                    <input
                        type="file"
                        name="imageFile"
                        onChange={handleSelectFile}
                        accept="image/png, image/jpeg, image/webp"
                        className="inputfile"
                        id="imageFile"
                    />
                    <label htmlFor="imageFile">

                        <figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg></figure>
                        <span className="text-btn-handler-take-photo">Elije una foto</span>
                    </label>

                </div>

                {
                    selectedImage &&
                    
                    <div className="prev-image-selected">
                        {/* render img */}
                        <img src={selectedImage} alt="imageSelected" />
                    </div>
                }

                <div className="wrap-btn-submit-image">
                    <button
                        className="contact100-form-btn upload-img-btn"
                        type="submit"
                    >
                        Enviar
                    </button>

                </div>
            </form>

            {/* End Form */}
        </div>
    )
}

export default UploadImageForm