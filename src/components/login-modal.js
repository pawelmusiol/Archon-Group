import React, { useState } from 'react';
import { Modal, Input } from "."
import Logo from "../images/logo-archon.png"

const LoginModal = ({ close }) => {

    const [Mail, setMail] = useState("")
    const [Password, setPassword] = useState("")

    return (
        <Modal className="login-modal" Close={close} noClose index={3}>
                <>
                <img src={Logo} className="logo" style={{width: "40%", maxWidth: "40%"}}/>
                    <div className="modal-inputs">
                        <Input type="email" placeholder="Mail" value={Mail} setValue={setMail} />
                        <Input type="password" placeholder="Hasło" value={Password} setValue={setPassword} />
                    </div>
                    <div className="modal-inputs send">
                        <Input type="submit" value="Zaloguj się" onClick={() => { }} className="send-input" />
                    </div>
                </>
        </Modal>
    )
}

export default LoginModal
