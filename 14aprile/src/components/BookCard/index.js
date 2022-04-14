import "./styles.css";

export const BookCard = ({ img, name, description }) => (
    <div className="bookCard">
        <img src={img} alt="book-img" />
        <div className="details">
            <h2 className="title">{name}</h2>
            <p className="description">{description}</p>
            <div className="btn">
                <p>Add to cart</p>
            </div>
        </div>
    </div>
);