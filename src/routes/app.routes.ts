import {Router, Request, Response, NextFunction} from 'express';

import { AuthorsIndex } from './authors/authors.index';
import { BooksIndex } from './books/books.index';

export class AppRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routeIndex();
    }

    private routeIndex(): void {
        this.router.use('/authors', new AuthorsIndex().router);
        this.router.use('/books', new BooksIndex().router);
    }
}