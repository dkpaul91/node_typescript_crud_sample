import * as mongoose from 'mongoose';

class BookModel {
    public BookSchema: mongoose.Schema;

    constructor() {
        this.BookSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            authorId: {
                type: String,
                required: true
            }
        });
    }
}

export const Book = mongoose.model('Book', new BookModel().BookSchema);