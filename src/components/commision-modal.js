import React, { useState } from 'react';
import { Modal, Input } from "."

const CommisionModal = ({ close }) => {
    const [Sent, setSent] = useState(false)
    const [Name, setName] = useState("")
    const [Message, setMessage] = useState("")
    const [Topic, setTopic] = useState("")
    const [Number, setNumber] = useState("")
    const [Mail, setMail] = useState("")

    const sendMessage = (e) => {
        console.table([Name, Number, Mail])
        e.preventDefault()
        setSent(true)
    }

    return (
        <Modal className="commision-modal" Close={close} title={!Sent ? "Zleć Projekt" : "Dziękujemy, skontaktujemy się wkrótce"} >
            {!Sent &&
                <>
                    <div className="modal-inputs">
                        <Input type="text" placeholder="Imię" value={Name} setValue={setName} />
                        <Input type="email" placeholder="Mail" value={Mail} setValue={setMail} />
                        {/*<Input type="text" placeholder="Wiadomość" value={Message} setValue={setMessage} />*/}
                        <Input type="tel" placeholder="Numer Kontaktowy" value={Number} setValue={setNumber} />
                        <Input rows={6} textarea value={Message} setValue={setMessage} placeholder="Opis projektu" />
                    </div>
                    <div className="modal-inputs send">
                        <Input type="submit" value="Wyślij" onClick={sendMessage} className="send-input" />
                    </div>
                </>
            }
        </Modal>
    )
}

export default CommisionModal
