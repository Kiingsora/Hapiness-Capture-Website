"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./SelectionClients.module.css";
import CustomScrollbar from "@/components/CustomScrollBar";

interface CartItem {
  id: string;
  url: string;
}

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
  const [cart, setCart] = useState<CartItem[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');

    const verifyToken = async () => {
      if (!token) {
        setIsAuthenticated(true);
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
  }, [searchParams]);



  const addToCart = (picture: string) => {
    setCart(prevCart => {
      if (prevCart.some(item => item.url === picture)) {
        return prevCart;
      }
      return [...prevCart, { id: `${Date.now()}`, url: picture }];
    });
  };

  const removeFromCart = (pictureUrl: string) => {
    setCart(prevCart => prevCart.filter(item => item.url !== pictureUrl));
  };
  
  const isInCart = (pictureUrl: string) => {
    return cart.some(item => item.url === pictureUrl);
  };

  // Rendu pendant la vérification de l'authentification
  if (isAuthenticated === null) {
    return <p className={styles.loading}>Vérification en cours...</p>;
  }

  // Rendu si le token est invalide ou expiré
  if (!isAuthenticated) {
    return (
      <p className={styles.error}>
        Accès restreint. Votre token est invalide ou expiré.
      </p>
    );
  }

  // Diviser les images en deux groupes
  const halfwayIndex = Math.ceil(pictures.length / 2);
  const firstRowPictures = pictures.slice(0, halfwayIndex);
  const secondRowPictures = pictures.slice(halfwayIndex);

  return (
    <div className={styles.PictureSelectionContainer}>
      <h1 className={styles.title}>Sélectionnez vos photos</h1>
      
      <div className={styles.pictureList}>
      <CustomScrollbar className={styles.pictureListContainer}>
        {/* Première ligne d'images */}
        <div className={styles.pictureRow}>
          {firstRowPictures.map((picture, index) => (
            <div key={index} className={styles.pictureItem}>
              <img
                className={styles.picture}
                src={picture}
                alt={`Photo : ${index + 1}`}
                />
              <button 
                onClick={() => isInCart(picture) ? removeFromCart(picture) : addToCart(picture)}
                className={isInCart(picture) ? styles.removeButton : styles.addButton}
                >
                {isInCart(picture) ? 'Retirer du panier' : 'Ajouter au panier'}
              </button>
            </div>
          ))}
          
        </div>

        {/* Deuxième ligne d'images */}
        <div className={styles.pictureRow}>
          {secondRowPictures.map((picture, index) => (
            <div key={index + halfwayIndex} className={styles.pictureItem}>
              <img
                className={styles.picture}
                src={picture}
                alt={`Photo : ${index + 1 + halfwayIndex}`}
                />
              <button 
                onClick={() => isInCart(picture) ? removeFromCart(picture) : addToCart(picture)}
                className={isInCart(picture) ? styles.removeButton : styles.addButton}
                >
                {isInCart(picture) ? 'Retirer du panier' : 'Ajouter au panier'}
              </button>
            </div>
          ))}
        </div>
      </CustomScrollbar>
      </div>


      <div className={styles.cart}>
        <h2>Votre panier</h2>
        {cart.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.url} alt="Photo dans le panier" className={styles.cartThumbnail} />
                <button onClick={() => removeFromCart(item.url)} className={styles.removeButton}>
                  Retirer
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bouton pour valider le panier */}
      <button 
        onClick={() => console.log('Photos dans le panier:', cart)}
        className={styles.validateButton}
        disabled={cart.length === 0}
      >
        Valider le panier ({cart.length} photo{cart.length > 1 ? 's' : ''})
      </button>
    </div>
  );
}
