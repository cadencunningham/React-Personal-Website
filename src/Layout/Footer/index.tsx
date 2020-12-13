import React from 'react';
import { GITHUB_PATH, LINKED_IN_PATH } from '../../constants/svgPaths';
import LinkButton from '../../shared/LinkButton';
import SvgIcon from '../../shared/SvgIcon';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__button-container">
                <LinkButton className="footer__link-button" href="https://github.com/cadencunningham">
                    <SvgIcon className="footer__icon" path={GITHUB_PATH} />
                </LinkButton>
                <LinkButton
                    className="footer__link-button"
                    href="https://www.linkedin.com/in/caden-cunningham-196336158"
                >
                    <SvgIcon className="footer__icon" path={LINKED_IN_PATH} />
                </LinkButton>
            </div>
            <p className="footer__copyright">Copyright &copy; by Caden Cunningham</p>
        </div>
    );
};

export default Footer;
