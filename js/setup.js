$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{             //numero de itens conforme numero de pixels
            items:5
        }
    }
})

function GoWatch(){
    window.location.href = "https://www.netflix.com/br/title/81091393"


}

function Sinopse(){

    window.location.href = "https://www.omelete.com.br/anime-manga/demon-slayer-entenda-sucesso"
}