import React, { useState } from "react"
import { Modal, Input } from "."
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore'


const MeetingModal = ({ Close }) => {
    let Today = new Date()
    let maxDate = () => {
        let Max = Today
        Max.setMonth(Today.getMonth + 1)
        return Max
    }
    let Max = maxDate()
    const [Day, setDay] = useState(new Date())
    const [Name, setName] = useState("")
    const [Number, setNumber] = useState("")
    const [Mail, setMail] = useState("")
    const [Topic, setTopic] = useState("")
    const [Sent, setSent] = useState(false)

    const sendMessage = (e) => {
        console.table([Name, Number, Mail, Day])
        sendData(Day, Name, Number, Mail, Topic)
        e.preventDefault()
        setSent(true)
    }

    return (
        <Modal Close={Close} title={!Sent ?  "Umów spotkanie" : "Dziękujemy, skontaktujemy się wkrótce"}>
            {!Sent &&
                <>
                    <div className="modal-inputs">
                        <Input type="text" placeholder="Imię" value={Name} setValue={setName} />
                        <Input type="email" placeholder="Mail" value={Mail} setValue={setMail} />
                        {/*<Input type="text" placeholder="Wiadomość" value={Message} setValue={setMessage} />*/}
                        <Input type="tel" placeholder="Numer Kontaktowy" value={Number} setValue={setNumber} />
                        <Input type="text" placeholder="Temat spotkania" value={Topic} setValue={setTopic} />
                    </div>
                    <Calendar
                        minDate={Today}
                        maxDate={Max}
                        defaultView="month"
                        onChange={setDay}
                        value={Day} />
                    <div className="modal-inputs send">
                        <Input type="submit" value="Wyślij" onClick={sendMessage} className="send-input" />
                    </div>
                </>
            }
        </Modal>
    )
}

const sendData = (day, name, number, mail, topic) => {
    const db = getFirestore();
    addDoc(collection(db, 'questions'),{
        date: day,
        mail: mail,
        tel: number,
        name: name,
        title: topic
    })
}

export default MeetingModal