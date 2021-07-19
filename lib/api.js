
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { bundleMDX } from "mdx-bundler";
import { isArray } from './utils';
import https from "https"


const FAQ_PATH = join(process.cwd(), "_content", "faqs.json")


export const getFaqsContent = () => {
  return JSON.parse(fs.readFileSync(FAQ_PATH))
}


/*export const POSTS_PATH = join(process.cwd(), "_posts");


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
    data: frontmatter,
    code,
  };
};*/

function getData(url) {
  const urlObj = new URL(url)
  return new Promise((resolve, reject) => {
    https.get({
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      headers: {
        'Authorization': `token ${process.env.GITHUB_AUTH_TOKEN}`,
      }
    }, res => {
      const bufs = [];
      res.on('data', function (chunk) {
        bufs.push(chunk)
      });
      res.on('end', function () {
        const data = Buffer.concat(bufs);
        resolve(data)
      });
    })
      .on('error', (err) => {
        reject(err)
      });
  })
}


export const getLogs = async () => {
  const res = await fetch(process.env.REMOTE_CHANGELOG_SOURCE, {
    method: 'get',
    headers: {
      'Authorization': `token ${process.env.GITHUB_AUTH_TOKEN}`,
    }
  })
  const logs = []
  if (res.ok) {
    const logsRes = await res.json()
    if (isArray(logsRes)) {
      logsRes.forEach(log => {
        const { name, download_url } = log
        logs.push({ name: name.replace(/\.[^/.]+$/, ""), download_url })
      })
    }
  }
  return logs
}

export const getSingleLog = async (name) => {
  const logs = await getLogs()
  const log = logs.find(l => l.name === name)
  if (log) {
    const data = await getData(log.download_url)
    const { code, frontmatter } = await bundleMDX(data);
    return {
      data: frontmatter,
      code,
    };
  }
}