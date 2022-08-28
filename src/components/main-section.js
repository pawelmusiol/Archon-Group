import React, { useState, useEffect } from 'react';
import { Section } from '.'
import Image1 from "../images/main-left.jpeg"
import Image2 from "../images/main-right.jpeg"

const MainSection = () => {


    return (
        <Section className="main" row>
            <div>
                <img src={Image1} className="main-image" />
                {/* <p className="image-caption">Sed ut perspiciatis unde omnis iste natus error sit</p> */}
            </div>
            <div className="main-text-div">
                <div className="main-text">
                    <h1>Archon Group</h1>
                    <p>
                        <span className="first-letter">1</span>
                        Rozlicz z Nami Swoją księgowość i kadry pracownicze. Kontroluj stan Swojej firmy oraz wydatki i terminy urzędowych zobowiązań.
                    </p>
                    <p>
                        <span className="first-letter">2</span>
                        Stwórz unikatowy wizerunek Swojej firmy. Wykreuj Swoją działalność w sieci.
                    </p>
                    <p>
                        <span className="first-letter">3</span>
                        Zabezpiecz to co dla Ciebie najważniejsze kompleksowymi produktami Ubezpieczeniowymi.
                    </p>
                    <p>
                        <span className="first-letter">4</span>
                        Śmiało wkrocz w nowy rozdział i znajdź z nami finansowanie. Zainwestuj w swoją przyszłość.
                    </p>
                </div>
            </div>
            <div>
                <img src={Image2} className="main-image" style={{}} />
            </div>
        </Section>
    )
}

export default MainSection