import styles from "./Card.module.css";


export default function Card({name, species, gender, image, onClose, id}) {
   return (
      <div className={styles.divCard}>

         <button 
         className={styles.botoncin} 
         onClick={() => (onClose(id))}>X</button>

         <h2>{name}</h2>
         
         <img  src={image} alt="perso" />
        
        <div className={styles.specieGender}> 
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
         </div>
   );
}