import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError } from 'graphql'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  copyrightText?: Maybe<Scalars['String']['output']>;
  footerNavigationCollection?: Maybe<AppSettingsFooterNavigationCollection>;
  headerNavigationMenu?: Maybe<Entry>;
  internalId?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<AppSettingsLinkingCollections>;
  seo?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsAppTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsCopyrightTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsFooterNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AppSettingsFooterNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentNavigationFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsHeaderNavigationMenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsInternalIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/appSettings) */
export type AppSettingsSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
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
  copyrightText?: InputMaybe<Scalars['String']['input']>;
  copyrightText_contains?: InputMaybe<Scalars['String']['input']>;
  copyrightText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  copyrightText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  copyrightText_not?: InputMaybe<Scalars['String']['input']>;
  copyrightText_not_contains?: InputMaybe<Scalars['String']['input']>;
  copyrightText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerNavigation?: InputMaybe<CfComponentNavigationNestedFilter>;
  footerNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headerNavigationMenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalId?: InputMaybe<Scalars['String']['input']>;
  internalId_contains?: InputMaybe<Scalars['String']['input']>;
  internalId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalId_not?: InputMaybe<Scalars['String']['input']>;
  internalId_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type AppSettingsFooterNavigationCollection = {
  __typename?: 'AppSettingsFooterNavigationCollection';
  items: Array<Maybe<ComponentNavigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum AppSettingsFooterNavigationCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NavigationMenuTitleAsc = 'navigationMenuTitle_ASC',
  NavigationMenuTitleDesc = 'navigationMenuTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

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
  CopyrightTextAsc = 'copyrightText_ASC',
  CopyrightTextDesc = 'copyrightText_DESC',
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
  pageBaseCollection?: Maybe<PageBaseCollection>;
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


export type AssetLinkingCollectionsPageBaseCollectionArgs = {
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
  pageBaseCollection?: Maybe<PageBaseCollection>;
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


export type ComponentCtaLinkingCollectionsPageBaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsPageBaseCollectionOrder>>>;
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

export enum ComponentCtaLinkingCollectionsPageBaseCollectionOrder {
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
  navigationMenuTitle?: Maybe<Scalars['String']['output']>;
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
export type ComponentNavigationNavigationMenuTitleArgs = {
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
  navigationMenuTitle?: InputMaybe<Scalars['String']['input']>;
  navigationMenuTitle_contains?: InputMaybe<Scalars['String']['input']>;
  navigationMenuTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigationMenuTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationMenuTitle_not?: InputMaybe<Scalars['String']['input']>;
  navigationMenuTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  navigationMenuTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  submenu?: Maybe<ComponentNavigation>;
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


/** Navigation item used for menus and links [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/ComponentNavigationItem) */
export type ComponentNavigationItemSubmenuArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentNavigationFilter>;
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
  submenu?: InputMaybe<CfComponentNavigationNestedFilter>;
  submenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  NavigationMenuTitleAsc = 'navigationMenuTitle_ASC',
  NavigationMenuTitleDesc = 'navigationMenuTitle_DESC',
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
  componentNavigationItemCollection?: Maybe<ComponentNavigationItemCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentNavigationLinkingCollectionsAppSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkingCollectionsAppSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentNavigationLinkingCollectionsComponentNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkingCollectionsComponentNavigationItemCollectionOrder>>>;
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
  CopyrightTextAsc = 'copyrightText_ASC',
  CopyrightTextDesc = 'copyrightText_DESC',
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

export enum ComponentNavigationLinkingCollectionsComponentNavigationItemCollectionOrder {
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

export enum ComponentNavigationOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NavigationMenuTitleAsc = 'navigationMenuTitle_ASC',
  NavigationMenuTitleDesc = 'navigationMenuTitle_DESC',
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
  pageBaseCollection?: Maybe<PageBaseCollection>;
};


export type ComponentSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSectionLinkingCollectionsPageBaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSectionLinkingCollectionsPageBaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentSectionLinkingCollectionsPageBaseCollectionOrder {
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
  appSettingsCollection?: Maybe<AppSettingsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageBaseCollection?: Maybe<PageBaseCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageHomeCollection?: Maybe<PageHomeCollection>;
  pageServiceCollection?: Maybe<PageServiceCollection>;
};


export type ComponentSeoLinkingCollectionsAppSettingsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsAppSettingsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageBaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageBaseCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder>>>;
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


export type ComponentSeoLinkingCollectionsPageServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageServiceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentSeoLinkingCollectionsAppSettingsCollectionOrder {
  AppTitleAsc = 'appTitle_ASC',
  AppTitleDesc = 'appTitle_DESC',
  CopyrightTextAsc = 'copyrightText_ASC',
  CopyrightTextDesc = 'copyrightText_DESC',
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

export enum ComponentSeoLinkingCollectionsPageBaseCollectionOrder {
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

export enum ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder {
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

export enum ComponentSeoLinkingCollectionsPageServiceCollectionOrder {
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

/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBase = Entry & _Node & {
  __typename?: 'PageBase';
  _id: Scalars['ID']['output'];
  callToAction?: Maybe<ComponentCta>;
  componentSectionCollection?: Maybe<PageBaseComponentSectionCollection>;
  content?: Maybe<PageBaseContent>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageBaseLinkingCollections>;
  seo?: Maybe<ComponentSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseCallToActionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseComponentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBaseComponentSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentSectionFilter>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Generic Page for use throughout the site [See type definition](https://app.contentful.com/spaces/fs5tsm2181s6/content_types/pageBase) */
export type PageBaseTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageBaseCollection = {
  __typename?: 'PageBaseCollection';
  items: Array<Maybe<PageBase>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageBaseComponentSectionCollection = {
  __typename?: 'PageBaseComponentSectionCollection';
  items: Array<Maybe<ComponentSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageBaseComponentSectionCollectionOrder {
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

export type PageBaseContent = {
  __typename?: 'PageBaseContent';
  json: Scalars['JSON']['output'];
  links: PageBaseContentLinks;
};

export type PageBaseContentAssets = {
  __typename?: 'PageBaseContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBaseContentEntries = {
  __typename?: 'PageBaseContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBaseContentLinks = {
  __typename?: 'PageBaseContentLinks';
  assets: PageBaseContentAssets;
  entries: PageBaseContentEntries;
  resources: PageBaseContentResources;
};

export type PageBaseContentResources = {
  __typename?: 'PageBaseContentResources';
  block: Array<PageBaseContentResourcesBlock>;
  hyperlink: Array<PageBaseContentResourcesHyperlink>;
  inline: Array<PageBaseContentResourcesInline>;
};

export type PageBaseContentResourcesBlock = ResourceLink & {
  __typename?: 'PageBaseContentResourcesBlock';
  sys: ResourceSys;
};

export type PageBaseContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageBaseContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageBaseContentResourcesInline = ResourceLink & {
  __typename?: 'PageBaseContentResourcesInline';
  sys: ResourceSys;
};

export type PageBaseFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageBaseFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBaseFilter>>>;
  callToAction?: InputMaybe<CfComponentCtaNestedFilter>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']['input']>;
  componentSection?: InputMaybe<CfComponentSectionNestedFilter>;
  componentSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageBaseLinkingCollections = {
  __typename?: 'PageBaseLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageBaseLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageBaseOrder {
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
  seo?: Maybe<ComponentSeo>;
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
  where?: InputMaybe<ComponentSeoFilter>;
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
  seo?: Maybe<ComponentSeo>;
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
  where?: InputMaybe<ComponentSeoFilter>;
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
  seo?: InputMaybe<CfComponentSeoNestedFilter>;
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
  pageBase?: Maybe<PageBase>;
  pageBaseCollection?: Maybe<PageBaseCollection>;
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


export type QueryPageBaseArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageBaseCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBaseOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageBaseFilter>;
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
  submenu_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  navigationMenuTitle?: InputMaybe<Scalars['String']['input']>;
  navigationMenuTitle_contains?: InputMaybe<Scalars['String']['input']>;
  navigationMenuTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigationMenuTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationMenuTitle_not?: InputMaybe<Scalars['String']['input']>;
  navigationMenuTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  navigationMenuTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type CfComponentSectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSectionNestedFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
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

export type AuthorFragmentFragment = { __typename?: 'ComponentAuthor', name?: string | null, bio?: string | null, profilePicture?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, socialLinksCollection?: { __typename?: 'ComponentAuthorSocialLinksCollection', items: Array<{ __typename?: 'ComponentLink', name?: string | null, href?: string | null, displayText?: string | null, image?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type BlogPostCardFragmentFragment = { __typename?: 'PageBlogPost', title?: string | null, slug?: string | null };

export type BlogPostFragmentFragment = { __typename?: 'PageBlogPost', title?: string | null, slug?: string | null };

export type ImageFragmentFragment = { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null };

export type SeoFragmentFragment = { __typename?: 'ComponentSeo', metaTitle?: string | null, metaDescription?: string | null, openGraphTitle?: string | null, openGraphDescription?: string | null, robotsIndex?: boolean | null, robotsFollow?: boolean | null, openGraphImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null };

export type HeroFragmentFragment = { __typename?: 'ComponentHero', heading?: string | null, subheading?: string | null, backgroundImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, callToAction?: { __typename?: 'ComponentCta', buttonText?: string | null, buttonLink?: string | null, heading?: string | null, subheading?: string | null } | null };

export type FeatureFragmentFragment = { __typename?: 'ComponentFeature', title?: string | null, description?: string | null, linkText?: string | null, linkHref?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null };

export type HomePageFragmentFragment = { __typename?: 'PageHome', slug?: string | null, hero?: { __typename?: 'ComponentHero', heading?: string | null, subheading?: string | null, backgroundImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, callToAction?: { __typename?: 'ComponentCta', buttonText?: string | null, buttonLink?: string | null, heading?: string | null, subheading?: string | null } | null } | null, featuresCollection?: { __typename?: 'PageHomeFeaturesCollection', items: Array<{ __typename?: 'ComponentFeature', title?: string | null, description?: string | null, linkText?: string | null, linkHref?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null, seo?: { __typename?: 'ComponentSeo', metaTitle?: string | null, metaDescription?: string | null, openGraphTitle?: string | null, openGraphDescription?: string | null, robotsIndex?: boolean | null, robotsFollow?: boolean | null, openGraphImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null };

export type NavigationItemFragmentFragment = { __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, submenu?: { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null } | null };

export type NavigationCollectionFragmentFragment = { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, submenu?: { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null } | null } | null> } | null };

export type ServiceOverviewFragmentFragment = { __typename?: 'ComponentServiceOverview', title?: string | null, description?: string | null, ctaText?: string | null, ctaLink?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null };

export type FaqFragmentFragment = { __typename?: 'ComponentFaq', question?: string | null, answer?: string | null };

export type ServicePageFragmentFragment = { __typename?: 'PageService', title?: string | null, slug?: string | null, description?: string | null, featuredImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, serviceOverview?: { __typename?: 'ComponentServiceOverview', title?: string | null, description?: string | null, ctaText?: string | null, ctaLink?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null, faqsCollection?: { __typename?: 'PageServiceFaqsCollection', items: Array<{ __typename?: 'ComponentFaq', question?: string | null, answer?: string | null } | null> } | null, seo?: { __typename?: 'ComponentSeo', metaTitle?: string | null, metaDescription?: string | null, openGraphTitle?: string | null, openGraphDescription?: string | null, robotsIndex?: boolean | null, robotsFollow?: boolean | null, openGraphImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null };

export type AppSettingsFragmentFragment = { __typename?: 'AppSettings', appTitle?: string | null, copyrightText?: string | null, headerNavigationMenu?: { __typename?: 'AppSettings' } | { __typename?: 'ComponentAuthor' } | { __typename?: 'ComponentCta' } | { __typename?: 'ComponentFaq' } | { __typename?: 'ComponentFeature' } | { __typename?: 'ComponentHero' } | { __typename?: 'ComponentImageGallery' } | { __typename?: 'ComponentLink' } | { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, submenu?: { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null } | null } | null> } | null } | { __typename?: 'ComponentNavigationItem' } | { __typename?: 'ComponentProcess' } | { __typename?: 'ComponentSection' } | { __typename?: 'ComponentSeo' } | { __typename?: 'ComponentService' } | { __typename?: 'ComponentServiceOverview' } | { __typename?: 'ComponentStep' } | { __typename?: 'ComponentTestimonial' } | { __typename?: 'PageBase' } | { __typename?: 'PageBlogPost' } | { __typename?: 'PageHome' } | { __typename?: 'PageService' } | null, footerNavigationCollection?: { __typename?: 'AppSettingsFooterNavigationCollection', items: Array<{ __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, submenu?: { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null } | null } | null> } | null } | null> } | null };

export type PageBlogPostCollectionQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  preview: Scalars['Boolean']['input'];
}>;


export type PageBlogPostCollectionQuery = { __typename?: 'Query', pageBlogPostCollection?: { __typename?: 'PageBlogPostCollection', items: Array<{ __typename?: 'PageBlogPost', title?: string | null, slug?: string | null } | null> } | null };

export type HomePageQueryQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  preview: Scalars['Boolean']['input'];
}>;


export type HomePageQueryQuery = { __typename?: 'Query', pageHomeCollection?: { __typename?: 'PageHomeCollection', limit: number, skip: number, total: number, items: Array<{ __typename?: 'PageHome', slug?: string | null, hero?: { __typename?: 'ComponentHero', heading?: string | null, subheading?: string | null, backgroundImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, callToAction?: { __typename?: 'ComponentCta', buttonText?: string | null, buttonLink?: string | null, heading?: string | null, subheading?: string | null } | null } | null, featuresCollection?: { __typename?: 'PageHomeFeaturesCollection', items: Array<{ __typename?: 'ComponentFeature', title?: string | null, description?: string | null, linkText?: string | null, linkHref?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null, seo?: { __typename?: 'ComponentSeo', metaTitle?: string | null, metaDescription?: string | null, openGraphTitle?: string | null, openGraphDescription?: string | null, robotsIndex?: boolean | null, robotsFollow?: boolean | null, openGraphImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export type NavigationQueryQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  preview: Scalars['Boolean']['input'];
}>;


export type NavigationQueryQuery = { __typename?: 'Query', componentNavigationCollection?: { __typename?: 'ComponentNavigationCollection', limit: number, skip: number, total: number, items: Array<{ __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, submenu?: { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null } | null } | null> } | null } | null> } | null };

export type ServicesQueryQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  preview: Scalars['Boolean']['input'];
}>;


export type ServicesQueryQuery = { __typename?: 'Query', pageServiceCollection?: { __typename?: 'PageServiceCollection', limit: number, skip: number, total: number, items: Array<{ __typename?: 'PageService', title?: string | null, slug?: string | null, description?: string | null, featuredImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, serviceOverview?: { __typename?: 'ComponentServiceOverview', title?: string | null, description?: string | null, ctaText?: string | null, ctaLink?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null, faqsCollection?: { __typename?: 'PageServiceFaqsCollection', items: Array<{ __typename?: 'ComponentFaq', question?: string | null, answer?: string | null } | null> } | null, seo?: { __typename?: 'ComponentSeo', metaTitle?: string | null, metaDescription?: string | null, openGraphTitle?: string | null, openGraphDescription?: string | null, robotsIndex?: boolean | null, robotsFollow?: boolean | null, openGraphImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export type ServiceBySlugQueryQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  preview: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
}>;


export type ServiceBySlugQueryQuery = { __typename?: 'Query', pageServiceCollection?: { __typename?: 'PageServiceCollection', items: Array<{ __typename?: 'PageService', title?: string | null, slug?: string | null, description?: string | null, featuredImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, serviceOverview?: { __typename?: 'ComponentServiceOverview', title?: string | null, description?: string | null, ctaText?: string | null, ctaLink?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null, faqsCollection?: { __typename?: 'PageServiceFaqsCollection', items: Array<{ __typename?: 'ComponentFaq', question?: string | null, answer?: string | null } | null> } | null, seo?: { __typename?: 'ComponentSeo', metaTitle?: string | null, metaDescription?: string | null, openGraphTitle?: string | null, openGraphDescription?: string | null, robotsIndex?: boolean | null, robotsFollow?: boolean | null, openGraphImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null } | null> } | null };

export type AppSettingsQueryQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  preview: Scalars['Boolean']['input'];
}>;


export type AppSettingsQueryQuery = { __typename?: 'Query', appSettingsCollection?: { __typename?: 'AppSettingsCollection', limit: number, skip: number, total: number, items: Array<{ __typename?: 'AppSettings', appTitle?: string | null, copyrightText?: string | null, headerNavigationMenu?: { __typename?: 'AppSettings' } | { __typename?: 'ComponentAuthor' } | { __typename?: 'ComponentCta' } | { __typename?: 'ComponentFaq' } | { __typename?: 'ComponentFeature' } | { __typename?: 'ComponentHero' } | { __typename?: 'ComponentImageGallery' } | { __typename?: 'ComponentLink' } | { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, submenu?: { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null } | null } | null> } | null } | { __typename?: 'ComponentNavigationItem' } | { __typename?: 'ComponentProcess' } | { __typename?: 'ComponentSection' } | { __typename?: 'ComponentSeo' } | { __typename?: 'ComponentService' } | { __typename?: 'ComponentServiceOverview' } | { __typename?: 'ComponentStep' } | { __typename?: 'ComponentTestimonial' } | { __typename?: 'PageBase' } | { __typename?: 'PageBlogPost' } | { __typename?: 'PageHome' } | { __typename?: 'PageService' } | null, footerNavigationCollection?: { __typename?: 'AppSettingsFooterNavigationCollection', items: Array<{ __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null, submenu?: { __typename?: 'ComponentNavigation', navigationMenuTitle?: string | null, itemsCollection?: { __typename?: 'ComponentNavigationItemsCollection', items: Array<{ __typename?: 'ComponentNavigationItem', name?: string | null, slug?: string | null, icon?: { __typename?: 'Asset', url?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null } | null } | null> } | null } | null } | null> } | null } | null> } | null } | null> } | null };

export const ImageFragmentFragmentDoc = `
    fragment ImageFragment on Asset {
  url
  title
  description
  width
  height
}
    `;
export const AuthorFragmentFragmentDoc = `
    fragment AuthorFragment on ComponentAuthor {
  name
  bio
  profilePicture {
    ...ImageFragment
  }
  socialLinksCollection {
    items {
      name
      href
      displayText
      image {
        ...ImageFragment
      }
    }
  }
}
    ${ImageFragmentFragmentDoc}`;
export const BlogPostCardFragmentFragmentDoc = `
    fragment BlogPostCardFragment on PageBlogPost {
  title
  slug
}
    `;
export const BlogPostFragmentFragmentDoc = `
    fragment BlogPostFragment on PageBlogPost {
  ...BlogPostCardFragment
}
    ${BlogPostCardFragmentFragmentDoc}`;
export const HeroFragmentFragmentDoc = `
    fragment HeroFragment on ComponentHero {
  heading
  subheading
  backgroundImage {
    ...ImageFragment
  }
  callToAction {
    buttonText
    buttonLink
    heading
    subheading
  }
}
    ${ImageFragmentFragmentDoc}`;
export const FeatureFragmentFragmentDoc = `
    fragment FeatureFragment on ComponentFeature {
  title
  description
  icon {
    ...ImageFragment
  }
  linkText
  linkHref
}
    ${ImageFragmentFragmentDoc}`;
export const SeoFragmentFragmentDoc = `
    fragment SeoFragment on ComponentSeo {
  metaTitle
  metaDescription
  openGraphTitle
  openGraphDescription
  openGraphImage {
    ...ImageFragment
  }
  robotsIndex
  robotsFollow
}
    ${ImageFragmentFragmentDoc}`;
export const HomePageFragmentFragmentDoc = `
    fragment HomePageFragment on PageHome {
  slug
  hero {
    ...HeroFragment
  }
  featuresCollection {
    items {
      ...FeatureFragment
    }
  }
  seo {
    ...SeoFragment
  }
}
    ${HeroFragmentFragmentDoc}
${FeatureFragmentFragmentDoc}
${SeoFragmentFragmentDoc}`;
export const ServiceOverviewFragmentFragmentDoc = `
    fragment ServiceOverviewFragment on ComponentServiceOverview {
  title
  description
  icon {
    ...ImageFragment
  }
  ctaText
  ctaLink
}
    ${ImageFragmentFragmentDoc}`;
export const FaqFragmentFragmentDoc = `
    fragment FaqFragment on ComponentFaq {
  question
  answer
}
    `;
export const ServicePageFragmentFragmentDoc = `
    fragment ServicePageFragment on PageService {
  title
  slug
  description
  featuredImage {
    ...ImageFragment
  }
  serviceOverview {
    ...ServiceOverviewFragment
  }
  faqsCollection {
    items {
      ...FaqFragment
    }
  }
  seo {
    ...SeoFragment
  }
}
    ${ImageFragmentFragmentDoc}
${ServiceOverviewFragmentFragmentDoc}
${FaqFragmentFragmentDoc}
${SeoFragmentFragmentDoc}`;
export const NavigationItemFragmentFragmentDoc = `
    fragment NavigationItemFragment on ComponentNavigationItem {
  name
  slug
  icon {
    ...ImageFragment
  }
  submenu {
    navigationMenuTitle
    itemsCollection {
      items {
        name
        slug
        icon {
          ...ImageFragment
        }
      }
    }
  }
}
    ${ImageFragmentFragmentDoc}`;
export const NavigationCollectionFragmentFragmentDoc = `
    fragment NavigationCollectionFragment on ComponentNavigation {
  navigationMenuTitle
  itemsCollection {
    items {
      ...NavigationItemFragment
    }
  }
}
    ${NavigationItemFragmentFragmentDoc}`;
export const AppSettingsFragmentFragmentDoc = `
    fragment AppSettingsFragment on AppSettings {
  appTitle
  copyrightText
  headerNavigationMenu {
    ...NavigationCollectionFragment
  }
  footerNavigationCollection {
    items {
      ...NavigationCollectionFragment
    }
  }
}
    ${NavigationCollectionFragmentFragmentDoc}`;
export const PageBlogPostCollectionDocument = `
    query pageBlogPostCollection($locale: String!, $preview: Boolean!) {
  pageBlogPostCollection(locale: $locale, preview: $preview) {
    items {
      ...BlogPostCardFragment
    }
  }
}
    ${BlogPostCardFragmentFragmentDoc}`;
export const HomePageQueryDocument = `
    query HomePageQuery($locale: String!, $preview: Boolean!) {
  pageHomeCollection(locale: $locale, preview: $preview, limit: 1) {
    limit
    skip
    total
    items {
      ...HomePageFragment
    }
  }
}
    ${HomePageFragmentFragmentDoc}`;
export const NavigationQueryDocument = `
    query NavigationQuery($locale: String!, $preview: Boolean!) {
  componentNavigationCollection(locale: $locale, preview: $preview) {
    limit
    skip
    total
    items {
      ...NavigationCollectionFragment
    }
  }
}
    ${NavigationCollectionFragmentFragmentDoc}`;
export const ServicesQueryDocument = `
    query ServicesQuery($locale: String!, $preview: Boolean!) {
  pageServiceCollection(locale: $locale, preview: $preview) {
    limit
    skip
    total
    items {
      ...ServicePageFragment
    }
  }
}
    ${ServicePageFragmentFragmentDoc}`;
export const ServiceBySlugQueryDocument = `
    query ServiceBySlugQuery($locale: String!, $preview: Boolean!, $slug: String!) {
  pageServiceCollection(
    locale: $locale
    preview: $preview
    limit: 1
    skip: 0
    where: {slug: $slug}
  ) {
    items {
      ...ServicePageFragment
    }
  }
}
    ${ServicePageFragmentFragmentDoc}`;
export const AppSettingsQueryDocument = `
    query AppSettingsQuery($locale: String!, $preview: Boolean!) {
  appSettingsCollection(locale: $locale, preview: $preview) {
    limit
    skip
    total
    items {
      ...AppSettingsFragment
    }
  }
}
    ${AppSettingsFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageBlogPostCollection(variables: PageBlogPostCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PageBlogPostCollectionQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PageBlogPostCollectionQuery>(PageBlogPostCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageBlogPostCollection', 'query', variables);
    },
    HomePageQuery(variables: HomePageQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: HomePageQueryQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<HomePageQueryQuery>(HomePageQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'HomePageQuery', 'query', variables);
    },
    NavigationQuery(variables: NavigationQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: NavigationQueryQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<NavigationQueryQuery>(NavigationQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'NavigationQuery', 'query', variables);
    },
    ServicesQuery(variables: ServicesQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ServicesQueryQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ServicesQueryQuery>(ServicesQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ServicesQuery', 'query', variables);
    },
    ServiceBySlugQuery(variables: ServiceBySlugQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ServiceBySlugQueryQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ServiceBySlugQueryQuery>(ServiceBySlugQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ServiceBySlugQuery', 'query', variables);
    },
    AppSettingsQuery(variables: AppSettingsQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AppSettingsQueryQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AppSettingsQueryQuery>(AppSettingsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AppSettingsQuery', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  ComponentSectionComponentsItem: ( Omit<ComponentCta, 'backgroundImage' | 'linkedFrom'> & { backgroundImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentCtaLinkingCollections']> } ) | ( Omit<ComponentFeature, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentFeatureLinkingCollections']> } ) | ( Omit<ComponentHero, 'backgroundImage' | 'callToAction' | 'linkedFrom'> & { backgroundImage?: Maybe<_RefType['Asset']>, callToAction?: Maybe<_RefType['ComponentCta']>, linkedFrom?: Maybe<_RefType['ComponentHeroLinkingCollections']> } ) | ( Omit<ComponentServiceOverview, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentServiceOverviewLinkingCollections']> } ) | ( Omit<ComponentTestimonial, 'clientImage' | 'linkedFrom'> & { clientImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentTestimonialLinkingCollections']> } );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Entry: ( Omit<AppSettings, 'footerNavigationCollection' | 'headerNavigationMenu' | 'linkedFrom' | 'seo'> & { footerNavigationCollection?: Maybe<_RefType['AppSettingsFooterNavigationCollection']>, headerNavigationMenu?: Maybe<_RefType['Entry']>, linkedFrom?: Maybe<_RefType['AppSettingsLinkingCollections']>, seo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<ComponentAuthor, 'linkedFrom' | 'profilePicture' | 'socialLinksCollection'> & { linkedFrom?: Maybe<_RefType['ComponentAuthorLinkingCollections']>, profilePicture?: Maybe<_RefType['Asset']>, socialLinksCollection?: Maybe<_RefType['ComponentAuthorSocialLinksCollection']> } ) | ( Omit<ComponentCta, 'backgroundImage' | 'linkedFrom'> & { backgroundImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentCtaLinkingCollections']> } ) | ( Omit<ComponentFaq, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentFaqLinkingCollections']> } ) | ( Omit<ComponentFeature, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentFeatureLinkingCollections']> } ) | ( Omit<ComponentHero, 'backgroundImage' | 'callToAction' | 'linkedFrom'> & { backgroundImage?: Maybe<_RefType['Asset']>, callToAction?: Maybe<_RefType['ComponentCta']>, linkedFrom?: Maybe<_RefType['ComponentHeroLinkingCollections']> } ) | ( Omit<ComponentImageGallery, 'imagesCollection' | 'linkedFrom'> & { imagesCollection?: Maybe<_RefType['AssetCollection']>, linkedFrom?: Maybe<_RefType['ComponentImageGalleryLinkingCollections']> } ) | ( Omit<ComponentLink, 'image' | 'linkedFrom'> & { image?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentLinkLinkingCollections']> } ) | ( Omit<ComponentNavigation, 'itemsCollection' | 'linkedFrom'> & { itemsCollection?: Maybe<_RefType['ComponentNavigationItemsCollection']>, linkedFrom?: Maybe<_RefType['ComponentNavigationLinkingCollections']> } ) | ( Omit<ComponentNavigationItem, 'icon' | 'linkedFrom' | 'submenu'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentNavigationItemLinkingCollections']>, submenu?: Maybe<_RefType['ComponentNavigation']> } ) | ( Omit<ComponentProcess, 'linkedFrom' | 'stepsCollection'> & { linkedFrom?: Maybe<_RefType['ComponentProcessLinkingCollections']>, stepsCollection?: Maybe<_RefType['ComponentProcessStepsCollection']> } ) | ( Omit<ComponentSection, 'backgroundImage' | 'componentsCollection' | 'linkedFrom'> & { backgroundImage?: Maybe<_RefType['Asset']>, componentsCollection?: Maybe<_RefType['ComponentSectionComponentsCollection']>, linkedFrom?: Maybe<_RefType['ComponentSectionLinkingCollections']> } ) | ( Omit<ComponentSeo, 'linkedFrom' | 'openGraphImage'> & { linkedFrom?: Maybe<_RefType['ComponentSeoLinkingCollections']>, openGraphImage?: Maybe<_RefType['Asset']> } ) | ( Omit<ComponentService, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentServiceLinkingCollections']> } ) | ( Omit<ComponentServiceOverview, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentServiceOverviewLinkingCollections']> } ) | ( Omit<ComponentStep, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentStepLinkingCollections']> } ) | ( Omit<ComponentTestimonial, 'clientImage' | 'linkedFrom'> & { clientImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentTestimonialLinkingCollections']> } ) | ( Omit<PageBase, 'callToAction' | 'componentSectionCollection' | 'content' | 'featuredImage' | 'linkedFrom' | 'seo'> & { callToAction?: Maybe<_RefType['ComponentCta']>, componentSectionCollection?: Maybe<_RefType['PageBaseComponentSectionCollection']>, content?: Maybe<_RefType['PageBaseContent']>, featuredImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['PageBaseLinkingCollections']>, seo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageBlogPost, 'author' | 'callToAction' | 'content' | 'featuredImage' | 'linkedFrom' | 'relatedPostsCollection' | 'seo'> & { author?: Maybe<_RefType['ComponentAuthor']>, callToAction?: Maybe<_RefType['ComponentCta']>, content?: Maybe<_RefType['PageBlogPostContent']>, featuredImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['PageBlogPostLinkingCollections']>, relatedPostsCollection?: Maybe<_RefType['PageBlogPostRelatedPostsCollection']>, seo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageHome, 'cta' | 'featuresCollection' | 'hero' | 'linkedFrom' | 'process' | 'seo'> & { cta?: Maybe<_RefType['ComponentCta']>, featuresCollection?: Maybe<_RefType['PageHomeFeaturesCollection']>, hero?: Maybe<_RefType['ComponentHero']>, linkedFrom?: Maybe<_RefType['PageHomeLinkingCollections']>, process?: Maybe<_RefType['ComponentProcess']>, seo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageService, 'cta' | 'faqsCollection' | 'featuredImage' | 'linkedFrom' | 'seo' | 'serviceOverview' | 'testimonialsCollection'> & { cta?: Maybe<_RefType['ComponentCta']>, faqsCollection?: Maybe<_RefType['PageServiceFaqsCollection']>, featuredImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['PageServiceLinkingCollections']>, seo?: Maybe<_RefType['ComponentSeo']>, serviceOverview?: Maybe<_RefType['ComponentServiceOverview']>, testimonialsCollection?: Maybe<_RefType['PageServiceTestimonialsCollection']> } );
  ResourceLink: ( PageBaseContentResourcesBlock ) | ( PageBaseContentResourcesHyperlink ) | ( PageBaseContentResourcesInline ) | ( PageBlogPostContentResourcesBlock ) | ( PageBlogPostContentResourcesHyperlink ) | ( PageBlogPostContentResourcesInline );
  _Node: ( Omit<AppSettings, 'footerNavigationCollection' | 'headerNavigationMenu' | 'linkedFrom' | 'seo'> & { footerNavigationCollection?: Maybe<_RefType['AppSettingsFooterNavigationCollection']>, headerNavigationMenu?: Maybe<_RefType['Entry']>, linkedFrom?: Maybe<_RefType['AppSettingsLinkingCollections']>, seo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<ComponentAuthor, 'linkedFrom' | 'profilePicture' | 'socialLinksCollection'> & { linkedFrom?: Maybe<_RefType['ComponentAuthorLinkingCollections']>, profilePicture?: Maybe<_RefType['Asset']>, socialLinksCollection?: Maybe<_RefType['ComponentAuthorSocialLinksCollection']> } ) | ( Omit<ComponentCta, 'backgroundImage' | 'linkedFrom'> & { backgroundImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentCtaLinkingCollections']> } ) | ( Omit<ComponentFaq, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ComponentFaqLinkingCollections']> } ) | ( Omit<ComponentFeature, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentFeatureLinkingCollections']> } ) | ( Omit<ComponentHero, 'backgroundImage' | 'callToAction' | 'linkedFrom'> & { backgroundImage?: Maybe<_RefType['Asset']>, callToAction?: Maybe<_RefType['ComponentCta']>, linkedFrom?: Maybe<_RefType['ComponentHeroLinkingCollections']> } ) | ( Omit<ComponentImageGallery, 'imagesCollection' | 'linkedFrom'> & { imagesCollection?: Maybe<_RefType['AssetCollection']>, linkedFrom?: Maybe<_RefType['ComponentImageGalleryLinkingCollections']> } ) | ( Omit<ComponentLink, 'image' | 'linkedFrom'> & { image?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentLinkLinkingCollections']> } ) | ( Omit<ComponentNavigation, 'itemsCollection' | 'linkedFrom'> & { itemsCollection?: Maybe<_RefType['ComponentNavigationItemsCollection']>, linkedFrom?: Maybe<_RefType['ComponentNavigationLinkingCollections']> } ) | ( Omit<ComponentNavigationItem, 'icon' | 'linkedFrom' | 'submenu'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentNavigationItemLinkingCollections']>, submenu?: Maybe<_RefType['ComponentNavigation']> } ) | ( Omit<ComponentProcess, 'linkedFrom' | 'stepsCollection'> & { linkedFrom?: Maybe<_RefType['ComponentProcessLinkingCollections']>, stepsCollection?: Maybe<_RefType['ComponentProcessStepsCollection']> } ) | ( Omit<ComponentSection, 'backgroundImage' | 'componentsCollection' | 'linkedFrom'> & { backgroundImage?: Maybe<_RefType['Asset']>, componentsCollection?: Maybe<_RefType['ComponentSectionComponentsCollection']>, linkedFrom?: Maybe<_RefType['ComponentSectionLinkingCollections']> } ) | ( Omit<ComponentSeo, 'linkedFrom' | 'openGraphImage'> & { linkedFrom?: Maybe<_RefType['ComponentSeoLinkingCollections']>, openGraphImage?: Maybe<_RefType['Asset']> } ) | ( Omit<ComponentService, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentServiceLinkingCollections']> } ) | ( Omit<ComponentServiceOverview, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentServiceOverviewLinkingCollections']> } ) | ( Omit<ComponentStep, 'icon' | 'linkedFrom'> & { icon?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentStepLinkingCollections']> } ) | ( Omit<ComponentTestimonial, 'clientImage' | 'linkedFrom'> & { clientImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['ComponentTestimonialLinkingCollections']> } ) | ( Omit<PageBase, 'callToAction' | 'componentSectionCollection' | 'content' | 'featuredImage' | 'linkedFrom' | 'seo'> & { callToAction?: Maybe<_RefType['ComponentCta']>, componentSectionCollection?: Maybe<_RefType['PageBaseComponentSectionCollection']>, content?: Maybe<_RefType['PageBaseContent']>, featuredImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['PageBaseLinkingCollections']>, seo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageBlogPost, 'author' | 'callToAction' | 'content' | 'featuredImage' | 'linkedFrom' | 'relatedPostsCollection' | 'seo'> & { author?: Maybe<_RefType['ComponentAuthor']>, callToAction?: Maybe<_RefType['ComponentCta']>, content?: Maybe<_RefType['PageBlogPostContent']>, featuredImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['PageBlogPostLinkingCollections']>, relatedPostsCollection?: Maybe<_RefType['PageBlogPostRelatedPostsCollection']>, seo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageHome, 'cta' | 'featuresCollection' | 'hero' | 'linkedFrom' | 'process' | 'seo'> & { cta?: Maybe<_RefType['ComponentCta']>, featuresCollection?: Maybe<_RefType['PageHomeFeaturesCollection']>, hero?: Maybe<_RefType['ComponentHero']>, linkedFrom?: Maybe<_RefType['PageHomeLinkingCollections']>, process?: Maybe<_RefType['ComponentProcess']>, seo?: Maybe<_RefType['ComponentSeo']> } ) | ( Omit<PageService, 'cta' | 'faqsCollection' | 'featuredImage' | 'linkedFrom' | 'seo' | 'serviceOverview' | 'testimonialsCollection'> & { cta?: Maybe<_RefType['ComponentCta']>, faqsCollection?: Maybe<_RefType['PageServiceFaqsCollection']>, featuredImage?: Maybe<_RefType['Asset']>, linkedFrom?: Maybe<_RefType['PageServiceLinkingCollections']>, seo?: Maybe<_RefType['ComponentSeo']>, serviceOverview?: Maybe<_RefType['ComponentServiceOverview']>, testimonialsCollection?: Maybe<_RefType['PageServiceTestimonialsCollection']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AppSettings: ResolverTypeWrapper<Omit<AppSettings, 'footerNavigationCollection' | 'headerNavigationMenu' | 'linkedFrom' | 'seo'> & { footerNavigationCollection?: Maybe<ResolversTypes['AppSettingsFooterNavigationCollection']>, headerNavigationMenu?: Maybe<ResolversTypes['Entry']>, linkedFrom?: Maybe<ResolversTypes['AppSettingsLinkingCollections']>, seo?: Maybe<ResolversTypes['ComponentSeo']> }>;
  AppSettingsCollection: ResolverTypeWrapper<Omit<AppSettingsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['AppSettings']>> }>;
  AppSettingsFilter: AppSettingsFilter;
  AppSettingsFooterNavigationCollection: ResolverTypeWrapper<Omit<AppSettingsFooterNavigationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentNavigation']>> }>;
  AppSettingsFooterNavigationCollectionOrder: AppSettingsFooterNavigationCollectionOrder;
  AppSettingsLinkingCollections: ResolverTypeWrapper<Omit<AppSettingsLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  AppSettingsOrder: AppSettingsOrder;
  Asset: ResolverTypeWrapper<Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['AssetLinkingCollections']> }>;
  AssetCollection: ResolverTypeWrapper<Omit<AssetCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Asset']>> }>;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: ResolverTypeWrapper<Omit<AssetLinkingCollections, 'componentAuthorCollection' | 'componentCtaCollection' | 'componentFeatureCollection' | 'componentHeroCollection' | 'componentImageGalleryCollection' | 'componentLinkCollection' | 'componentSectionCollection' | 'componentSeoCollection' | 'componentServiceCollection' | 'componentServiceOverviewCollection' | 'componentStepCollection' | 'componentTestimonialCollection' | 'entryCollection' | 'pageBaseCollection' | 'pageBlogPostCollection' | 'pageServiceCollection'> & { componentAuthorCollection?: Maybe<ResolversTypes['ComponentAuthorCollection']>, componentCtaCollection?: Maybe<ResolversTypes['ComponentCtaCollection']>, componentFeatureCollection?: Maybe<ResolversTypes['ComponentFeatureCollection']>, componentHeroCollection?: Maybe<ResolversTypes['ComponentHeroCollection']>, componentImageGalleryCollection?: Maybe<ResolversTypes['ComponentImageGalleryCollection']>, componentLinkCollection?: Maybe<ResolversTypes['ComponentLinkCollection']>, componentSectionCollection?: Maybe<ResolversTypes['ComponentSectionCollection']>, componentSeoCollection?: Maybe<ResolversTypes['ComponentSeoCollection']>, componentServiceCollection?: Maybe<ResolversTypes['ComponentServiceCollection']>, componentServiceOverviewCollection?: Maybe<ResolversTypes['ComponentServiceOverviewCollection']>, componentStepCollection?: Maybe<ResolversTypes['ComponentStepCollection']>, componentTestimonialCollection?: Maybe<ResolversTypes['ComponentTestimonialCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBaseCollection?: Maybe<ResolversTypes['PageBaseCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']>, pageServiceCollection?: Maybe<ResolversTypes['PageServiceCollection']> }>;
  AssetOrder: AssetOrder;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ComponentAuthor: ResolverTypeWrapper<Omit<ComponentAuthor, 'linkedFrom' | 'profilePicture' | 'socialLinksCollection'> & { linkedFrom?: Maybe<ResolversTypes['ComponentAuthorLinkingCollections']>, profilePicture?: Maybe<ResolversTypes['Asset']>, socialLinksCollection?: Maybe<ResolversTypes['ComponentAuthorSocialLinksCollection']> }>;
  ComponentAuthorCollection: ResolverTypeWrapper<Omit<ComponentAuthorCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentAuthor']>> }>;
  ComponentAuthorFilter: ComponentAuthorFilter;
  ComponentAuthorLinkingCollections: ResolverTypeWrapper<Omit<ComponentAuthorLinkingCollections, 'entryCollection' | 'pageBlogPostCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']> }>;
  ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder: ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder;
  ComponentAuthorOrder: ComponentAuthorOrder;
  ComponentAuthorSocialLinksCollection: ResolverTypeWrapper<Omit<ComponentAuthorSocialLinksCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentLink']>> }>;
  ComponentAuthorSocialLinksCollectionOrder: ComponentAuthorSocialLinksCollectionOrder;
  ComponentCta: ResolverTypeWrapper<Omit<ComponentCta, 'backgroundImage' | 'linkedFrom'> & { backgroundImage?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['ComponentCtaLinkingCollections']> }>;
  ComponentCtaCollection: ResolverTypeWrapper<Omit<ComponentCtaCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentCta']>> }>;
  ComponentCtaFilter: ComponentCtaFilter;
  ComponentCtaLinkingCollections: ResolverTypeWrapper<Omit<ComponentCtaLinkingCollections, 'componentHeroCollection' | 'componentSectionCollection' | 'entryCollection' | 'pageBaseCollection' | 'pageBlogPostCollection' | 'pageHomeCollection' | 'pageServiceCollection'> & { componentHeroCollection?: Maybe<ResolversTypes['ComponentHeroCollection']>, componentSectionCollection?: Maybe<ResolversTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBaseCollection?: Maybe<ResolversTypes['PageBaseCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']>, pageHomeCollection?: Maybe<ResolversTypes['PageHomeCollection']>, pageServiceCollection?: Maybe<ResolversTypes['PageServiceCollection']> }>;
  ComponentCtaLinkingCollectionsComponentHeroCollectionOrder: ComponentCtaLinkingCollectionsComponentHeroCollectionOrder;
  ComponentCtaLinkingCollectionsComponentSectionCollectionOrder: ComponentCtaLinkingCollectionsComponentSectionCollectionOrder;
  ComponentCtaLinkingCollectionsPageBaseCollectionOrder: ComponentCtaLinkingCollectionsPageBaseCollectionOrder;
  ComponentCtaLinkingCollectionsPageBlogPostCollectionOrder: ComponentCtaLinkingCollectionsPageBlogPostCollectionOrder;
  ComponentCtaLinkingCollectionsPageHomeCollectionOrder: ComponentCtaLinkingCollectionsPageHomeCollectionOrder;
  ComponentCtaLinkingCollectionsPageServiceCollectionOrder: ComponentCtaLinkingCollectionsPageServiceCollectionOrder;
  ComponentCtaOrder: ComponentCtaOrder;
  ComponentFaq: ResolverTypeWrapper<Omit<ComponentFaq, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['ComponentFaqLinkingCollections']> }>;
  ComponentFaqCollection: ResolverTypeWrapper<Omit<ComponentFaqCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentFaq']>> }>;
  ComponentFaqFilter: ComponentFaqFilter;
  ComponentFaqLinkingCollections: ResolverTypeWrapper<Omit<ComponentFaqLinkingCollections, 'entryCollection' | 'pageServiceCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageServiceCollection?: Maybe<ResolversTypes['PageServiceCollection']> }>;
  ComponentFaqLinkingCollectionsPageServiceCollectionOrder: ComponentFaqLinkingCollectionsPageServiceCollectionOrder;
  ComponentFaqOrder: ComponentFaqOrder;
  ComponentFeature: ResolverTypeWrapper<Omit<ComponentFeature, 'icon' | 'linkedFrom'> & { icon?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['ComponentFeatureLinkingCollections']> }>;
  ComponentFeatureCollection: ResolverTypeWrapper<Omit<ComponentFeatureCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentFeature']>> }>;
  ComponentFeatureFilter: ComponentFeatureFilter;
  ComponentFeatureLinkingCollections: ResolverTypeWrapper<Omit<ComponentFeatureLinkingCollections, 'componentSectionCollection' | 'entryCollection' | 'pageHomeCollection'> & { componentSectionCollection?: Maybe<ResolversTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageHomeCollection?: Maybe<ResolversTypes['PageHomeCollection']> }>;
  ComponentFeatureLinkingCollectionsComponentSectionCollectionOrder: ComponentFeatureLinkingCollectionsComponentSectionCollectionOrder;
  ComponentFeatureLinkingCollectionsPageHomeCollectionOrder: ComponentFeatureLinkingCollectionsPageHomeCollectionOrder;
  ComponentFeatureOrder: ComponentFeatureOrder;
  ComponentHero: ResolverTypeWrapper<Omit<ComponentHero, 'backgroundImage' | 'callToAction' | 'linkedFrom'> & { backgroundImage?: Maybe<ResolversTypes['Asset']>, callToAction?: Maybe<ResolversTypes['ComponentCta']>, linkedFrom?: Maybe<ResolversTypes['ComponentHeroLinkingCollections']> }>;
  ComponentHeroCollection: ResolverTypeWrapper<Omit<ComponentHeroCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentHero']>> }>;
  ComponentHeroFilter: ComponentHeroFilter;
  ComponentHeroLinkingCollections: ResolverTypeWrapper<Omit<ComponentHeroLinkingCollections, 'componentSectionCollection' | 'entryCollection' | 'pageHomeCollection'> & { componentSectionCollection?: Maybe<ResolversTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageHomeCollection?: Maybe<ResolversTypes['PageHomeCollection']> }>;
  ComponentHeroLinkingCollectionsComponentSectionCollectionOrder: ComponentHeroLinkingCollectionsComponentSectionCollectionOrder;
  ComponentHeroLinkingCollectionsPageHomeCollectionOrder: ComponentHeroLinkingCollectionsPageHomeCollectionOrder;
  ComponentHeroOrder: ComponentHeroOrder;
  ComponentImageGallery: ResolverTypeWrapper<Omit<ComponentImageGallery, 'imagesCollection' | 'linkedFrom'> & { imagesCollection?: Maybe<ResolversTypes['AssetCollection']>, linkedFrom?: Maybe<ResolversTypes['ComponentImageGalleryLinkingCollections']> }>;
  ComponentImageGalleryCollection: ResolverTypeWrapper<Omit<ComponentImageGalleryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentImageGallery']>> }>;
  ComponentImageGalleryFilter: ComponentImageGalleryFilter;
  ComponentImageGalleryLinkingCollections: ResolverTypeWrapper<Omit<ComponentImageGalleryLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ComponentImageGalleryOrder: ComponentImageGalleryOrder;
  ComponentLink: ResolverTypeWrapper<Omit<ComponentLink, 'image' | 'linkedFrom'> & { image?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['ComponentLinkLinkingCollections']> }>;
  ComponentLinkCollection: ResolverTypeWrapper<Omit<ComponentLinkCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentLink']>> }>;
  ComponentLinkFilter: ComponentLinkFilter;
  ComponentLinkLinkingCollections: ResolverTypeWrapper<Omit<ComponentLinkLinkingCollections, 'componentAuthorCollection' | 'entryCollection'> & { componentAuthorCollection?: Maybe<ResolversTypes['ComponentAuthorCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ComponentLinkLinkingCollectionsComponentAuthorCollectionOrder: ComponentLinkLinkingCollectionsComponentAuthorCollectionOrder;
  ComponentLinkOrder: ComponentLinkOrder;
  ComponentNavigation: ResolverTypeWrapper<Omit<ComponentNavigation, 'itemsCollection' | 'linkedFrom'> & { itemsCollection?: Maybe<ResolversTypes['ComponentNavigationItemsCollection']>, linkedFrom?: Maybe<ResolversTypes['ComponentNavigationLinkingCollections']> }>;
  ComponentNavigationCollection: ResolverTypeWrapper<Omit<ComponentNavigationCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentNavigation']>> }>;
  ComponentNavigationFilter: ComponentNavigationFilter;
  ComponentNavigationItem: ResolverTypeWrapper<Omit<ComponentNavigationItem, 'icon' | 'linkedFrom' | 'submenu'> & { icon?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['ComponentNavigationItemLinkingCollections']>, submenu?: Maybe<ResolversTypes['ComponentNavigation']> }>;
  ComponentNavigationItemCollection: ResolverTypeWrapper<Omit<ComponentNavigationItemCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentNavigationItem']>> }>;
  ComponentNavigationItemFilter: ComponentNavigationItemFilter;
  ComponentNavigationItemLinkingCollections: ResolverTypeWrapper<Omit<ComponentNavigationItemLinkingCollections, 'componentNavigationCollection' | 'entryCollection'> & { componentNavigationCollection?: Maybe<ResolversTypes['ComponentNavigationCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ComponentNavigationItemLinkingCollectionsComponentNavigationCollectionOrder: ComponentNavigationItemLinkingCollectionsComponentNavigationCollectionOrder;
  ComponentNavigationItemOrder: ComponentNavigationItemOrder;
  ComponentNavigationItemsCollection: ResolverTypeWrapper<Omit<ComponentNavigationItemsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentNavigationItem']>> }>;
  ComponentNavigationItemsCollectionOrder: ComponentNavigationItemsCollectionOrder;
  ComponentNavigationLinkingCollections: ResolverTypeWrapper<Omit<ComponentNavigationLinkingCollections, 'appSettingsCollection' | 'entryCollection'> & { appSettingsCollection?: Maybe<ResolversTypes['AppSettingsCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ComponentNavigationLinkingCollectionsAppSettingsCollectionOrder: ComponentNavigationLinkingCollectionsAppSettingsCollectionOrder;
  ComponentNavigationLinkingCollectionsComponentNavigationItemCollectionOrder: ComponentNavigationLinkingCollectionsComponentNavigationItemCollectionOrder;
  ComponentNavigationOrder: ComponentNavigationOrder;
  ComponentProcess: ResolverTypeWrapper<Omit<ComponentProcess, 'linkedFrom' | 'stepsCollection'> & { linkedFrom?: Maybe<ResolversTypes['ComponentProcessLinkingCollections']>, stepsCollection?: Maybe<ResolversTypes['ComponentProcessStepsCollection']> }>;
  ComponentProcessCollection: ResolverTypeWrapper<Omit<ComponentProcessCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentProcess']>> }>;
  ComponentProcessFilter: ComponentProcessFilter;
  ComponentProcessLinkingCollections: ResolverTypeWrapper<Omit<ComponentProcessLinkingCollections, 'entryCollection' | 'pageHomeCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageHomeCollection?: Maybe<ResolversTypes['PageHomeCollection']> }>;
  ComponentProcessLinkingCollectionsPageHomeCollectionOrder: ComponentProcessLinkingCollectionsPageHomeCollectionOrder;
  ComponentProcessOrder: ComponentProcessOrder;
  ComponentProcessStepsCollection: ResolverTypeWrapper<Omit<ComponentProcessStepsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentStep']>> }>;
  ComponentProcessStepsCollectionOrder: ComponentProcessStepsCollectionOrder;
  ComponentSection: ResolverTypeWrapper<Omit<ComponentSection, 'backgroundImage' | 'componentsCollection' | 'linkedFrom'> & { backgroundImage?: Maybe<ResolversTypes['Asset']>, componentsCollection?: Maybe<ResolversTypes['ComponentSectionComponentsCollection']>, linkedFrom?: Maybe<ResolversTypes['ComponentSectionLinkingCollections']> }>;
  ComponentSectionCollection: ResolverTypeWrapper<Omit<ComponentSectionCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentSection']>> }>;
  ComponentSectionComponentsCollection: ResolverTypeWrapper<Omit<ComponentSectionComponentsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentSectionComponentsItem']>> }>;
  ComponentSectionComponentsFilter: ComponentSectionComponentsFilter;
  ComponentSectionComponentsItem: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ComponentSectionComponentsItem']>;
  ComponentSectionFilter: ComponentSectionFilter;
  ComponentSectionLinkingCollections: ResolverTypeWrapper<Omit<ComponentSectionLinkingCollections, 'entryCollection' | 'pageBaseCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBaseCollection?: Maybe<ResolversTypes['PageBaseCollection']> }>;
  ComponentSectionLinkingCollectionsPageBaseCollectionOrder: ComponentSectionLinkingCollectionsPageBaseCollectionOrder;
  ComponentSectionOrder: ComponentSectionOrder;
  ComponentSeo: ResolverTypeWrapper<Omit<ComponentSeo, 'linkedFrom' | 'openGraphImage'> & { linkedFrom?: Maybe<ResolversTypes['ComponentSeoLinkingCollections']>, openGraphImage?: Maybe<ResolversTypes['Asset']> }>;
  ComponentSeoCollection: ResolverTypeWrapper<Omit<ComponentSeoCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentSeo']>> }>;
  ComponentSeoFilter: ComponentSeoFilter;
  ComponentSeoLinkingCollections: ResolverTypeWrapper<Omit<ComponentSeoLinkingCollections, 'appSettingsCollection' | 'entryCollection' | 'pageBaseCollection' | 'pageBlogPostCollection' | 'pageHomeCollection' | 'pageServiceCollection'> & { appSettingsCollection?: Maybe<ResolversTypes['AppSettingsCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBaseCollection?: Maybe<ResolversTypes['PageBaseCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']>, pageHomeCollection?: Maybe<ResolversTypes['PageHomeCollection']>, pageServiceCollection?: Maybe<ResolversTypes['PageServiceCollection']> }>;
  ComponentSeoLinkingCollectionsAppSettingsCollectionOrder: ComponentSeoLinkingCollectionsAppSettingsCollectionOrder;
  ComponentSeoLinkingCollectionsPageBaseCollectionOrder: ComponentSeoLinkingCollectionsPageBaseCollectionOrder;
  ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder: ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder;
  ComponentSeoLinkingCollectionsPageHomeCollectionOrder: ComponentSeoLinkingCollectionsPageHomeCollectionOrder;
  ComponentSeoLinkingCollectionsPageServiceCollectionOrder: ComponentSeoLinkingCollectionsPageServiceCollectionOrder;
  ComponentSeoOrder: ComponentSeoOrder;
  ComponentService: ResolverTypeWrapper<Omit<ComponentService, 'icon' | 'linkedFrom'> & { icon?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['ComponentServiceLinkingCollections']> }>;
  ComponentServiceCollection: ResolverTypeWrapper<Omit<ComponentServiceCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentService']>> }>;
  ComponentServiceFilter: ComponentServiceFilter;
  ComponentServiceLinkingCollections: ResolverTypeWrapper<Omit<ComponentServiceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ComponentServiceOrder: ComponentServiceOrder;
  ComponentServiceOverview: ResolverTypeWrapper<Omit<ComponentServiceOverview, 'icon' | 'linkedFrom'> & { icon?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['ComponentServiceOverviewLinkingCollections']> }>;
  ComponentServiceOverviewCollection: ResolverTypeWrapper<Omit<ComponentServiceOverviewCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentServiceOverview']>> }>;
  ComponentServiceOverviewFilter: ComponentServiceOverviewFilter;
  ComponentServiceOverviewLinkingCollections: ResolverTypeWrapper<Omit<ComponentServiceOverviewLinkingCollections, 'componentSectionCollection' | 'entryCollection' | 'pageServiceCollection'> & { componentSectionCollection?: Maybe<ResolversTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageServiceCollection?: Maybe<ResolversTypes['PageServiceCollection']> }>;
  ComponentServiceOverviewLinkingCollectionsComponentSectionCollectionOrder: ComponentServiceOverviewLinkingCollectionsComponentSectionCollectionOrder;
  ComponentServiceOverviewLinkingCollectionsPageServiceCollectionOrder: ComponentServiceOverviewLinkingCollectionsPageServiceCollectionOrder;
  ComponentServiceOverviewOrder: ComponentServiceOverviewOrder;
  ComponentStep: ResolverTypeWrapper<Omit<ComponentStep, 'icon' | 'linkedFrom'> & { icon?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['ComponentStepLinkingCollections']> }>;
  ComponentStepCollection: ResolverTypeWrapper<Omit<ComponentStepCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentStep']>> }>;
  ComponentStepFilter: ComponentStepFilter;
  ComponentStepLinkingCollections: ResolverTypeWrapper<Omit<ComponentStepLinkingCollections, 'componentProcessCollection' | 'entryCollection'> & { componentProcessCollection?: Maybe<ResolversTypes['ComponentProcessCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ComponentStepLinkingCollectionsComponentProcessCollectionOrder: ComponentStepLinkingCollectionsComponentProcessCollectionOrder;
  ComponentStepOrder: ComponentStepOrder;
  ComponentTestimonial: ResolverTypeWrapper<Omit<ComponentTestimonial, 'clientImage' | 'linkedFrom'> & { clientImage?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['ComponentTestimonialLinkingCollections']> }>;
  ComponentTestimonialCollection: ResolverTypeWrapper<Omit<ComponentTestimonialCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentTestimonial']>> }>;
  ComponentTestimonialFilter: ComponentTestimonialFilter;
  ComponentTestimonialLinkingCollections: ResolverTypeWrapper<Omit<ComponentTestimonialLinkingCollections, 'componentSectionCollection' | 'entryCollection' | 'pageServiceCollection'> & { componentSectionCollection?: Maybe<ResolversTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageServiceCollection?: Maybe<ResolversTypes['PageServiceCollection']> }>;
  ComponentTestimonialLinkingCollectionsComponentSectionCollectionOrder: ComponentTestimonialLinkingCollectionsComponentSectionCollectionOrder;
  ComponentTestimonialLinkingCollectionsPageServiceCollectionOrder: ComponentTestimonialLinkingCollectionsPageServiceCollectionOrder;
  ComponentTestimonialOrder: ComponentTestimonialOrder;
  ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>;
  ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
  ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ResolverTypeWrapper<ContentfulTag>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Dimension: ResolverTypeWrapper<Scalars['Dimension']['output']>;
  Entry: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entry']>;
  EntryCollection: ResolverTypeWrapper<Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Entry']>> }>;
  EntryFilter: EntryFilter;
  EntryOrder: EntryOrder;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  HexColor: ResolverTypeWrapper<Scalars['HexColor']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageFormat: ImageFormat;
  ImageResizeFocus: ImageResizeFocus;
  ImageResizeStrategy: ImageResizeStrategy;
  ImageTransformOptions: ImageTransformOptions;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  PageBase: ResolverTypeWrapper<Omit<PageBase, 'callToAction' | 'componentSectionCollection' | 'content' | 'featuredImage' | 'linkedFrom' | 'seo'> & { callToAction?: Maybe<ResolversTypes['ComponentCta']>, componentSectionCollection?: Maybe<ResolversTypes['PageBaseComponentSectionCollection']>, content?: Maybe<ResolversTypes['PageBaseContent']>, featuredImage?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['PageBaseLinkingCollections']>, seo?: Maybe<ResolversTypes['ComponentSeo']> }>;
  PageBaseCollection: ResolverTypeWrapper<Omit<PageBaseCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageBase']>> }>;
  PageBaseComponentSectionCollection: ResolverTypeWrapper<Omit<PageBaseComponentSectionCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentSection']>> }>;
  PageBaseComponentSectionCollectionOrder: PageBaseComponentSectionCollectionOrder;
  PageBaseContent: ResolverTypeWrapper<Omit<PageBaseContent, 'links'> & { links: ResolversTypes['PageBaseContentLinks'] }>;
  PageBaseContentAssets: ResolverTypeWrapper<Omit<PageBaseContentAssets, 'block' | 'hyperlink'> & { block: Array<Maybe<ResolversTypes['Asset']>>, hyperlink: Array<Maybe<ResolversTypes['Asset']>> }>;
  PageBaseContentEntries: ResolverTypeWrapper<Omit<PageBaseContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  PageBaseContentLinks: ResolverTypeWrapper<Omit<PageBaseContentLinks, 'assets' | 'entries'> & { assets: ResolversTypes['PageBaseContentAssets'], entries: ResolversTypes['PageBaseContentEntries'] }>;
  PageBaseContentResources: ResolverTypeWrapper<PageBaseContentResources>;
  PageBaseContentResourcesBlock: ResolverTypeWrapper<PageBaseContentResourcesBlock>;
  PageBaseContentResourcesHyperlink: ResolverTypeWrapper<PageBaseContentResourcesHyperlink>;
  PageBaseContentResourcesInline: ResolverTypeWrapper<PageBaseContentResourcesInline>;
  PageBaseFilter: PageBaseFilter;
  PageBaseLinkingCollections: ResolverTypeWrapper<Omit<PageBaseLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  PageBaseOrder: PageBaseOrder;
  PageBlogPost: ResolverTypeWrapper<Omit<PageBlogPost, 'author' | 'callToAction' | 'content' | 'featuredImage' | 'linkedFrom' | 'relatedPostsCollection' | 'seo'> & { author?: Maybe<ResolversTypes['ComponentAuthor']>, callToAction?: Maybe<ResolversTypes['ComponentCta']>, content?: Maybe<ResolversTypes['PageBlogPostContent']>, featuredImage?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['PageBlogPostLinkingCollections']>, relatedPostsCollection?: Maybe<ResolversTypes['PageBlogPostRelatedPostsCollection']>, seo?: Maybe<ResolversTypes['ComponentSeo']> }>;
  PageBlogPostCollection: ResolverTypeWrapper<Omit<PageBlogPostCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageBlogPost']>> }>;
  PageBlogPostContent: ResolverTypeWrapper<Omit<PageBlogPostContent, 'links'> & { links: ResolversTypes['PageBlogPostContentLinks'] }>;
  PageBlogPostContentAssets: ResolverTypeWrapper<Omit<PageBlogPostContentAssets, 'block' | 'hyperlink'> & { block: Array<Maybe<ResolversTypes['Asset']>>, hyperlink: Array<Maybe<ResolversTypes['Asset']>> }>;
  PageBlogPostContentEntries: ResolverTypeWrapper<Omit<PageBlogPostContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  PageBlogPostContentLinks: ResolverTypeWrapper<Omit<PageBlogPostContentLinks, 'assets' | 'entries'> & { assets: ResolversTypes['PageBlogPostContentAssets'], entries: ResolversTypes['PageBlogPostContentEntries'] }>;
  PageBlogPostContentResources: ResolverTypeWrapper<PageBlogPostContentResources>;
  PageBlogPostContentResourcesBlock: ResolverTypeWrapper<PageBlogPostContentResourcesBlock>;
  PageBlogPostContentResourcesHyperlink: ResolverTypeWrapper<PageBlogPostContentResourcesHyperlink>;
  PageBlogPostContentResourcesInline: ResolverTypeWrapper<PageBlogPostContentResourcesInline>;
  PageBlogPostFilter: PageBlogPostFilter;
  PageBlogPostLinkingCollections: ResolverTypeWrapper<Omit<PageBlogPostLinkingCollections, 'entryCollection' | 'pageBlogPostCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversTypes['PageBlogPostCollection']> }>;
  PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder: PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder;
  PageBlogPostOrder: PageBlogPostOrder;
  PageBlogPostRelatedPostsCollection: ResolverTypeWrapper<Omit<PageBlogPostRelatedPostsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageBlogPost']>> }>;
  PageBlogPostRelatedPostsCollectionOrder: PageBlogPostRelatedPostsCollectionOrder;
  PageHome: ResolverTypeWrapper<Omit<PageHome, 'cta' | 'featuresCollection' | 'hero' | 'linkedFrom' | 'process' | 'seo'> & { cta?: Maybe<ResolversTypes['ComponentCta']>, featuresCollection?: Maybe<ResolversTypes['PageHomeFeaturesCollection']>, hero?: Maybe<ResolversTypes['ComponentHero']>, linkedFrom?: Maybe<ResolversTypes['PageHomeLinkingCollections']>, process?: Maybe<ResolversTypes['ComponentProcess']>, seo?: Maybe<ResolversTypes['ComponentSeo']> }>;
  PageHomeCollection: ResolverTypeWrapper<Omit<PageHomeCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageHome']>> }>;
  PageHomeFeaturesCollection: ResolverTypeWrapper<Omit<PageHomeFeaturesCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentFeature']>> }>;
  PageHomeFeaturesCollectionOrder: PageHomeFeaturesCollectionOrder;
  PageHomeFilter: PageHomeFilter;
  PageHomeLinkingCollections: ResolverTypeWrapper<Omit<PageHomeLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  PageHomeOrder: PageHomeOrder;
  PageService: ResolverTypeWrapper<Omit<PageService, 'cta' | 'faqsCollection' | 'featuredImage' | 'linkedFrom' | 'seo' | 'serviceOverview' | 'testimonialsCollection'> & { cta?: Maybe<ResolversTypes['ComponentCta']>, faqsCollection?: Maybe<ResolversTypes['PageServiceFaqsCollection']>, featuredImage?: Maybe<ResolversTypes['Asset']>, linkedFrom?: Maybe<ResolversTypes['PageServiceLinkingCollections']>, seo?: Maybe<ResolversTypes['ComponentSeo']>, serviceOverview?: Maybe<ResolversTypes['ComponentServiceOverview']>, testimonialsCollection?: Maybe<ResolversTypes['PageServiceTestimonialsCollection']> }>;
  PageServiceCollection: ResolverTypeWrapper<Omit<PageServiceCollection, 'items'> & { items: Array<Maybe<ResolversTypes['PageService']>> }>;
  PageServiceFaqsCollection: ResolverTypeWrapper<Omit<PageServiceFaqsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentFaq']>> }>;
  PageServiceFaqsCollectionOrder: PageServiceFaqsCollectionOrder;
  PageServiceFilter: PageServiceFilter;
  PageServiceLinkingCollections: ResolverTypeWrapper<Omit<PageServiceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  PageServiceOrder: PageServiceOrder;
  PageServiceTestimonialsCollection: ResolverTypeWrapper<Omit<PageServiceTestimonialsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['ComponentTestimonial']>> }>;
  PageServiceTestimonialsCollectionOrder: PageServiceTestimonialsCollectionOrder;
  Quality: ResolverTypeWrapper<Scalars['Quality']['output']>;
  Query: ResolverTypeWrapper<{}>;
  ResourceLink: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ResourceLink']>;
  ResourceSys: ResolverTypeWrapper<ResourceSys>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Sys: ResolverTypeWrapper<Sys>;
  SysFilter: SysFilter;
  TaxonomyConcept: ResolverTypeWrapper<TaxonomyConcept>;
  _Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['_Node']>;
  cfComponentAuthorNestedFilter: CfComponentAuthorNestedFilter;
  cfComponentCtaNestedFilter: CfComponentCtaNestedFilter;
  cfComponentFaqNestedFilter: CfComponentFaqNestedFilter;
  cfComponentFeatureNestedFilter: CfComponentFeatureNestedFilter;
  cfComponentHeroNestedFilter: CfComponentHeroNestedFilter;
  cfComponentLinkNestedFilter: CfComponentLinkNestedFilter;
  cfComponentNavigationItemNestedFilter: CfComponentNavigationItemNestedFilter;
  cfComponentNavigationNestedFilter: CfComponentNavigationNestedFilter;
  cfComponentProcessNestedFilter: CfComponentProcessNestedFilter;
  cfComponentSectionNestedFilter: CfComponentSectionNestedFilter;
  cfComponentSeoNestedFilter: CfComponentSeoNestedFilter;
  cfComponentServiceOverviewNestedFilter: CfComponentServiceOverviewNestedFilter;
  cfComponentStepNestedFilter: CfComponentStepNestedFilter;
  cfComponentTestimonialNestedFilter: CfComponentTestimonialNestedFilter;
  cfPageBlogPostNestedFilter: CfPageBlogPostNestedFilter;
  cfcomponentsMultiTypeNestedFilter: CfcomponentsMultiTypeNestedFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AppSettings: Omit<AppSettings, 'footerNavigationCollection' | 'headerNavigationMenu' | 'linkedFrom' | 'seo'> & { footerNavigationCollection?: Maybe<ResolversParentTypes['AppSettingsFooterNavigationCollection']>, headerNavigationMenu?: Maybe<ResolversParentTypes['Entry']>, linkedFrom?: Maybe<ResolversParentTypes['AppSettingsLinkingCollections']>, seo?: Maybe<ResolversParentTypes['ComponentSeo']> };
  AppSettingsCollection: Omit<AppSettingsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['AppSettings']>> };
  AppSettingsFilter: AppSettingsFilter;
  AppSettingsFooterNavigationCollection: Omit<AppSettingsFooterNavigationCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentNavigation']>> };
  AppSettingsLinkingCollections: Omit<AppSettingsLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  Asset: Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['AssetLinkingCollections']> };
  AssetCollection: Omit<AssetCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Asset']>> };
  AssetFilter: AssetFilter;
  AssetLinkingCollections: Omit<AssetLinkingCollections, 'componentAuthorCollection' | 'componentCtaCollection' | 'componentFeatureCollection' | 'componentHeroCollection' | 'componentImageGalleryCollection' | 'componentLinkCollection' | 'componentSectionCollection' | 'componentSeoCollection' | 'componentServiceCollection' | 'componentServiceOverviewCollection' | 'componentStepCollection' | 'componentTestimonialCollection' | 'entryCollection' | 'pageBaseCollection' | 'pageBlogPostCollection' | 'pageServiceCollection'> & { componentAuthorCollection?: Maybe<ResolversParentTypes['ComponentAuthorCollection']>, componentCtaCollection?: Maybe<ResolversParentTypes['ComponentCtaCollection']>, componentFeatureCollection?: Maybe<ResolversParentTypes['ComponentFeatureCollection']>, componentHeroCollection?: Maybe<ResolversParentTypes['ComponentHeroCollection']>, componentImageGalleryCollection?: Maybe<ResolversParentTypes['ComponentImageGalleryCollection']>, componentLinkCollection?: Maybe<ResolversParentTypes['ComponentLinkCollection']>, componentSectionCollection?: Maybe<ResolversParentTypes['ComponentSectionCollection']>, componentSeoCollection?: Maybe<ResolversParentTypes['ComponentSeoCollection']>, componentServiceCollection?: Maybe<ResolversParentTypes['ComponentServiceCollection']>, componentServiceOverviewCollection?: Maybe<ResolversParentTypes['ComponentServiceOverviewCollection']>, componentStepCollection?: Maybe<ResolversParentTypes['ComponentStepCollection']>, componentTestimonialCollection?: Maybe<ResolversParentTypes['ComponentTestimonialCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBaseCollection?: Maybe<ResolversParentTypes['PageBaseCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']>, pageServiceCollection?: Maybe<ResolversParentTypes['PageServiceCollection']> };
  Boolean: Scalars['Boolean']['output'];
  ComponentAuthor: Omit<ComponentAuthor, 'linkedFrom' | 'profilePicture' | 'socialLinksCollection'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentAuthorLinkingCollections']>, profilePicture?: Maybe<ResolversParentTypes['Asset']>, socialLinksCollection?: Maybe<ResolversParentTypes['ComponentAuthorSocialLinksCollection']> };
  ComponentAuthorCollection: Omit<ComponentAuthorCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentAuthor']>> };
  ComponentAuthorFilter: ComponentAuthorFilter;
  ComponentAuthorLinkingCollections: Omit<ComponentAuthorLinkingCollections, 'entryCollection' | 'pageBlogPostCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']> };
  ComponentAuthorSocialLinksCollection: Omit<ComponentAuthorSocialLinksCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentLink']>> };
  ComponentCta: Omit<ComponentCta, 'backgroundImage' | 'linkedFrom'> & { backgroundImage?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentCtaLinkingCollections']> };
  ComponentCtaCollection: Omit<ComponentCtaCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentCta']>> };
  ComponentCtaFilter: ComponentCtaFilter;
  ComponentCtaLinkingCollections: Omit<ComponentCtaLinkingCollections, 'componentHeroCollection' | 'componentSectionCollection' | 'entryCollection' | 'pageBaseCollection' | 'pageBlogPostCollection' | 'pageHomeCollection' | 'pageServiceCollection'> & { componentHeroCollection?: Maybe<ResolversParentTypes['ComponentHeroCollection']>, componentSectionCollection?: Maybe<ResolversParentTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBaseCollection?: Maybe<ResolversParentTypes['PageBaseCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']>, pageHomeCollection?: Maybe<ResolversParentTypes['PageHomeCollection']>, pageServiceCollection?: Maybe<ResolversParentTypes['PageServiceCollection']> };
  ComponentFaq: Omit<ComponentFaq, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentFaqLinkingCollections']> };
  ComponentFaqCollection: Omit<ComponentFaqCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentFaq']>> };
  ComponentFaqFilter: ComponentFaqFilter;
  ComponentFaqLinkingCollections: Omit<ComponentFaqLinkingCollections, 'entryCollection' | 'pageServiceCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageServiceCollection?: Maybe<ResolversParentTypes['PageServiceCollection']> };
  ComponentFeature: Omit<ComponentFeature, 'icon' | 'linkedFrom'> & { icon?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentFeatureLinkingCollections']> };
  ComponentFeatureCollection: Omit<ComponentFeatureCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentFeature']>> };
  ComponentFeatureFilter: ComponentFeatureFilter;
  ComponentFeatureLinkingCollections: Omit<ComponentFeatureLinkingCollections, 'componentSectionCollection' | 'entryCollection' | 'pageHomeCollection'> & { componentSectionCollection?: Maybe<ResolversParentTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageHomeCollection?: Maybe<ResolversParentTypes['PageHomeCollection']> };
  ComponentHero: Omit<ComponentHero, 'backgroundImage' | 'callToAction' | 'linkedFrom'> & { backgroundImage?: Maybe<ResolversParentTypes['Asset']>, callToAction?: Maybe<ResolversParentTypes['ComponentCta']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentHeroLinkingCollections']> };
  ComponentHeroCollection: Omit<ComponentHeroCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentHero']>> };
  ComponentHeroFilter: ComponentHeroFilter;
  ComponentHeroLinkingCollections: Omit<ComponentHeroLinkingCollections, 'componentSectionCollection' | 'entryCollection' | 'pageHomeCollection'> & { componentSectionCollection?: Maybe<ResolversParentTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageHomeCollection?: Maybe<ResolversParentTypes['PageHomeCollection']> };
  ComponentImageGallery: Omit<ComponentImageGallery, 'imagesCollection' | 'linkedFrom'> & { imagesCollection?: Maybe<ResolversParentTypes['AssetCollection']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentImageGalleryLinkingCollections']> };
  ComponentImageGalleryCollection: Omit<ComponentImageGalleryCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentImageGallery']>> };
  ComponentImageGalleryFilter: ComponentImageGalleryFilter;
  ComponentImageGalleryLinkingCollections: Omit<ComponentImageGalleryLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ComponentLink: Omit<ComponentLink, 'image' | 'linkedFrom'> & { image?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentLinkLinkingCollections']> };
  ComponentLinkCollection: Omit<ComponentLinkCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentLink']>> };
  ComponentLinkFilter: ComponentLinkFilter;
  ComponentLinkLinkingCollections: Omit<ComponentLinkLinkingCollections, 'componentAuthorCollection' | 'entryCollection'> & { componentAuthorCollection?: Maybe<ResolversParentTypes['ComponentAuthorCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ComponentNavigation: Omit<ComponentNavigation, 'itemsCollection' | 'linkedFrom'> & { itemsCollection?: Maybe<ResolversParentTypes['ComponentNavigationItemsCollection']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentNavigationLinkingCollections']> };
  ComponentNavigationCollection: Omit<ComponentNavigationCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentNavigation']>> };
  ComponentNavigationFilter: ComponentNavigationFilter;
  ComponentNavigationItem: Omit<ComponentNavigationItem, 'icon' | 'linkedFrom' | 'submenu'> & { icon?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentNavigationItemLinkingCollections']>, submenu?: Maybe<ResolversParentTypes['ComponentNavigation']> };
  ComponentNavigationItemCollection: Omit<ComponentNavigationItemCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentNavigationItem']>> };
  ComponentNavigationItemFilter: ComponentNavigationItemFilter;
  ComponentNavigationItemLinkingCollections: Omit<ComponentNavigationItemLinkingCollections, 'componentNavigationCollection' | 'entryCollection'> & { componentNavigationCollection?: Maybe<ResolversParentTypes['ComponentNavigationCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ComponentNavigationItemsCollection: Omit<ComponentNavigationItemsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentNavigationItem']>> };
  ComponentNavigationLinkingCollections: Omit<ComponentNavigationLinkingCollections, 'appSettingsCollection' | 'entryCollection'> & { appSettingsCollection?: Maybe<ResolversParentTypes['AppSettingsCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ComponentProcess: Omit<ComponentProcess, 'linkedFrom' | 'stepsCollection'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentProcessLinkingCollections']>, stepsCollection?: Maybe<ResolversParentTypes['ComponentProcessStepsCollection']> };
  ComponentProcessCollection: Omit<ComponentProcessCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentProcess']>> };
  ComponentProcessFilter: ComponentProcessFilter;
  ComponentProcessLinkingCollections: Omit<ComponentProcessLinkingCollections, 'entryCollection' | 'pageHomeCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageHomeCollection?: Maybe<ResolversParentTypes['PageHomeCollection']> };
  ComponentProcessStepsCollection: Omit<ComponentProcessStepsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentStep']>> };
  ComponentSection: Omit<ComponentSection, 'backgroundImage' | 'componentsCollection' | 'linkedFrom'> & { backgroundImage?: Maybe<ResolversParentTypes['Asset']>, componentsCollection?: Maybe<ResolversParentTypes['ComponentSectionComponentsCollection']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentSectionLinkingCollections']> };
  ComponentSectionCollection: Omit<ComponentSectionCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentSection']>> };
  ComponentSectionComponentsCollection: Omit<ComponentSectionComponentsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentSectionComponentsItem']>> };
  ComponentSectionComponentsFilter: ComponentSectionComponentsFilter;
  ComponentSectionComponentsItem: ResolversUnionTypes<ResolversParentTypes>['ComponentSectionComponentsItem'];
  ComponentSectionFilter: ComponentSectionFilter;
  ComponentSectionLinkingCollections: Omit<ComponentSectionLinkingCollections, 'entryCollection' | 'pageBaseCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBaseCollection?: Maybe<ResolversParentTypes['PageBaseCollection']> };
  ComponentSeo: Omit<ComponentSeo, 'linkedFrom' | 'openGraphImage'> & { linkedFrom?: Maybe<ResolversParentTypes['ComponentSeoLinkingCollections']>, openGraphImage?: Maybe<ResolversParentTypes['Asset']> };
  ComponentSeoCollection: Omit<ComponentSeoCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentSeo']>> };
  ComponentSeoFilter: ComponentSeoFilter;
  ComponentSeoLinkingCollections: Omit<ComponentSeoLinkingCollections, 'appSettingsCollection' | 'entryCollection' | 'pageBaseCollection' | 'pageBlogPostCollection' | 'pageHomeCollection' | 'pageServiceCollection'> & { appSettingsCollection?: Maybe<ResolversParentTypes['AppSettingsCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBaseCollection?: Maybe<ResolversParentTypes['PageBaseCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']>, pageHomeCollection?: Maybe<ResolversParentTypes['PageHomeCollection']>, pageServiceCollection?: Maybe<ResolversParentTypes['PageServiceCollection']> };
  ComponentService: Omit<ComponentService, 'icon' | 'linkedFrom'> & { icon?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentServiceLinkingCollections']> };
  ComponentServiceCollection: Omit<ComponentServiceCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentService']>> };
  ComponentServiceFilter: ComponentServiceFilter;
  ComponentServiceLinkingCollections: Omit<ComponentServiceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ComponentServiceOverview: Omit<ComponentServiceOverview, 'icon' | 'linkedFrom'> & { icon?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentServiceOverviewLinkingCollections']> };
  ComponentServiceOverviewCollection: Omit<ComponentServiceOverviewCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentServiceOverview']>> };
  ComponentServiceOverviewFilter: ComponentServiceOverviewFilter;
  ComponentServiceOverviewLinkingCollections: Omit<ComponentServiceOverviewLinkingCollections, 'componentSectionCollection' | 'entryCollection' | 'pageServiceCollection'> & { componentSectionCollection?: Maybe<ResolversParentTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageServiceCollection?: Maybe<ResolversParentTypes['PageServiceCollection']> };
  ComponentStep: Omit<ComponentStep, 'icon' | 'linkedFrom'> & { icon?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentStepLinkingCollections']> };
  ComponentStepCollection: Omit<ComponentStepCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentStep']>> };
  ComponentStepFilter: ComponentStepFilter;
  ComponentStepLinkingCollections: Omit<ComponentStepLinkingCollections, 'componentProcessCollection' | 'entryCollection'> & { componentProcessCollection?: Maybe<ResolversParentTypes['ComponentProcessCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ComponentTestimonial: Omit<ComponentTestimonial, 'clientImage' | 'linkedFrom'> & { clientImage?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['ComponentTestimonialLinkingCollections']> };
  ComponentTestimonialCollection: Omit<ComponentTestimonialCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentTestimonial']>> };
  ComponentTestimonialFilter: ComponentTestimonialFilter;
  ComponentTestimonialLinkingCollections: Omit<ComponentTestimonialLinkingCollections, 'componentSectionCollection' | 'entryCollection' | 'pageServiceCollection'> & { componentSectionCollection?: Maybe<ResolversParentTypes['ComponentSectionCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageServiceCollection?: Maybe<ResolversParentTypes['PageServiceCollection']> };
  ContentfulMetadata: ContentfulMetadata;
  ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
  ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ContentfulTag;
  DateTime: Scalars['DateTime']['output'];
  Dimension: Scalars['Dimension']['output'];
  Entry: ResolversInterfaceTypes<ResolversParentTypes>['Entry'];
  EntryCollection: Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Entry']>> };
  EntryFilter: EntryFilter;
  Float: Scalars['Float']['output'];
  HexColor: Scalars['HexColor']['output'];
  ID: Scalars['ID']['output'];
  ImageTransformOptions: ImageTransformOptions;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  PageBase: Omit<PageBase, 'callToAction' | 'componentSectionCollection' | 'content' | 'featuredImage' | 'linkedFrom' | 'seo'> & { callToAction?: Maybe<ResolversParentTypes['ComponentCta']>, componentSectionCollection?: Maybe<ResolversParentTypes['PageBaseComponentSectionCollection']>, content?: Maybe<ResolversParentTypes['PageBaseContent']>, featuredImage?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['PageBaseLinkingCollections']>, seo?: Maybe<ResolversParentTypes['ComponentSeo']> };
  PageBaseCollection: Omit<PageBaseCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageBase']>> };
  PageBaseComponentSectionCollection: Omit<PageBaseComponentSectionCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentSection']>> };
  PageBaseContent: Omit<PageBaseContent, 'links'> & { links: ResolversParentTypes['PageBaseContentLinks'] };
  PageBaseContentAssets: Omit<PageBaseContentAssets, 'block' | 'hyperlink'> & { block: Array<Maybe<ResolversParentTypes['Asset']>>, hyperlink: Array<Maybe<ResolversParentTypes['Asset']>> };
  PageBaseContentEntries: Omit<PageBaseContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  PageBaseContentLinks: Omit<PageBaseContentLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['PageBaseContentAssets'], entries: ResolversParentTypes['PageBaseContentEntries'] };
  PageBaseContentResources: PageBaseContentResources;
  PageBaseContentResourcesBlock: PageBaseContentResourcesBlock;
  PageBaseContentResourcesHyperlink: PageBaseContentResourcesHyperlink;
  PageBaseContentResourcesInline: PageBaseContentResourcesInline;
  PageBaseFilter: PageBaseFilter;
  PageBaseLinkingCollections: Omit<PageBaseLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  PageBlogPost: Omit<PageBlogPost, 'author' | 'callToAction' | 'content' | 'featuredImage' | 'linkedFrom' | 'relatedPostsCollection' | 'seo'> & { author?: Maybe<ResolversParentTypes['ComponentAuthor']>, callToAction?: Maybe<ResolversParentTypes['ComponentCta']>, content?: Maybe<ResolversParentTypes['PageBlogPostContent']>, featuredImage?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['PageBlogPostLinkingCollections']>, relatedPostsCollection?: Maybe<ResolversParentTypes['PageBlogPostRelatedPostsCollection']>, seo?: Maybe<ResolversParentTypes['ComponentSeo']> };
  PageBlogPostCollection: Omit<PageBlogPostCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageBlogPost']>> };
  PageBlogPostContent: Omit<PageBlogPostContent, 'links'> & { links: ResolversParentTypes['PageBlogPostContentLinks'] };
  PageBlogPostContentAssets: Omit<PageBlogPostContentAssets, 'block' | 'hyperlink'> & { block: Array<Maybe<ResolversParentTypes['Asset']>>, hyperlink: Array<Maybe<ResolversParentTypes['Asset']>> };
  PageBlogPostContentEntries: Omit<PageBlogPostContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  PageBlogPostContentLinks: Omit<PageBlogPostContentLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['PageBlogPostContentAssets'], entries: ResolversParentTypes['PageBlogPostContentEntries'] };
  PageBlogPostContentResources: PageBlogPostContentResources;
  PageBlogPostContentResourcesBlock: PageBlogPostContentResourcesBlock;
  PageBlogPostContentResourcesHyperlink: PageBlogPostContentResourcesHyperlink;
  PageBlogPostContentResourcesInline: PageBlogPostContentResourcesInline;
  PageBlogPostFilter: PageBlogPostFilter;
  PageBlogPostLinkingCollections: Omit<PageBlogPostLinkingCollections, 'entryCollection' | 'pageBlogPostCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, pageBlogPostCollection?: Maybe<ResolversParentTypes['PageBlogPostCollection']> };
  PageBlogPostRelatedPostsCollection: Omit<PageBlogPostRelatedPostsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageBlogPost']>> };
  PageHome: Omit<PageHome, 'cta' | 'featuresCollection' | 'hero' | 'linkedFrom' | 'process' | 'seo'> & { cta?: Maybe<ResolversParentTypes['ComponentCta']>, featuresCollection?: Maybe<ResolversParentTypes['PageHomeFeaturesCollection']>, hero?: Maybe<ResolversParentTypes['ComponentHero']>, linkedFrom?: Maybe<ResolversParentTypes['PageHomeLinkingCollections']>, process?: Maybe<ResolversParentTypes['ComponentProcess']>, seo?: Maybe<ResolversParentTypes['ComponentSeo']> };
  PageHomeCollection: Omit<PageHomeCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageHome']>> };
  PageHomeFeaturesCollection: Omit<PageHomeFeaturesCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentFeature']>> };
  PageHomeFilter: PageHomeFilter;
  PageHomeLinkingCollections: Omit<PageHomeLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  PageService: Omit<PageService, 'cta' | 'faqsCollection' | 'featuredImage' | 'linkedFrom' | 'seo' | 'serviceOverview' | 'testimonialsCollection'> & { cta?: Maybe<ResolversParentTypes['ComponentCta']>, faqsCollection?: Maybe<ResolversParentTypes['PageServiceFaqsCollection']>, featuredImage?: Maybe<ResolversParentTypes['Asset']>, linkedFrom?: Maybe<ResolversParentTypes['PageServiceLinkingCollections']>, seo?: Maybe<ResolversParentTypes['ComponentSeo']>, serviceOverview?: Maybe<ResolversParentTypes['ComponentServiceOverview']>, testimonialsCollection?: Maybe<ResolversParentTypes['PageServiceTestimonialsCollection']> };
  PageServiceCollection: Omit<PageServiceCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['PageService']>> };
  PageServiceFaqsCollection: Omit<PageServiceFaqsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentFaq']>> };
  PageServiceFilter: PageServiceFilter;
  PageServiceLinkingCollections: Omit<PageServiceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  PageServiceTestimonialsCollection: Omit<PageServiceTestimonialsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['ComponentTestimonial']>> };
  Quality: Scalars['Quality']['output'];
  Query: {};
  ResourceLink: ResolversInterfaceTypes<ResolversParentTypes>['ResourceLink'];
  ResourceSys: ResourceSys;
  String: Scalars['String']['output'];
  Sys: Sys;
  SysFilter: SysFilter;
  TaxonomyConcept: TaxonomyConcept;
  _Node: ResolversInterfaceTypes<ResolversParentTypes>['_Node'];
  cfComponentAuthorNestedFilter: CfComponentAuthorNestedFilter;
  cfComponentCtaNestedFilter: CfComponentCtaNestedFilter;
  cfComponentFaqNestedFilter: CfComponentFaqNestedFilter;
  cfComponentFeatureNestedFilter: CfComponentFeatureNestedFilter;
  cfComponentHeroNestedFilter: CfComponentHeroNestedFilter;
  cfComponentLinkNestedFilter: CfComponentLinkNestedFilter;
  cfComponentNavigationItemNestedFilter: CfComponentNavigationItemNestedFilter;
  cfComponentNavigationNestedFilter: CfComponentNavigationNestedFilter;
  cfComponentProcessNestedFilter: CfComponentProcessNestedFilter;
  cfComponentSectionNestedFilter: CfComponentSectionNestedFilter;
  cfComponentSeoNestedFilter: CfComponentSeoNestedFilter;
  cfComponentServiceOverviewNestedFilter: CfComponentServiceOverviewNestedFilter;
  cfComponentStepNestedFilter: CfComponentStepNestedFilter;
  cfComponentTestimonialNestedFilter: CfComponentTestimonialNestedFilter;
  cfPageBlogPostNestedFilter: CfPageBlogPostNestedFilter;
  cfcomponentsMultiTypeNestedFilter: CfcomponentsMultiTypeNestedFilter;
};

export type ContentSourceMapsDirectiveArgs = { };

export type ContentSourceMapsDirectiveResolver<Result, Parent, ContextType = any, Args = ContentSourceMapsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AppSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppSettings'] = ResolversParentTypes['AppSettings']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  appTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AppSettingsAppTitleArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  copyrightText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AppSettingsCopyrightTextArgs>>;
  footerNavigationCollection?: Resolver<Maybe<ResolversTypes['AppSettingsFooterNavigationCollection']>, ParentType, ContextType, RequireFields<AppSettingsFooterNavigationCollectionArgs, 'limit' | 'skip'>>;
  headerNavigationMenu?: Resolver<Maybe<ResolversTypes['Entry']>, ParentType, ContextType, Partial<AppSettingsHeaderNavigationMenuArgs>>;
  internalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AppSettingsInternalIdArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['AppSettingsLinkingCollections']>, ParentType, ContextType, Partial<AppSettingsLinkedFromArgs>>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<AppSettingsSeoArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppSettingsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppSettingsCollection'] = ResolversParentTypes['AppSettingsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['AppSettings']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppSettingsFooterNavigationCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppSettingsFooterNavigationCollection'] = ResolversParentTypes['AppSettingsFooterNavigationCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentNavigation']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppSettingsLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppSettingsLinkingCollections'] = ResolversParentTypes['AppSettingsLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<AppSettingsLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetContentTypeArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetDescriptionArgs>>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetFileNameArgs>>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetHeightArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['AssetLinkingCollections']>, ParentType, ContextType, Partial<AssetLinkedFromArgs>>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetSizeArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetTitleArgs>>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetUrlArgs>>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetWidthArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetCollection'] = ResolversParentTypes['AssetCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetLinkingCollections'] = ResolversParentTypes['AssetLinkingCollections']> = {
  componentAuthorCollection?: Resolver<Maybe<ResolversTypes['ComponentAuthorCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentAuthorCollectionArgs, 'limit' | 'skip'>>;
  componentCtaCollection?: Resolver<Maybe<ResolversTypes['ComponentCtaCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentCtaCollectionArgs, 'limit' | 'skip'>>;
  componentFeatureCollection?: Resolver<Maybe<ResolversTypes['ComponentFeatureCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentFeatureCollectionArgs, 'limit' | 'skip'>>;
  componentHeroCollection?: Resolver<Maybe<ResolversTypes['ComponentHeroCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentHeroCollectionArgs, 'limit' | 'skip'>>;
  componentImageGalleryCollection?: Resolver<Maybe<ResolversTypes['ComponentImageGalleryCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentImageGalleryCollectionArgs, 'limit' | 'skip'>>;
  componentLinkCollection?: Resolver<Maybe<ResolversTypes['ComponentLinkCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentLinkCollectionArgs, 'limit' | 'skip'>>;
  componentNavigationItemCollection?: Resolver<Maybe<ResolversTypes['ComponentNavigationItemCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentNavigationItemCollectionArgs, 'limit' | 'skip'>>;
  componentSectionCollection?: Resolver<Maybe<ResolversTypes['ComponentSectionCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentSectionCollectionArgs, 'limit' | 'skip'>>;
  componentSeoCollection?: Resolver<Maybe<ResolversTypes['ComponentSeoCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentSeoCollectionArgs, 'limit' | 'skip'>>;
  componentServiceCollection?: Resolver<Maybe<ResolversTypes['ComponentServiceCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentServiceCollectionArgs, 'limit' | 'skip'>>;
  componentServiceOverviewCollection?: Resolver<Maybe<ResolversTypes['ComponentServiceOverviewCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentServiceOverviewCollectionArgs, 'limit' | 'skip'>>;
  componentStepCollection?: Resolver<Maybe<ResolversTypes['ComponentStepCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentStepCollectionArgs, 'limit' | 'skip'>>;
  componentTestimonialCollection?: Resolver<Maybe<ResolversTypes['ComponentTestimonialCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsComponentTestimonialCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBaseCollection?: Resolver<Maybe<ResolversTypes['PageBaseCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsPageBaseCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsPageServiceCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentAuthor'] = ResolversParentTypes['ComponentAuthor']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentAuthorBioArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentAuthorInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentAuthorLinkingCollections']>, ParentType, ContextType, Partial<ComponentAuthorLinkedFromArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentAuthorNameArgs>>;
  profilePicture?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentAuthorProfilePictureArgs>>;
  socialLinksCollection?: Resolver<Maybe<ResolversTypes['ComponentAuthorSocialLinksCollection']>, ParentType, ContextType, RequireFields<ComponentAuthorSocialLinksCollectionArgs, 'limit' | 'skip'>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentAuthorCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentAuthorCollection'] = ResolversParentTypes['ComponentAuthorCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentAuthor']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentAuthorLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentAuthorLinkingCollections'] = ResolversParentTypes['ComponentAuthorLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentAuthorLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<ComponentAuthorLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentAuthorSocialLinksCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentAuthorSocialLinksCollection'] = ResolversParentTypes['ComponentAuthorSocialLinksCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCtaResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCta'] = ResolversParentTypes['ComponentCta']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  backgroundImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentCtaBackgroundImageArgs>>;
  buttonLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCtaButtonLinkArgs>>;
  buttonText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCtaButtonTextArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCtaHeadingArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCtaInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentCtaLinkingCollections']>, ParentType, ContextType, Partial<ComponentCtaLinkedFromArgs>>;
  subheading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentCtaSubheadingArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCtaCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCtaCollection'] = ResolversParentTypes['ComponentCtaCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentCta']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentCtaLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentCtaLinkingCollections'] = ResolversParentTypes['ComponentCtaLinkingCollections']> = {
  componentHeroCollection?: Resolver<Maybe<ResolversTypes['ComponentHeroCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsComponentHeroCollectionArgs, 'limit' | 'skip'>>;
  componentSectionCollection?: Resolver<Maybe<ResolversTypes['ComponentSectionCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsComponentSectionCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBaseCollection?: Resolver<Maybe<ResolversTypes['PageBaseCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsPageBaseCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  pageHomeCollection?: Resolver<Maybe<ResolversTypes['PageHomeCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsPageHomeCollectionArgs, 'limit' | 'skip'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<ComponentCtaLinkingCollectionsPageServiceCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFaqResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentFaq'] = ResolversParentTypes['ComponentFaq']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  answer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFaqAnswerArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFaqInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentFaqLinkingCollections']>, ParentType, ContextType, Partial<ComponentFaqLinkedFromArgs>>;
  question?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFaqQuestionArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFaqCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentFaqCollection'] = ResolversParentTypes['ComponentFaqCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentFaq']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFaqLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentFaqLinkingCollections'] = ResolversParentTypes['ComponentFaqLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentFaqLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<ComponentFaqLinkingCollectionsPageServiceCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentFeature'] = ResolversParentTypes['ComponentFeature']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFeatureDescriptionArgs>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentFeatureIconArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFeatureInternalNameArgs>>;
  linkHref?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFeatureLinkHrefArgs>>;
  linkText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFeatureLinkTextArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentFeatureLinkingCollections']>, ParentType, ContextType, Partial<ComponentFeatureLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentFeatureTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFeatureCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentFeatureCollection'] = ResolversParentTypes['ComponentFeatureCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentFeature']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentFeatureLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentFeatureLinkingCollections'] = ResolversParentTypes['ComponentFeatureLinkingCollections']> = {
  componentSectionCollection?: Resolver<Maybe<ResolversTypes['ComponentSectionCollection']>, ParentType, ContextType, RequireFields<ComponentFeatureLinkingCollectionsComponentSectionCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentFeatureLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageHomeCollection?: Resolver<Maybe<ResolversTypes['PageHomeCollection']>, ParentType, ContextType, RequireFields<ComponentFeatureLinkingCollectionsPageHomeCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentHeroResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentHero'] = ResolversParentTypes['ComponentHero']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  backgroundImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentHeroBackgroundImageArgs>>;
  callToAction?: Resolver<Maybe<ResolversTypes['ComponentCta']>, ParentType, ContextType, Partial<ComponentHeroCallToActionArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  heading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentHeroHeadingArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentHeroInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentHeroLinkingCollections']>, ParentType, ContextType, Partial<ComponentHeroLinkedFromArgs>>;
  subheading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentHeroSubheadingArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentHeroCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentHeroCollection'] = ResolversParentTypes['ComponentHeroCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentHero']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentHeroLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentHeroLinkingCollections'] = ResolversParentTypes['ComponentHeroLinkingCollections']> = {
  componentSectionCollection?: Resolver<Maybe<ResolversTypes['ComponentSectionCollection']>, ParentType, ContextType, RequireFields<ComponentHeroLinkingCollectionsComponentSectionCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentHeroLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageHomeCollection?: Resolver<Maybe<ResolversTypes['PageHomeCollection']>, ParentType, ContextType, RequireFields<ComponentHeroLinkingCollectionsPageHomeCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentImageGalleryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentImageGallery'] = ResolversParentTypes['ComponentImageGallery']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  captions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, Partial<ComponentImageGalleryCaptionsArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  imagesCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<ComponentImageGalleryImagesCollectionArgs, 'limit' | 'skip'>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentImageGalleryInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentImageGalleryLinkingCollections']>, ParentType, ContextType, Partial<ComponentImageGalleryLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentImageGalleryTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentImageGalleryCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentImageGalleryCollection'] = ResolversParentTypes['ComponentImageGalleryCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentImageGallery']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentImageGalleryLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentImageGalleryLinkingCollections'] = ResolversParentTypes['ComponentImageGalleryLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentImageGalleryLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentLink'] = ResolversParentTypes['ComponentLink']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  displayText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentLinkDisplayTextArgs>>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentLinkHrefArgs>>;
  image?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentLinkImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentLinkInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentLinkLinkingCollections']>, ParentType, ContextType, Partial<ComponentLinkLinkedFromArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentLinkNameArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLinkCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentLinkCollection'] = ResolversParentTypes['ComponentLinkCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentLink']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentLinkLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentLinkLinkingCollections'] = ResolversParentTypes['ComponentLinkLinkingCollections']> = {
  componentAuthorCollection?: Resolver<Maybe<ResolversTypes['ComponentAuthorCollection']>, ParentType, ContextType, RequireFields<ComponentLinkLinkingCollectionsComponentAuthorCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentLinkLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentNavigation'] = ResolversParentTypes['ComponentNavigation']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentNavigationInternalNameArgs>>;
  itemsCollection?: Resolver<Maybe<ResolversTypes['ComponentNavigationItemsCollection']>, ParentType, ContextType, RequireFields<ComponentNavigationItemsCollectionArgs, 'limit' | 'skip'>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentNavigationLinkingCollections']>, ParentType, ContextType, Partial<ComponentNavigationLinkedFromArgs>>;
  navigationMenuTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentNavigationNavigationMenuTitleArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentNavigationCollection'] = ResolversParentTypes['ComponentNavigationCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentNavigation']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentNavigationItem'] = ResolversParentTypes['ComponentNavigationItem']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentNavigationItemIconArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentNavigationItemInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentNavigationItemLinkingCollections']>, ParentType, ContextType, Partial<ComponentNavigationItemLinkedFromArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentNavigationItemNameArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentNavigationItemSlugArgs>>;
  submenu?: Resolver<Maybe<ResolversTypes['ComponentNavigation']>, ParentType, ContextType, Partial<ComponentNavigationItemSubmenuArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationItemCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentNavigationItemCollection'] = ResolversParentTypes['ComponentNavigationItemCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentNavigationItem']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationItemLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentNavigationItemLinkingCollections'] = ResolversParentTypes['ComponentNavigationItemLinkingCollections']> = {
  componentNavigationCollection?: Resolver<Maybe<ResolversTypes['ComponentNavigationCollection']>, ParentType, ContextType, RequireFields<ComponentNavigationItemLinkingCollectionsComponentNavigationCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentNavigationItemLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationItemsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentNavigationItemsCollection'] = ResolversParentTypes['ComponentNavigationItemsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentNavigationItem']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentNavigationLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentNavigationLinkingCollections'] = ResolversParentTypes['ComponentNavigationLinkingCollections']> = {
  appSettingsCollection?: Resolver<Maybe<ResolversTypes['AppSettingsCollection']>, ParentType, ContextType, RequireFields<ComponentNavigationLinkingCollectionsAppSettingsCollectionArgs, 'limit' | 'skip'>>;
  componentNavigationItemCollection?: Resolver<Maybe<ResolversTypes['ComponentNavigationItemCollection']>, ParentType, ContextType, RequireFields<ComponentNavigationLinkingCollectionsComponentNavigationItemCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentNavigationLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentProcess'] = ResolversParentTypes['ComponentProcess']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentProcessDescriptionArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentProcessInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentProcessLinkingCollections']>, ParentType, ContextType, Partial<ComponentProcessLinkedFromArgs>>;
  stepsCollection?: Resolver<Maybe<ResolversTypes['ComponentProcessStepsCollection']>, ParentType, ContextType, RequireFields<ComponentProcessStepsCollectionArgs, 'limit' | 'skip'>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentProcessTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentProcessCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentProcessCollection'] = ResolversParentTypes['ComponentProcessCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentProcess']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentProcessLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentProcessLinkingCollections'] = ResolversParentTypes['ComponentProcessLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentProcessLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageHomeCollection?: Resolver<Maybe<ResolversTypes['PageHomeCollection']>, ParentType, ContextType, RequireFields<ComponentProcessLinkingCollectionsPageHomeCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentProcessStepsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentProcessStepsCollection'] = ResolversParentTypes['ComponentProcessStepsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentStep']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSection'] = ResolversParentTypes['ComponentSection']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  backgroundImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentSectionBackgroundImageArgs>>;
  componentsCollection?: Resolver<Maybe<ResolversTypes['ComponentSectionComponentsCollection']>, ParentType, ContextType, RequireFields<ComponentSectionComponentsCollectionArgs, 'limit' | 'skip'>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSectionInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentSectionLinkingCollections']>, ParentType, ContextType, Partial<ComponentSectionLinkedFromArgs>>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSectionSubtitleArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSectionTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSectionCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSectionCollection'] = ResolversParentTypes['ComponentSectionCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentSection']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSectionComponentsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSectionComponentsCollection'] = ResolversParentTypes['ComponentSectionComponentsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentSectionComponentsItem']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSectionComponentsItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSectionComponentsItem'] = ResolversParentTypes['ComponentSectionComponentsItem']> = {
  __resolveType: TypeResolveFn<'ComponentCta' | 'ComponentFeature' | 'ComponentHero' | 'ComponentServiceOverview' | 'ComponentTestimonial', ParentType, ContextType>;
};

export type ComponentSectionLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSectionLinkingCollections'] = ResolversParentTypes['ComponentSectionLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentSectionLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBaseCollection?: Resolver<Maybe<ResolversTypes['PageBaseCollection']>, ParentType, ContextType, RequireFields<ComponentSectionLinkingCollectionsPageBaseCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeo'] = ResolversParentTypes['ComponentSeo']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoCanonicalUrlArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentSeoLinkingCollections']>, ParentType, ContextType, Partial<ComponentSeoLinkedFromArgs>>;
  metaDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoMetaDescriptionArgs>>;
  metaTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoMetaTitleArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoNameArgs>>;
  openGraphDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoOpenGraphDescriptionArgs>>;
  openGraphImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentSeoOpenGraphImageArgs>>;
  openGraphTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoOpenGraphTitleArgs>>;
  robotsFollow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ComponentSeoRobotsFollowArgs>>;
  robotsIndex?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<ComponentSeoRobotsIndexArgs>>;
  schemaJsonLd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoSchemaJsonLdArgs>>;
  schemaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoSchemaTypeArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  twitterCardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoTwitterCardTypeArgs>>;
  twitterDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoTwitterDescriptionArgs>>;
  twitterTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentSeoTwitterTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeoCollection'] = ResolversParentTypes['ComponentSeoCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentSeo']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSeoLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentSeoLinkingCollections'] = ResolversParentTypes['ComponentSeoLinkingCollections']> = {
  appSettingsCollection?: Resolver<Maybe<ResolversTypes['AppSettingsCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsAppSettingsCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBaseCollection?: Resolver<Maybe<ResolversTypes['PageBaseCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageBaseCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  pageHomeCollection?: Resolver<Maybe<ResolversTypes['PageHomeCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageHomeCollectionArgs, 'limit' | 'skip'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<ComponentSeoLinkingCollectionsPageServiceCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentService'] = ResolversParentTypes['ComponentService']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  ctaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceCtaLinkArgs>>;
  ctaText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceCtaTextArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceDescriptionArgs>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentServiceIconArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentServiceLinkingCollections']>, ParentType, ContextType, Partial<ComponentServiceLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentServiceCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentServiceCollection'] = ResolversParentTypes['ComponentServiceCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentService']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentServiceLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentServiceLinkingCollections'] = ResolversParentTypes['ComponentServiceLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentServiceLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentServiceOverviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentServiceOverview'] = ResolversParentTypes['ComponentServiceOverview']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  ctaLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceOverviewCtaLinkArgs>>;
  ctaText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceOverviewCtaTextArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceOverviewDescriptionArgs>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentServiceOverviewIconArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceOverviewInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentServiceOverviewLinkingCollections']>, ParentType, ContextType, Partial<ComponentServiceOverviewLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentServiceOverviewTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentServiceOverviewCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentServiceOverviewCollection'] = ResolversParentTypes['ComponentServiceOverviewCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentServiceOverview']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentServiceOverviewLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentServiceOverviewLinkingCollections'] = ResolversParentTypes['ComponentServiceOverviewLinkingCollections']> = {
  componentSectionCollection?: Resolver<Maybe<ResolversTypes['ComponentSectionCollection']>, ParentType, ContextType, RequireFields<ComponentServiceOverviewLinkingCollectionsComponentSectionCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentServiceOverviewLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<ComponentServiceOverviewLinkingCollectionsPageServiceCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentStepResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentStep'] = ResolversParentTypes['ComponentStep']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentStepDescriptionArgs>>;
  icon?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentStepIconArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentStepInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentStepLinkingCollections']>, ParentType, ContextType, Partial<ComponentStepLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentStepTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentStepCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentStepCollection'] = ResolversParentTypes['ComponentStepCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentStep']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentStepLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentStepLinkingCollections'] = ResolversParentTypes['ComponentStepLinkingCollections']> = {
  componentProcessCollection?: Resolver<Maybe<ResolversTypes['ComponentProcessCollection']>, ParentType, ContextType, RequireFields<ComponentStepLinkingCollectionsComponentProcessCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentStepLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTestimonialResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentTestimonial'] = ResolversParentTypes['ComponentTestimonial']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  clientImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ComponentTestimonialClientImageArgs>>;
  clientName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentTestimonialClientNameArgs>>;
  clientPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentTestimonialClientPositionArgs>>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentTestimonialCompanyArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentTestimonialInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ComponentTestimonialLinkingCollections']>, ParentType, ContextType, Partial<ComponentTestimonialLinkedFromArgs>>;
  quote?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ComponentTestimonialQuoteArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  testimonialDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, Partial<ComponentTestimonialTestimonialDateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTestimonialCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentTestimonialCollection'] = ResolversParentTypes['ComponentTestimonialCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentTestimonial']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentTestimonialLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentTestimonialLinkingCollections'] = ResolversParentTypes['ComponentTestimonialLinkingCollections']> = {
  componentSectionCollection?: Resolver<Maybe<ResolversTypes['ComponentSectionCollection']>, ParentType, ContextType, RequireFields<ComponentTestimonialLinkingCollectionsComponentSectionCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ComponentTestimonialLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<ComponentTestimonialLinkingCollectionsPageServiceCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulMetadata'] = ResolversParentTypes['ContentfulMetadata']> = {
  concepts?: Resolver<Array<Maybe<ResolversTypes['TaxonomyConcept']>>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['ContentfulTag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulTag'] = ResolversParentTypes['ContentfulTag']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DimensionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Dimension'], any> {
  name: 'Dimension';
}

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  __resolveType: TypeResolveFn<'AppSettings' | 'ComponentAuthor' | 'ComponentCta' | 'ComponentFaq' | 'ComponentFeature' | 'ComponentHero' | 'ComponentImageGallery' | 'ComponentLink' | 'ComponentNavigation' | 'ComponentNavigationItem' | 'ComponentProcess' | 'ComponentSection' | 'ComponentSeo' | 'ComponentService' | 'ComponentServiceOverview' | 'ComponentStep' | 'ComponentTestimonial' | 'PageBase' | 'PageBlogPost' | 'PageHome' | 'PageService', ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
};

export type EntryCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCollection'] = ResolversParentTypes['EntryCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexColorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
  name: 'HexColor';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type PageBaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBase'] = ResolversParentTypes['PageBase']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  callToAction?: Resolver<Maybe<ResolversTypes['ComponentCta']>, ParentType, ContextType, Partial<PageBaseCallToActionArgs>>;
  componentSectionCollection?: Resolver<Maybe<ResolversTypes['PageBaseComponentSectionCollection']>, ParentType, ContextType, RequireFields<PageBaseComponentSectionCollectionArgs, 'limit' | 'skip'>>;
  content?: Resolver<Maybe<ResolversTypes['PageBaseContent']>, ParentType, ContextType, Partial<PageBaseContentArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  featuredImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PageBaseFeaturedImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBaseInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageBaseLinkingCollections']>, ParentType, ContextType, Partial<PageBaseLinkedFromArgs>>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageBaseSeoArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBaseSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBaseTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseCollection'] = ResolversParentTypes['PageBaseCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageBase']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseComponentSectionCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseComponentSectionCollection'] = ResolversParentTypes['PageBaseComponentSectionCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentSection']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseContent'] = ResolversParentTypes['PageBaseContent']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['PageBaseContentLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseContentAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseContentAssets'] = ResolversParentTypes['PageBaseContentAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseContentEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseContentEntries'] = ResolversParentTypes['PageBaseContentEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseContentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseContentLinks'] = ResolversParentTypes['PageBaseContentLinks']> = {
  assets?: Resolver<ResolversTypes['PageBaseContentAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['PageBaseContentEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['PageBaseContentResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseContentResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseContentResources'] = ResolversParentTypes['PageBaseContentResources']> = {
  block?: Resolver<Array<ResolversTypes['PageBaseContentResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['PageBaseContentResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['PageBaseContentResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseContentResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseContentResourcesBlock'] = ResolversParentTypes['PageBaseContentResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseContentResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseContentResourcesHyperlink'] = ResolversParentTypes['PageBaseContentResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseContentResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseContentResourcesInline'] = ResolversParentTypes['PageBaseContentResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBaseLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBaseLinkingCollections'] = ResolversParentTypes['PageBaseLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageBaseLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPost'] = ResolversParentTypes['PageBlogPost']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['ComponentAuthor']>, ParentType, ContextType, Partial<PageBlogPostAuthorArgs>>;
  callToAction?: Resolver<Maybe<ResolversTypes['ComponentCta']>, ParentType, ContextType, Partial<PageBlogPostCallToActionArgs>>;
  content?: Resolver<Maybe<ResolversTypes['PageBlogPostContent']>, ParentType, ContextType, Partial<PageBlogPostContentArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostDescriptionArgs>>;
  featured?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<PageBlogPostFeaturedArgs>>;
  featuredImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PageBlogPostFeaturedImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageBlogPostLinkingCollections']>, ParentType, ContextType, Partial<PageBlogPostLinkedFromArgs>>;
  publishedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, Partial<PageBlogPostPublishedDateArgs>>;
  relatedPostsCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostRelatedPostsCollection']>, ParentType, ContextType, RequireFields<PageBlogPostRelatedPostsCollectionArgs, 'limit' | 'skip'>>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageBlogPostSeoArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, Partial<PageBlogPostTagsArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageBlogPostTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostCollection'] = ResolversParentTypes['PageBlogPostCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageBlogPost']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContent'] = ResolversParentTypes['PageBlogPostContent']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['PageBlogPostContentLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentAssets'] = ResolversParentTypes['PageBlogPostContentAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentEntries'] = ResolversParentTypes['PageBlogPostContentEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentLinks'] = ResolversParentTypes['PageBlogPostContentLinks']> = {
  assets?: Resolver<ResolversTypes['PageBlogPostContentAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['PageBlogPostContentEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['PageBlogPostContentResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentResources'] = ResolversParentTypes['PageBlogPostContentResources']> = {
  block?: Resolver<Array<ResolversTypes['PageBlogPostContentResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['PageBlogPostContentResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['PageBlogPostContentResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentResourcesBlock'] = ResolversParentTypes['PageBlogPostContentResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentResourcesHyperlink'] = ResolversParentTypes['PageBlogPostContentResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostContentResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostContentResourcesInline'] = ResolversParentTypes['PageBlogPostContentResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostLinkingCollections'] = ResolversParentTypes['PageBlogPostLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageBlogPostLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<PageBlogPostLinkingCollectionsPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBlogPostRelatedPostsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBlogPostRelatedPostsCollection'] = ResolversParentTypes['PageBlogPostRelatedPostsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageBlogPost']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageHomeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageHome'] = ResolversParentTypes['PageHome']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  cta?: Resolver<Maybe<ResolversTypes['ComponentCta']>, ParentType, ContextType, Partial<PageHomeCtaArgs>>;
  featuresCollection?: Resolver<Maybe<ResolversTypes['PageHomeFeaturesCollection']>, ParentType, ContextType, RequireFields<PageHomeFeaturesCollectionArgs, 'limit' | 'skip'>>;
  hero?: Resolver<Maybe<ResolversTypes['ComponentHero']>, ParentType, ContextType, Partial<PageHomeHeroArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageHomeInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageHomeLinkingCollections']>, ParentType, ContextType, Partial<PageHomeLinkedFromArgs>>;
  process?: Resolver<Maybe<ResolversTypes['ComponentProcess']>, ParentType, ContextType, Partial<PageHomeProcessArgs>>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageHomeSeoArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageHomeSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageHomeCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageHomeCollection'] = ResolversParentTypes['PageHomeCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageHome']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageHomeFeaturesCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageHomeFeaturesCollection'] = ResolversParentTypes['PageHomeFeaturesCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentFeature']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageHomeLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageHomeLinkingCollections'] = ResolversParentTypes['PageHomeLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageHomeLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageService'] = ResolversParentTypes['PageService']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  cta?: Resolver<Maybe<ResolversTypes['ComponentCta']>, ParentType, ContextType, Partial<PageServiceCtaArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageServiceDescriptionArgs>>;
  faqsCollection?: Resolver<Maybe<ResolversTypes['PageServiceFaqsCollection']>, ParentType, ContextType, RequireFields<PageServiceFaqsCollectionArgs, 'limit' | 'skip'>>;
  featuredImage?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<PageServiceFeaturedImageArgs>>;
  internalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageServiceInternalNameArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['PageServiceLinkingCollections']>, ParentType, ContextType, Partial<PageServiceLinkedFromArgs>>;
  seo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, Partial<PageServiceSeoArgs>>;
  serviceOverview?: Resolver<Maybe<ResolversTypes['ComponentServiceOverview']>, ParentType, ContextType, Partial<PageServiceServiceOverviewArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageServiceSlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  testimonialsCollection?: Resolver<Maybe<ResolversTypes['PageServiceTestimonialsCollection']>, ParentType, ContextType, RequireFields<PageServiceTestimonialsCollectionArgs, 'limit' | 'skip'>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<PageServiceTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServiceCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServiceCollection'] = ResolversParentTypes['PageServiceCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['PageService']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServiceFaqsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServiceFaqsCollection'] = ResolversParentTypes['PageServiceFaqsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentFaq']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServiceLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServiceLinkingCollections'] = ResolversParentTypes['PageServiceLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<PageServiceLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageServiceTestimonialsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageServiceTestimonialsCollection'] = ResolversParentTypes['PageServiceTestimonialsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['ComponentTestimonial']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface QualityScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Quality'], any> {
  name: 'Quality';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _node?: Resolver<Maybe<ResolversTypes['_Node']>, ParentType, ContextType, RequireFields<Query_NodeArgs, 'id'>>;
  appSettings?: Resolver<Maybe<ResolversTypes['AppSettings']>, ParentType, ContextType, RequireFields<QueryAppSettingsArgs, 'id'>>;
  appSettingsCollection?: Resolver<Maybe<ResolversTypes['AppSettingsCollection']>, ParentType, ContextType, RequireFields<QueryAppSettingsCollectionArgs, 'limit' | 'skip'>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assetCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>>;
  componentAuthor?: Resolver<Maybe<ResolversTypes['ComponentAuthor']>, ParentType, ContextType, RequireFields<QueryComponentAuthorArgs, 'id'>>;
  componentAuthorCollection?: Resolver<Maybe<ResolversTypes['ComponentAuthorCollection']>, ParentType, ContextType, RequireFields<QueryComponentAuthorCollectionArgs, 'limit' | 'skip'>>;
  componentCta?: Resolver<Maybe<ResolversTypes['ComponentCta']>, ParentType, ContextType, RequireFields<QueryComponentCtaArgs, 'id'>>;
  componentCtaCollection?: Resolver<Maybe<ResolversTypes['ComponentCtaCollection']>, ParentType, ContextType, RequireFields<QueryComponentCtaCollectionArgs, 'limit' | 'skip'>>;
  componentFaq?: Resolver<Maybe<ResolversTypes['ComponentFaq']>, ParentType, ContextType, RequireFields<QueryComponentFaqArgs, 'id'>>;
  componentFaqCollection?: Resolver<Maybe<ResolversTypes['ComponentFaqCollection']>, ParentType, ContextType, RequireFields<QueryComponentFaqCollectionArgs, 'limit' | 'skip'>>;
  componentFeature?: Resolver<Maybe<ResolversTypes['ComponentFeature']>, ParentType, ContextType, RequireFields<QueryComponentFeatureArgs, 'id'>>;
  componentFeatureCollection?: Resolver<Maybe<ResolversTypes['ComponentFeatureCollection']>, ParentType, ContextType, RequireFields<QueryComponentFeatureCollectionArgs, 'limit' | 'skip'>>;
  componentHero?: Resolver<Maybe<ResolversTypes['ComponentHero']>, ParentType, ContextType, RequireFields<QueryComponentHeroArgs, 'id'>>;
  componentHeroCollection?: Resolver<Maybe<ResolversTypes['ComponentHeroCollection']>, ParentType, ContextType, RequireFields<QueryComponentHeroCollectionArgs, 'limit' | 'skip'>>;
  componentImageGallery?: Resolver<Maybe<ResolversTypes['ComponentImageGallery']>, ParentType, ContextType, RequireFields<QueryComponentImageGalleryArgs, 'id'>>;
  componentImageGalleryCollection?: Resolver<Maybe<ResolversTypes['ComponentImageGalleryCollection']>, ParentType, ContextType, RequireFields<QueryComponentImageGalleryCollectionArgs, 'limit' | 'skip'>>;
  componentLink?: Resolver<Maybe<ResolversTypes['ComponentLink']>, ParentType, ContextType, RequireFields<QueryComponentLinkArgs, 'id'>>;
  componentLinkCollection?: Resolver<Maybe<ResolversTypes['ComponentLinkCollection']>, ParentType, ContextType, RequireFields<QueryComponentLinkCollectionArgs, 'limit' | 'skip'>>;
  componentNavigation?: Resolver<Maybe<ResolversTypes['ComponentNavigation']>, ParentType, ContextType, RequireFields<QueryComponentNavigationArgs, 'id'>>;
  componentNavigationCollection?: Resolver<Maybe<ResolversTypes['ComponentNavigationCollection']>, ParentType, ContextType, RequireFields<QueryComponentNavigationCollectionArgs, 'limit' | 'skip'>>;
  componentNavigationItem?: Resolver<Maybe<ResolversTypes['ComponentNavigationItem']>, ParentType, ContextType, RequireFields<QueryComponentNavigationItemArgs, 'id'>>;
  componentNavigationItemCollection?: Resolver<Maybe<ResolversTypes['ComponentNavigationItemCollection']>, ParentType, ContextType, RequireFields<QueryComponentNavigationItemCollectionArgs, 'limit' | 'skip'>>;
  componentProcess?: Resolver<Maybe<ResolversTypes['ComponentProcess']>, ParentType, ContextType, RequireFields<QueryComponentProcessArgs, 'id'>>;
  componentProcessCollection?: Resolver<Maybe<ResolversTypes['ComponentProcessCollection']>, ParentType, ContextType, RequireFields<QueryComponentProcessCollectionArgs, 'limit' | 'skip'>>;
  componentSection?: Resolver<Maybe<ResolversTypes['ComponentSection']>, ParentType, ContextType, RequireFields<QueryComponentSectionArgs, 'id'>>;
  componentSectionCollection?: Resolver<Maybe<ResolversTypes['ComponentSectionCollection']>, ParentType, ContextType, RequireFields<QueryComponentSectionCollectionArgs, 'limit' | 'skip'>>;
  componentSeo?: Resolver<Maybe<ResolversTypes['ComponentSeo']>, ParentType, ContextType, RequireFields<QueryComponentSeoArgs, 'id'>>;
  componentSeoCollection?: Resolver<Maybe<ResolversTypes['ComponentSeoCollection']>, ParentType, ContextType, RequireFields<QueryComponentSeoCollectionArgs, 'limit' | 'skip'>>;
  componentService?: Resolver<Maybe<ResolversTypes['ComponentService']>, ParentType, ContextType, RequireFields<QueryComponentServiceArgs, 'id'>>;
  componentServiceCollection?: Resolver<Maybe<ResolversTypes['ComponentServiceCollection']>, ParentType, ContextType, RequireFields<QueryComponentServiceCollectionArgs, 'limit' | 'skip'>>;
  componentServiceOverview?: Resolver<Maybe<ResolversTypes['ComponentServiceOverview']>, ParentType, ContextType, RequireFields<QueryComponentServiceOverviewArgs, 'id'>>;
  componentServiceOverviewCollection?: Resolver<Maybe<ResolversTypes['ComponentServiceOverviewCollection']>, ParentType, ContextType, RequireFields<QueryComponentServiceOverviewCollectionArgs, 'limit' | 'skip'>>;
  componentStep?: Resolver<Maybe<ResolversTypes['ComponentStep']>, ParentType, ContextType, RequireFields<QueryComponentStepArgs, 'id'>>;
  componentStepCollection?: Resolver<Maybe<ResolversTypes['ComponentStepCollection']>, ParentType, ContextType, RequireFields<QueryComponentStepCollectionArgs, 'limit' | 'skip'>>;
  componentTestimonial?: Resolver<Maybe<ResolversTypes['ComponentTestimonial']>, ParentType, ContextType, RequireFields<QueryComponentTestimonialArgs, 'id'>>;
  componentTestimonialCollection?: Resolver<Maybe<ResolversTypes['ComponentTestimonialCollection']>, ParentType, ContextType, RequireFields<QueryComponentTestimonialCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>>;
  pageBase?: Resolver<Maybe<ResolversTypes['PageBase']>, ParentType, ContextType, RequireFields<QueryPageBaseArgs, 'id'>>;
  pageBaseCollection?: Resolver<Maybe<ResolversTypes['PageBaseCollection']>, ParentType, ContextType, RequireFields<QueryPageBaseCollectionArgs, 'limit' | 'skip'>>;
  pageBlogPost?: Resolver<Maybe<ResolversTypes['PageBlogPost']>, ParentType, ContextType, RequireFields<QueryPageBlogPostArgs, 'id'>>;
  pageBlogPostCollection?: Resolver<Maybe<ResolversTypes['PageBlogPostCollection']>, ParentType, ContextType, RequireFields<QueryPageBlogPostCollectionArgs, 'limit' | 'skip'>>;
  pageHome?: Resolver<Maybe<ResolversTypes['PageHome']>, ParentType, ContextType, RequireFields<QueryPageHomeArgs, 'id'>>;
  pageHomeCollection?: Resolver<Maybe<ResolversTypes['PageHomeCollection']>, ParentType, ContextType, RequireFields<QueryPageHomeCollectionArgs, 'limit' | 'skip'>>;
  pageService?: Resolver<Maybe<ResolversTypes['PageService']>, ParentType, ContextType, RequireFields<QueryPageServiceArgs, 'id'>>;
  pageServiceCollection?: Resolver<Maybe<ResolversTypes['PageServiceCollection']>, ParentType, ContextType, RequireFields<QueryPageServiceCollectionArgs, 'limit' | 'skip'>>;
};

export type ResourceLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceLink'] = ResolversParentTypes['ResourceLink']> = {
  __resolveType: TypeResolveFn<'PageBaseContentResourcesBlock' | 'PageBaseContentResourcesHyperlink' | 'PageBaseContentResourcesInline' | 'PageBlogPostContentResourcesBlock' | 'PageBlogPostContentResourcesHyperlink' | 'PageBlogPostContentResourcesInline', ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
};

export type ResourceSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSys'] = ResolversParentTypes['ResourceSys']> = {
  linkType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SysResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sys'] = ResolversParentTypes['Sys']> = {
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstPublishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spaceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxonomyConceptResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxonomyConcept'] = ResolversParentTypes['TaxonomyConcept']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Node'] = ResolversParentTypes['_Node']> = {
  __resolveType: TypeResolveFn<'AppSettings' | 'ComponentAuthor' | 'ComponentCta' | 'ComponentFaq' | 'ComponentFeature' | 'ComponentHero' | 'ComponentImageGallery' | 'ComponentLink' | 'ComponentNavigation' | 'ComponentNavigationItem' | 'ComponentProcess' | 'ComponentSection' | 'ComponentSeo' | 'ComponentService' | 'ComponentServiceOverview' | 'ComponentStep' | 'ComponentTestimonial' | 'PageBase' | 'PageBlogPost' | 'PageHome' | 'PageService', ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AppSettings?: AppSettingsResolvers<ContextType>;
  AppSettingsCollection?: AppSettingsCollectionResolvers<ContextType>;
  AppSettingsFooterNavigationCollection?: AppSettingsFooterNavigationCollectionResolvers<ContextType>;
  AppSettingsLinkingCollections?: AppSettingsLinkingCollectionsResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetCollection?: AssetCollectionResolvers<ContextType>;
  AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
  ComponentAuthor?: ComponentAuthorResolvers<ContextType>;
  ComponentAuthorCollection?: ComponentAuthorCollectionResolvers<ContextType>;
  ComponentAuthorLinkingCollections?: ComponentAuthorLinkingCollectionsResolvers<ContextType>;
  ComponentAuthorSocialLinksCollection?: ComponentAuthorSocialLinksCollectionResolvers<ContextType>;
  ComponentCta?: ComponentCtaResolvers<ContextType>;
  ComponentCtaCollection?: ComponentCtaCollectionResolvers<ContextType>;
  ComponentCtaLinkingCollections?: ComponentCtaLinkingCollectionsResolvers<ContextType>;
  ComponentFaq?: ComponentFaqResolvers<ContextType>;
  ComponentFaqCollection?: ComponentFaqCollectionResolvers<ContextType>;
  ComponentFaqLinkingCollections?: ComponentFaqLinkingCollectionsResolvers<ContextType>;
  ComponentFeature?: ComponentFeatureResolvers<ContextType>;
  ComponentFeatureCollection?: ComponentFeatureCollectionResolvers<ContextType>;
  ComponentFeatureLinkingCollections?: ComponentFeatureLinkingCollectionsResolvers<ContextType>;
  ComponentHero?: ComponentHeroResolvers<ContextType>;
  ComponentHeroCollection?: ComponentHeroCollectionResolvers<ContextType>;
  ComponentHeroLinkingCollections?: ComponentHeroLinkingCollectionsResolvers<ContextType>;
  ComponentImageGallery?: ComponentImageGalleryResolvers<ContextType>;
  ComponentImageGalleryCollection?: ComponentImageGalleryCollectionResolvers<ContextType>;
  ComponentImageGalleryLinkingCollections?: ComponentImageGalleryLinkingCollectionsResolvers<ContextType>;
  ComponentLink?: ComponentLinkResolvers<ContextType>;
  ComponentLinkCollection?: ComponentLinkCollectionResolvers<ContextType>;
  ComponentLinkLinkingCollections?: ComponentLinkLinkingCollectionsResolvers<ContextType>;
  ComponentNavigation?: ComponentNavigationResolvers<ContextType>;
  ComponentNavigationCollection?: ComponentNavigationCollectionResolvers<ContextType>;
  ComponentNavigationItem?: ComponentNavigationItemResolvers<ContextType>;
  ComponentNavigationItemCollection?: ComponentNavigationItemCollectionResolvers<ContextType>;
  ComponentNavigationItemLinkingCollections?: ComponentNavigationItemLinkingCollectionsResolvers<ContextType>;
  ComponentNavigationItemsCollection?: ComponentNavigationItemsCollectionResolvers<ContextType>;
  ComponentNavigationLinkingCollections?: ComponentNavigationLinkingCollectionsResolvers<ContextType>;
  ComponentProcess?: ComponentProcessResolvers<ContextType>;
  ComponentProcessCollection?: ComponentProcessCollectionResolvers<ContextType>;
  ComponentProcessLinkingCollections?: ComponentProcessLinkingCollectionsResolvers<ContextType>;
  ComponentProcessStepsCollection?: ComponentProcessStepsCollectionResolvers<ContextType>;
  ComponentSection?: ComponentSectionResolvers<ContextType>;
  ComponentSectionCollection?: ComponentSectionCollectionResolvers<ContextType>;
  ComponentSectionComponentsCollection?: ComponentSectionComponentsCollectionResolvers<ContextType>;
  ComponentSectionComponentsItem?: ComponentSectionComponentsItemResolvers<ContextType>;
  ComponentSectionLinkingCollections?: ComponentSectionLinkingCollectionsResolvers<ContextType>;
  ComponentSeo?: ComponentSeoResolvers<ContextType>;
  ComponentSeoCollection?: ComponentSeoCollectionResolvers<ContextType>;
  ComponentSeoLinkingCollections?: ComponentSeoLinkingCollectionsResolvers<ContextType>;
  ComponentService?: ComponentServiceResolvers<ContextType>;
  ComponentServiceCollection?: ComponentServiceCollectionResolvers<ContextType>;
  ComponentServiceLinkingCollections?: ComponentServiceLinkingCollectionsResolvers<ContextType>;
  ComponentServiceOverview?: ComponentServiceOverviewResolvers<ContextType>;
  ComponentServiceOverviewCollection?: ComponentServiceOverviewCollectionResolvers<ContextType>;
  ComponentServiceOverviewLinkingCollections?: ComponentServiceOverviewLinkingCollectionsResolvers<ContextType>;
  ComponentStep?: ComponentStepResolvers<ContextType>;
  ComponentStepCollection?: ComponentStepCollectionResolvers<ContextType>;
  ComponentStepLinkingCollections?: ComponentStepLinkingCollectionsResolvers<ContextType>;
  ComponentTestimonial?: ComponentTestimonialResolvers<ContextType>;
  ComponentTestimonialCollection?: ComponentTestimonialCollectionResolvers<ContextType>;
  ComponentTestimonialLinkingCollections?: ComponentTestimonialLinkingCollectionsResolvers<ContextType>;
  ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>;
  ContentfulTag?: ContentfulTagResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Dimension?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryCollection?: EntryCollectionResolvers<ContextType>;
  HexColor?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  PageBase?: PageBaseResolvers<ContextType>;
  PageBaseCollection?: PageBaseCollectionResolvers<ContextType>;
  PageBaseComponentSectionCollection?: PageBaseComponentSectionCollectionResolvers<ContextType>;
  PageBaseContent?: PageBaseContentResolvers<ContextType>;
  PageBaseContentAssets?: PageBaseContentAssetsResolvers<ContextType>;
  PageBaseContentEntries?: PageBaseContentEntriesResolvers<ContextType>;
  PageBaseContentLinks?: PageBaseContentLinksResolvers<ContextType>;
  PageBaseContentResources?: PageBaseContentResourcesResolvers<ContextType>;
  PageBaseContentResourcesBlock?: PageBaseContentResourcesBlockResolvers<ContextType>;
  PageBaseContentResourcesHyperlink?: PageBaseContentResourcesHyperlinkResolvers<ContextType>;
  PageBaseContentResourcesInline?: PageBaseContentResourcesInlineResolvers<ContextType>;
  PageBaseLinkingCollections?: PageBaseLinkingCollectionsResolvers<ContextType>;
  PageBlogPost?: PageBlogPostResolvers<ContextType>;
  PageBlogPostCollection?: PageBlogPostCollectionResolvers<ContextType>;
  PageBlogPostContent?: PageBlogPostContentResolvers<ContextType>;
  PageBlogPostContentAssets?: PageBlogPostContentAssetsResolvers<ContextType>;
  PageBlogPostContentEntries?: PageBlogPostContentEntriesResolvers<ContextType>;
  PageBlogPostContentLinks?: PageBlogPostContentLinksResolvers<ContextType>;
  PageBlogPostContentResources?: PageBlogPostContentResourcesResolvers<ContextType>;
  PageBlogPostContentResourcesBlock?: PageBlogPostContentResourcesBlockResolvers<ContextType>;
  PageBlogPostContentResourcesHyperlink?: PageBlogPostContentResourcesHyperlinkResolvers<ContextType>;
  PageBlogPostContentResourcesInline?: PageBlogPostContentResourcesInlineResolvers<ContextType>;
  PageBlogPostLinkingCollections?: PageBlogPostLinkingCollectionsResolvers<ContextType>;
  PageBlogPostRelatedPostsCollection?: PageBlogPostRelatedPostsCollectionResolvers<ContextType>;
  PageHome?: PageHomeResolvers<ContextType>;
  PageHomeCollection?: PageHomeCollectionResolvers<ContextType>;
  PageHomeFeaturesCollection?: PageHomeFeaturesCollectionResolvers<ContextType>;
  PageHomeLinkingCollections?: PageHomeLinkingCollectionsResolvers<ContextType>;
  PageService?: PageServiceResolvers<ContextType>;
  PageServiceCollection?: PageServiceCollectionResolvers<ContextType>;
  PageServiceFaqsCollection?: PageServiceFaqsCollectionResolvers<ContextType>;
  PageServiceLinkingCollections?: PageServiceLinkingCollectionsResolvers<ContextType>;
  PageServiceTestimonialsCollection?: PageServiceTestimonialsCollectionResolvers<ContextType>;
  Quality?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  ResourceLink?: ResourceLinkResolvers<ContextType>;
  ResourceSys?: ResourceSysResolvers<ContextType>;
  Sys?: SysResolvers<ContextType>;
  TaxonomyConcept?: TaxonomyConceptResolvers<ContextType>;
  _Node?: _NodeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  contentSourceMaps?: ContentSourceMapsDirectiveResolver<any, any, ContextType>;
};
