const getData = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    console.log("well this means thats for sure * * * * * * * * * * * * * ");
    res.json( {hey: 'buddy'} );
    // if (req.body) {
    //     console.log(req)
    //     console.log('req.body heres my body')
    //     console.log(req.body)
    //     res.set('Access-Control-Allow-Origin', '*'); // allow all origins
    //     res.json( { hey: 'heres your data' } )
    // } else {
    //     res.set('Access-Control-Allow-Origin', '*'); // allow all origins
    //     res.json( { hello: 'no req.body heres a response'})
    // }
}

module.exports = getData