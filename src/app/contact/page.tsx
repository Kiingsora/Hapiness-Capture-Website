// app/contact/page.tsx

import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      {/* Section gauche : Image de la photographe */}
      <div className={styles.imageContainer}>
        <img 
          src="/assets/images/imgPres.jpg" 
          alt="Photographe" 
          className={styles.photographerImage}
        />
      </div>

      {/* Section droite : Informations du photographe */}
      <div className={styles.infoContainer}>
        <h2 className={styles.photographerName}>Mansouri Margot</h2>
        <p className={styles.contactInfo}>
          <strong>Téléphone :</strong> 06.21.61.52.60
        </p>
        <p className={styles.contactInfo}>
          <strong>Email :</strong> capture.happiness@gmail.com
        </p>
        <p className={styles.contactInfo}>
          <strong>Instagram :</strong> <a href="https://www.instagram.com/happiness__capture_/" className={styles.instagramLink}>Happiness Capture</a>
        </p>
      </div>
    </div>
  );
}
