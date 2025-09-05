import React from 'react';

const DHProjects = () => {
    return (
        <div>
            <h3>Digital Humanities Projects</h3>
            <ul>
                <li>
                    <strong><a href='https://www.tabassur.com/'>tabaṣṣur</a></strong>
                    <p>Tabaṣṣur is a simple web application to view short manuscripts or manuscript excerpts that I've transcribed. All texts here are unpublished unless otherwise noted. It is my hope that this will serve not only as a way to bring attention to unpublished works, but also aid those looking to study Arabic paleography.</p>
                </li>
                <li>
                    <strong><a href='https://tabadil.pages.dev/'>tabādīl</a></strong>
                    <p>Tabādīl is a search tool that creates and searches all possible name permutations from a given kunya + nasab + nisba combination. It utilizes the meta-corpus I put together for my mutūn app (below), which contains over 1.3B tokens from 10,000+ unique texts. This app is designed to assist in prosopography specifically or just general biographical research.</p>
                </li>
                <li>
                    <strong><a href='https://nusus-static.pages.dev/'>nuṣūṣ</a></strong>
                    <p>Nuṣūṣ is a corpus of digitized Arabic texts designed to fill gaps in extant digital corpora. Originally a collection of early Sufi and Sufi-adjacent texts, nuṣūṣ has since expanded to include early works on <em>kalām</em>, <em>falsafa</em>, and Christian theology. Through this website, users can: browse text metadata, including author biographies; read these works online; and, most importantly, search the contents of texts in the corpus. The digitized versions of these texts are available to download here on nuṣūṣ for individuals to use for computational textual analysis or other interests. You can also find all the data for nuṣūṣ on the project's <a href="https://github.com/ammusto/nusus-static">github</a>.</p>
                </li>
                <li>
                    <strong><a href='https://www.ishtiqaq.com/'>ishtiqāq</a></strong>
                    <p>There are a variety of searchable Arabic dictionaries available online, which is *not* the focus of this tool, even though ishtiqāq shares much of this functionality. At its core, ishtiqāq is an aid for reading manuscripts where you come across a rasm (consonantal skeleton) that is unclear or whose letters are ambiguous. With ishtiqāq you can mark unclear letter(s) and, with a single search, retrieve multiple results based on the different possible spellings of the word. To learn more about the functionality, check the How To page.</p>                </li>
                <p>This tool was in inspired by <a href="https://www.lexiqamus.com/en">LexiQamus</a>, and utilizes indices from <a href="https://www.ejtaal.net">ejtaal.net</a>, a <a href="https://github.com/alsaydi/root-ext-service/blob/main/data/word-root-table.txt">flatfile database</a> of arabic words and their roots collected by <a href="https://github.com/alsaydi">Abdalaziz Alsaydi</a>, and a noun list made by <a href="https://github.com/linuxscout/arramooz/">Taha Zerrouki</a>. English dictionary data was scraped from an OCR'd version of Hans Wehr and from the <a href="https://www.livingarabic.com/">Living Arabic Project</a>, and the classical lexica were scraped from al-maktaba <a href="www.shamela.ws">al-shamela</a> and <a href="https://www.lesanarab.com/">lesanarab.com</a>.</p>
                <li>
                    <strong><a href='https://sham-scrap.pages.dev/'>sham-scrap</a></strong>
                    <p>This is a metadata browser for the texts in al-maktaba al-shamela that were scraped of al-maktaba al-shamila on 7/2/2024, you can brose the texts on the <a href="http://www.shamela.ws">shamela website</a> as well as through their application. I am in the process of cleaning the scraped texts and uploading them to be available to all, currently you can download individual texts, but soon the entire corpus will be available on GitHub. While many of these texts are already scraped and available via the <a href="https://openiti.org/">Open Islamicate Texts Initiative</a> and <a href="https://kitab-project.org/">KITAB</a> project <a href="https://zenodo.org/records/10007820">meta-corpus</a>, a significant portion is not. Furthermore, the texts in the OITI/KITAB corpus are encoded in their custom mARkdown schema. While this has its benefits for token and phrase-level tagging, it is somewhat cumbersome and there are many edge cases that make cleaning the texts difficult. Additionally, the metadata for the OITI/KITAB files are not standardized, with varying field names, missing items, etc., so I've tried to standardize the metadata and the text by putting them in .json format.</p>
                </li>
                <li>
                    <strong><a href='https://mutun.pages.dev/'>mutūn</a></strong>
                    <p>The mutūn project looks to empower non-technical users by
                        facilitating access both to thousands of digitized Arabic texts and
                        to natural language processing tools specifically designed for Arabic. Building off of the
                        pioneering work of the Open Islamic Texts Initiative (<a href="https://openiti.org/">OpenITI</a>)
                        and the <a href="https://kitab-project.org/">KITAB</a> project in collecting
                        and curating a meta-corpus of over 13,000 Arabic texts, mutūn will allow users
                        to create their own subcorpora of digitized Arabic texts through an accessible platform.
                        Furthermore, a wide
                        array of computational tools have been developed for the textual analysis of Arabic texts,
                        including
                        the
                        toolset created by NYU Abu Dhabi's
                        <a href="https://nyuad.nyu.edu/en/research/faculty-labs-and-projects/computational-approaches-to-modeling-language-lab.html">CAMeL Lab</a>.
                        Without technical training, the contributions of these and
                        other projects remain out of reach to the lay researcher. The mutūn platform
                        looks to change that by enabling any user to: easily access and read these digitized texts;
                        organize
                        their
                        own corpus;
                        carry out complex searches; and view text analysis outputs of their corpora to further their
                        research goals.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default DHProjects;
