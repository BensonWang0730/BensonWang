//============Dark Button============
const dark_mode = document.getElementById("dark_btn");
dark_mode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});


//=================先創物件，後給值=========================
let mlt = new Object();  

mlt.meat = ['魚','毛'];
mlt.vegetable = ['蔡','大白菜'];
mlt.ingredient =['油','鹽'];

mlt.effect = function(){
  console.log(this.ingredient[0]+'有助於排便');
  };

console.log(mlt);
mlt.effect();


//===============大括號添加屬性，屬性用逗號間隔===============
/*
  let mlt ={
    
  meat : ['魚','毛'],
  vegetable :['蔡','大白菜'],
  ingredient :['油','鹽'],
  effect(){
    console.log(this.ingredient[0]+"幫助排便");
  },

};

console.log(mlt);
mlt.effect();
*/  
//===============創 Function，存在問題============================
function createMLT(meat, vegetable, ingredient){
  let obj = new Object();          // = this的寫法
    obj.meat = meat;
    obj.vegetable = vegetable;
    obj.ingredient = ingredient;
    obj.effect = function(){
      console.log(this.ingredient[0]+'幫助排便');
    };
    return obj;
}

let meat1 =['魚','毛'];
let meat2 = ['午餐肉','鴨腸'];
let vegetable1 = ['冬瓜','豆腐'];
let vegetable2 = ['午餐肉','鴨腸'];
let ingredient1 = ['辣椒','菜油'];
let ingredient2 = ['鹽','醋'];


let mlt1 =createMLT(meat1,vegetable1,ingredient1);
let mlt2 = createMLT(meat2,vegetable2,ingredient1);


//===================進階寫法====================================
function MLT(meat,vegetable,ingredient){
  this.meat=meat;
  this.vegetable=vegetable;
  this.ingredient=ingredient;
  this.effect = function(){
    console.log(this.ingredient[0]+'幫助排便');
  };
};

let mlt3 = MLT('FISH','TOMATO','OIL');
