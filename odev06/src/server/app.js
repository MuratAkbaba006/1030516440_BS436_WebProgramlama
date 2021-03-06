const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const passport = require('passport');
const session=require('express-session');

const app = express();
const authApi = require('./routes/auth-api');
const LocalStrategy=require('passport-local').Strategy;
const Users=require('./db/users');

app.use(session({
    secret:'cookie şifrelenirken kullanılacak secret key',
    //bizim belirlediğimiz herhangi bir şey olabilir.
    resave:false,
    saveUninitialized:false

}));

passport.use(new LocalStrategy({
    usernameField:'userId',
    passwordField:'password'
},(userId,password,done)=>{
    const ok=Users.verifyUser(userId,password);
    if(!ok){
        return done(null,false,{message:'Geçersiz Kullanıcı Adı/Şifre'});
    }
    const user=Users.getUser(userId);
    return done(null,user);


}));

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    const user=Users.getUser(id);
    if(user){
        done(null,user);
    }else{
        done(null,false);
    }
});

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

app.use('/api',authApi);
app.use(express.static('public'));


app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports=app;