import { Link } from 'react-router-dom';
import './HeroCard.css';

export const CardHero = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters }=hero
    const heroImage = `/assets/heroes/${hero.id}.jpg`;
    return (
        <Link to={`/hero/${id}`} className="my-card card">
            <img src={heroImage} className="img img-responsive" alt={superhero} />
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
