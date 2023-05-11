"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingSheetService = void 0;
const common_1 = require("@nestjs/common");
const training_sheet_entity_1 = require("./entities/training-sheet.entity");
const typeorm_1 = require("@nestjs/typeorm");
const core_service_service_1 = require("../../core/utils/core-service.service");
const typeorm_2 = require("typeorm");
const slugify_1 = require("slugify");
const typeorm_utils_1 = require("../../core/functions/typeorm.utils");
let TrainingSheetService = class TrainingSheetService extends core_service_service_1.CoreService {
    constructor(trainingSheetRepository) {
        super(trainingSheetRepository);
    }
    createWhere(query) {
        const where = {};
        if (query.name)
            where['name'] = (0, typeorm_2.ILike)(`%${query.name}%`);
        if (query.publicName)
            where['publicName'] = (0, typeorm_2.ILike)(`%${query.publicName}%`);
        if (query.slug)
            where['slug'] = `${query.slug}`;
        return where;
    }
    async create(createDto) {
        try {
            const data = Object.assign(Object.assign({}, createDto), { slug: (0, slugify_1.default)(createDto.name, { lower: true }) });
            const newItem = this.repository.create(data);
            const create$ = await this.repository.save(newItem);
            const slug = (0, slugify_1.default)(`${create$.id}-${create$.name}`, {
                lower: true,
            });
            await this.repository.update(create$.id, {
                slug,
            });
            return Object.assign(Object.assign({}, create$), { slug });
        }
        catch (error) {
            throw (0, typeorm_utils_1.translateTypeORMError)(error);
        }
    }
};
TrainingSheetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(training_sheet_entity_1.TrainingSheet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TrainingSheetService);
exports.TrainingSheetService = TrainingSheetService;
//# sourceMappingURL=training-sheet.service.js.map