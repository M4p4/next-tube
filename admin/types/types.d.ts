export type Video = {
  id: number;
  title: string;
  thumbnail: string;
  poster: string;
  hd: boolean;
  duration: number;
  views: number;
  likes: number;
  dislikes: number;
  tags: string[];
  categories: string[];
  actors: string[];
  isUp: boolean;
};

export type VideoMeta = {
  alternativeTitle: string;
  plattform: string;
  originalId: string;
  originalImage: string;
};

export type VideoWithMeta = Video & VideoMeta;

export type TagRole = 'category' | 'tag' | 'actor';

export type KeywordRole = 'title' | 'keyword';

export type Category = {
  id: string;
  name: string;
  videoCount: number;
  image: string;
  originalImage: string;
  role: TagRole;
};

export type Keyword = {
  id: number;
  role: KeywordRole;
  name: string;
  isParsed: boolean;
  message: string;
  videosCount: number;
};

export type Tag = {
  relatedTags: string[];
  isPriority: boolean;
  isParsed: boolean;
} & Category;

export type Query = {
  [x: string]: any;
};

export type TagStateType = 'priority' | 'normal' | null;
export type KeywordStateType = 'parsed' | 'unparsed' | null;

export type Query = {
  [x: string]: any;
};

export type QueryProps = {
  query: Query;
};

export type PanelModals =
  | 'showChangeRoleModal'
  | 'showEditTagsModal'
  | 'showEditVideosModal';

export type VideoIncreaseKey = 'likes' | 'dislikes' | 'views';

export type VideoStatusType = 'up' | 'down' | null;
