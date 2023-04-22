import React from "react";
import './Moves.css';
function Moves(props){
    return (
        <div className="moves">
            <div className="mov-title">{props.data.name} Moves</div>
            <div className="moves-wrapper">
                <div className="mov">1. {props.data.moves[0].move.name}</div>
                <div className="mov">11. {props.data.moves[10].move.name}</div>
                <div className="mov">21. {props.data.moves[20].move.name}</div>
                <div className="mov">2. {props.data.moves[1].move.name}</div>

                <div className="mov">12. {props.data.moves[11].move.name}</div>
                <div className="mov">22. {props.data.moves[21].move.name}</div>


                <div className="mov">3. {props.data.moves[2].move.name}</div>
                <div className="mov">13. {props.data.moves[12].move.name}</div>
                <div className="mov">23. {props.data.moves[22].move.name}</div>
                <div className="mov">4. {props.data.moves[3].move.name}</div>
                <div className="mov">14. {props.data.moves[13].move.name}</div>
                <div className="mov">24. {props.data.moves[23].move.name}</div>
                <div className="mov">5. {props.data.moves[4].move.name}</div>
                <div className="mov">15. {props.data.moves[14].move.name}</div>
                <div className="mov">25. {props.data.moves[24].move.name}</div>

                <div className="mov">6. {props.data.moves[5].move.name}</div>
                <div className="mov">16. {props.data.moves[15].move.name}</div>
                <div className="mov">26. {props.data.moves[25].move.name}</div>
                <div className="mov">7. {props.data.moves[6].move.name}</div>
                <div className="mov">17. {props.data.moves[16].move.name}</div>
                <div className="mov">27. {props.data.moves[26].move.name}</div>
                <div className="mov">8. {props.data.moves[7].move.name}</div>
                <div className="mov">18. {props.data.moves[17].move.name}</div>
                <div className="mov">28. {props.data.moves[27].move.name}</div>
                <div className="mov">9. {props.data.moves[8].move.name}</div>
                <div className="mov">19. {props.data.moves[18].move.name}</div>
                <div className="mov">29. {props.data.moves[28].move.name}</div>
                <div className="mov">10. {props.data.moves[9].move.name}</div>
                <div className="mov">20. {props.data.moves[19].move.name}</div>
                <div className="mov">30. {props.data.moves[29].move.name}</div>
            </div>
        </div>
    )
}

export default Moves;
