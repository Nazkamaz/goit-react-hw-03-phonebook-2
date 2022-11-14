import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactsForm.module.css';

class ContactsForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = {
    name: '',
    number: '',
    id: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ id: nanoid(8), name, number });
    this.reset();
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.labelForm}>
          <h2 className={s.labelText}>Name</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={s.inputData}
            placeholder="enter the name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.labelForm}>
          <h2 className={s.labelText}>Number</h2>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            className={s.inputData}
            placeholder="enter the number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
