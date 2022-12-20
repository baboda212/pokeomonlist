const express = require('express');
const app = express();
const ejs = require('ejs');
const pokemons = require('./pokemon');
console.log(pokemons);

//ejs 를  view엔진으로 설정하기
app.set('view engine', 'ejs');
//정적파일 경로 지정(외부css파일 불러오기)
//index.ejs가 html로 변환되어 구동되는 폴더는 public 폴더임
app.use(express.static("public"));

//home 라우팅
app.get('/', function(요청, 응답){
    //응답.send('home');
    //send는 뿌려주는 의미
    //응답.sendFile(__dirname + '/index.html');
    //views의 폴더 안에 pages라는 폴더 안에 있는 index.ejs를 랜더링 한다. 기본 구조는 views폴더 안에서 움직이는 것(기본)
    응답.render('pages/index.ejs')
})

//about 라우팅
app.get('/about', function(req, res){
    res.render('pages/about.ejs');
})

//pokemons 라우팅
app.get('/pokemons', function(req, res){
    res.render('pages/pokemons.ejs',{
        title: '포켓몬도감',
        pokemons: pokemons
    });
})
app.get('/pokemons/:id', function(req, res){
    if(req.params.id == 'all'){
        res.json(pokemons);
    } else{
        res.json(pokemons[req.params.id]);
    }
})



const port = 3001;
app.listen(port,() =>{
    console.log(`sever running at ${port}`);
});