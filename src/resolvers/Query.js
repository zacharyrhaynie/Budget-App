const {getUserId} = require('../utils')

const Query = {
    budget(parent, {id}, ctx, info) {
        return ctx.db.query.budget({where: {id}}, info)
    },
    category(parent, {id}, ctx, info) {
        return ctx.db.query.category({where: {id}}, info)
    },
    expense(parent, {id}, ctx, info) {
        return ctx.db.query.expense({where: {id}}, info)
    },

    me(parent, args, ctx, info) {
        const id = getUserId(ctx)
        return ctx.db.query.user({where: {id}}, info)
    },
}

module.exports = {Query}
