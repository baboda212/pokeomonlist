const pokemons = [
    {
      name: "이상해씨",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
      type: ['풀', '독'],
      desc: "태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다."
    },
    {
      name: "파이리",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png",
      type: ['불꽃'],
      desc: "파이리 꼬리의 불꽃은 생명의 등불이다. 건강할 때는 불꽃도 강하게 타오른다."
    },
    {
      name: "꼬부기",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000701.png",
      type: ['물'],
      desc: "등껍질에 숨어 몸을 보호한다. 상대의 빈틈을 놓치지 않고 물을 뿜어내어 반격한다."
    },
    {
      name: "피카츄",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/002501.png",
      type: ['전기'],
      desc: "숲속에서 동료와 산다. 볼의 양쪽에 있는 전기 주머니에 전기를 모아 둔다."
    },
    {
      name: "버터플",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001201.png",
      type: ['벌레','비행'],
      desc: "꽃의 꿀을 매우 좋아한다. 약간의 꽃가루만으로 꽃밭이 있는 장소를 찾아낼 수 있다."
    },
    {
      name: "구구",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001601.png",
      type: ['노말','비행'],
      desc: "싸움을 좋아하지 않는 얌전한 성격이지만 어설프게 건드리면 강력한 반격을 당하게 된다."
    },
    {
      name: "꼬렛",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001901.png",
      type: ['노말'],
      desc: "어떤 장소에도 정착하여 살아갈 수 있는 생명력이 있다. 경계심이 매우 강하다."
    },
    {
      name: "식스테일",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003701.png",
      type: ['불꽃'],
      desc: "불꽃의 구슬을 조종한다. 성장하면 6개의 꼬리는 끝이 갈라져서 한층 더 늘어난다."
    },
    {
      name: "나옹",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005201.png",
      type: ['노말'],
      desc: "한밤중에 움직이는 습성이 있다. 반짝반짝 빛나는 것을 발견하면 그에 못지않게 눈동자가 반짝인다."
    },
    {
      name: "고라파덕",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005401.png",
      type: ['물'],
      desc: "두통이 심해지면 이상한 힘을 사용하게 된다. 그때의 일은 기억하지 못한다."
    },
    {
      name: "삐삐",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003501.png",
      type: ['페어리'],
      desc: "귀여운 표정과 동작으로 인기가 많다. 조용한 산속에서 동료들과 사는 것으로 여겨지고 있다."
    },
    {
      name: "푸린",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/003901.png",
      type: ['노말, 페어리'],
      desc: "동그란 눈동자가 흔들릴 때 누구나 잠이 오게 되는 자장가를 부르기 시작한다."
    },
    {
      name: "뚜벅초",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/004301.png",
      type: ['풀, 독'],
      desc: "낮에는 뿌리인 발을 땅에 박고 움직이지 않을 때가 많다. 밤에 돌아다니며 씨를 뿌린다."
    },
    {
      name: "디그다",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005001.png",
      type: ['땅'],
      desc: "땅속에서 살고 있는 포켓몬이다. 어두운 지하에 있기 때문에 밝은 태양을 싫어한다."
    },
    {
      name: "망키",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005601.png",
      type: ['격투'],
      desc: "나무 위에서 생활하고 있다. 무리 중 1마리가 화내기 시작하면 모두 아무의미도 없이 난동을 부린다."
    },
    {
      name: "가디",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/005801.png",
      type: ['불꽃'],
      desc: "충실한 성격의 포켓몬이다. 트레이너의 명령이 있기 전까지 한 발짝도 움직이지 않는다. "
    },
    {
      name: "발챙이",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006001.png",
      type: ['물'],
      desc: "내장이 들여다보일 정도로 피부가 얇다. 갓 자란 다리로 서툴게 걷는다. "
    },
    {
      name: "야돈",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/007901.png",
      type: ['물, 에스퍼'],
      desc: "움직임은 느리지만 꼬리를 사용하는 낚시가 특기다. 둔감하므로 꼬리를 물려도 아프지 않다. "
    },
    {
      name: "고오스",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/009201.png",
      type: ['고스트, 독'],
      desc: "몸의 95퍼센트가 가스로 이루어진 포켓몬이다. 강풍에 날려가 버린다.  "
    },
    {
      name: "잉어킹",
      imgUrl: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/012901.png",
      type: ['물'],
      desc: "세상에서 제일 약하다고 전해지는 잉어킹이 어떻게 살아남아 있는지 아무도 모른다. "
    },
  ];
  module.exports = pokemons;