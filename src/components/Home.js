import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/Musto.jpg`}
                        width="300 px"
                        alt="Placeholder of me"
                        className="profile-image"
                    /></div>
                <div>
                    <p>
                        I am a postdoctoral lecturer in the core curriculum at New York University. I obtained his PhD from the
                        Middle Eastern and Islamic Studies program at NYU in 2024, and his dissertation was titled "Between Bukhārā and Baghdād: New Histories for Sufism's Formative Period."
                        My primary research interests are the various dimensions of medieval Sufism, from the textual and conceptual to the historical, social, and political.
                    </p>
                    <p>
                        My peer-reviewed projects, published, forthcoming, and underway, treat topics in Sufi history, new manuscript finds, early Islamic theology, and hagiography and social history. I am
                        also currently working on producing an edition of Abū Manṣūr al-Iṣfahānī's <em>Shawāhid al-taṣawwuf</em> in addition to other unedited and unpublished Sufi texts.
                    </p>
                    <p>
                        I also maintain a significant interest in developping digital humanities projects that bridge the gap between the non-technical user and technical developments in the fields of Arabic
                        natural language processing and digitial corpora. In that vein, my tools are centered on facilitating research and providing access to what I have called digitally-neglected texts. 
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Home;
