import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const github = <FontAwesomeIcon icon={faGithub} />;
const blog = <FontAwesomeIcon icon={faBlog} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;
const branch =  <FontAwesomeIcon icon={faCodeBranch} />;



const Header = () => {
    return (
        <header className="header">
            <h1>Git Game Learn {branch}</h1>
            <nav>
                <ul>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="https://github.blog/" target="_blank">{blog}</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="https://twitter.com/github" target="_blank">{twitter}</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="https://github.com/" target="_blank">{github}</a></li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;