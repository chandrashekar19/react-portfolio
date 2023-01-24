import React from 'react';

const Footer = (props) => {

  const { data } = props;


    if(data){
      var networks= data.social.map((network) => {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

    <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
              {networks}
          </ul>

          <ul>
            <li>Made with ♥️ by Kalal Chandrashekar </li>
          </ul>

          <ul className="copyright">
              <li>&copy; Copyright 2023  Chandrashekar</li>
          </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
    </div>
  </footer>
    );
  }

export default Footer;
