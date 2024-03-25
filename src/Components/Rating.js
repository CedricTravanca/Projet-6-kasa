import starActive from "../Assets/star-active.png";
import starInactive from "../Assets/star-inactive.png";

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

  	return (
		<div className="host-rate">
		{stars.map((star) => /* Boucle pour afficher les étoiles selon la note*/
			rating >= star ? (
			<img key={star.toString()} className="host-rate" src={starActive} alt="Evaluation du logement" />
			) : (
			<img key={star.toString()} className="host-rate" src={starInactive} alt="Evaluation du logement" />
			)
		)}
		</div>
  	);
};

export default Rating;