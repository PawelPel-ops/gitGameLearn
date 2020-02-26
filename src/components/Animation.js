import React from 'react';
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const file = <FontAwesomeIcon icon={faFileCode} size="lg"/>;
const css = <FontAwesomeIcon icon={faCss3} size="lg" />;
const js = <FontAwesomeIcon icon={faJs} size="lg" />;

const Animation = () => {
    return (
        <div className="animation">
            <div className="repo head"><p>{file} index.html</p><p>{css} style.css</p><p>{js} app.js</p></div>
            <div className="repo stage"><p>{file} index.html</p><p>{css} style.css</p><p>{js} app.js</p></div>
            <div className="repo local"><p>{file} index.html</p><p>{css} style.css</p><p>{js} app.js</p></div>
            <div className="repo origin"><p>{file} index.html</p><p>{css} style.css</p><p>{js} app.js</p></div>
        </div>
    );
};

export default Animation;