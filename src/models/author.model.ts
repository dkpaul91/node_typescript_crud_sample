import * as mongoose from 'mongoose';

class AuthorModel {
    public AuthorSchema: mongoose.Schema;

    constructor() {
        this.AuthorSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            }
        });
    }
}

export const Author = mongoose.model('Author', new AuthorModel().AuthorSchema);