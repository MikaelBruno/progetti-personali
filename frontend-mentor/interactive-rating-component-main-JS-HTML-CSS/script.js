$(document).ready(function(){
    let rating = 0
    let card = $(".card-review")
    $(".card-rating ul li").click(function(){
        rating = this.textContent
        $(this).prevAll().addBack().removeClass('star-unselected').addClass('star-selected');
        $(this).nextAll().removeClass('star-selected').addClass('star-unselected');
        $(".card-submit p").removeClass('submit-unselected').addClass("submit");
    });

    $(".card-submit").click(function(){
        
        if($(".card-submit p").hasClass("submit")) {
            card.empty()
            let divSuperiore = $("<div>", {
                class: "div-top" 
              });

            let svg = $("<img>", {
              src: "/images/illustration-thank-you.svg",
              alt: "Descrizione dell'immagine"
            });
            
            let string = `You selected ${rating} out of 5`
            let ratingScore = $("<p>",{
                text : string,
                class : "score-text"
            });
            divSuperiore.append(svg, ratingScore);
            divSuperiore.appendTo(card)

            let divInferiore = $("<div>", {
                class: "div-bottom"
            });

            string = `Thank you!`;
            let thank = $("<h1>").text(string);
            string = `We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!`;
            let salut = $("<p>").text(string);
            divInferiore.append(thank, salut)
            divInferiore.appendTo(card)
        }
    })
});