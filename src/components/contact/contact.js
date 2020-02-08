import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='Contact'>
            <a name='contact' href="http://localhost:3000#contact">
                <p className='contact_anchor_content'>contact</p>
            </a>
            <div className='Contact__content'>
                <h3 className='Contact__title'>Contact</h3>
                <p class='Contact__text'>Please feel free to contact me with any questions or inqueries. I'd love to hear from you!</p>
                <ul class='Contact__list'>
                    <li class='Contact__link phone'>
                        <a class='con-text' href='tel:9376819305'>937-681-9305</a>
                    </li>
                    <li class='Contact__link email'>
                        <a class='con-text' href='mailto:adamnewhouser@gmail.com'>adamnewhouser@gmail.com</a>
                    </li>
                </ul>
            </div>
            </div>
        )
    }
}