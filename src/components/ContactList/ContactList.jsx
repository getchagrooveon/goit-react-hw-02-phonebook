import styles from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className={styles.div}>
      <ul className={styles.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={styles.listItem}>
              {contact.name}&nbsp;{contact.number} &nbsp;
              <button
                className={styles.button}
                type="button"
                onClick={() => handleDelete(contact.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
