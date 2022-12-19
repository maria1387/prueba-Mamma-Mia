

import Helmet from "../components/Helmet/Helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductsList from "../UI/ProductsList";
import Header from "../components/Header";
const Home = () => {
	return (
		<Helmet title={"Home"}> 
    <Header/>
		  <section className="popular__category mt-5">
        <Container>
          <Row>
            {/* <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">PIZZA</h2>
            </Col> */}

            <ProductsList />
			
          </Row>
        </Container>
      </section>
		
		</Helmet>
			
	
	)
};

export default Home;
