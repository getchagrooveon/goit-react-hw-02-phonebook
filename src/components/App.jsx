import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchFilters } from './SearchFilters/SearchFilters';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredArray = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      alert(`${form.elements.name.value} is already in contacts`);
    } else {
      this.state.contacts.push(newContact);
    }
    this.forceUpdate();
    form.reset();
  };
  render() {
    const contacts = this.getFilteredArray();
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <h2>Contacts</h2>
          <SearchFilters onChange={this.handleFilterChange} />
          <ContactList contacts={contacts} handleDelete={this.handleDelete} />
        </div>
      </>
    );
  }
}
