import express, {Request, Response, NextFunction, Express} from 'express';
import * as path from 'path';
import Yaml from 'yamljs';
import swaggerUi from 'swagger-ui-express';

const setUpDocumentations = (app: Express) => {
    const swagger = path.join(__dirname, '..', '..', '..', 'swagger', 'storefront_backend.yaml');
    const document = Yaml.load(swagger);

    app.use('/api-specs', express.static(swagger));
    app.use(
        '/api-docs',
        (req: Request, res: Response, next: NextFunction) => {
            document.host = req.get('host');
            (req as any).swaggerDoc = document;
            next();
        },
        swaggerUi.serve,
        swaggerUi.setup()
    );
};

export default setUpDocumentations;
