import React, { useState, useContext } from 'react';
import Cookies from 'universal-cookie'
import CookieImg from '../images/icons/cookie-bite.svg'


const CookiesBanner = () => {
    const [Accept, setAccept] = useState(true)
    const cookies = new Cookies()


    return (
        <>
            {!(cookies.get('dupa') === 'true') &&
                <div className="cookies-banner">
                    <div className="cookies-banner-inner">
                        <div style={{width: '100%'}}>
                            <div>
                            <img src={CookieImg} width='30px' />
                            <h2>
                                Pliki Cookies
                            </h2>
                            </div>
                            <div>
                                <button className="landing-button" onClick={() => { cookies.set('dupa', 'true'); setAccept(!Accept) }} >Akceptuję</button>
                            </div>
                        </div>
                        <p>W naszym serwisie stosuje się pliki cookies, które są zapisywane na dysku urządzenia końcowego użytkownika w celu ułatwienia nawigacji oraz dostosowania serwisu do preferencji użytkownika. Szczegółowe informacje o plikach cookies znajdziesz w Polityce prywatności. Zablokowanie zapisywania plików cookies na urządzeniu końcowym lub ich usunięcie możliwe jest w po właściwym skonfigurowaniu ustawień przeglądarki internetowej. Więcej o blokowaniu i usuwaniu plików cookies znajdziesz w Polityce prywatności. Zablokowanie możliwości zapisywania plików cookies może spowodować utrudnienia lub brak działania niektórych funkcji serwisu.</p>

                    </div>
                </div>
            }
        </>
    )
}

export default CookiesBanner