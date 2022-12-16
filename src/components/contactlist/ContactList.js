import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactItem } from 'components/contactitem/ContactItem';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <>
      <ul className={css.contact__list}>
        <ContactItem
          contacts={contacts}
          filter={filter}
          onDeleteContact={onDeleteContact}
        />
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
