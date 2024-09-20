export default function booksReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          description: action.description,
          review: action.review,
          cover: action.cover,
        },
      ];
    default:
      throw Error("Unknown action: " + action.type);
  }
}
