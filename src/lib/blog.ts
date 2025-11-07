import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

// Get blog post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    const htmlContent = marked(content);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: htmlContent as string,
      image: data.image || '',
      date: data.date || '',
      author: data.author || '',
      category: data.category || '',
      tags: data.tags || [],
      featured: data.featured || false,
    };
  } catch {
    return null;
  }
}

// Get all blog posts metadata (without content)
export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getAllPostSlugs();

  const posts: BlogPostMetadata[] = [];

  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (post) {
      posts.push({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        date: post.date,
        author: post.author,
        category: post.category,
        tags: post.tags,
        featured: post.featured,
      });
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

// Get featured posts
export function getFeaturedPosts(): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured === true);
}

// Get related posts (same category, different slug)
export function getRelatedPosts(slug: string, limit = 3): BlogPostMetadata[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter(
    (post) => post.category === currentPost.category && post.slug !== slug
  );

  return relatedPosts.slice(0, limit);
}
