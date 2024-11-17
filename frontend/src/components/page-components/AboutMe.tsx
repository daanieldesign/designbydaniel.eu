import React from 'react';
import daniel from '../../assets/images/daniel.png';

const AboutMe = () => {
    return (
        <section className="about-me">
            <h2>O Mně</h2>
            <p className="subtitle">Nic moc zajímavého, ale je to potřeba.</p>

            <div className="row section-head">

                <div className="column large-8 medium-12 align-x-right" data-aos="fade-up">
                    <p className="lead">
                        Zdravím! Já jsem Daniel, je mi 18 let a snažím se rozjet svůj sen! Chci se ukázat světu (aspoň části), že mám talent a kreativitu! Věnuji se grafice od roku 2018, střihu videí 2019 a animacím 2020. Pracuji v Adobe Photoshop, Adobe Lightroom, stříhám videa v DaVinci Resolve, animuji v Adobe After Effects a mnoho dalších. Baví mě také IT, takže občas složím i nějaký ten počítač. Můj cíl tohoto projektu je uspět.. Třeba se to někdy splní!
                    </p>
                </div>
            </div> {/* end section-head */}

            <div className="row">
                <div className="column" data-aos="fade-up">
                    <h4>Moje podmínky.</h4>
                </div>
            </div>

            <div className="row block-large-1-4 block-medium-1-2 block-mob-full process-block">
                <div className="column process" data-aos="fade-up">
                    <h6>Preciznost.</h6>
                    <p>
                        Na preciznosti záleží. Proto se u každého projektu snažím na 100% a dělám, co můžu. Chci, aby byla spokojenost na obou stranách.
                    </p>
                </div>

                <div className="column process" data-aos="fade-up">
                    <h6>Komunikace.</h6>
                    <p>
                        Komunikace patří mezi nejdůležitější věci. Vždy chci, aby jakákoliv komunikace probíhla bez konfliktu.
                    </p>
                </div>

                <div className="column process" data-aos="fade-up">
                    <h6>Spokojenost.</h6>
                    <p>
                        Spokojenost zákazníka je pro mě to nejdůležitější. Vždy si přeji, aby byl spokojený zákazník.
                    </p>
                </div>
            </div> {/* end process-block */}
        </section>
    );
}

export default AboutMe;
