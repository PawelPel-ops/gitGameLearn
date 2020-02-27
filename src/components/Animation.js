import React from 'react';
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const file = <FontAwesomeIcon icon={faFileCode} size="lg"/>;
const css = <FontAwesomeIcon icon={faCss3} size="lg" />;
const js = <FontAwesomeIcon icon={faJs} size="lg" />;

const Animation = ({animationHead, animationIndexUntracked, animationCSSUntracked, animationJSUntracked, animationIndexStage, animationCSSStage, animationJSStage, animationIndexLocal, animationCSSLocal, animationJSLocal,animationIndexOrigin, animationCSSOrigin, animationJSOrigin}) => {
    return (
        <div className="animation">
            <div className="repo head"><h3 className={animationHead ? 'vis' : 'non'}>Untracked</h3><hr />
                <p className={animationIndexUntracked ? 'vis' : 'non'}>{file} index.html</p>
                <p className={animationCSSUntracked ? 'vis' : 'non'}>{css} style.css</p>
                <p className={animationJSUntracked ? 'vis' : 'non'}>{js} app.js</p>
            </div>
            <div className="repo stage"><h3 className={animationHead ? 'vis' : 'non'}>Stage</h3><hr />
                <p className={animationIndexStage ? 'vis' : 'non'}>{file} index.html</p>
                <p className={animationCSSStage ? 'vis' : 'non'}>{css} style.css</p>
                <p className={animationJSStage ? 'vis' : 'non'}>{js} app.js</p>
            </div>
            <div className="repo local"><h3 className={animationHead ? 'vis' : 'non'}>Local</h3><hr />
                <p className={animationIndexLocal ? 'vis' : 'non'}>{file} index.html</p>
                <p className={animationCSSLocal ? 'vis' : 'non'}>{css} style.css</p>
                <p className={animationJSLocal ? 'vis' : 'non'}>{js} app.js</p>
            </div>
            <div className="repo origin"><h3 className={animationHead ? 'vis' : 'non'}>Origin</h3><hr />
                <p className={animationIndexOrigin ? 'vis' : 'non'}>{file} index.html</p>
                <p className={animationCSSOrigin ? 'vis' : 'non'}>{css} style.css</p>
                <p className={animationJSOrigin ? 'vis' : 'non'}>{js} app.js</p>
            </div>
        </div>
    );
};

export default Animation;