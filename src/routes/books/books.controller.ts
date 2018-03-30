import { Model, Document, Schema, Types } from 'mongoose';
import {Router, Request, Response, NextFunction} from 'express';

import { Book } from '../../models/book.model';
import { Author } from '../../models/author.model';
import { DatabaseOperations } from '../../database/database.operations';

export class BooksController {
    private database: DatabaseOperations;

    constructor() {
        this.database = new DatabaseOperations();
    }

    public getAll = (req: Request, res: Response, next: NextFunction): void => {
        this.database.read(Book).then((books: any) => {
            if (!books) {
                res.json({status: false, msg: 'No books found'})
            } else {
                res.json({status: true, books: books});
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
        this.database.read(Book, query).then((book: any) => {
            if (!book) {
                res.json({status: false, msg: 'No book found'})
            } else {
                res.json({status: true, book: book[0]});
            }
        }).catch((err: Error) => {
            res.json({status: false, msg: 'Error occured while retrieving data'});
            console.log(err);
        });
    }

    public getByAuthId = (req: Request, res: Response, next: NextFunction) => {
        if(!Types.ObjectId.isValid(req.params.authId)) {
            return res.json({status: false, msg: 'Invalid Id'});
        }
        let query = { authorId: req.params.authId };
        this.database.read(Book, query).then((book: any) => {            
            if (book.length < 1) {
                res.json({status: false, msg: 'No books found'})
            } else {
                this.database.read(Author, {_id: query.authorId}).then((author: any) => {
                    if(author.length > 0) {
                        res.json({status: true, author: author[0].name, books: book});
                    }                    
                }).catch((err) => {
                    res.json({status: false, msg: 'Error occured while retrieving data'});
                    console.log(err);
                });
            }
        }).catch((err: Error) => {
            res.json({status: false, msg: 'Error occured while retrieving data'});
            console.log(err);
        });
    }

    public saveBook = (req: Request, res: Response, next: NextFunction): void => {
        if(req.body.name && req.body.authorId) {
            let query: Object = { _id: req.body.authorId }
            this.database.read(Author, query).then((author: any) => {
                if(author.length > 0) {
                    console.log();
                    let newBook: Document = new Book({
                        name: req.body.name,
                        authorId: req.body.authorId
                    });
        
                    this.database.create(newBook).then((book: any) => {
                        res.json({status: true, book: book, author: author[0].name});
                    }).catch((err: Error) => {
                        res.json({status: false, msg: 'Error occured while saving data'});
                        console.log(err);
                    });
                } else {
                    res.json({status: false, msg: 'No author found'});
                }
            }).catch((err) => {
                res.json({status: false, msg: 'Error occured while retrieving data'});
                console.log(err);
            });
            
        }
    }

    public deleteBook = (req: Request, res: Response, next: NextFunction) => {
        if(!Types.ObjectId.isValid(req.params.id)) {
            return res.json({status: false, msg: 'Invalid Id'});
        }
        let query: Object = {_id: req.params.id};
        this.database.delete(Book, query).then((book: any) => {
            if (!book) {
                res.json({status: false, msg: 'No book found'})
            } else {
                res.json({status: true, book: book});
            }
        }).catch((err: Error) => {
            res.json({status: false, msg: 'Error occured while deleting data'});
            console.log(err);
        });
    }

    public updateBook = (req: Request, res: Response, next: NextFunction) => {
        if(!Types.ObjectId.isValid(req.params.id)) {
            return res.json({status: false, msg: 'Invalid Id'});
        }
        let query: Object = {_id: req.params.id};
        let set: any = {
            $set: {}
        };
        (req.body.name) && (set.$set.name = req.body.name);
        (Types.ObjectId.isValid(req.body.authorId)) && (set.$set.authorId = req.body.authorId);
        this.database.update(Book, query, set).then((book: any) => {
            if (!book) {
                res.json({status: false, msg: 'No book found'})
            } else {
                this.database.read(Author, {_id: book.authorId}).then((author: any) => {
                    if(author.length > 0) {
                        res.json({status: true, author: author[0].name, book: book});
                    }                    
                }).catch((err) => {
                    res.json({status: false, msg: 'Error occured while retrieving data'});
                    console.log(err);
                });                  
            }
        }).catch((err: Error) => {
            res.json({status: false, msg: 'Error occured while updating data'});
            console.log(err);
        });
    }

}