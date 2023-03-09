import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {
   
   return (<div className={styles.divGeneral}>

      {
        characters.length && characters.map(({name, species, gender, image, id })=>{
            return(
            <Card 
            id={id}
            name={name} 
            species={species} 
            gender={gender} 
            image={image} 
            onClose={onClose}
            />);
         })
      }



   </div>);
}

