import React, {useState} from 'react';

import CommonSection from "../../shared/CommonSection";
import { Container, Row, Col } from 'reactstrap';

import { useLocation } from 'react-router-dom';
import AdminCard from '../../shared/Admin/AdminCard';
import Newsletter from '../../shared/Newsletter';


const SearchResultListAdmin = () => {
  const location = useLocation();

  const [data] = useState(location.state);
  return (
    <>
      <CommonSection title={"Kết quả tìm kiếm"} />
      <section>
        <Container>
          <Row>
            {data.length === 0? (
              <h4 className='text-center'>Không tìm thấy thông tin</h4>
            ):(
              data?.map(figure => (               
                  <AdminCard figure={figure} />
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
  
};

export default SearchResultListAdmin;
