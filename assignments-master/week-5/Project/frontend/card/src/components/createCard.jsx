export function Card({name, description, interests, social}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="interests">
                <h4>Interest:</h4>
                <ul>
                    {interests.map((interest, index) => (
                        <li key="index">{interest}</li>
                    ))}
                </ul>
            </div>
            <div className="social">
                {Object.entries(social).map(([platform, url]) => (
                    <a key="{platform}" href={url} target="_blank" rel="noopener noreferrer">
                        {platform}
                    </a>
                ))}
            </div>
        </div>
    );
}