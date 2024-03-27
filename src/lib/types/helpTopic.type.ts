export interface HelpTopicArticleData {
  slug: string;
  metaDescription: string;
  metaTitle: string;
  title: string;
}

export interface HelpTopicData {
  helpTopicId: string;
  iconUrl: string;
  metaDescription: string;
  metaTitle: string;
  title: string;

  defaultArticle: HelpTopicArticleData;
}