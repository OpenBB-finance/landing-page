  
import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import { bundleMDX } from "mdx-bundler";

export const POSTS_PATH = join(process.cwd(), "_posts");

export const getSourceOfFile = (fileName) => {
  return fs.readFileSync(join(POSTS_PATH, fileName));
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        ...data,
         slug,
      };
    });
};

export const getSinglePost = async (slug) => {
  const source = getSourceOfFile(slug + ".mdx");
  //@ts-ignore
  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  });

  return {
    data:frontmatter,
    code,
  };
};