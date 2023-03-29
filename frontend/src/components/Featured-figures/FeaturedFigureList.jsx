import React from 'react';
import FigureCard from "../../shared/FigureCard";
import { Col } from "reactstrap";
import './FeaturedFigureList.css'
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';


const FeaturedFigureList = () => {

  const {data: featuredFigures, loading, error} = useFetch(`${BASE_URL}/figure/search/getFeaturedFigures`);

 

  return(
    <>
      {loading && <h4><span class="loader"></span></h4>}
      {error && <h4>{error}</h4>}
      {
        !loading &&
        !error &&
        featuredFigures?.map(figure =>(
        <Col lg="3" className="mb-4" key ={figure.id}>
            <FigureCard figure={figure}/>
        </Col>
      ))
      }
    </>
  );
};

export default FeaturedFigureList;
