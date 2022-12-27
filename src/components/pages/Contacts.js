import React from 'react';

const Contacts = (props) => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Ukraine, Lviv</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+39 093 251 95 15</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">bogdan.dawydiak@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    )
}

export default Contacts;