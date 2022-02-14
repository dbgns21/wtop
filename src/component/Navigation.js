import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/">홈</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default Navigation;
