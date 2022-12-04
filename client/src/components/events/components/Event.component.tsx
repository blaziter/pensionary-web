interface EventProps {
    className: string;
    title: string;
    description: string;
}

export const Event = ({ className, title, description } : EventProps) => {
    return(
        <>
            <article className={`message event is-danger ${className}`}>
                <h1 className='message-header event-title'>{title}</h1>
                <p className='message-body event-description'>{description}</p>
            </article>
        </>
    );
}