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
exports.ExerciseGroupsService = void 0;
const common_1 = require("@nestjs/common");
const core_service_service_1 = require("../../core/utils/core-service.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exercise_group_entity_1 = require("./entities/exercise-group.entity");
let ExerciseGroupsService = class ExerciseGroupsService extends core_service_service_1.CoreService {
    constructor(exerciseGroupsRepository) {
        super(exerciseGroupsRepository);
    }
    createWhere(query) {
        const where = {};
        if (query.name)
            where['name'] = (0, typeorm_2.ILike)(`%${query.name}%`);
        if (query.category)
            where['category'] = (0, typeorm_2.ILike)(`%${query.category}%`);
        return where;
    }
};
ExerciseGroupsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(exercise_group_entity_1.ExerciseGroup)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ExerciseGroupsService);
exports.ExerciseGroupsService = ExerciseGroupsService;
//# sourceMappingURL=exercise-groups.service.js.map