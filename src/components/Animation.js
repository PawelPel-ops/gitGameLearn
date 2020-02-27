import React from 'react';
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const file = <FontAwesomeIcon icon={faFileCode} size="lg"/>;
const css = <FontAwesomeIcon icon={faCss3} size="lg" />;
const js = <FontAwesomeIcon icon={faJs} size="lg" />;

const Animation = ({animation, animationCSS, animationJS}) => {
    return (
        <div className="animation">
            <div className="repo head"><h3>Head</h3><hr />
                <p className={animation ? 'indexVis' : 'indexNon'}>{file} index.html</p>
                <p className={animationCSS ? 'cssVis' : 'cssNon'}>{css} style.css</p>
                <p className={animationJS ? 'jsVis' : 'jsNon'}>{js} app.js</p></div>
            <div className="repo stage"><h3>Stage</h3><hr /><p>{file} index.html</p><p>{css} style.css</p><p>{js} app.js</p></div>
            <div className="repo local"><h3>Local</h3><hr /><p>{file} index.html</p><p>{css} style.css</p><p>{js} app.js</p></div>
            <div className="repo origin"><h3>Origin</h3><hr /><p>{file} index.html</p><p>{css} style.css</p><p>{js} app.js</p></div>
        </div>
    );
};

export default Animation;