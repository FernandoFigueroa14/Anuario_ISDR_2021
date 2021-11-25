function guestMiddleware(req, res, next){
    if(req.session.userLogged){
        return console.log(req.session.userLogged); 
      }else{
        req.session.userLogged = "";
      }
    next();
  }
  
  module.exports = guestMiddleware;