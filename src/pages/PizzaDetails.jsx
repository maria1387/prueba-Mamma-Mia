import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatPrice } from "../components/format-price";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import Button from "../components/Button";
import '../style/pizzaDetais.css'
const PizzaDetails = () => {
  const { addCart } = useContext(PizzaContext);
  const { pizzasData } = useContext(PizzaContext);
  const { id } = useParams();
  console.log(id);

  const pizzaDetail = pizzasData.find((pizza) => pizza.id === id);
  return (
    <Helmet title={pizzaDetail.name}>
      <CommonSection title={pizzaDetail.name} />
      <section className="pizzaDetails pizzaDetails__container">
        <Container>
          <Row>
            <Col lg="6">
			
              <img src={pizzaDetail.img} alt="" className="pizzaDetails-img" />
			
            </Col>
            <Col lg="6">
              <div className="container-info">
              <div className="cart-title"> <h1 className="cart-h1
	
  text-capitalize">{pizzaDetail.name}</h1></div>
             
              <p>{pizzaDetail.desc}</p>
              <h6 className="product__h6">Ingredientes:</h6>
              {pizzaDetail.ingredients.map((ingredient, i) => (
                <li key={i} className="capitalize ">
                  <pre className="">🍕 </pre> {ingredient}
                </li>
              ))}
              <div className="pizzaDetails__price">
                <h2 className="price">
                  Precio ${formatPrice(pizzaDetail.price)}
                </h2>
                <Button
                  type="submit"
                  className="buttonCart button-margen"
                  children="Añadir 🛒"
                  onClick={() => addCart(pizzaDetail.id)}
                />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PizzaDetails;
