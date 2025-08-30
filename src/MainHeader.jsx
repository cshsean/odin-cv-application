import './MainHeader.css'

function MainHeader({ mode, setMode }) {
    return (
        <div class="mainHeader">
            <ul>
                <li>
                    <button 
                        onClick={() => setMode("edit")}
                        className={mode === "edit" ? "active" : ""}
                    >
                        Edit CV
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setMode("preview")}
                        className={mode === "preview" ? "active" : ""}
                    >
                        Preview CV
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default MainHeader;