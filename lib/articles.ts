import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

import type { ArticleItem } from "../types";

const articlesDirectory = path.join(process.cwd(), "./articles");

export function getSortedArticles(): ArticleItem[] {
    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");
        const matterResult = matter(fileContents);
        return {
            id,
            title: matterResult.data.title,
            date: moment(matterResult.data.date).format("MMMM D, YYYY"),
            category: matterResult.data.category,
        };
    })

    return articles.sort((a, b) => {
        const format = "MMMM D, YYYY";
        if (moment(a.date, format).isBefore(moment(b.date, format))) {
            return 1;
        } else {
            return -1;
        }
    });
}

export const getCategorizedArticles = (): Record<string, ArticleItem[]> => {
    const articles = getSortedArticles();
    const categorizedArticles: Record<string, ArticleItem[]> = {};
    articles.forEach((article) => {
        if (!categorizedArticles[article.category]) {
            categorizedArticles[article.category] = [];
        }
        categorizedArticles[article.category].push(article);
    });
    return categorizedArticles;
}

export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        date: moment(matterResult.data.date).format("MMMM D, YYYY"),
        category: matterResult.data.category,
    };
}

export function getNextAndPreviousArticles(id: string): { next: ArticleItem | null, previous: ArticleItem | null } {
    const articles = getSortedArticles();
    const index = articles.findIndex((article) => article.id === id);
    const next = index < articles.length - 1 ? articles[index + 1] : null;
    const previous = index > 0 ? articles[index - 1] : null;
    return { next, previous };
}