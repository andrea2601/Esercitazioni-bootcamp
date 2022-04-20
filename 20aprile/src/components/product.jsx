export const Product = ({img, title, price}) => {
  return (
    <article>
      <img src={img} alt="img" />
      <p>Prezzo: {price}€</p>
      <h4>{title}</h4>
    </article>
  );
};
