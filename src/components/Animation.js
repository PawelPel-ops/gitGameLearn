import React, {useState} from 'react';
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const file = <FontAwesomeIcon icon={faFileCode} size="lg"/>;
const css = <FontAwesomeIcon icon={faCss3} size="lg" />;
const js = <FontAwesomeIcon icon={faJs} size="lg" />;
const q = <FontAwesomeIcon icon={faQuestion} />;

const Animation = ({animationHead, animationIndexUntracked, animationCSSUntracked, animationJSUntracked, animationIndexStage, animationCSSStage, animationJSStage, animationIndexLocal, animationCSSLocal, animationJSLocal,animationIndexOrigin, animationCSSOrigin, animationJSOrigin}) => {
    const [hiddenUntracked, setHiddenUntracked] = useState(false);
    const [hiddenStage, setHiddenStage] = useState(false);
    const [hiddenLocal, setHiddenLocal] = useState(false);
    const [hiddenOrigin, setHiddenOrigin] = useState(false);

    const handleBoxToggleUntracked = () => {
        setHiddenUntracked(!hiddenUntracked)
    };
    const handleBoxToggleStage = () => {
        setHiddenStage(!hiddenStage)
    };
    const handleBoxToggleLocal = () => {
        setHiddenLocal(!hiddenLocal)
    };
    const handleBoxToggleOrigin = () => {
        setHiddenOrigin(!hiddenOrigin)
    };





    return (
        <div className="animation">
            <div className="repo head">
                <h3 className={animationHead ? 'vis' : 'non'}>Untracked
                    <span className="question" onMouseEnter={handleBoxToggleUntracked}  onMouseLeave={handleBoxToggleUntracked}>{q}
                        <div className={`hidden ${hiddenUntracked ? 'visUntracked' : 'non'}`}>Tresc dla Untracked</div>
                    </span>
                </h3>
                <hr />
                <p className={animationIndexUntracked ? 'vis' : 'non'}>{file} index.html</p>
                <p className={animationCSSUntracked ? 'vis' : 'non'}>{css} style.css</p>
                <p className={animationJSUntracked ? 'vis' : 'non'}>{js} app.js</p>
            </div>
            <div className="repo stage">
                <h3 className={animationHead ? 'vis' : 'non'}>Stage
                    <span className="question" onMouseEnter={handleBoxToggleStage}  onMouseLeave={handleBoxToggleStage}>{q}
                        <div className={`hidden ${hiddenStage ? 'visStage' : 'non'}`}>Tresc dla Stage</div>
                    </span>
                </h3>
                <hr />
                <p className={animationIndexStage ? 'vis' : 'non'}>{file} index.html</p>
                <p className={animationCSSStage ? 'vis' : 'non'}>{css} style.css</p>
                <p className={animationJSStage ? 'vis' : 'non'}>{js} app.js</p>
            </div>
            <div className="repo local">
                <h3 className={animationHead ? 'vis' : 'non'}>Local
                    <span className="question" onMouseEnter={handleBoxToggleLocal}  onMouseLeave={handleBoxToggleLocal}>{q}
                        <div className={`hidden ${hiddenLocal ? 'visLocal' : 'non'}`}>Tresc dla Local</div>
                    </span>
                </h3>
                <hr />
                <p className={animationIndexLocal ? 'vis' : 'non'}>{file} index.html</p>
                <p className={animationCSSLocal ? 'vis' : 'non'}>{css} style.css</p>
                <p className={animationJSLocal ? 'vis' : 'non'}>{js} app.js</p>
            </div>
            <div className="repo origin">
                <h3 className={animationHead ? 'vis' : 'non'}>Origin
                    <span className="question" onMouseEnter={handleBoxToggleOrigin}  onMouseLeave={handleBoxToggleOrigin}>{q}
                        <div className={`hidden ${hiddenOrigin ? 'visOrigin' : 'non'}`}>Tresc dla Origin</div>
                    </span>
                </h3>
                <hr />
                <p className={animationIndexOrigin ? 'vis' : 'non'}>{file} index.html</p>
                <p className={animationCSSOrigin ? 'vis' : 'non'}>{css} style.css</p>
                <p className={animationJSOrigin ? 'vis' : 'non'}>{js} app.js</p>
            </div>
        </div>
    );
};

export default Animation;