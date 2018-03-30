import { Model, Document, Schema, Types } from 'mongoose';
import { Router, Request, Response, NextFunction } from 'express';

import { Author } from '../../models/author.model';
import { Book } from '../../models/book.model';
import { DatabaseOperations } from '../../database/database.operations';

export class AuthorController {
    private database: DatabaseOperations;

    constructor() {
        this.database = new DatabaseOperations();
    }

    public getAll = (req: Request, res: Response, next: NextFunction): void => {
        this.database.read(Author).then((authors: any) => {
            if(authors) {
                res.json({status: true, authors: authors});
            }
        }).catch((err: Error) => {
            res.json({status: false, msg: 'Error occured while retrieving data'});
            console.log(err);
        });
    }

    public getById = (req: Request, res: Response, next: NextFunction) => {
        if(!Types.ObjectId.isValid(req.params.id)) {
            return res.json({status: false, msg: 'Invalid Id'});
        }
        let query = { _id: req.params.id };
        this.database.read(Author, query).then((author: any) => {
            if (author.length < 1) {
                res.json({status: false, msg: 'No author found'})
            } else {
                res.json({status: true, author: author[0]});
            }
        }).catch((err: Error) => {
            res.json({status: false, msg: 'Error occured while retrieving data'});
            console.log(err);
        });
    }

    public saveAuthor = (req: Request, res: Response, next: NextFunction): void => {
        if(req.body.name) {
            let newAuthor: Document = new Author({
                name: req.body.name
            });

            this.database.create(newAuthor).then((author: any) => {
                res.json({status: true, author: author});
            }).catch((err: Error) => {
                res.json({status: false, msg: 'Error occured while saving data'});
                console.log(err);
            });
        }
    }

    public deleteAuthor = (req: Request, res: Response, next: NextFunction) => {
        if(!Types.ObjectId.isValid(req.params.id)) {
            return res.json({status: false, msg: 'Invalid Id'});
        }
        let query: Object = {_id: req.params.id};
        this.database.delete(Author, query).then((author: any) => {
            
            if (!author) {
                res.json({status: false, msg: 'No author found'})
            } else {
                this.database.read(Book, {authorId: author._id}).then((books: any) => {                    
                    if(books.length < 1) {
                        res.json({status: true, author: author, books: books});    
                    } else {                                               
                        let deletedBooks: Document[] = [];
                        let removeBooks = async () => {
                            for(let i = 0; i < books.length; i++) {
                                await this.database.delete(Book, {_id: books[i]._id}).then((book: any) => {
                                    (book) && deletedBooks.push(book);
                                }).catch((err) => {
                                    console.log(err);
                                });                                
                            }                            
                        }
                        removeBooks().then(() => {
                            res.json({status: true, author: author, books: deletedBooks});
                        });
                    }                    
                });                
            }
        }).catch((err: Error) => {
            res.json({status: false, msg: 'Error occured while deleting data'});
            console.log(err);
        });
    }

    public updateAuthor = (req: Request, res: Response, next: NextFunction) => {
        if(!Types.ObjectId.isValid(req.params.id)) {
            return res.json({status: false, msg: 'Invalid Id'});
        }
        let query: Object = {_id: req.params.id};
        let set: Object = {
            $set: { name: req.body.name }
        };
        this.database.update(Author, query, set).then((author: any) => {
            if (!author) {
                res.json({status: false, msg: 'No author found'})
            } else {
                res.json({status: true, author: author});
            }
        }).catch((err: Error) => {
            res.json({status: false, msg: 'Error occured while updating data'});
            console.log(err);
        });
    }

}