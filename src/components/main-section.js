import React from 'react';
import { Section } from '.'
import Image1 from "../images/example1.jpg"
import Image2 from "../images/example2.jpg"

const MainSection = () => {
    return (
        <Section className="main" row>
            <div>
                <img src={Image1} />
                <p className="image-caption">Sed ut perspiciatis unde omnis iste natus error sit</p>
            </div>
            <div>
                <div className="main-text">
                    <h1>
                        Lorem ipsum dolor sit amet
                    </h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                </div>
            </div>
            <div>
                <img src={Image2} />
            </div>
        </Section>
    )
}

export default MainSection