"use client";
import { useState, useEffect } from "react";
import styles from "./SelectionClients.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const isAuthenticated = true;
interface Client {
    email: string;
    token: string;
  };
  
const pictures = [
  "/assets/images/carrou1.jpg",
  "/assets/images/carrou2.jpg",
  "/assets/images/carrou3.jpg",
  "/assets/images/carrou1.jpg",
  "/assets/images/carrou2.jpg",
  "/assets/images/carrou3.jpg",
  "/assets/images/carrou1.jpg",
  "/assets/images/carrou2.jpg",
  "/assets/images/carrou3.jpg",
  "/assets/images/carrou1.jpg",
  "/assets/images/carrou2.jpg",
  "/assets/images/carrou3.jpg",
  "/assets/images/carrou1.jpg",
  "/assets/images/carrou2.jpg",
  "/assets/images/carrou3.jpg",
  "/assets/images/carrou1.jpg",
  "/assets/images/carrou2.jpg",
  "/assets/images/carrou3.jpg",
  "/assets/images/carrou1.jpg",
  "/assets/images/carrou2.jpg",
  "/assets/images/carrou3.jpg",
];

export default function PictureSelectionPage() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [selectedPicture, setSelectedPicture] = useState<string | null>(null);
    const router = useRouter();
  
    useEffect(() => {
      const { token } = router.query;
  
      const verifyToken = async () => {
        if (!token) {
          setIsAuthenticated(false);
          return;
        }
  
        try {
          const res = await fetch(`/api/clients/verify?token=${token}`);
          const data = await res.json();
  
          if (res.ok && data.isValid) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error('Erreur lors de la vérification du token:', error);
          setIsAuthenticated(false);
        }
      };
  
      verifyToken();
    }, [router.query]);
  
  if (isAuthenticated === null) {
    return <p className={styles.loading}>Vérification en cours...</p>;
  }

  if (!isAuthenticated) {
    return <p className={styles.error}>Accès restreint. Votre token est invalide ou expiré.</p>;
  }

  // Diviser les images en deux groupes
  const halfwayIndex = Math.ceil(pictures.length / 2);
  const firstRowPictures = pictures.slice(0, halfwayIndex);
  const secondRowPictures = pictures.slice(halfwayIndex);

  return (
    <div className={styles.PictureSelectionContainer}>
      <h1 className={styles.title}>Sélectionnez vos photos</h1>

      <div className={styles.pictureList}>
        {/* Première ligne d'images */}
        <div className={styles.pictureRow}>
          {firstRowPictures.map((picture, index) => (
            <img
              key={index}
              className={styles.picture}
              src={picture}
              alt={`Photo : ${index + 1}`}
              onClick={() => setSelectedPicture(picture)}
            />
          ))}
        </div>

        {/* Deuxième ligne d'images */}
        <div className={styles.pictureRow}>
          {secondRowPictures.map((picture, index) => (
            <img
              key={index + halfwayIndex} // Utilisation d'une clé unique pour chaque image
              className={styles.picture}
              src={picture}
              alt={`Photo : ${index + 1 + halfwayIndex}`}
              onClick={() => setSelectedPicture(picture)}
            />
          ))}
        </div>
      </div>

      {/* Affichage de la photo agrandie */}
      {selectedPicture && (
        <div
          className={styles.containerEnlarged}
          onClick={() => setSelectedPicture(null)}
        >
          <img
            src={selectedPicture}
            alt="Agrandissement"
            className={styles.enlargedPicture}
          />
        </div>
      )}
    </div>
  );
}
