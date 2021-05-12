import { createClient } from "contentful";
import { BlogPost } from "@interfaces/post";

export const CONTENT_TYPE_BLOGPOST = "blogPost";
export const CONTENT_TYPE_PERSON = "author";
export const CONTENT_TYPE_TAGS = "tag";

const Space = `${process.env.REACT_APP_CONTENTFUL_SPACE}`;
let Token = `${process.env.REACT_APP_CONTENTFUL_TOKEN}`;

export class ContentfulService {
  private client = createClient({
    space: Space,
    accessToken: Token
  });

  /**
   * Maps the items fetched by contentful
   * @param entries
   */
  private mapData(entries): BlogPost[] {
    return entries.map(({ sys, fields }: { sys: any; fields: any }) => ({
      id: sys.id,
      title: fields.title,
      description: fields.description,
      heroImage: fields.heroImage.fields.file.url,
      slug: fields.slug,
      tags: fields.tags,
      publishedAt: fields.publishDate ? new Date(fields.publishDate) : new Date(sys.createdAt)
    }));
  }

  async fetchPostBySlug(slug: string) {
    return await this.client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      "fields.slug": slug
    });
  }

  async fetchPostById(id: string) {
    return await this.client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      "sys.id": id
    });
  }

  /**
   * Get all tags
   */
  async getAllTags() {
    const content = await this.client.getEntries({
      content_type: CONTENT_TYPE_TAGS
    });

    const tags = content.items.map(({ sys, fields }: { sys: any; fields: any }) => ({
      id: sys.id,
      name: fields.name
    }));

    return { tags };
  }

  async getBlogPostEntries(
    { limit, skip, tag }: { limit?: number; skip?: number; tag?: string } = {
      limit: 5,
      skip: 0,
      tag: ""
    }
  ) {
    try {
      const contents = await this.client.getEntries({
        include: 1,
        limit,
        skip,
        order: "-fields.publishDate",
        "fields.tags.sys.id": tag,
        content_type: CONTENT_TYPE_BLOGPOST
      });

      const entries = this.mapData(contents.items);

      const total = contents.total;

      return { entries, total, limit, skip };
    } catch (error) {
      // TODO: add error handling
      console.log(error);
    }
  }

  async getAllEntriesCount(
    { tag }: { tag?: string } = {
      tag: ""
    }
  ) {
    try {
      const contents = await this.client.getEntries({
        order: "fields.publishDate",
        "fields.tags.sys.id": tag,
        content_type: CONTENT_TYPE_BLOGPOST
      });

      const totalCount = contents.total;

      return totalCount;
    } catch (error) {
      // TODO: add error handling
      console.log(error);
    }
  }

  async getPostById(id: string) {
    try {
      //console.log('getPostBySlug slug: ', slug);
      const content: any = await this.fetchPostById(id);

      //console.log('getPostByID content: ', content);

      const entry: { sys: any; fields: any } = content.items[0];

      const author = {
        name: entry.fields.author.fields.name,
        title: entry.fields.author.fields.title,
        company: entry.fields.author.fields.company,
        shortBio: entry.fields.author.fields.shortBio
      };

      return {
        id: entry.sys.id,
        slug: entry.fields.slug,
        body: entry.fields.body,
        title: entry.fields.title,
        description: entry.fields.description,
        tags: entry.fields.tags,
        heroImage: { url: entry.fields.heroImage.fields.file.url },
        author: { ...author, id: entry.fields.author.sys.id },
        publishedAt: entry.fields.publishDate
          ? new Date(entry.fields.publishDate)
          : new Date(entry.sys.createdAt)
      };
    } catch (error) {
      console.error(error);
    }
  }

  async getPostBySlug(slug) {
    try {
      //console.log('getPostBySlug slug: ', slug);
      const content: any = await this.fetchPostBySlug(slug);

      //console.log('getPostBySlug content: ', content);

      const entry: { sys: any; fields: any } = content.items[0];

      const author = {
        name: entry.fields.author.fields.name,
        title: entry.fields.author.fields.title,
        company: entry.fields.author.fields.company,
        shortBio: entry.fields.author.fields.shortBio
      };

      return {
        id: entry.sys.id,
        slug: entry.fields.slug,
        body: entry.fields.body,
        title: entry.fields.title,
        description: entry.fields.description,
        tags: entry.fields.tags,
        heroImage: { url: entry.fields.heroImage.fields.file.url },
        author: { ...author, id: entry.fields.author.sys.id },
        publishedAt: entry.fields.publishDate
          ? new Date(entry.fields.publishDate)
          : new Date(entry.sys.createdAt)
      };
    } catch (error) {
      console.error(error);
    }
  }

  async fetchSuggestions(tags: string[], currentArticleSlug: string) {
    const limit = 3;
    let entries: any[] = [];

    const initialOptions = {
      content_type: CONTENT_TYPE_BLOGPOST,
      limit,
      // find at least one matching tag, else undefined properties are not copied
      "fields.tags.sys.id[in]": tags.length ? tags.join(",") : undefined,
      "fields.slug[ne]": currentArticleSlug // exclude current article
    };

    try {
      const suggestionsByTags = await this.client.getEntries(initialOptions);

      entries = suggestionsByTags.items;
      // number of suggestions by tag is less than the limit
      if (suggestionsByTags.total < limit) {
        // exclude already picked slugs
        const slugsToExclude = [
          ...suggestionsByTags.items,
          { fields: { slug: currentArticleSlug } }
        ]
          .map((item: { fields: any }) => item.fields.slug)
          .join(",");

        // fetch random suggestions
        const randomSuggestions = await this.client.getEntries({
          content_type: CONTENT_TYPE_BLOGPOST,
          limit: limit - suggestionsByTags.total,
          "fields.slug[nin]": slugsToExclude // exclude slugs already fetched
        });

        entries = [...entries, ...randomSuggestions.items];
      }

      entries = this.mapData(entries);

      return entries;
    } catch (e) {
      console.error(e);
    }
  }
}
