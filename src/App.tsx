import { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Article } from "./data/articles";

import { getArticles } from "./api/getArticles";
import TransitionsModal from "./Components/TransitionsModal";

const articles: Article[] = getArticles();

function App() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(
        null
    );

    function openModal(article: Article) {
        setSelectedArticle(article);
        setModalOpen(true);
    }

    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    margin: "auto",
                    maxWidth: 1000,
                }}
            >
                <Typography variant="h4" align="center">
                    WebDev Cheat Sheets
                </Typography>
                <List>
                    {articles
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((article) => (
                            <ListItemButton
                                key={article.id}
                                onClick={() => {
                                    openModal(article);
                                }}
                            >
                                <ListItemText primary={article.title} />
                            </ListItemButton>
                        ))}
                    {/* Error in rendering list of Cheat Sheets */}
                </List>
            </Paper>
            {selectedArticle && (
                <TransitionsModal
                    article={selectedArticle}
                    open={isModalOpen}
                    handleClose={() => setModalOpen(false)}
                />
            )}
        </>
    );
}

export default App;
