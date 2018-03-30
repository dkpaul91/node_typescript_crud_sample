import {Router, Request, Response, NextFunction} from 'express';

import { BooksController } from './books.controller';

export class BooksIndex {
    public router: Router;
    private booksController: BooksController;

    constructor() {
        this.router = Router();
        this.booksController = new BooksController();
        this.routeIndex();
    }

    private routeIndex(): void {
        this.router.get('/', this.booksController.getAll);
        this.router.post('/', this.booksController.saveBook);
        this.router.get('/:id', this.booksController.getById);
        this.router.delete('/:id', this.booksController.deleteBook);
        this.router.patch('/:id', this.booksController.updateBook);
        this.router.get('/author/:authId', this.booksController.getByAuthId);
    }
}