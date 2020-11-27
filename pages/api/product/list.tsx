export default (req, res) => {
    res.statusCode = 200
    res.json([
        { name: 'Product1' },
        { name: 'Product2' },
    ])
  }
  