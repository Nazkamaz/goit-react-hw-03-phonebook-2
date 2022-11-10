import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

const ContactsList = ({contacts, onDeleteContact}) => {
    return(
        <ul>
            {contacts.map(({id, name, number}) => <ContactsListItem name={name} number={number} id={id} key={id} onDeleteContact={onDeleteContact}/>)}
        </ul>
    )
}

ContactsList.propTypes={
    contacts: PropTypes.arrayOf(
        PropTypes.shape
        ({name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired})
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactsList