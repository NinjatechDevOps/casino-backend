import React from 'react'
import { translate } from '../../../translations/translate'

function ContactDetails(props){
    const {lang, item} = props    

    return <ul className="contact_list_item shadow_convex">
        <li><h3>{translate({lang: lang, info: 'country'})}:  {item.country}</h3></li>
        <li><p>{translate({lang: lang, info: 'city'})}:  {item.city}</p></li>
        <li><p>{translate({lang: lang, info: 'phone'})}:  <a href={'tel:' + item.phone}>{item.phone}</a></p></li>
        <li><p>{translate({lang: lang, info: 'email'})}: <a href={'mailto:' + item.email}>{item.email}</a></p></li>
    </ul>
}
export default ContactDetails