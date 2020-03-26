import React, {useState, useEffect} from "react";
import "./Section3.scss";
import Fetcher from "../../../utils/Fetcher";
import MediumButton from "../MediumButton/MediumButton";
import GameBox from "../Section3/GameBox/GameBox";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Section3 = () => {
    const [games, setGames] = useState([]);

  const fetchGames = async () => {
    Fetcher.get(SERVER_URL + "api/public/games", {})
    .then(resp => {
      setGames(resp.games);
    })
    .catch((err) => {
      //OM MAN INTE ÄR INLOGGAD KOMMER MAN HIT
      setGames([]);
      console.log(err);
    }) 
  }

    useEffect(() => {
    fetchGames();
  }, []);

  const getFrontAndBackImage = (str) => {
    if(str === '4747a477-3445-4b0a-9db9-bf0e68238208' ) {
      return 'csgo_';
    }
  } 

  let csgo = games['4747a477-3445-4b0a-9db9-bf0e68238208'];

  return (
    <section className="PG-container">
      <div className="PG">
        <h1>Popular Games</h1>
      </div>
      <div className="games-container">
        {/* {Object.entries(games).map(([id, game]) => ( // For when all games should be displayed
            <GameBox
              key={id}
              title={game.name}
              img_back={getFrontAndBackImage(id) + 'back.png'}
              img_front={getFrontAndBackImage(id) + 'front.png'}
              contests={game.contests}
            />
          ))} */}
          { csgo && 
            <GameBox // show only csgo for now
                key={'4747a477-3445-4b0a-9db9-bf0e68238208'}
                title={games['4747a477-3445-4b0a-9db9-bf0e68238208'].name}
                img_back={getFrontAndBackImage('4747a477-3445-4b0a-9db9-bf0e68238208') + 'back.png'}
                img_front={getFrontAndBackImage('4747a477-3445-4b0a-9db9-bf0e68238208') + 'front.png'}
                contests={games['4747a477-3445-4b0a-9db9-bf0e68238208'].contests}
              />
          }
          <GameBox 
            //title="More coming soon"
            img_back="Brawl-MoreCommingSoon-Back.png"
            img_front="Brawl-MoreCommingSoon-Front.png"
            contests={[]}
          />
      </div>
      <MediumButton className="see-more" label="Read more" navigationTo="concept" />
    </section>
  );
};

export default Section3;
