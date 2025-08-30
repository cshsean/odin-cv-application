import './TopHeader.css'

function TopHeader({ generalInfo }) {
    return (
        <div className="topHeaderContainer">
            <div className="TopHeaderNameContainer">
                {generalInfo.name}
            </div>
            <div className="TopHeaderInfoContainer">
                <ul>
                    <li><p>{generalInfo.email}</p></li> 
                    <li><p>{generalInfo.phone}</p></li>
                </ul>
            </div>
        </div>
    );
}

export default TopHeader;