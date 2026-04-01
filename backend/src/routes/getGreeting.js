const GREETINGS = [
    'Greetings!',
    'Welcome!',
    'Hey!',
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
