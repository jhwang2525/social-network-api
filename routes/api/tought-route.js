const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// /api/thoughts/user:id
router
    .route('/:userId')
    .post(addThought);

// /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(getThoughtById)
.put(addThought)
.delete(removeThought)

router
// /api/thoughts/:thoughtId/reactions
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction)

module.exports = router;