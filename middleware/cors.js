module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*" );
    //En vez de * se podrían poner direcciones IP especificas para que accedan
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});

    }

    next();
}