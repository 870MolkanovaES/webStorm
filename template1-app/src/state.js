

export async function getArticles(){
    let response = await fetch("http://i9154906.beget.tech/getArticles");
    let articles = await response.json();
    return articles;
}

const articlesArtists = {
    0: {
        img:"http://localhost:3000/img/artists/1.jpg",
        name:"Kate Molk",
        category:"Художник",
        description:"Живопись, рисунок.",
        material:"Масло, акварель, карандаш."
    },
    1: {
        img:"http://localhost:3000/img/artists/2.jpg",
        name:"M V Bond",
        category:"Художник",
        description:"Живопись.",
        material:"Масло, акрил."
    },
    2: {
        img:"http://localhost:3000/img/artists/3.jpg",
        name:"ma_ha_devi",
        category:"Фотограф",
        description:"Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin.",
        material:""
    },
    3: {
        img:"http://localhost:3000/img/artists/4.jpg",
        name:"John Doe",
        category:"Photographer",
        description:"Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin.",
        material:""
    },
    4: {
        img:"http://localhost:3000/img/artists/5.jpg",
        name:"John Doe",
        category:"Photographer",
        description:"Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin.",
        material:""
    },
    5: {
        img:"http://localhost:3000/img/artists/6.jpg",
        name:"John Doe",
        category:"Photographer",
        description:"Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin.",
        material:""
    },
    6: {
        img:"http://localhost:3000/img/artists/7.jpg",
        name:"John Doe",
        category:"Photographer",
        description:"Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin.",
        material:""
    },
    7: {
        img:"http://localhost:3000/img/artists/8.jpg",
        name:"John Doe",
        category:"Photographer",
        description:"Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin.",
        material:""
    }
}

export function getArticlesArtists(){
    return articlesArtists;
}