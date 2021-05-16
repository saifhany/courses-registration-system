"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayLoad = void 0;
function getPayLoad(payload) {
    return {
        id: payload.id,
        profType: payload.profType,
    };
}
exports.getPayLoad = getPayLoad;
