import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/Musto.jpg`}
                        width="400 px"
                        alt="Placeholder of me"
                        className="profile-image"
                    /></div>
                <div>
                    <p>
                        I'm a postdoctoral lecturer in the Core Curriculum at New York University. I obtained my PhD from the
                        Middle Eastern and Islamic Studies program at NYU in 2024. My dissertation was titled "Between Bukhārā and Baghdād: New Histories for Sufism's Formative Period."
                        My primary research interests are the dimensions of medieval Sufism, from the textual and conceptual to the historical, social, and political.
                    </p>
                    <p>
                        My projects--published, forthcoming, and underway--treat topics in the history of Sufism, new manuscript finds, early Islamic theology, hagiography, and social history. I also work fairly
                        extensively with unpublished manuscripts of early Sufi texts, and I'm in the process of producing a number of editions, including Abū Manṣūr al-Iṣfahānī's <em>Shawāhid al-taṣawwuf</em>. I'm also broadly
                        interested in questions of religiosity in early Islam within the context of Late Antiquity, with special interest in the relationship between early Islamic renunciation
                        and late antique Christian mysticism and asceticism.
                    </p>
                    <p>
                        I also maintain a significant interest in developing digital humanities projects that bridge the gap between the non-technical user and technical developments in the fields of Arabic
                        natural language processing and digitial corpora. In that vein, my tools are centered on facilitating research and providing access to what I have called digitally-neglected texts.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Home;
