import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettings = Entry & _Node & {
  __typename?: 'AppSettings';
  _id: Scalars['ID']['output'];
  appTitle?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  footerNavigation?: Maybe<ComponentNavigation>;
  headerNavigation?: Maybe<ComponentNavigation>;
  internalId?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<AppSettingsLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsAppTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsFooterNavigationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentNavigationFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsHeaderNavigationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentNavigationFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsInternalIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AppSettingsCollection = {
  __typename?: 'AppSettingsCollection';
  items: Array<Maybe<AppSettings>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AppSettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<AppSettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AppSettingsFilter>>>;
  appTitle?: InputMaybe<Scalars['String']['input']>;
  appTitle_contains?: InputMaybe<Scalars['String']['input']>;
  appTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  appTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  appTitle_not?: InputMaybe<Scalars['String']['input']>;
  appTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  appTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footerNavigation?: InputMaybe<CfComponentNavigationNestedFilter>;
  footerNavigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headerNavigation?: InputMaybe<CfComponentNavigationNestedFilter>;
  headerNavigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalId?: InputMaybe<Scalars['String']['input']>;
  internalId_contains?: InputMaybe<Scalars['String']['input']>;
  internalId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalId_not?: InputMaybe<Scalars['String']['input']>;
  internalId_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AppSettingsLinkingCollections = {
  __typename?: 'AppSettingsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AppSettingsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AppSettingsOrder {
  AppTitleAsc = 'appTitle_ASC',
  AppTitleDesc = 'appTitle_DESC',
  InternalIdAsc = 'internalId_ASC',
  InternalIdDesc = 'internalId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentFeatureCollection?: Maybe<ComponentFeatureCollection>;
  componentHeroCollection?: Maybe<ComponentHeroCollection>;
  componentImageGalleryCollection?: Maybe<ComponentImageGalleryCollection>;
  componentLinkCollection?: Maybe<ComponentLinkCollection>;
  componentNavigationItemCollection?: Maybe<ComponentNavigationItemCollection>;
  componentSectionCollection?: Maybe<ComponentSectionCollection>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  componentServiceCollection?: Maybe<ComponentServiceCollection>;
  componentServiceOverviewCollection?: Maybe<ComponentServiceOverviewCollection>;
  componentStepCollection?: Maybe<ComponentStepCollection>;
  componentTestimonialCollection?: Maybe<ComponentTestimonialCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
};


export type AssetLinkingCollectionsComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentImageGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentServiceOverviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsComponentTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** A component representing an author with details and social links. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentAuthor) */
export type ComponentAuthor = Entry & _Node & {
  __typename?: 'ComponentAuthor';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentAuthorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Asset>;
  socialLinksCollection?: Maybe<ComponentAuthorSocialLinksCollection>;
  sys: Sys;
};


/** A component representing an author with details and social links. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentAuthor) */
export type ComponentAuthorBioArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component representing an author with details and social links. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentAuthor) */
export type ComponentAuthorInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component representing an author with details and social links. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentAuthor) */
export type ComponentAuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component representing an author with details and social links. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentAuthor) */
export type ComponentAuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component representing an author with details and social links. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentAuthor) */
export type ComponentAuthorProfilePictureArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A component representing an author with details and social links. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentAuthor) */
export type ComponentAuthorSocialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorSocialLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentLinkFilter>;
};

export type ComponentAuthorCollection = {
  __typename?: 'ComponentAuthorCollection';
  items: Array<Maybe<ComponentAuthor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentAuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  bio?: InputMaybe<Scalars['String']['input']>;
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  bio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bio_not?: InputMaybe<Scalars['String']['input']>;
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profilePicture_exists?: InputMaybe<Scalars['Boolean']['input']>;
  socialLinks?: InputMaybe<CfComponentLinkNestedFilter>;
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentAuthorLinkingCollections = {
  __typename?: 'ComponentAuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type ComponentAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentAuthorLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentAuthorOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentAuthorSocialLinksCollection = {
  __typename?: 'ComponentAuthorSocialLinksCollection';
  items: Array<Maybe<ComponentLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentAuthorSocialLinksCollectionOrder {
  DisplayTextAsc = 'displayText_ASC',
  DisplayTextDesc = 'displayText_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A call-to-action component for guiding user actions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentCTA) */
export type ComponentCta = Entry & _Node & {
  __typename?: 'ComponentCta';
  _id: Scalars['ID']['output'];
  backgroundImage?: Maybe<Asset>;
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentCtaLinkingCollections>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** A call-to-action component for guiding user actions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentCTA) */
export type ComponentCtaBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A call-to-action component for guiding user actions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentCTA) */
export type ComponentCtaButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A call-to-action component for guiding user actions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentCTA) */
export type ComponentCtaButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A call-to-action component for guiding user actions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentCTA) */
export type ComponentCtaHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A call-to-action component for guiding user actions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentCTA) */
export type ComponentCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A call-to-action component for guiding user actions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentCTA) */
export type ComponentCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A call-to-action component for guiding user actions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentCTA) */
export type ComponentCtaSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCtaCollection = {
  __typename?: 'ComponentCtaCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentCtaLinkingCollections = {
  __typename?: 'ComponentCtaLinkingCollections';
  componentHeroCollection?: Maybe<ComponentHeroCollection>;
  componentSectionCollection?: Maybe<ComponentSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
};


export type ComponentCtaLinkingCollectionsComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsComponentHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentCtaLinkingCollectionsComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsComponentSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentCtaLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentCtaLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentCtaLinkingCollectionsPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsPageServiceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentCtaLinkingCollectionsComponentHeroCollectionOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentCtaLinkingCollectionsComponentSectionCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentCtaLinkingCollectionsPageBlogPostCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentCtaLinkingCollectionsPageHomeCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentCtaLinkingCollectionsPageServiceCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentCtaOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A component to display a single frequently asked question. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFAQ) */
export type ComponentFaq = Entry & _Node & {
  __typename?: 'ComponentFaq';
  _id: Scalars['ID']['output'];
  answer?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentFaqLinkingCollections>;
  question?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** A component to display a single frequently asked question. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFAQ) */
export type ComponentFaqAnswerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display a single frequently asked question. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFAQ) */
export type ComponentFaqInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display a single frequently asked question. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFAQ) */
export type ComponentFaqLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component to display a single frequently asked question. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFAQ) */
export type ComponentFaqQuestionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFaqCollection = {
  __typename?: 'ComponentFaqCollection';
  items: Array<Maybe<ComponentFaq>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentFaqFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentFaqFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentFaqFilter>>>;
  answer?: InputMaybe<Scalars['String']['input']>;
  answer_contains?: InputMaybe<Scalars['String']['input']>;
  answer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  answer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  answer_not?: InputMaybe<Scalars['String']['input']>;
  answer_not_contains?: InputMaybe<Scalars['String']['input']>;
  answer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_exists?: InputMaybe<Scalars['Boolean']['input']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentFaqLinkingCollections = {
  __typename?: 'ComponentFaqLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
};


export type ComponentFaqLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentFaqLinkingCollectionsPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFaqLinkingCollectionsPageServiceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentFaqLinkingCollectionsPageServiceCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentFaqOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A component to showcase features or highlights. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFeature) */
export type ComponentFeature = Entry & _Node & {
  __typename?: 'ComponentFeature';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkHref?: Maybe<Scalars['String']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentFeatureLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A component to showcase features or highlights. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFeature) */
export type ComponentFeatureDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase features or highlights. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFeature) */
export type ComponentFeatureIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A component to showcase features or highlights. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFeature) */
export type ComponentFeatureInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase features or highlights. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFeature) */
export type ComponentFeatureLinkHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase features or highlights. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFeature) */
export type ComponentFeatureLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase features or highlights. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFeature) */
export type ComponentFeatureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component to showcase features or highlights. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentFeature) */
export type ComponentFeatureTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFeatureCollection = {
  __typename?: 'ComponentFeatureCollection';
  items: Array<Maybe<ComponentFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentFeatureFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentFeatureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentFeatureFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkHref?: InputMaybe<Scalars['String']['input']>;
  linkHref_contains?: InputMaybe<Scalars['String']['input']>;
  linkHref_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkHref_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkHref_not?: InputMaybe<Scalars['String']['input']>;
  linkHref_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkHref_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFeatureLinkingCollections = {
  __typename?: 'ComponentFeatureLinkingCollections';
  componentSectionCollection?: Maybe<ComponentSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
};


export type ComponentFeatureLinkingCollectionsComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFeatureLinkingCollectionsComponentSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentFeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentFeatureLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFeatureLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentFeatureLinkingCollectionsComponentSectionCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentFeatureLinkingCollectionsPageHomeCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentFeatureOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHrefAsc = 'linkHref_ASC',
  LinkHrefDesc = 'linkHref_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A hero section for pages with a heading, subheading, and call-to-action. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentHero) */
export type ComponentHero = Entry & _Node & {
  __typename?: 'ComponentHero';
  _id: Scalars['ID']['output'];
  backgroundImage?: Maybe<Asset>;
  callToAction?: Maybe<ComponentCta>;
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentHeroLinkingCollections>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** A hero section for pages with a heading, subheading, and call-to-action. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentHero) */
export type ComponentHeroBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A hero section for pages with a heading, subheading, and call-to-action. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentHero) */
export type ComponentHeroCallToActionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


/** A hero section for pages with a heading, subheading, and call-to-action. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentHero) */
export type ComponentHeroHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A hero section for pages with a heading, subheading, and call-to-action. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentHero) */
export type ComponentHeroInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A hero section for pages with a heading, subheading, and call-to-action. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentHero) */
export type ComponentHeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A hero section for pages with a heading, subheading, and call-to-action. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentHero) */
export type ComponentHeroSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeroCollection = {
  __typename?: 'ComponentHeroCollection';
  items: Array<Maybe<ComponentHero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentHeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeroFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToAction?: InputMaybe<CfComponentCtaNestedFilter>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentHeroLinkingCollections = {
  __typename?: 'ComponentHeroLinkingCollections';
  componentSectionCollection?: Maybe<ComponentSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
};


export type ComponentHeroLinkingCollectionsComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroLinkingCollectionsComponentSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentHeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentHeroLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentHeroLinkingCollectionsComponentSectionCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentHeroLinkingCollectionsPageHomeCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentHeroOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A component to display a gallery of images with optional captions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentImageGallery) */
export type ComponentImageGallery = Entry & _Node & {
  __typename?: 'ComponentImageGallery';
  _id: Scalars['ID']['output'];
  captions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  imagesCollection?: Maybe<AssetCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentImageGalleryLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A component to display a gallery of images with optional captions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentImageGallery) */
export type ComponentImageGalleryCaptionsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display a gallery of images with optional captions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentImageGallery) */
export type ComponentImageGalleryImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** A component to display a gallery of images with optional captions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentImageGallery) */
export type ComponentImageGalleryInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display a gallery of images with optional captions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentImageGallery) */
export type ComponentImageGalleryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component to display a gallery of images with optional captions. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentImageGallery) */
export type ComponentImageGalleryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentImageGalleryCollection = {
  __typename?: 'ComponentImageGalleryCollection';
  items: Array<Maybe<ComponentImageGallery>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentImageGalleryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentImageGalleryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentImageGalleryFilter>>>;
  captions_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  captions_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  captions_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  captions_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentImageGalleryLinkingCollections = {
  __typename?: 'ComponentImageGalleryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentImageGalleryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentImageGalleryOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A generic component for handling external and internal links with optional display text and image asset. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentLink) */
export type ComponentLink = Entry & _Node & {
  __typename?: 'ComponentLink';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  displayText?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentLinkLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** A generic component for handling external and internal links with optional display text and image asset. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentLink) */
export type ComponentLinkDisplayTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A generic component for handling external and internal links with optional display text and image asset. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentLink) */
export type ComponentLinkHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A generic component for handling external and internal links with optional display text and image asset. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentLink) */
export type ComponentLinkImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A generic component for handling external and internal links with optional display text and image asset. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentLink) */
export type ComponentLinkInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A generic component for handling external and internal links with optional display text and image asset. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentLink) */
export type ComponentLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A generic component for handling external and internal links with optional display text and image asset. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentLink) */
export type ComponentLinkNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLinkCollection = {
  __typename?: 'ComponentLinkCollection';
  items: Array<Maybe<ComponentLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  displayText?: InputMaybe<Scalars['String']['input']>;
  displayText_contains?: InputMaybe<Scalars['String']['input']>;
  displayText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  displayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayText_not?: InputMaybe<Scalars['String']['input']>;
  displayText_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentLinkLinkingCollections = {
  __typename?: 'ComponentLinkLinkingCollections';
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentLinkLinkingCollectionsComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentLinkLinkingCollectionsComponentAuthorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentLinkLinkingCollectionsComponentAuthorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentLinkOrder {
  DisplayTextAsc = 'displayText_ASC',
  DisplayTextDesc = 'displayText_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A navigation component for the site. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigation) */
export type ComponentNavigation = Entry & _Node & {
  __typename?: 'ComponentNavigation';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  itemsCollection?: Maybe<ComponentNavigationItemsCollection>;
  linkedFrom?: Maybe<ComponentNavigationLinkingCollections>;
  location?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** A navigation component for the site. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigation) */
export type ComponentNavigationInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A navigation component for the site. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigation) */
export type ComponentNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentNavigationItemFilter>;
};


/** A navigation component for the site. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigation) */
export type ComponentNavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A navigation component for the site. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigation) */
export type ComponentNavigationLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentNavigationCollection = {
  __typename?: 'ComponentNavigationCollection';
  items: Array<Maybe<ComponentNavigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentNavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  items?: InputMaybe<CfComponentNavigationItemNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

/** Navigation item used for menus and links [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigationItem) */
export type ComponentNavigationItem = Entry & _Node & {
  __typename?: 'ComponentNavigationItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentNavigationItemLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Navigation item used for menus and links [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigationItem) */
export type ComponentNavigationItemIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Navigation item used for menus and links [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigationItem) */
export type ComponentNavigationItemInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation item used for menus and links [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigationItem) */
export type ComponentNavigationItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Navigation item used for menus and links [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigationItem) */
export type ComponentNavigationItemNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Navigation item used for menus and links [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigationItem) */
export type ComponentNavigationItemSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentNavigationItemCollection = {
  __typename?: 'ComponentNavigationItemCollection';
  items: Array<Maybe<ComponentNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentNavigationItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentNavigationItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentNavigationItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentNavigationItemLinkingCollections = {
  __typename?: 'ComponentNavigationItemLinkingCollections';
  componentNavigationCollection?: Maybe<ComponentNavigationCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentNavigationItemLinkingCollectionsComponentNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentNavigationItemLinkingCollectionsComponentNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentNavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentNavigationItemLinkingCollectionsComponentNavigationCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentNavigationItemOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentNavigationItemsCollection = {
  __typename?: 'ComponentNavigationItemsCollection';
  items: Array<Maybe<ComponentNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentNavigationItemsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentNavigationLinkingCollections = {
  __typename?: 'ComponentNavigationLinkingCollections';
  appSettingsCollection?: Maybe<AppSettingsCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentNavigationLinkingCollectionsAppSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkingCollectionsAppSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentNavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentNavigationLinkingCollectionsAppSettingsCollectionOrder {
  AppTitleAsc = 'appTitle_ASC',
  AppTitleDesc = 'appTitle_DESC',
  InternalIdAsc = 'internalId_ASC',
  InternalIdDesc = 'internalId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentNavigationOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A component to display a step-by-step process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentProcess) */
export type ComponentProcess = Entry & _Node & {
  __typename?: 'ComponentProcess';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentProcessLinkingCollections>;
  stepsCollection?: Maybe<ComponentProcessStepsCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A component to display a step-by-step process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentProcess) */
export type ComponentProcessDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display a step-by-step process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentProcess) */
export type ComponentProcessInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display a step-by-step process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentProcess) */
export type ComponentProcessLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component to display a step-by-step process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentProcess) */
export type ComponentProcessStepsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProcessStepsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentStepFilter>;
};


/** A component to display a step-by-step process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentProcess) */
export type ComponentProcessTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProcessCollection = {
  __typename?: 'ComponentProcessCollection';
  items: Array<Maybe<ComponentProcess>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentProcessFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentProcessFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentProcessFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  steps?: InputMaybe<CfComponentStepNestedFilter>;
  stepsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentProcessLinkingCollections = {
  __typename?: 'ComponentProcessLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
};


export type ComponentProcessLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentProcessLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProcessLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentProcessLinkingCollectionsPageHomeCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentProcessOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ComponentProcessStepsCollection = {
  __typename?: 'ComponentProcessStepsCollection';
  items: Array<Maybe<ComponentStep>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentProcessStepsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A generic section component for grouping other components with optional background and heading. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentSection) */
export type ComponentSection = Entry & _Node & {
  __typename?: 'ComponentSection';
  _id: Scalars['ID']['output'];
  backgroundImage?: Maybe<Asset>;
  componentsCollection?: Maybe<ComponentSectionComponentsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentSectionLinkingCollections>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A generic section component for grouping other components with optional background and heading. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentSection) */
export type ComponentSectionBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A generic section component for grouping other components with optional background and heading. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentSection) */
export type ComponentSectionComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSectionComponentsFilter>;
};


/** A generic section component for grouping other components with optional background and heading. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentSection) */
export type ComponentSectionInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A generic section component for grouping other components with optional background and heading. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentSection) */
export type ComponentSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A generic section component for grouping other components with optional background and heading. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentSection) */
export type ComponentSectionSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A generic section component for grouping other components with optional background and heading. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentSection) */
export type ComponentSectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSectionCollection = {
  __typename?: 'ComponentSectionCollection';
  items: Array<Maybe<ComponentSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSectionComponentsCollection = {
  __typename?: 'ComponentSectionComponentsCollection';
  items: Array<Maybe<ComponentSectionComponentsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSectionComponentsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSectionComponentsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSectionComponentsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSectionComponentsItem = ComponentCta | ComponentFeature | ComponentHero | ComponentServiceOverview | ComponentTestimonial;

export type ComponentSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSectionFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  components?: InputMaybe<CfcomponentsMultiTypeNestedFilter>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSectionLinkingCollections = {
  __typename?: 'ComponentSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentSectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openGraphDescription?: Maybe<Scalars['String']['output']>;
  openGraphImage?: Maybe<Asset>;
  openGraphTitle?: Maybe<Scalars['String']['output']>;
  robotsFollow?: Maybe<Scalars['Boolean']['output']>;
  robotsIndex?: Maybe<Scalars['Boolean']['output']>;
  schemaJsonLd?: Maybe<Scalars['String']['output']>;
  schemaType?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  twitterCardType?: Maybe<Scalars['String']['output']>;
  twitterDescription?: Maybe<Scalars['String']['output']>;
  twitterTitle?: Maybe<Scalars['String']['output']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoOpenGraphDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoOpenGraphImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoOpenGraphTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoRobotsFollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoRobotsIndexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoSchemaJsonLdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoSchemaTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoTwitterCardTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoTwitterDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** SEO settings for a page [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/componentSeo) */
export type ComponentSeoTwitterTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  robotsFollow?: InputMaybe<Scalars['Boolean']['input']>;
  robotsFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  robotsFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  robotsIndex?: InputMaybe<Scalars['Boolean']['input']>;
  robotsIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  robotsIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  schemaJsonLd?: InputMaybe<Scalars['String']['input']>;
  schemaJsonLd_contains?: InputMaybe<Scalars['String']['input']>;
  schemaJsonLd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  schemaJsonLd_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  schemaJsonLd_not?: InputMaybe<Scalars['String']['input']>;
  schemaJsonLd_not_contains?: InputMaybe<Scalars['String']['input']>;
  schemaJsonLd_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  schemaType?: InputMaybe<Scalars['String']['input']>;
  schemaType_contains?: InputMaybe<Scalars['String']['input']>;
  schemaType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  schemaType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  schemaType_not?: InputMaybe<Scalars['String']['input']>;
  schemaType_not_contains?: InputMaybe<Scalars['String']['input']>;
  schemaType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  twitterCardType?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCardType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCardType_not?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageHomeCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentSeoLinkingCollectionsPageHomeCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenGraphTitleAsc = 'openGraphTitle_ASC',
  OpenGraphTitleDesc = 'openGraphTitle_DESC',
  RobotsFollowAsc = 'robotsFollow_ASC',
  RobotsFollowDesc = 'robotsFollow_DESC',
  RobotsIndexAsc = 'robotsIndex_ASC',
  RobotsIndexDesc = 'robotsIndex_DESC',
  SchemaTypeAsc = 'schemaType_ASC',
  SchemaTypeDesc = 'schemaType_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterCardTypeAsc = 'twitterCardType_ASC',
  TwitterCardTypeDesc = 'twitterCardType_DESC',
  TwitterTitleAsc = 'twitterTitle_ASC',
  TwitterTitleDesc = 'twitterTitle_DESC'
}

/** A component to represent a service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentService) */
export type ComponentService = Entry & _Node & {
  __typename?: 'ComponentService';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaLink?: Maybe<Scalars['String']['output']>;
  ctaText?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentServiceLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A component to represent a service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentService) */
export type ComponentServiceCtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to represent a service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentService) */
export type ComponentServiceCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to represent a service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentService) */
export type ComponentServiceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to represent a service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentService) */
export type ComponentServiceIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A component to represent a service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentService) */
export type ComponentServiceInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to represent a service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentService) */
export type ComponentServiceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component to represent a service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentService) */
export type ComponentServiceTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceCollection = {
  __typename?: 'ComponentServiceCollection';
  items: Array<Maybe<ComponentService>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentServiceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentServiceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentServiceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceLinkingCollections = {
  __typename?: 'ComponentServiceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentServiceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentServiceOrder {
  CtaLinkAsc = 'ctaLink_ASC',
  CtaLinkDesc = 'ctaLink_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A component to display an overview of a service. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentServiceOverview) */
export type ComponentServiceOverview = Entry & _Node & {
  __typename?: 'ComponentServiceOverview';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaLink?: Maybe<Scalars['String']['output']>;
  ctaText?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentServiceOverviewLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A component to display an overview of a service. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentServiceOverview) */
export type ComponentServiceOverviewCtaLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display an overview of a service. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentServiceOverview) */
export type ComponentServiceOverviewCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display an overview of a service. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentServiceOverview) */
export type ComponentServiceOverviewDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display an overview of a service. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentServiceOverview) */
export type ComponentServiceOverviewIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A component to display an overview of a service. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentServiceOverview) */
export type ComponentServiceOverviewInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to display an overview of a service. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentServiceOverview) */
export type ComponentServiceOverviewLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component to display an overview of a service. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentServiceOverview) */
export type ComponentServiceOverviewTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentServiceOverviewCollection = {
  __typename?: 'ComponentServiceOverviewCollection';
  items: Array<Maybe<ComponentServiceOverview>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentServiceOverviewFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentServiceOverviewFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentServiceOverviewFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentServiceOverviewLinkingCollections = {
  __typename?: 'ComponentServiceOverviewLinkingCollections';
  componentSectionCollection?: Maybe<ComponentSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
};


export type ComponentServiceOverviewLinkingCollectionsComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentServiceOverviewLinkingCollectionsComponentSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentServiceOverviewLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentServiceOverviewLinkingCollectionsPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentServiceOverviewLinkingCollectionsPageServiceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentServiceOverviewLinkingCollectionsComponentSectionCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentServiceOverviewLinkingCollectionsPageServiceCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentServiceOverviewOrder {
  CtaLinkAsc = 'ctaLink_ASC',
  CtaLinkDesc = 'ctaLink_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A single step in a process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentStep) */
export type ComponentStep = Entry & _Node & {
  __typename?: 'ComponentStep';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentStepLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A single step in a process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentStep) */
export type ComponentStepDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A single step in a process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentStep) */
export type ComponentStepIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A single step in a process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentStep) */
export type ComponentStepInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A single step in a process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentStep) */
export type ComponentStepLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A single step in a process or workflow. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentStep) */
export type ComponentStepTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentStepCollection = {
  __typename?: 'ComponentStepCollection';
  items: Array<Maybe<ComponentStep>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentStepFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentStepFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentStepFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentStepLinkingCollections = {
  __typename?: 'ComponentStepLinkingCollections';
  componentProcessCollection?: Maybe<ComponentProcessCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentStepLinkingCollectionsComponentProcessCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentStepLinkingCollectionsComponentProcessCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentStepLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentStepLinkingCollectionsComponentProcessCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentStepOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonial = Entry & _Node & {
  __typename?: 'ComponentTestimonial';
  _id: Scalars['ID']['output'];
  clientImage?: Maybe<Asset>;
  clientName?: Maybe<Scalars['String']['output']>;
  clientPosition?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentTestimonialLinkingCollections>;
  quote?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  testimonialDate?: Maybe<Scalars['DateTime']['output']>;
};


/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonialClientImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonialClientNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonialClientPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonialCompanyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonialInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonialQuoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A component to showcase client testimonials or success stories. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentTestimonial) */
export type ComponentTestimonialTestimonialDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentTestimonialCollection = {
  __typename?: 'ComponentTestimonialCollection';
  items: Array<Maybe<ComponentTestimonial>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentTestimonialFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTestimonialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTestimonialFilter>>>;
  clientImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  clientName_contains?: InputMaybe<Scalars['String']['input']>;
  clientName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  clientName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientName_not?: InputMaybe<Scalars['String']['input']>;
  clientName_not_contains?: InputMaybe<Scalars['String']['input']>;
  clientName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientPosition?: InputMaybe<Scalars['String']['input']>;
  clientPosition_contains?: InputMaybe<Scalars['String']['input']>;
  clientPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  clientPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientPosition_not?: InputMaybe<Scalars['String']['input']>;
  clientPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  clientPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  testimonialDate?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonialDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  testimonialDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type ComponentTestimonialLinkingCollections = {
  __typename?: 'ComponentTestimonialLinkingCollections';
  componentSectionCollection?: Maybe<ComponentSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
};


export type ComponentTestimonialLinkingCollectionsComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTestimonialLinkingCollectionsComponentSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentTestimonialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentTestimonialLinkingCollectionsPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTestimonialLinkingCollectionsPageServiceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentTestimonialLinkingCollectionsComponentSectionCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentTestimonialLinkingCollectionsPageServiceCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentTestimonialOrder {
  ClientNameAsc = 'clientName_ASC',
  ClientNameDesc = 'clientName_DESC',
  ClientPositionAsc = 'clientPosition_ASC',
  ClientPositionDesc = 'clientPosition_DESC',
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestimonialDateAsc = 'testimonialDate_ASC',
  TestimonialDateDesc = 'testimonialDate_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPost = Entry & _Node & {
  __typename?: 'PageBlogPost';
  _id: Scalars['ID']['output'];
  author?: Maybe<ComponentAuthor>;
  callToAction?: Maybe<ComponentCta>;
  content?: Maybe<PageBlogPostContent>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageBlogPostLinkingCollections>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  relatedPostsCollection?: Maybe<PageBlogPostRelatedPostsCollection>;
  seo?: Maybe<Entry>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostCallToActionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostFeaturedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostPublishedDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostRelatedPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostRelatedPostsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A content type for individual blog posts. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageBlogPost) */
export type PageBlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageBlogPostCollection = {
  __typename?: 'PageBlogPostCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageBlogPostContent = {
  __typename?: 'PageBlogPostContent';
  json: Scalars['JSON']['output'];
  links: PageBlogPostContentLinks;
};

export type PageBlogPostContentAssets = {
  __typename?: 'PageBlogPostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBlogPostContentEntries = {
  __typename?: 'PageBlogPostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBlogPostContentLinks = {
  __typename?: 'PageBlogPostContentLinks';
  assets: PageBlogPostContentAssets;
  entries: PageBlogPostContentEntries;
  resources: PageBlogPostContentResources;
};

export type PageBlogPostContentResources = {
  __typename?: 'PageBlogPostContentResources';
  block: Array<PageBlogPostContentResourcesBlock>;
  hyperlink: Array<PageBlogPostContentResourcesHyperlink>;
  inline: Array<PageBlogPostContentResourcesInline>;
};

export type PageBlogPostContentResourcesBlock = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesBlock';
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesInline = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesInline';
  sys: ResourceSys;
};

export type PageBlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  author?: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToAction?: InputMaybe<CfComponentCtaNestedFilter>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedPosts?: InputMaybe<CfPageBlogPostNestedFilter>;
  relatedPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageBlogPostLinkingCollections = {
  __typename?: 'PageBlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type PageBlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageBlogPostLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageBlogPostOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageBlogPostRelatedPostsCollection = {
  __typename?: 'PageBlogPostRelatedPostsCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageBlogPostRelatedPostsCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FeaturedAsc = 'featured_ASC',
  FeaturedDesc = 'featured_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHome = Entry & _Node & {
  __typename?: 'PageHome';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<ComponentCta>;
  featuresCollection?: Maybe<PageHomeFeaturesCollection>;
  hero?: Maybe<ComponentHero>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageHomeLinkingCollections>;
  process?: Maybe<ComponentProcess>;
  seo?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHomeCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHomeFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageHomeFeaturesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentFeatureFilter>;
};


/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHomeHeroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentHeroFilter>;
};


/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHomeInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHomeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHomeProcessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentProcessFilter>;
};


/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHomeSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** The homepage of the website. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageHome) */
export type PageHomeSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageHomeCollection = {
  __typename?: 'PageHomeCollection';
  items: Array<Maybe<PageHome>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageHomeFeaturesCollection = {
  __typename?: 'PageHomeFeaturesCollection';
  items: Array<Maybe<ComponentFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageHomeFeaturesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkHrefAsc = 'linkHref_ASC',
  LinkHrefDesc = 'linkHref_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageHomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageHomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageHomeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfComponentCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  features?: InputMaybe<CfComponentFeatureNestedFilter>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hero?: InputMaybe<CfComponentHeroNestedFilter>;
  hero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  process?: InputMaybe<CfComponentProcessNestedFilter>;
  process_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageHomeLinkingCollections = {
  __typename?: 'PageHomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageHomeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageHomeOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageService = Entry & _Node & {
  __typename?: 'PageService';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<ComponentCta>;
  description?: Maybe<Scalars['String']['output']>;
  faqsCollection?: Maybe<PageServiceFaqsCollection>;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageServiceLinkingCollections>;
  seo?: Maybe<Entry>;
  serviceOverview?: Maybe<ComponentServiceOverview>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  testimonialsCollection?: Maybe<PageServiceTestimonialsCollection>;
  title?: Maybe<Scalars['String']['output']>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceFaqsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageServiceFaqsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentFaqFilter>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceServiceOverviewArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentServiceOverviewFilter>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceTestimonialsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageServiceTestimonialsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentTestimonialFilter>;
};


/** A page to showcase a specific service offered by the organization. [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/PageService) */
export type PageServiceTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageServiceCollection = {
  __typename?: 'PageServiceCollection';
  items: Array<Maybe<PageService>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageServiceFaqsCollection = {
  __typename?: 'PageServiceFaqsCollection';
  items: Array<Maybe<ComponentFaq>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageServiceFaqsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageServiceFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageServiceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageServiceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfComponentCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  faqs?: InputMaybe<CfComponentFaqNestedFilter>;
  faqsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  serviceOverview?: InputMaybe<CfComponentServiceOverviewNestedFilter>;
  serviceOverview_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  testimonials?: InputMaybe<CfComponentTestimonialNestedFilter>;
  testimonialsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageServiceLinkingCollections = {
  __typename?: 'PageServiceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageServiceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageServiceOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageServiceTestimonialsCollection = {
  __typename?: 'PageServiceTestimonialsCollection';
  items: Array<Maybe<ComponentTestimonial>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageServiceTestimonialsCollectionOrder {
  ClientNameAsc = 'clientName_ASC',
  ClientNameDesc = 'clientName_DESC',
  ClientPositionAsc = 'clientPosition_ASC',
  ClientPositionDesc = 'clientPosition_DESC',
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestimonialDateAsc = 'testimonialDate_ASC',
  TestimonialDateDesc = 'testimonialDate_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  appSettings?: Maybe<AppSettings>;
  appSettingsCollection?: Maybe<AppSettingsCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentAuthor?: Maybe<ComponentAuthor>;
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentCta?: Maybe<ComponentCta>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentFaq?: Maybe<ComponentFaq>;
  componentFaqCollection?: Maybe<ComponentFaqCollection>;
  componentFeature?: Maybe<ComponentFeature>;
  componentFeatureCollection?: Maybe<ComponentFeatureCollection>;
  componentHero?: Maybe<ComponentHero>;
  componentHeroCollection?: Maybe<ComponentHeroCollection>;
  componentImageGallery?: Maybe<ComponentImageGallery>;
  componentImageGalleryCollection?: Maybe<ComponentImageGalleryCollection>;
  componentLink?: Maybe<ComponentLink>;
  componentLinkCollection?: Maybe<ComponentLinkCollection>;
  componentNavigation?: Maybe<ComponentNavigation>;
  componentNavigationCollection?: Maybe<ComponentNavigationCollection>;
  componentNavigationItem?: Maybe<ComponentNavigationItem>;
  componentNavigationItemCollection?: Maybe<ComponentNavigationItemCollection>;
  componentProcess?: Maybe<ComponentProcess>;
  componentProcessCollection?: Maybe<ComponentProcessCollection>;
  componentSection?: Maybe<ComponentSection>;
  componentSectionCollection?: Maybe<ComponentSectionCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  componentService?: Maybe<ComponentService>;
  componentServiceCollection?: Maybe<ComponentServiceCollection>;
  componentServiceOverview?: Maybe<ComponentServiceOverview>;
  componentServiceOverviewCollection?: Maybe<ComponentServiceOverviewCollection>;
  componentStep?: Maybe<ComponentStep>;
  componentStepCollection?: Maybe<ComponentStepCollection>;
  componentTestimonial?: Maybe<ComponentTestimonial>;
  componentTestimonialCollection?: Maybe<ComponentTestimonialCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPost?: Maybe<PageBlogPost>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageHome?: Maybe<PageHome>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  pageService?: Maybe<PageService>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAppSettingsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAppSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AppSettingsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AppSettingsFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentAuthorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


export type QueryComponentCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


export type QueryComponentFaqArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentFaqCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFaqOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentFaqFilter>;
};


export type QueryComponentFeatureArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentFeatureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentFeatureFilter>;
};


export type QueryComponentHeroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentHeroFilter>;
};


export type QueryComponentImageGalleryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentImageGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentImageGalleryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentImageGalleryFilter>;
};


export type QueryComponentLinkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentLinkFilter>;
};


export type QueryComponentNavigationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentNavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentNavigationFilter>;
};


export type QueryComponentNavigationItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentNavigationItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentNavigationItemFilter>;
};


export type QueryComponentProcessArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentProcessCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProcessOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentProcessFilter>;
};


export type QueryComponentSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSectionFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryComponentServiceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentServiceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentServiceFilter>;
};


export type QueryComponentServiceOverviewArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentServiceOverviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentServiceOverviewOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentServiceOverviewFilter>;
};


export type QueryComponentStepArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentStepCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentStepOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentStepFilter>;
};


export type QueryComponentTestimonialArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTestimonialOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentTestimonialFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPageBlogPostArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


export type QueryPageHomeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageHomeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageHomeFilter>;
};


export type QueryPageServiceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageServiceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageServiceFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfComponentAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  bio?: InputMaybe<Scalars['String']['input']>;
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  bio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bio_not?: InputMaybe<Scalars['String']['input']>;
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profilePicture_exists?: InputMaybe<Scalars['Boolean']['input']>;
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentCtaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentCtaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentCtaNestedFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentFaqNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentFaqNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentFaqNestedFilter>>>;
  answer?: InputMaybe<Scalars['String']['input']>;
  answer_contains?: InputMaybe<Scalars['String']['input']>;
  answer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  answer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  answer_not?: InputMaybe<Scalars['String']['input']>;
  answer_not_contains?: InputMaybe<Scalars['String']['input']>;
  answer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_exists?: InputMaybe<Scalars['Boolean']['input']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentFeatureNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentFeatureNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentFeatureNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkHref?: InputMaybe<Scalars['String']['input']>;
  linkHref_contains?: InputMaybe<Scalars['String']['input']>;
  linkHref_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkHref_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkHref_not?: InputMaybe<Scalars['String']['input']>;
  linkHref_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkHref_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentHeroNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentHeroNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentHeroNestedFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  displayText?: InputMaybe<Scalars['String']['input']>;
  displayText_contains?: InputMaybe<Scalars['String']['input']>;
  displayText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  displayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  displayText_not?: InputMaybe<Scalars['String']['input']>;
  displayText_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentNavigationItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentNavigationItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentNavigationItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentNavigationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentNavigationNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentNavigationNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentProcessNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentProcessNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentProcessNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stepsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphDescription_not?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphTitle_not?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  openGraphTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  robotsFollow?: InputMaybe<Scalars['Boolean']['input']>;
  robotsFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  robotsFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  robotsIndex?: InputMaybe<Scalars['Boolean']['input']>;
  robotsIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  robotsIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  schemaJsonLd?: InputMaybe<Scalars['String']['input']>;
  schemaJsonLd_contains?: InputMaybe<Scalars['String']['input']>;
  schemaJsonLd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  schemaJsonLd_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  schemaJsonLd_not?: InputMaybe<Scalars['String']['input']>;
  schemaJsonLd_not_contains?: InputMaybe<Scalars['String']['input']>;
  schemaJsonLd_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  schemaType?: InputMaybe<Scalars['String']['input']>;
  schemaType_contains?: InputMaybe<Scalars['String']['input']>;
  schemaType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  schemaType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  schemaType_not?: InputMaybe<Scalars['String']['input']>;
  schemaType_not_contains?: InputMaybe<Scalars['String']['input']>;
  schemaType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  twitterCardType?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterCardType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterCardType_not?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterCardType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterDescription_not?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterTitle_not?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentServiceOverviewNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentServiceOverviewNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentServiceOverviewNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaLink?: InputMaybe<Scalars['String']['input']>;
  ctaLink_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaLink_not?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentStepNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentStepNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentStepNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfComponentTestimonialNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentTestimonialNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentTestimonialNestedFilter>>>;
  clientImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  clientName_contains?: InputMaybe<Scalars['String']['input']>;
  clientName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  clientName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientName_not?: InputMaybe<Scalars['String']['input']>;
  clientName_not_contains?: InputMaybe<Scalars['String']['input']>;
  clientName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientPosition?: InputMaybe<Scalars['String']['input']>;
  clientPosition_contains?: InputMaybe<Scalars['String']['input']>;
  clientPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  clientPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientPosition_not?: InputMaybe<Scalars['String']['input']>;
  clientPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  clientPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  testimonialDate?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonialDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  testimonialDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  testimonialDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type CfPageBlogPostNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfcomponentsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcomponentsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcomponentsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export const ImageFieldsFragmentDoc = /*#__PURE__*/ gql`
    fragment ImageFields on Asset {
  url
  description
  title
  size
}
    `;
export const NavigationItemsCollectionFieldsFragmentDoc = /*#__PURE__*/ gql`
    fragment NavigationItemsCollectionFields on ComponentNavigationItemsCollection {
  items {
    name
    slug
    icon {
      ...ImageFields
    }
  }
}
    ${ImageFieldsFragmentDoc}`;
export const AppSettingsFieldsFragmentDoc = /*#__PURE__*/ gql`
    fragment AppSettingsFields on AppSettings {
  appTitle
  headerNavigation {
    itemsCollection {
      ...NavigationItemsCollectionFields
    }
  }
  footerNavigation {
    itemsCollection {
      ...NavigationItemsCollectionFields
    }
  }
}
    ${NavigationItemsCollectionFieldsFragmentDoc}`;
export const SeoFieldsFragmentDoc = /*#__PURE__*/ gql`
    fragment SeoFields on ComponentSeo {
  name
  slug
  metaTitle
  metaDescription
  canonicalUrl
  openGraphTitle
  openGraphImage {
    ...ImageFields
  }
  openGraphDescription
  robotsIndex
  robotsFollow
  schemaJsonLd
  schemaType
  twitterTitle
  twitterDescription
  twitterCardType
}
    ${ImageFieldsFragmentDoc}`;
export const CtaFieldsFragmentDoc = /*#__PURE__*/ gql`
    fragment CTAFields on ComponentCta {
  sys {
    id
  }
  heading
  subheading
  buttonText
  buttonLink
  backgroundImage {
    ...ImageFields
  }
}
    ${ImageFieldsFragmentDoc}`;
export const HeroFieldsFragmentDoc = /*#__PURE__*/ gql`
    fragment HeroFields on ComponentHero {
  sys {
    id
  }
  heading
  subheading
  backgroundImage {
    ...ImageFields
  }
  callToAction {
    ...CTAFields
  }
}
    ${ImageFieldsFragmentDoc}
${CtaFieldsFragmentDoc}`;
export const GetAppSettingsDocument = /*#__PURE__*/ gql`
    query getAppSettings($locale: String, $preview: Boolean) {
  appSettingsCollection(locale: $locale, preview: $preview, limit: 2) {
    items {
      ...AppSettingsFields
    }
  }
}
    ${AppSettingsFieldsFragmentDoc}`;
export const GetHomePageDocument = /*#__PURE__*/ gql`
    query getHomePage($locale: String!, $preview: Boolean) {
  pageHomeCollection(locale: $locale, preview: $preview, limit: 1) {
    items {
      sys {
        id
      }
      seo {
        ...SeoFields
      }
      slug
      hero {
        ...HeroFields
      }
    }
  }
}
    ${SeoFieldsFragmentDoc}
${HeroFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const GetAppSettingsDocumentString = print(GetAppSettingsDocument);
const GetHomePageDocumentString = print(GetHomePageDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAppSettings(variables?: GetAppSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetAppSettingsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetAppSettingsQuery>(GetAppSettingsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAppSettings', 'query', variables);
    },
    getHomePage(variables: GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetHomePageQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetHomePageQuery>(GetHomePageDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHomePage', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type AppSettingsFieldsFragment = { __typename?: 'AppSettings', appTitle?: string | null, headerNavigation?: { __typename?: 'ComponentNavigation', itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null } | null> } | null } | null, footerNavigation?: { __typename?: 'ComponentNavigation', itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null } | null> } | null } | null };

export type NavigationItemsCollectionFieldsFragment = { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null } | null> };

export type CtaFieldsFragment = { __typename?: 'ComponentCta', heading?: string | null, subheading?: string | null, buttonText?: string | null, buttonLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null };

export type ImageFieldsFragment = { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null };

export type SeoFieldsFragment = { __typename?: 'ComponentSeo', name?: string | null, slug?: string | null, metaTitle?: string | null, metaDescription?: string | null, canonicalUrl?: string | null, openGraphTitle?: string | null, openGraphDescription?: string | null, robotsIndex?: boolean | null, robotsFollow?: boolean | null, schemaJsonLd?: string | null, schemaType?: string | null, twitterTitle?: string | null, twitterDescription?: string | null, twitterCardType?: string | null, openGraphImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null };

export type GetAppSettingsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetAppSettingsQuery = { __typename?: 'Query', appSettingsCollection?: { __typename?: 'AppSettingsCollection', items: Array<{ __typename?: 'AppSettings', appTitle?: string | null, headerNavigation?: { __typename?: 'ComponentNavigation', itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null } | null> } | null } | null, footerNavigation?: { __typename?: 'ComponentNavigation', itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null } | null> } | null } | null } | null> } | null };

export type GetHomePageQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetHomePageQuery = { __typename?: 'Query', pageHomeCollection?: { __typename?: 'PageHomeCollection', items: Array<{ __typename?: 'PageHome', slug?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'ComponentSeo', name?: string | null, slug?: string | null, metaTitle?: string | null, metaDescription?: string | null, canonicalUrl?: string | null, openGraphTitle?: string | null, openGraphDescription?: string | null, robotsIndex?: boolean | null, robotsFollow?: boolean | null, schemaJsonLd?: string | null, schemaType?: string | null, twitterTitle?: string | null, twitterDescription?: string | null, twitterCardType?: string | null, openGraphImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null } | null, hero?: { __typename?: 'ComponentHero', heading?: string | null, subheading?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null, callToAction?: { __typename?: 'ComponentCta', heading?: string | null, subheading?: string | null, buttonText?: string | null, buttonLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null } | null } | null } | null> } | null };

export type HeroFieldsFragment = { __typename?: 'ComponentHero', heading?: string | null, subheading?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null, callToAction?: { __typename?: 'ComponentCta', heading?: string | null, subheading?: string | null, buttonText?: string | null, buttonLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', url?: string | null, description?: string | null, title?: string | null, size?: number | null } | null } | null };
