import TopHeader from "./TopHeader";
import EducationContainer from "./EducationContainer";
import WorkExperience from "./WorkExperience";
import './PreviewScreen.css';

function PreviewScreen({ generalInfo, education, work }) {
    return (
        <div className="previewContainer">
            <TopHeader generalInfo={generalInfo} />
            <div className="lowerContainer">
                <EducationContainer education={education} />
                <WorkExperience work={work} />
            </div>
        </div>
    );
}

export default PreviewScreen;