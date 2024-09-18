// app/services/page.tsx

import styles from './Prestation.module.css';

export default function ServicesPage() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.pageTitle}>Mes Prestations</h1>
      
      <table className={styles.servicesTable}>
        <thead>
          <tr>
            <th>Mariage</th>
            <th>Shooting</th>
            <th>Formation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prix unitaire: 15 ct</td>
            <td>Prix unitaire: 15 ct</td>
            <td>Prix unitaire: 15 ct</td>
          </tr>
          <tr>
            <td>Déplacement: 50 EUR</td>
            <td>Déplacement: 50 EUR</td>
            <td>Déplacement: 50 EUR</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
