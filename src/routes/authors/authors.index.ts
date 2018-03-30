import {Router, Request, Response, NextFunction} from 'express';

import { AuthorController } from './authors.controller';

export class AuthorsIndex {
    public router: Router;
    private authorController: AuthorController

    constructor() {
        this.router = Router();
        this.authorController = new AuthorController();
        this.routeIndex();
    }

    private routeIndex(): void {
        this.router.get('/', this.authorController.getAll);
        this.router.post('/', this.authorController.saveAuthor);
        this.router.get('/:id', this.authorController.getById);
        this.router.delete('/:id', this.authorController.deleteAuthor);
        this.router.patch('/:id', this.authorController.updateAuthor);
    }
}