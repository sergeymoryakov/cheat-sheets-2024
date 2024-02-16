import { articles, Article } from "../data/articles";
import { article } from "../data/readme";
import { article as article2 } from "../data/vite-vanilla-js";
import { article as article3 } from "../data/vite-react-ts";
import { article as article4 } from "../data/vite-react-push";

export function getArticles(): Article[] {
    articles.push(article);
    articles.push(article2);
    articles.push(article3);
    articles.push(article4);
    return articles;
}
