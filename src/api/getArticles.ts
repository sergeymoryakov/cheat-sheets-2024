import { articles, Article } from "../data/articles";
import { article } from "../data/readme";
import { article as article2 } from "../data/vite-vanilla-js";
import { article as article3 } from "../data/vite-react-ts";

export function getArticles(): Article[] {
    articles.push(article);
    articles.push(article2);
    articles.push(article3);
    return articles;
}
