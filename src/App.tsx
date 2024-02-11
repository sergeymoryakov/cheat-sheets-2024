import { Article, articles } from "./articles";
// import "./App.css";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/style-text.css";

type TitleItemProps = {
    itemTitle: string;
};

type TitleListProps = {
    articles: Article[];
};

function TitleItem({ itemTitle }: TitleItemProps) {
    return (
        <li className="list-item">
            <button className="list-item-btn">{itemTitle}</button>
        </li>
    );
}

function TitlesList({ articles }: TitleListProps) {
    return (
        <ul id="csList" className="cs-list">
            {articles.map((article) => (
                <TitleItem key={article.id} itemTitle={article.title} />
            ))}
            {/* Error in rendering list of Cheat Sheets */}
        </ul>
    );
}

function App() {
    return (
        <>
            <div className="container">
                <h1>WebDev Cheat Sheets</h1>
                <TitlesList articles={articles} />
            </div>
            {/* 
            <div id="csPopup" className="cs-popup">
                <div id="csPopupContent" className="cs-popup-content">
                    <div className="wrapper-btn" id="wrapperBtn">
                        <button className="return-btn" id="returnBtn"></button>
                        <button className="print-btn" id="printBtn"></button>
                    </div>
                    <span className="cs-popup-content_title" id="csTitle">
                        Error printing title
                    </span>
                    <span className="cs-popup-content_body" id="csBody">
                        Error printing body text
                    </span>
                </div>
            </div> 
            */}
        </>
    );
}

export default App;
