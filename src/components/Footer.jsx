import React from 'react';

const Footer = () => {
  // Inline styles for the footer
  const footerStyle = {
    backgroundColor: '#D3D3D3',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
    color:'black'
  };

  const socialMediaStyle = {
    marginTop: '10px',
  };

  const linkStyle = {
    color: 'black',
    margin: '0 10px',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <h2>Daily Digest</h2>
        <p>&copy; {new Date().getFullYear()} Daily Digest. All rights reserved.</p>
        {/* <p>Made By Sahil</p> */}
        <p style={{ marginTop: '10px' }}>Your source for news, created with care by Sahil</p>

        <div style={socialMediaStyle}>
          <a href="https://sahilportfolio.me" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            PortFolio
          </a>
          <a href="https://www.linkedin.com/in/sahilll94" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Linkedln
          </a>
          <a href="https://x.com/Sa_hilll94" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Twitter
          </a>
          <a href="https://github.com/Sahilll94" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
