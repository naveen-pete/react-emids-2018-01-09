const baseApiUrl = 'http://localhost:4001';

export const getPosts = () =>
  fetch(`${baseApiUrl}/posts`).then(response => response.json());

export const getCategories = () =>
  fetch(`${baseApiUrl}/categories`).then(response => response.json());
