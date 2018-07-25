const {getUserId} = require('../../utils')

const category = {
    async startCategory(parent, {title, budgetedAmount}, ctx, info) {
        const userId = getUserId(ctx)
        return ctx.db.mutation.createCategory(
            {
                data: {
                    categoryName,
                    budgAmountPerCat,
                    author: {
                        connect: {id: userId},
                    },
                },
            },
            info
        )
    },

    async deleteCategory(parent, {id}, ctx, info) {
        const userId = getUserId(ctx)
        const categoryExists = await ctx.db.exists.Category({
            id,
            author: {id: userId},
        })
        if (!categoryExists) {
            throw new Error(`Post not found or you're not the author`)
        }

        return ctx.db.mutation.deleteCategory({where: {id}})
    },
}

module.exports = {category}
