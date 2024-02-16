import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import { Article } from "./data/articles";

import { getArticles } from "./api/getArticles";
import TransitionsModal from "./Components/TransitionsModal";

import "./styles/demo.css";

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
            <CssBaseline />
            <Typography
                variant="h4"
                align="center"
                sx={{
                    marginTop: "2rem",
                }}
            >
                WebDev Cheat Sheets
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    "& > *": {
                        m: 1,
                    },
                    color: "inherit",
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="text"
                    color="inherit"
                >
                    {articles
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((article) => (
                            <Button
                                key={article.id}
                                onClick={() => {
                                    openModal(article);
                                }}
                            >
                                {article.title}
                            </Button>
                        ))}
                    {/* Error in rendering list of Cheat Sheets */}
                </ButtonGroup>
            </Box>
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
