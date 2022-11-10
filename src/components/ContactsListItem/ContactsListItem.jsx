import PropTypes from 'prop-types';
import s from './ContactsListItem.module.css'

const ContactsListItem = ({id, name, number,onDeleteContact}) => {
    return(
        <li className={s.listItem}><p>{name} : {number}</p>
        <button onClick={()=>onDeleteContact(id)} className={s.buttonDelete}>
            Delete</button></li>
    )
}

ContactsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactsListItem