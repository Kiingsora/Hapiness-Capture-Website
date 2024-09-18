import React from "react";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Hom() {
// state 
    // const [navCategory, setNavCategory] = useState([
    //   {id: 1, category : "Home"},
    //   {id: 2, category : "Galerie"},
    //   {id: 3, category : "Prestations"},
    //   {id: 4, category : "Contact"}
    // ])
// comportement


// render 
      return (
    <div className={styles.mainPage} >
      <header className={styles.header}>
        <nav className={styles.nav}> 
          <ul className={styles.navUl}>
          <li>Home</li>
          <li>Galerie</li>
          <li>Prestations</li>
          <li>Contact</li>
          </ul>
          </nav>
      </header>

      <main className={styles.main}>

        <section className={styles.websiteName}>
          <h2>happiness capture</h2>
        <video className={styles.backgroundVideo} autoPlay loop muted>
          <source src="/assets/video/mariage.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo
          </video>
        </section>

        <section className={styles.presentation}>
          <section className={styles.resume}>
            <h1>Margot, photographe de mariage et shootings</h1>
            <div>
              <p>Je capture...</p>
              <p>Vos instants...</p>
              <p>...vos émotions</p>
            </div>
          </section>
          <img className={styles.imgMargot} src="/assets/images/imgPres.jpg" alt="Margot" />
        </section>

        <section className={styles.vitrine}>
          <h2> Un avant goût d'émotions...</h2>
          <div className={styles.imgVitrine}>
            <img src="/assets/images/carrou1.jpg" alt="carrou1" />
            <img src="/assets/images/carrou2.jpg" alt="carrou2" />
            <img src="/assets/images/carrou3.jpg" alt="carrou3" />
          </div>
        </section>    

      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Happyness Capture - Photographe : Margot</p>
      </footer>

    </div>
  );
}

