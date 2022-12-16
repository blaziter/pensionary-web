interface CardProps {
    title: string;
    subtitle: string;
    image: string;
}

const Card = ({ title, subtitle, image }: CardProps) => {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <div className='media'>
                        <div className='media-left'>
                            <figure className='image'>
                                <img className='info-card-image' src={image} alt='Placeholder image' />
                            </figure>
                        </div>
                        <div className='media-content info-card-content'>
                            <p className='title info-card-title'>{title}</p>
                            <p className='subtitle info-card-subtitle'>{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;