import { ApiExpress } from "./infra/api/express/api.express";
import { port } from "./utils/environment";
import { Validator } from "./helpers/Validator";
import { Crypto } from "./helpers/Crypto";
import { CreateUserUsecase } from "./usecases/user/create-user.usecase";
import { UserRepository } from "./infra/repositories/user.repository";
import { LinkRepository } from "./infra/repositories/link.repository";
import { prisma } from "./utils/prisma";
import { RegisterRoute } from "./infra/api/routes/user/signup.route";
import { GetUserByEmailUsecase } from "./usecases/user/get-user-by-email.usecase";
import { LoginRoute } from "./infra/api/routes/user/login.route";
import { CreateLinkUseCase } from "./usecases/link/create-link.usecase";
import { CreateLinkRoute } from "./infra/api/routes/link/create-link.route";
import { GetUserByIdUsecase } from "./usecases/user/get-user-by-id.usecase";
import { GetLinkByIdUseCase } from "./usecases/link/get-link-by-id.usecase";
import { DeleteLinkRoute } from "./infra/api/routes/link/delete-link.route";
import { DeleteLinkUseCase } from "./usecases/link/delete-link.usecase";
import { UpdateLinkRoute } from "./infra/api/routes/link/update-link.route";
import { UpdateLinkUseCase } from "./usecases/link/update-link.usecase";
import { GetAllLinksUseCase } from "./usecases/link/get-all-links.usecase";
import { GetAllLinksRoute } from "./infra/api/routes/link/get-all-links.route";
import { VisitLinkUseCase } from "./usecases/link/visit-link.usecase";
import { VisitLinkRoute } from "./infra/api/routes/link/visit-link.route";
import { GetRankingUseCase } from "./usecases/link/ranking.usecase";
import { GetLinkRankingRoute } from "./infra/api/routes/link/get-link-ranking.route";
import { GetLinkByShortenUseCase } from "./usecases/link/get-link-by-shorten.usecase";

(() => {
    const validator = Validator.create();
    const crypto = Crypto.create();

    const userRepository = UserRepository.create(prisma);
    const linkRepository = LinkRepository.create(prisma);

    const createUserUseCase = CreateUserUsecase.create(userRepository);
    const getUserByIdUseCase = GetUserByIdUsecase.create(userRepository);
    const getUserByEmailUserCase = GetUserByEmailUsecase.create(userRepository);

    const createLinkUseCase = CreateLinkUseCase.create(linkRepository);
    const getLinkByIdUseCase = GetLinkByIdUseCase.create(linkRepository);
    const getLinkByShortenUseCase = GetLinkByShortenUseCase.create(linkRepository);
    const getAllLinksUseCase = GetAllLinksUseCase.create(linkRepository);
    const deleteLinkUseCase = DeleteLinkUseCase.create(linkRepository);
    const updateLinkUseCase = UpdateLinkUseCase.create(linkRepository);
    const visitLinkUseCase = VisitLinkUseCase.create(linkRepository);
    const rankingUseCase = GetRankingUseCase.create(linkRepository);

    const registerRoute = RegisterRoute.create(createUserUseCase, crypto, validator); 
    const loginRoute = LoginRoute.create(getUserByEmailUserCase, crypto, validator);

    const createLinkRoute = CreateLinkRoute.create(createLinkUseCase, getUserByIdUseCase, crypto, validator);
    const deleteLinkRoute = DeleteLinkRoute.create(getLinkByIdUseCase, deleteLinkUseCase, getUserByIdUseCase, crypto);
    const updateLinkRoute = UpdateLinkRoute.create(getLinkByIdUseCase, updateLinkUseCase, getUserByIdUseCase, crypto, validator);
    const getAllLinksRoute = GetAllLinksRoute.create(getAllLinksUseCase);
    const visitLinkRoute = VisitLinkRoute.create(getLinkByShortenUseCase, visitLinkUseCase);
    const getLinkRankingRoute = GetLinkRankingRoute.create(rankingUseCase);

    const api = ApiExpress.create([
        registerRoute, 
        loginRoute, 
        getAllLinksRoute,
        createLinkRoute, 
        deleteLinkRoute, 
        updateLinkRoute,
        visitLinkRoute,
        getLinkRankingRoute
    ]);
    api.start(port);
})();