import { ParsedRequest } from "../../interfaces/ApiTypes";
import { IGitToolService } from "./GitToolService";
import { postCommit } from "./schemas/ValidateSchemas";

interface IGitToolController {
  postCommit(req: ParsedRequest<postCommit>, res: Response): Promise<void>;
}

export class GitToolController implements IGitToolController {
  constructor(private readonly GitToolService: IGitToolService) {}

  // multipart - multer
  async postCommit(req: ParsedRequest<postCommit>, res: Response) {
    console.log(req.body);
    const { message, file } = req.body;
  }
}
