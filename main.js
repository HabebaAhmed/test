
let nav =document.getElementById('nav-bar');
let showdiv=document.getElementById('showDiv');
let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let phoneInput=document.getElementById('phoneInput');
let ageInput=document.getElementById('ageInput');
let passwordInput=document.getElementById('passwordInput');
let repasswordInput=document.getElementById('rePasswordInput');
let submitBtn=document.getElementById('submitBtn');
let searchInputName=document.getElementById('searchByName');
let searchLetter=document.getElementById('searchByLetter');
let arearow=document.getElementById('showDiv2');
let area=[];
let dataSearch=[];
let data=[];



// validation


searchName("").then(() => {
    $("#load").fadeOut(1000, () => {
        $("body").css("overflow", "visible");
        $('#load').css({
            zIndex:'-1'
        })
        $('.sk-chase').addClass('d-none')
    })
})


function validation(){
    
    let nameRegex=/^[a-zA-z]{1,}$/;
    let emailRegex=/[a-zA-z0-9]{0,}(@)[a-z]{0,}(.com)$/;
    let phoneRegex=/^[0-9]{10,12}$/;
    let ageRegex=/^([1-9][0-9]{0,1}|100)$/;
    let passRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// nammmmmmmmmmmmmmme
        if(nameRegex.test(nameInput.value)){
            $('#nameInput').removeClass('is-invalid');
            $('#nameInput').addClass('is-valid');
            nameInput.style.borderBottom=('1px solid green');
            $('.validName').css({
                display:'none'
            })
        
        }
    
        else{
            $('#nameInput').removeClass('is-valid');
            $('#nameInput').addClass('is-invalid');
            nameInput.style.borderBottom=('1px solid red');
            $('.validName').css({
                display:'block'
            })
        

            
        
            
        };
//   emaaaaaaaaaaaail
    
        if (emailRegex.test(emailInput.value)) {
            $('#emailInput').removeClass('is-invalid');
            $('#emailInput').addClass('is-valid');
            emailInput.style.borderBottom=('1px solid green');
            $('.validEmail').css({
                display:'none'
            })
        
            
            
        }
        else{
            $('#emailInput').removeClass('is-valid');
            $('#emailInput').addClass('is-invalid');
            emailInput.style.borderBottom=('1px solid red');
            $('.validEmail').css({
                display:'block'
            })
        };
    // phoneeeeeeeeeee
        if (phoneRegex.test(phoneInput.value)) {
            $('#phoneInput').removeClass('is-invalid');
            $('#phoneInput').addClass('is-valid');
            phoneInput.style.borderBottom=('1px solid green');
            $('.validPhone').css({
                display:'none'
            })
            
        }
        else{
            $('#phoneInput').removeClass('is-valid');
            $('#phoneInput').addClass('is-invalid');
            phoneInput.style.borderBottom=('1px solid red');
            $('.validPhone').css({
                display:'block'
            })
    
        };

        // ageeeeeeeeeeeeeeee
        if (ageRegex.test(ageInput.value)) {
            $('#ageInput').removeClass('is-invalid');
            $('#ageInput').addClass('is-valid');
            ageInput.style.borderBottom=('1px solid green');
            $('.validAge').css({
                display:'none'
            })
        }
        else{
            $('#ageInput').removeClass('is-valid');
            $('#ageInput').addClass('is-invalid');
            ageInput.style.borderBottom=('1px solid red');
            $('.validAge').css({
                display:'block'
            })
        }
        // paaasssword

        if ( passRegex.test(passwordInput.value)) {
            $('#passwordInput').removeClass('is-invalid');
            $('#passwordInput').addClass('is-valid');
            passwordInput.style.borderBottom=('1px solid green');
            $('.validPassword').css({
                display:'none'
            })
            
            
            
        }
        else{
            $('#passwordInput').removeClass('is-valid');
            $('#passwordInput').addClass('is-invalid');
            passwordInput.style.borderBottom=('1px solid red');
            $('.validPassword').css({
                display:'block'
            })
        
        }
        // repasswordvalid
        if (repasswordInput.value==passwordInput.value&&repasswordInput.value!='') {
            $('#rePasswordInput').removeClass('is-invalid');
            $('#rePasswordInput').addClass('is-valid');
            repasswordInput.style.borderBottom=('1px solid green');
            $('.validrepassword').css({
                display:'none'
            })
        
        }
        else{
            $('#rePasswordInput').removeClass('is-valid');
            $('#rePasswordInput').addClass('is-invalid');
            repasswordInput.style.borderBottom=('1px solid red');
            $('.validrepassword').css({
                display:'block'
            })
        }
    

        if(nameRegex.test(nameInput.value)&&emailRegex.test(emailInput.value)&&phoneRegex.test(phoneInput.value)&&ageRegex.test(ageInput.value)&&passRegex.test(passwordInput.value)&&repasswordInput.value==passwordInput.value&&repasswordInput.value!=''){
            submitBtn.removeAttribute('disabled')
        
        }
        else{
            submitBtn.setAttribute('disabled','true')
        }
}

$('#nameInput').keyup(validation);
$('#emailInput').keyup(validation);
$('#phoneInput').keyup(validation);
$('#ageInput').keyup(validation);
$('#passwordInput').keyup(validation);
$('#rePasswordInput').keyup(validation);



// toggle navbar

$('.menu-bar').click(function(){
    if($('.menu-bar').hasClass('fa-solid fa-bars')){
        $('.menu-bar').removeClass('fa-solid fa-bars');
        $('.menu-bar').addClass('fa-solid fa-x');
        $('#nav-bar').animate({
            width:'250px'
    
         },1000)
        
    

    $('.menu').animate({
        left:'250px'
    },1000
    );
  $('.list').animate({
    paddingTop:'0'
  },1000);

  $('.list li').animate({
    opacity:'1',
    paddingTop:'30px'
    
  },1000);
   
        $('.icons').animate({
            opacity:'1',
            paddingLeft: '30px'
        },2000);
     
    }
else{
    $('.menu-bar').removeClass('fa-solid fa-x');
    $('.menu-bar').addClass('fa-solid fa-bars');

    $('.menu').animate({
        left:'0px'
      },1000);
    $('.list').animate({
    paddingTop:'150px'
  },1000);
  
  $('.list li').animate({
    opacity:'0',
    paddingTop:'30px'
    
  },500);
   
        $('.icons').animate({
            opacity:'0',
            paddingLeft: '0px'
        },500);
        $('#nav-bar').animate({
        
            width:'0px'
            
            },1000)
       
    
     
    }
});


// searchhhhhhhhhhhhhhhhhhhhhhh

$('#showDiv').removeClass('d-none');
searchName('');
searchInputName.addEventListener('keyup',function(){
    $('#showDiv').removeClass('d-none');
    searchName(searchInputName.value);
    

})
function searchletter(){
    let searchRegex=/^[a-zA-z]{1}$/;
    if(searchRegex.test(searchLetter.value)){
        searchName(searchLetter.value);
    }
}

$('#searchByLetter').keyup(function(){
    searchletter();
    
});


async function searchName(n){
    $("#load").fadeIn(100);
    let mealResponse=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${n}`);
    dataSearch= await mealResponse.json();
    data=dataSearch.meals
    console.log(dataSearch);
    console.log(data);
    showData();
    $("#load").fadeOut(100);
    
}



function showData(){
    let divs='';
    for(let i=0;i<data.length;i++){
         divs +=`
        
         <div class="col-lg-3 clicked col-md-6 ">
                        <div class="content " id="contentdata">
                        <a>
                            <img src="${data[i].strMealThumb}"  alt="">
                            <div class="layer">
                                <p class="text-dark d-flex justify-content-center top-0 end-0 bottom-0 start-0 ">${data[i].strMeal}</p>
                            </div>
                            </a>
                        </div>
                    </div>
                    `

    }
    
    showdiv.innerHTML=divs;

}

// cataigory

async function getCat(){
    let mealcat=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    data=await mealcat.json();
    data=data.categories;
    console.log(mealcat);
    console.log(data);
    showCat();
    

}
// getCat();

function showCat(){
    let divs='';
    for(let i=0;i<data.length;i++){
         divs +=`
        <div class="col-lg-3 col-md-6 ">
        
                        <div class="content  ">
                        
                            <img src="${data[i].strCategoryThumb}"  alt="">
                            <div class="layer layer2">
                                
                                <h3 class="top-0  pt-2 pb-0 end-0 start-0 bottom-0 text-center">${data[i].strCategory}</h3>
                                <p class="text-dark">${data[i].strCategoryDescription}</p>
                                </div>
                                
                            
                            
                        </div>
                    
                    </div>`

    }
    
    showdiv.innerHTML=divs;

}
// area
async function categ(cat){
    let categss= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
    data=await categss.json();
    data=data.meals
    console.log(data);
    showData();
    
}

async function getArea(){
   let arealist= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
   data= await arealist.json();
   data=data.meals;
   console.log(data);
   showArea();

}
 async function areaitem(a){
    let country=await
     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a}`);
    data=await country.json();
   data=data.meals;
    console.log(data);
    showData();
    
 }

function showArea(){
    let divs='';
    for(let i=0;i<20;i++){
    divs+=`
    <div class="col-md-3 shadow position-relative">
    <div class="content2 mb-5 ">
        <i class="fa-solid fa-city "></i>
        <h2 class="text-white text-center position-absolute pb-3 pt-5 top-0 end-0 start-0 bottom-0 ">${data[i].strArea}</h2>
    </div>
    </div>  
    `

    }
    arearow.innerHTML=divs;
}

// ingrdient

async function getinteg(){
    let intList=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    data= await intList.json();
    data=data.meals;
    console.log(data);
    showinteg();
    
}

async function integitem(ii){
    let intG= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ii}`);
    data=await intG.json();
    data=data.meals;
    console.log(data);
    showData();
}


  function showinteg(){
    let divs=''
    for (let i = 0; i <20; i++) {
        
        divs+=`
        <div class="col-lg-3 col-md-6 shadow">
        <div class="content2 cons position-relative">
            <i class="fa-solid fa-bowl-food"></i>
            <h2 class="text-white text-center position-absolute pb-5 pt-5  top-0 end-0 start-0 bottom-0">${data[i].strIngredient}</h2>
            <p  class="description  ">${data[i].strDescription.split(" ").splice(0,20).join(" ")}</p>
        </div>
        </div> 
        `
        $('.row2').html(divs);
        
    }
  }

//   getmeal

async function getmeal(meal){
    let meallist= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
    data=await meallist.json();
    data=data.meals;
    console.log(data);
    showmeal();
}

function showmeal(){
    
   
    divs='';
    for (let i = 0; i <data.length; i++) {
        divs+=`
        <div class="col-md-4">
                        <div class="cont">
                            <img class="w-100" src="${data[i].strMealThumb}" alt="">
                            <h1 class="text-center ">${data[i].strMeal}</h1>
                        </div>
                    </div>  
                    <div class="col-md-8">
                        <div class="content4">
                            <h2 class="mb-3" >Instructions</h2>
                            <p class="mealDes">${data[i].strInstructions}</p>
                            <p><span>Area : </span>${data[i].strArea}</p>
                            <p><span>Category : </span>${data[i].strCategory}</p>
                            <a href="" class="btn btn-success source">source</a>
                            <a href="${data[i].strYoutube}" target="_blank" class="btn youtube">youtube</a>
                            
                        </div>
                    </div>
        `
        
    }
   
    $('#showDiv4').html(divs);
   
}

$(document).on('click','.layer p ',function(){
    loadin();
    $('#showDiv').addClass('d-none');
    $('#showDiv3').addClass('d-none');
    $('#showDiv2').addClass('d-none');
    $('#showDiv4').removeClass('d-none');
    getmeal(this.innerHTML);
    loadout();
    
    
})
$(document).on('click','.layer2 h3 ',function(){
    loadin();
    categ(this.innerHTML);
    loadout();
    
    

    
})
$(document).on('click','.content2 h2 ',function(){
    loadin();
    $('#showDiv2').addClass('d-none');
    $('#showDiv').removeClass('d-none');
    areaitem(this.innerHTML);
    loadout();
   

})
$(document).on('click','.cons h2 ',function(){
    loadin();
    $('#showDiv2').addClass('d-none');
    $('#showDiv').removeClass('d-none');
    integitem(this.innerHTML);
    loadout();
})


// _____________________________


$('.contactLink').click(function(){
    $('#contactsUs').removeClass('d-none');
    $('#search').addClass('d-none');
    $('#showDiv').addClass('d-none');
    $('#showDiv2').addClass('d-none');
    $('#showDiv3').addClass('d-none');
    $('#showDiv4').addClass('d-none');
    move();
    
})

$('.searchLink').click(function(){
    $('#contactsUs').addClass('d-none');
    $('#search').removeClass('d-none');
    $('#showDiv').addClass('d-none');
    $('#showDiv2').addClass('d-none');
    $('#showDiv3').addClass('d-none');
    $('#showDiv4').addClass('d-none');
    
    move();
    
});
function loadin(){
    $('#load').animate({
        opacity:'11',
        zIndex:"999999999999"
    },20);
        $('.sk-chase').removeClass('d-none');
}
function loadout(){
    $('#load').animate({
        opacity:'0',
        zIndex:"-1",
    
    },1000,function(){
        $('.sk-chase').addClass('d-none');
    }
    );
}

$('.catlink').click(function(){
    
    loadin();
    getCat();
    
    
    $('#contactsUs').addClass('d-none');
    $('#search').addClass('d-none');
    $('#showDiv').removeClass('d-none');
    $('#showDiv2').addClass('d-none');
    $('#showDiv3').addClass('d-none');
    $('#showDiv4').addClass('d-none');
   
   loadout()
    

    move();
    
    
});

$('.areaLink').click(function(){
    loadin();
    getArea();
    loadout();
    $('#contactsUs').addClass('d-none');
    $('#search').addClass('d-none');
    $('#showDiv').addClass('d-none');
    $('#showDiv2').removeClass('d-none');
    $('#showDiv3').addClass('d-none');
    $('#showDiv4').addClass('d-none');
  
    move();
})
$('.ingLink').click(function(){
    loadin();
    $('#contactsUs').addClass('d-none');
    $('#search').addClass('d-none');
    $('#showDiv').addClass('d-none');
    $('#showDiv2').addClass('d-none');
    $('#showDiv3').removeClass('d-none');
    $('#showDiv4').addClass('d-none');
    getinteg();
    loadout();
    move();
    
})


function move(){
    $('.menu-bar').removeClass('fa-solid fa-x');
    $('.menu-bar').addClass('fa-solid fa-bars');
    $('.menu').animate({
        left:'0px'
      },1000);
    $('.list').animate({
    paddingTop:'150px'
    },1000);
    
    $('.list li').animate({
    opacity:'0',
    paddingTop:'30px'
    
    },500);
    
        $('.icons').animate({
            opacity:'0',
            paddingLeft: '0px'
        },500);
        $('#nav-bar').animate({
        
            width:'0px'
            
            },1000)
}
