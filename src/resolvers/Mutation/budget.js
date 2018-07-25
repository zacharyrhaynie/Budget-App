const {getUserId} = require('../../utils')

const budget = {
    async beginBudget(parent, {title, budgetedAmount}, ctx, info) {
        const userId = getUserId(ctx)
        return ctx.db.mutation.createBudget(
            {
                data: {
                    title,
                    budgetedAmount,
                    author: {
                        connect: {id: userId},
                    },
                },
            },
            info
        )
    },

    async deleteBudget(parent, {id}, ctx, info) {
        const userId = getUserId(ctx)
        const budgetExists = await ctx.db.exists.Budget({
            id,
            author: {id: userId},
        })
        if (!budgetExists) {
            throw new Error(`Post not found or you're not the author`)
        }

        return ctx.db.mutation.deleteBudget({where: {id}})
    },
}

module.exports = {budget}
