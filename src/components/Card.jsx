const Card = ({ titulo, info, children }) => {
    return (
        <div className="bg-white rounded-3xl border p-4 border-stone-300">
            <div className="flex justify-between">
                <h2>{titulo}</h2>
                <div>{info}</div>
            </div>
            <div>
                {children}
            </div>
        </div>

    );
}

export default Card;