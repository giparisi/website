---
layout: null
---

$(document).ready(function () {
  $('.home').click(function (e) {
			$('#nav-home').css({'color':'rgb(0,0,0)','font-weight': '400'})
			$(".panel-cover").fadeOut();
    	$('body').css('overflow','auto');
  })

	if (window.location.pathname == '{{ site.baseurl }}home/'){
		$('#nav-home').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}industry/'){
		$('#nav-industry').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}research/'){
		$('#nav-research').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}tools_and_materials/'){
		$('#nav-tools').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}articles_and_tutorials/'){
		$('#nav-articles').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == '{{ site.baseurl }}about_us/'){
		$('#nav-about').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	$('.new-header .btn-mobile-menu__icon').click(function () {
		$('.mobile-sidebar').fadeIn(200);
		$('.mobile-sidebar-container').fadeIn(200);
  })

	$('.mobile-sidebar .btn-mobile-menu__icon').click(function () {
		$('.mobile-sidebar').fadeOut(200);
		$('.mobile-sidebar-container').fadeOut(200);
  })

})
