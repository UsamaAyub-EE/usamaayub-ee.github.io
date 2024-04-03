import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import social from '../constants/social.json';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(social);
  }, []);

  const customSites = [
    
  ];

  return (
    <div className="social">
      {data ? data.social.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          // bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      )) : null}

      {customSites.map((site) => (
        <a
          key={site.network}
          href={site.href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={site.iconUrl}
            alt={site.network}
            style={site.style}
          />
        </a>
      ))}
    </div>
  );
}

export default Social;
