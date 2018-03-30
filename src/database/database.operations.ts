import { Model, Document, Schema, Types } from 'mongoose';

export class DatabaseOperations {

    constructor() {
        
    }

    public read(...restArgs: Array<any>): Promise<Document[] | undefined> {
        if(restArgs.length === 1) {
            let model: Model<Document> = restArgs[0];
            return model.find({}).exec();
        } else if(restArgs.length === 2) {
            let model: Model<Document> = restArgs[0];
            let query = restArgs[1];
            return model.find(query).exec();
        } else {
            return Promise.reject(new Error('Invalid or no Arguments passed'));
        }
    }

    public create(...restArgs: Array<any>): Promise<Document | Document[] | undefined> {
        if(restArgs.length === 1) {
            let doc: Document = restArgs[0];
            return doc.save();
        } else if(restArgs.length === 2) {
            let model: Model<Document> = restArgs[0];
            let docs: Document[] = restArgs[1];
            return model.insertMany(docs);
        } else {
            return Promise.reject(new Error('Invalid or no Arguments passed'));
        }
    }

    public update(model: Model<Document>, query: Object, set: Object): Promise<Document | null> {
        return model.findOneAndUpdate(query, set, {new: true}).exec();
    }

    public delete(model: Model<Document>, query: Object): Promise<Document | null> {
        return model.findOneAndRemove(query).exec();
    }
}