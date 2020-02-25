$(document).ready(function () {
    
    $('html, body').animate({
        scrollTop: 0
    }, 200);
    
    $('.heroCont').css({
        'height': parseInt($('.heroCont').css('width')) * 0.5625,
        'margin-top': $('.headerCont').css('height')
    });
    $('.heroCont2').css({
        'height': parseInt($('.heroCont2').css('width')) * 0.5625,
        'margin-top': $('.headerCont').css('height')
    });
    
    $('.hTextCont').click(function(){
       window.location.href = "index.html"; 
    });
    
    $('.thumbnailCont').click(function(){
       window.location.href = "setting-responsive-widths.html"; 
    });
    
    $('.footerToTopCont').click(function(){
        $(".headerCont").css('top', 0);
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    
    $('.snippetSelector').first().addClass('activeSelector');
    $('.snippet').first().css({
        'display': 'inline'
    })
    $('.snippetSelector').last().css({
        'border-right': 'none'
    })
    
    $('.snippetSelector').click(function(){
       if ($(this).hasClass('activeSelector')){
           
       } else {
           $('.snippetSelector').removeClass('activeSelector');
           $(this).addClass('activeSelector');
           var snippetType = $(this).index()
           $('.snippet').css({
                'display': 'none'
           });
           $('.snippet').each(function(index, value){
               if (index == snippetType) {
                   $(this).css({
                       display: 'block'
                   });
               }
           });
       }
    });
    
    $('.copyCont').hover(function(){
        $('.copyIcon').css({
            'filter': 'brightness(0) saturate(100%) invert(4%) sepia(55%) saturate(1228%) hue-rotate(182deg) brightness(94%) contrast(109%)'
        });
        
        $('.copyText').css({
            'color': '#00010F'
        });
    }, function(){
        $('.copyText').css({
            'color': '#6D6E85'
        });
        $('.copyIcon').css({
            'filter': 'none'
        });
    });
    
    $('.copyCont').click(function(){
        $('.copyText').text('Copied!')
        $('.copyIcon').css({
            'filter': 'brightness(0) saturate(100%) invert(47%) sepia(91%) saturate(391%) hue-rotate(235deg) brightness(96%) contrast(96%)'
        });
        $('.copyText').css({
            'color': '#c36df0'
        });
        setTimeout(function(){
            $('.copyText').text('Copy')
            $('.copyText').css({
                'color': '#6D6E85'
            });
            $('.copyIcon').css({
                'filter': 'none'
            });
        },1250)
        
        
        $('.snippet').each(function(index, value){
            console.log($(this).css('display'))
            if ($(this).css('display') == 'block') {
                copyToClipboard($(this))
            }
        });
        
        function copyToClipboard(element) {
            var $temp = $("<textarea>");
            $temp.css('white-space', 'pre-wrap');
            $("body").append($temp);
            $temp.text($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }
        
    });
    
    
    
    
    
    
    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    var screenHeight = innerHeight;
    var screenWidth = innerWidth;
    
    //no longer draggable images
    $("*").on('dragstart', function () {
        return false;
    });
    
    var smallScreen = false;

    if (screenWidth < 650) {

        smallScreen = true

    }

    $(window).resize(function () {
        
        $('.heroCont').css({
             'height': parseInt($('.heroCont').css('width')) * 0.5625,
            'margin-top': $('.headerCont').css('height')
        });
        
        $('.heroCont2').css({
             'height': parseInt($('.heroCont2').css('width')) * 0.5625,
        });

        screenHeight = innerHeight;
        screenWidth = innerWidth;

        if (screenWidth < 650) {

            smallScreen = true

        }

//        if (smallScreen && screenWidth > 650) {
//            window.location.href=window.location.href;
//        }

    });
    
    
    $('.gridCont').css({
        'min-height': innerHeight/2,
    });
    
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            $(".headerCont").css('top', 0);
        }
        else {
            $(".headerCont").css('top', -75);
        }
    });
    
    $(function(){
        var x = 0;
        var y = 0;
        var dx = 0.2;
        var dy = 0.2;
        setInterval(function(){
            x-=dx;
            y-=dy;
            $('.heroCont').css('background-position', x + 'px '+ y + 'px');
            if (x < -150){
                dx=-0.2;
                dy=-0.2;
            }
            if (x > 0){
                dx=0.2;
                dy=0.2;
            }
        }, 10);
    })
    
    
    
    $('.hSearchCont').click(function(){
        $(".headerCont").css('top', -75);
        $('html, body').animate({
            scrollTop: (parseInt($(".contentCont").offset().top) + (parseInt($(".headerCont").css('height'))))
        }, 1000, function(){
            $(".searchInput").focus();
        });
    });
    
    
    $('.hSearchCont').hover(function(){
        $('.hSearchCont').css('background-color', '#00010F');
        $('.hSearchText').css({
            display: 'block',
            opacity: 1,
        });
        $('.hSearchIcon').css('filter', 'brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(2270%) hue-rotate(178deg) brightness(100%) contrast(95%)');
        
    }, function(){
        $('.hSearchIcon').css('filter', 'none');
        $('.hSearchText').css({
            display: 'none',
            opacity: 0,
        });
        $('.hSearchCont').css('background-color', 'transparent');
    });
    
    
    $('.hAddCont').hover(function(){
        $('.hAddCont').css('background-color', '#00010F');
        $('.hAddText').css({
            display: 'block',
            opacity: 1,
        });
        $('.hAddIcon').css('filter', 'brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(2270%) hue-rotate(178deg) brightness(100%) contrast(95%)');
        
    }, function(){
        $('.hAddIcon').css('filter', 'none');
        $('.hAddText').css({
            display: 'none',
            opacity: 0,
        });
        $('.hAddCont').css('background-color', 'transparent');
    });
    
    $('.cancelButton').hover(function(){
        $(this).css('background-color', '#E8F0F7');
        $('.cancelText').css('color', '#00010F');
    }, function(){
        $(this).css('background-color', 'transparent');
        $('.cancelText').css('color', '#E8F0F7');
    });
    
    $('.cancelButton').click(function(){
        $(".headerCont").css('top', 0);
        $('body').css('overflow', 'auto');
        $('.overlay').css('opacity', '0');
        setTimeout(function(){
            $('.overlay').css('display', 'none')
        }, 500)
    });
    
    $('.hAddCont').click(function(){
        $('body').css('overflow', 'hidden')
        $('.overlay').css('display', 'flex');
        $('.overlay').animate({
            opacity: 1,
        }, 250)
    });
    
    
    
    
    var i = 0;
    var l = 0;
    var myImageSRC;
    
    $(".searchInput").on("change keyup paste", function(){
        showResults('searching')
    });
    
    
    var toggle;
    var active = 0;
    $('.codeLogo').click(function(){
        var myCodeType = $(this).attr('src');
        this.toggle=!this.toggle
        var myCodeEle = $(this)
        showResults('clickCode', myCodeType, this.toggle, myCodeEle)
    });
    
    
    var enterCheck = 0;
    var backspaceCheck = 0;
    setInterval(function(){
        if ($(".searchInput").is(":focus")) {
            
            $(document).on('keypress',function(e) {
                if(e.keyCode == 13) {
                    enterCheck++
                    if (enterCheck == 1){
                        $('html, body').animate({
                            scrollTop: (parseInt($(".gridCont").offset().top)),
                        });
                        $(".headerCont").css('top', -75);
                    }
                }
            });
            
            $('.searchIcon').css({
               filter: 'brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(2270%) hue-rotate(178deg) brightness(100%) contrast(95%)', 
            });
        } else {
            $('.searchIcon').css({
               filter: 'none', 
            });
            enterCheck = 0;
            backspaceCheck = 0;
        }
        if ($(".searchInput").val() != ''){
            $('.searchTextCont').css({
                'color': '#E8F0F7',
                'border-bottom': 'none',
                'border-bottom': '2px solid #E8F0F7',
            });
            $('.searchInput').css({
                'color': '#E8F0F7',
            });
            $('.searchIcon').css({
               filter: 'brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(2270%) hue-rotate(178deg) brightness(100%) contrast(95%)', 
            });
        } else {
            $('.searchTextCont').css({
                'color': '#E8F0F7',
                'border-bottom': 'none',
                'border-bottom': '2px solid #6D6E85',
            });
        }
    },100)
    
    
    
    

    $('.heroCont').children('.codeTypeCont').each(function(){
        $(this).queue(function (next) {
            $(this).css( 'filter', 'blur(0px)');
                opacityLoop($(this));
            next();
        });
    });
    

    function opacityLoop(ele) {
        $(ele).animate({
            opacity: getRandomArbitrary(0.25, 0.45),
        }, 250, function(){
            $(ele).animate({
                opacity: getRandomArbitrary(0.85, 1),
            });
        });
    }
    
    function showResults(action, myCodeType, myToggle, myCodeEle){
        
        $('.thumbnailCont').each(function(){
            var myCurrentThumbnail = $(this)
            if (myCurrentThumbnail.children('.tagCont').length == 1){
                myCurrentThumbnail.children('.tagCont').children('.tag').last().css({
                    'border-right': 'none'
                });
            }
        });
        
        var searchVal = $(".searchInput").val()
        if (action == 'clickCode'){
            myCodeType = myCodeType.substring(myCodeType.indexOf("/") + 1);
            var n = myCodeType.indexOf('.');
            myCodeType = myCodeType.substring(0, n != -1 ? n : s.length);
            if (myToggle) {
                active++
                myCodeEle.css({
                    filter: 'none',
                    transform: 'scale(1.1)',
                })
                $('.thumbnailCont').each(function(){
                    var myThumbnail = $(this);
                    $(this).children('.tagCont').children().each(function(){
                        var myImageSRC = $(this).attr('src');
                        myImageSRC = myImageSRC.substring(myImageSRC.indexOf("/") + 1);
                        var n = myImageSRC.indexOf('.');
                        myImageSRC = myImageSRC.substring(0, n != -1 ? n : s.length);
                        myThumbnail.data("codeType", myImageSRC);

                        if (myCodeType == myThumbnail.data("codeType")){
                            myThumbnail.css({
                                display: 'flex',
                            });
                            myThumbnail.animate({
                                opacity: 1,
                            }, 200);
                        } 
                    }); 
                });
                $('.codeLogo').unbind('mouseenter mouseleave');
            } else {
                active--
                myCodeEle.css({
                    filter: 'brightness(0) saturate(100%) invert(18%) sepia(12%) saturate(682%) hue-rotate(197deg) brightness(103%) contrast(93%)',
                    transform: 'scale(1)',
                });
                $('.thumbnailCont').each(function(){
                    var myThumbnail = $(this);
                    $(this).children('.tagCont').children().each(function(){
                        var myImageSRC = $(this).attr('src');
                        myImageSRC = myImageSRC.substring(myImageSRC.indexOf("/") + 1);
                        var n = myImageSRC.indexOf('.');
                        myImageSRC = myImageSRC.substring(0, n != -1 ? n : s.length);
                        myThumbnail.data("codeType", myImageSRC);

                        if (myCodeType == myThumbnail.data("codeType") && searchVal.length == 0){
                            myThumbnail.animate({
                                opacity: 0, 
                            }, 100);
                            setTimeout(function(){
                                myThumbnail.css({
                                    display: 'none',
                                });
                            }, 200);
                        } else if (myCodeType == myThumbnail.data("codeType") && searchVal.length > 0) {
                            
                        }
                    }); 
                });
                
                $('.codeLogo').hover(function(){
                    $(this).css({
                        filter: 'brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(2270%) hue-rotate(178deg) brightness(100%) contrast(95%)',
                        transform: 'scale(1.1)',
                    });

                }, function(){
                    $(this).css({
                        filter: 'brightness(0) saturate(100%) invert(18%) sepia(12%) saturate(682%) hue-rotate(197deg) brightness(103%) contrast(93%)',
                        transform: 'scale(1)',
                    });

                });
                
            }
            if (active > 0) {
                $('.filterInfo').css({
                    'color': '#E8F0F7',
                    'border-left': '15px solid #E8F0F7',
                });
            } else {
                $('.filterInfo').css({
                    'color': '#343540',
                    'border-left': '8px solid #343540',
                });
            }
        } // click if statement end
        
        
        //==============================================================================================
        
        if (action == 'searching'){
        
            $('.theading').each( function(){

                var toLookInto = $(this).text();
                var regx = new RegExp(searchVal, "g");
                var newstring = toLookInto.replace(regx, '<span class="highlight">' + searchVal + '</span>')
                $(this).html(newstring)

                if (toLookInto.includes(searchVal) && searchVal != ''){
                    $(this).parent().css({
                        display: 'flex',
                    });

                    $(this).parent().animate({
                        opacity: 1,
                    }, 100);
                } else{
                    $(this).parent().animate({
                        opacity: 0, 
                    }, 100);
                    setTimeout(function(){
                        $(this).parent().css({
                            display: 'none',
                        });
                    }, 100);
                }
            });

            if (searchVal == ''){
                $('.theading').each( function(){
                    $(this).parent().css({
                        display: 'none',
                    });
                })
            }

            if ($(".searchInput").val() != ''){
                $('.searchTextCont').css({
                    'color': '#E8F0F7',
                    'border-bottom': '2px solid #E8F0F7',
                });
                $('.searchIcon').css({
                   filter: 'brightness(0) saturate(100%) invert(97%) sepia(1%) saturate(2270%) hue-rotate(178deg) brightness(100%) contrast(95%)', 
                });
            } else {
                $('.searchIcon').css({
                   filter: 'none', 
                });
            }
        }
    } //end of function

    
    
    

});
