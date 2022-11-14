import './Bets.css'
import {useState} from "react";
import Modal from "../Modal/Modal";
import Loading from '../../assets/loading.gif'


const GAME_WIN = 'WIN';
const GAME_LOST = 'LOST';

function Bets(props){
    let [activeBet, setActiveBet] = useState(null);
    let [gameStatus, setGameStatus] = useState(null)

    let clickBet = (item) => {
        setActiveBet(item)

        setTimeout(() => {
            setActiveBet(null);
            setGameStatus(GAME_WIN);
        }, 500)
    }

    return (
        <div className="bets">
            <h2 className="bets__title">Select Your Bet</h2>
            <div className="bet__items">
                {
                    props.bets.map( bet => (
                        <div className="bet__item" onClick={() => clickBet(bet)} key={bet.key}>
                            <div className="bet__img">
                                <img src={bet.image} alt={bet.title}/>
                            </div>
                            <h3>{bet.title}</h3>
                        </div>
                    ))
                }
            </div>
            { activeBet && (
                <Modal title="WAITING CURB’S CHOOSE" onClose={() => setActiveBet(null)}>
                    <div className="bet-waiting">
                        <div className="bet__item no-hover">
                            <div className="bet__img">
                                <img src={activeBet.image} alt={activeBet.title}/>
                            </div>
                            <h3>{activeBet.title}</h3>
                        </div>
                        <div className="bet__item no-hover">
                            <div className="bet__img">
                                <img src={Loading}/>
                            </div>
                            <h3>BILOL</h3>
                        </div>
                    </div>
                </Modal>
            )}
            { gameStatus && (
                <Modal title={"You "+gameStatus+"!"} onClose={() => setGameStatus(null)} showFooter={true}>
                    <div className="bet-waiting">
                        <div className="bet__item no-hover">
                            <div className="bet__img">
                                <img src={props.bets[0].image} alt={props.bets[0].title}/>
                            </div>
                            <h3>{props.bets[0].title}</h3>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
export default Bets