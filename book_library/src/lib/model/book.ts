import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
 name : "string",
 writter : "string",
 year : "string"  ,
 language  :"string",
 num_of_copies : "string",
});

export const Book = mongoose.models.books || mongoose.model("books", bookSchema);

//schema = structure of table elements
//model = table