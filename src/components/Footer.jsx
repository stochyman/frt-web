import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import schdesignLogoSrc from '../assets/schdesign-logo.svg';
import CircledFontAwesomeIcon from './CircledFontAwesomeIcon';
import Container from './Container';
import styles from './Footer.module.scss';

const Footer = ({ ...props }) => (
  <footer {...props}>
    <Container className={styles.contentContainer}>
      <StaticQuery
        query={graphql`
          query FooterQuery {
            site {
              siteMetadata {
                siteFacebookURL
                siteInstagramURL
                siteYouTubeURL
                siteEmailURL
              }
            }
          }
        `}
        render={staticData => (
          <div className={styles.iconsContainer}>
            <a
              href={staticData.site.siteMetadata.siteFacebookURL}
              className={styles.iconLink}
            >
              <CircledFontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href={staticData.site.siteMetadata.siteInstagramURL}
              className={styles.iconLink}
            >
              <CircledFontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href={staticData.site.siteMetadata.siteYouTubeURL}
              className={styles.iconLink}
            >
              <CircledFontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href={staticData.site.siteMetadata.siteEmailURL}
              className={styles.iconLink}
            >
              <CircledFontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        )}
      />

      <a href="http://schdesign.hu" className={styles.designerLink}>
        Designed by{' '}
        <img
          src={schdesignLogoSrc}
          alt="schdesign"
          className={styles.designerLogo}
        />
      </a>
    </Container>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
