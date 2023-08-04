export enum SuccessMessages {
  CreatePost = 'Post created successfully.',
  UpdatePost = 'Post updated successfully.',
  DeletePost = 'Post deleted successfully.',
}

export enum ErrorMessages {
  GetBlogNotFound = 'Blog not found for the provided ID.',
  GetBlogsNotFound = 'Blogs not found for the provided category.',
  DeleteBlogNotExist = "Blog was not deleted because it doesn't exist.",
  UpdatePostInvalidData = 'At least one field must be provided for updating the post.',
  UpdatePostNotExist = "Post doesn't exist.",
}
