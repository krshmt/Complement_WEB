export default class userselectionne {
    async render () {
        let request = Utils.parseRequestURL()
        let post = await ArticleProvider.getArticle(request.id)
        
        return /*html*/`
            <section class="section">
                
            </section>
        `
    }
}

/*
{     "id": 1,
            "Name":"chevrolet chevelle malibu",
            "Miles_per_Gallon":18,
            "Cylinders":8,
            "Displacement":307,
            "Horsepower":130,
            "Weight_in_lbs":3504,
            "Acceleration":12,
            "Year":"1970-01-01",
            "Origin":"USA"
         },
*/