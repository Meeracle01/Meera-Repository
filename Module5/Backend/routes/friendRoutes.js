const express = require("express");
const router = express.Router();
const friends = [
    { id: 1, name: 'Anthony Albanese', gender: 'male' },
    { id: 2, name: 'Joe Biden', gender: 'male' },
    { id: 3, name: 'Chris Hipkins', gender: 'male' },
    { id: 4, name: 'Lee Hsien Loong', gender: 'male' }
];


router.get('/filter', (req, res) => {
    const filterLetter = req.query.letter;
    const filteredFriends = friends.filter(friend => friend.name.startsWith(filterLetter));

    if (filteredFriends.length > 0) {
        res.status(200).json(filteredFriends);
    } else {
        res.status(404).json({ error: `No friends found with names starting with '${filterLetter}'` });
    }
});


router.get('/info', (req, res) => {
    const { "user-agent": userAgent, "content-type": contentType, accept } = req.headers;
    res.status(200).json({
        "user-agent": userAgent,
        "content-type": contentType,
        "accept": accept
    });
});


router.get('/:id', (req, res) => {
    const friendId = parseInt(req.params.id);
    const friendFound = friends.find(friend => friend.id === friendId);

    if (friendFound) {
        res.status(200).json({ result: friendFound });
    } else {
        res.status(404).json({ error: `Friend with ID ${friendId} not found` });
    }
});


router.put('/:id', (req, res) => {
    const friendId = parseInt(req.params.id);
    const updatedFriend = req.body;

    const friendIndex = friends.findIndex(friend => friend.id === friendId);

    if (friendIndex !== -1) {
        friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };  
        res.status(200).json({ result: friends[friendIndex] });
    } else {
        res.status(404).json({ error: `Friend with ID ${friendId} not found` });
    }
});

module.exports = router;
