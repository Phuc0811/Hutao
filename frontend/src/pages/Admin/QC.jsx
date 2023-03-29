import React, { useEffect, useState } from 'react';
import './qc.css';
import aImg from '../../assets/images/qc.jpg';

const QC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const style = {
    position: 'fixed',
    top: '50px',
    right: '-200px',
    left: '300px',
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    alert('Đây là mẫu sản phẩm giới hạn sắp được ra mắt');
  };

  const handleCloseIcon = () => {
    setShowIcon(false);
  };

  return (
    <>
      {showIcon && (
        <div className="icon" style={style} onClick={handleClick}>
            <div className="close-icon" onClick={handleCloseIcon}>X</div>
            <img src={aImg} alt="icon" />
        </div>
      )}
    </>
  );
};

export default QC;
