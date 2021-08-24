const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Please enter a valid username',
            unique: true,
            trim: true,

        },
        email: {
            type: String,
            required: 'Please enter a valid email',
            unique: true,

        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
// friendCount function
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
})


const User = model('User', UserSchema)

module.exports = User