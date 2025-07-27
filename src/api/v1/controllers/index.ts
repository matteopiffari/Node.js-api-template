const helloWorld = (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
}

export { helloWorld };