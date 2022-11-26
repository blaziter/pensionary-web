import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const InfoFooter = () => {
    return (
        <>
            <div className="info-container font has-text-centered">
                <article className='footer message is-success'>
                    <div className='message-body'>
                        <div className='switch-routes'>Pro zobrazení seznamu sestřiček klikněte na tlačítko <Link to='/status'><BsFillInfoCircleFill size='96px' /></Link></div>
                        <div className='switch-routes'>Pro zobrazení událostí klikněte na tlačítko <Link to='/events'><BsFillInfoCircleFill size='96px' /></Link></div>
                        <p>Vývojáři: <a href=''>Petr Tran</a> <a href=''>Štefan Jambrich</a></p>
                    </div>
                </article>
            </div>
        </>
    );
}

export default InfoFooter;