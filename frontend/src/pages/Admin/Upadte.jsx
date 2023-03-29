import React, { useState } from 'react';
import { BASE_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "../../shared/Admin/create.css";
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
const Update = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [figure, setfigure] = useState({
    title: '',
    city: '',
    address: '',
    distance: 0,
    photo: '',
    desc: '',
    price: 0,
    maxGroupSize: 0,
    featured: false,
    reviews: [],
  });

  const handleInputChange = (e) => {
    setfigure((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/figure/${id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(figure),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      navigate('/admin');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Sửa sản phẩm</h2>
      <section>
        <Container>
          <button className="btn booking__btn">
              <Link to={`/admin`}>Quay lại trang chủ</Link>
          </button> 
        </Container>
      </section>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label className="form-label">Title</label>
          <input type="text" id="title" onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label">City</label>
          <input type="text" id="city" onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label">Address</label>
          <input type="text" id="address" onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label">Distance</label>
          <input type="number" id="distance" onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label">Photo</label>
          <input
            type="file"
            id="photo"
            onChange={(event) => {
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setfigure((prev) => ({
                  ...prev,
                  photo: reader.result,
                }));
              };
            }}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Description</label>
          <textarea id="desc" onChange={handleInputChange}></textarea>
        </div>
        <div className="form-input">
          <label className="form-label">Price</label>
          <input type="number" id="price" onChange={handleInputChange} />
        </div>
        <div className="form-input">
          <label className="form-label">Max Group Size</label>
          <input
            type="number"
            id="maxGroupSize"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Featured</label>
          <input
            type="checkbox"
            id="featured"
            onChange={(e) =>
              setfigure((prev) => ({ ...prev, featured: e.target.checked }))
            }
          />
        </div>
        <div className="form-input">
          <button className="form-button" type="submit">Sửa sản phẩm</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
