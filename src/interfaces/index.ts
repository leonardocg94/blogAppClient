export interface IPost {
  id: string;
  title: string;
  // comments: IComment[];
}

export interface IComment {
  id: string;
  content: string;
}

//axios interfaces
export interface IAllPosts {
  posts: IPost[];
}

export interface IAllComments {
  comments: IComment[];
}

export interface ICreatePost {
  postId: string;
}

export interface ICreateComment {
  commentId: string;
}

//forms interfaces
export interface IPostForm {
  title: string;
}

export interface ICommentForm {
  content: string;
}
