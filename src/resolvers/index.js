const {Query} = require('./Query')
// const { Subscription } = require('./Subscription')
const {auth} = require('./Mutation/auth')
const {budget} = require('./Mutation/budget')
const {category} = require('./Mutation/category')
const {AuthPayload} = require('./AuthPayload')

module.exports = {
    Query,
    Mutation: {
        ...auth,
        ...budget,
        ...category,
    },
    // Subscription,
    AuthPayload,
}
