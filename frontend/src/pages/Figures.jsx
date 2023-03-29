import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection';

import "../styles/figure.css";
import '../components/Featured-figures/FeaturedFigureList.css'
import FigureCard from '../shared/FigureCard';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config';

const Figures = () => {

    const [pageCount, setPageCount] = useState(0)
    const [page,setPage] = useState(0)

    const {data: figures, loading, error} = useFetch(`${BASE_URL}/figure?page=${page}`);
    const {data:figureCount} = useFetch(`${BASE_URL}/figure/search/getFigureCount`);

    useEffect(()=>{
      const pages = Math.ceil(figureCount / 8);
      setPageCount(pages); 
      window.scrollTo(0,0);
      }, [page, figureCount, figures]); 

  return (
    <>
      <CommonSection title={"Tất cả Figure"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>

        {loading && <h4 className="text-center pt-5"><span class="loader">Load&nbsp;ng</span></h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {
          !loading && !error && <Row>
            
          {figures?.map(figure=> (
            <Col lg="3" className="mb-4" key={figure._id}>
              <FigureCard figure={figure} />
            </Col>
          ))}

       {/*-----------------Phân trang-----------------------*/} 
          <Col lg="12">
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(Number => (
                  <span 
                    key={Number} 
                    onClick={() => setPage(Number)}
                    className={page === Number ? 'active__page' : ""}
                    >
                    {Number + 1}
                  </span>
              ))}
            </div>
          </Col>
    </Row>
        }
        </Container>
      </section>
      <Newsletter />
    </>
  );
  
};

export default Figures;
