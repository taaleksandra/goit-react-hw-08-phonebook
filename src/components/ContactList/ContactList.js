import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import css from '../ContactList/ContactList.module.css';

import { deleteContact } from 'redux/contacts/operations';
import { selectFilterContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);

  const handleDelete = evt => {
    const deletingContactId = evt.target.id;
    dispatch(deleteContact(deletingContactId));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={clsx(css.contact)}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            id={contact.id}
            type="button"
            onClick={handleDelete}
            className={clsx(css.deleteBtn)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
