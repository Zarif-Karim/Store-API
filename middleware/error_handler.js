const error_handler = (err,req,res,next) => {
    console.log(err);
    res.status(500).send('<h1>Something went wrong</h1>');
}

module.exports = error_handler;