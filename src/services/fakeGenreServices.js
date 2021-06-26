export const genres = [
         { _id: "5b21ca3eeb7f6fbccd471818", name: "Tivi" },
         { _id: "5b21ca3eeb7f6fbccd471814", name: "Phone" },
         { _id: "5b21ca3eeb7f6fbccd471820", name: "Laptop" },
         { _id: "5b21ca3eeb7f6fbccd471821", name: "Computer" },
       ];
 export function getGenres() {
     return genres.filter(g => g);
}
       
// export const genres = [
//     { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
//     { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
//     { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
//   ];
  
