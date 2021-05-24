

$(document).ready(function () {
  //gnb
  $('.menu1').on({
    mouseover: function () {
      $('.submenu_1').show();
      $('.gnb_bg').show();
      $('>a',this).css('border-bottom','3px solid #0078c4')
    },
    mouseout: function () {
      $('.submenu_1').hide();
      $('.gnb_bg').hide();
      $('>a',this).css('border-bottom','none')
    }
  })

  $('.submenu_1').on({
    mouseenter: function () {
      $('.submenu_1').show();
      $('.gnb_bg').show();
      
      

    },
    mouseleave: function () {
      $('.submenu_1').hide();
      $('.gnb_bg').hide();
    
     

    }
  })
  $('.sub_2').on({
    mouseenter:function(){
      $(this).parent().prev().css({
        borderBottom:'3px solid #0078c4',
        paddingTop:'10px'
      });
      $('>a',this).addClass('hover')
    },
      mouseleave:function(){
        $(this).parent().prev().css('border-bottom','none');
        $('>a',this).removeClass('hover')
      }
  })
//visual
var num=1;
var visualst,popupst,bannerst;  
    $('.btn_prev').on('click',function(e){
        e.preventDefault();
        num--;
        if(num<1){
            num=4
        }
        ani(num)
    })
      $('.btn_next').on('click',function(e){
        e.preventDefault();
           num++;
        if(num>4){
            num=1
        }
        ani(num)
    })
    function ani(num){
        $('.visual_img').animate({
            left:'-833px'
        },3000,function(){
            $('.visual_img').append($('.visual_img li:first'));
            $('.visual_img').css('left','0px')
        })
    }
    
      $('.btn_stop').on('click',function(e){
        e.preventDefault();
           if($(this).hasClass('pause')==true){
                    clearInterval(visualst);
                    $(this).removeClass('pause')
                    $(this).addClass('play')
                }else{
                        visualst=setInterval(set1 ,3000)
                    $(this).removeClass('play')
                    $(this).addClass('pause')
                }
            })
        
    
    
    visualst=setInterval(set1,3000)
    function set1(){
        $('.btn_next').trigger('click')
    }
    
    
//popup
    var nums=1;
$('.popup_list li:gt(0)').hide();
    $('.popup_prev').on('click',function(e){
        e.preventDefault();
        nums--;
        if(nums<1){
            nums=5
        }
        $('.current').text(nums);
        $('.popup_list li:visible').hide();
        $('.popup_list li:eq('+(nums-1)+')').show()
    })
    $('.popup_next').on('click',function(e){
         e.preventDefault();
        nums++;
        if(nums>5){
            nums=1
        }
        $('.current').text(nums);
        $('.popup_list li:visible').hide();
        $('.popup_list li:eq('+(nums-1)+')').show()
    })
    $('.popup_stop').on('click',function(e){
        e.preventDefault();
         if($(this).hasClass('pause')==true){
                    clearInterval(popupst);
                    $(this).removeClass('pause')
                    $(this).addClass('play')
                }else{
                        popupst=setInterval(set2 ,3000)
                    $(this).removeClass('play')
                    $(this).addClass('pause')
                }
            })

    
popupst=setInterval(set2,3000)
function set2(){
    $('.popup_next').trigger('click')
}
 //성북이야기
 $('.sbstory_list li').on({
   mouseover:function(){
    var photo= $(this).index();
     $(this).each(function(){
     $('.story_img:eq('+photo+')').css({
       transform:'scale(1.1)',
       transition:'all 0.5s ease'
      })
    })
   },
   mouseout:function(){
    var photo= $(this).index();
    $(this).each(function(){
    $('.story_img:eq('+photo+')').css({
      transform:'scale(1.0)',
      transition:'all 0.5s ease'
     })
   })
   }
 })   
    
    
//banner    
$('.banner_btn1').on('click',function(e){
    e.preventDefault();
          num--;
        if(num<1){
            num=10
        }
        bannerani(num)
    
})
    $('.banner_btn3').on('click',function(e){
    e.preventDefault();
             num++;
        if(num>10){
            num=1
        }
        bannerani(num)
        
})
    
    $('.banner_btn2').on('click',function(e){
    e.preventDefault();
         if($(this).hasClass('pause')==true){
                    clearInterval(bannerst)
                    $(this).removeClass('pause')
                    $(this).addClass('play')
                }else{
                        bannerst=setInterval(set3 ,3000)
                    $(this).removeClass('play')
                    $(this).addClass('pause')
                }
})
    bannerst=setInterval(set3,3000)
    function set3(){
        $('.banner_btn3').trigger('click')
    }
    function bannerani(num){
        $('.banner_slide').animate({
            left:'-185px'
        },3000,function(){
            $('.banner_slide').append($('.banner_slide li:first'));
            $('.banner_slide').css('left','0px')
        })
    }
})
function init() {
  //notice 
  var news = document.querySelectorAll('.news')
  var tabBtn = document.querySelectorAll('.board_list > li');
  var tit=document.querySelectorAll('.tit')
  var tabChange = function (e) {
    e.preventDefault();
    var selector = this;
    tabBtn.forEach(function (elem, index) {
      if (elem == selector) {

        news[index].style.display = "block";
        tit[index].className="tit on";

      } else {

        news[index].style.display = "none";
        tit[index].className="tit";
            

      }

    })
  }
  for (var btn of tabBtn) {
    btn.addEventListener('click', tabChange)


  }
  //sitelist
  var footerLink=document.getElementById('footer_site_link').getElementsByTagName('ul')[0].getElementsByTagName('li')
		
  for(var i=0;i<footerLink.length;i++){
          footerLink[i].num=i
          footerLink[i].onclick=function(e){
                  e.preventDefault();
                  footerLinkLi=this.getElementsByTagName('ul')[0];
                  if(footerLinkLi.className=="site"){
                footerLinkLi.className="site on"
                  }else{
                footerLinkLi.className="site"
                  }
                  
                  return false;
          }
  }
    

    
}
window.onload = init;

