//******* ERRORES PERSONALIZADOS ********//


// ERRORES DE ARTISTA
class ArtistNameNotProvided extends Error {
    constructor(){
        super("Nombre artístico no introducido");
        this.statusCode = 400;
    }
}
class ArtistBioNotProvided extends Error{
    constructor(){
        super("Biografía de artista no introducida");
        this.statusCode = 400;
    }
}
class ArtistSocialMediaNotProvided extends Error{
    constructor(){
        super("Red social del artista no introducida");
        this.statusCode = 400;
    }
}
class ArtistImgNotProvided extends Error{
    constructor(){
        super("Imágenes del artista no introducidas");
        this.statusCode = 400;
    }
}

// ERRORES DE FAN
class FanImgNotProvided extends Error{
    constructor(){
        super("Imagen de perfil no introducida");
        this.statusCode = 400;
    }
}
class FanBioNotProvided extends Error {
    constructor(){
        super("Biografía del fan no introducida");
        this.statusCode = 400;
    }
}

// ERRORES DE CATEGORÍA
class CategoryNameNotProvided extends Error {
    constructor(){
        super("Nombre de la categoría no introducido");
        this.statusCode = 400;
    }
}

// ERRORES DE PROYECTO
class ProjectTitleNotProvided extends Error {
    constructor(){
        super("Título del proyecto no introducido");
        this.statusCode = 400;
    }
}
class ProjectDescriptionNotProvided extends Error {
    constructor(){
        super("Descripción del proyecto no introducida");
        this.statusCode = 400;
    }
}
class ProjectURLNotProvided extends Error {
    constructor(){
        super("URL del proyecto no introducida");
        this.statusCode = 400;
    }
}
class ProjectImgsNotProvided extends Error {
    constructor(){
        super("Imágenes del proyecto no introducidas");
        this.statusCode = 400;
    }
}
class ProjectDateNotProvided extends Error {
    constructor(){
        super("Fecha de creación del proyecto no introducida");
        this.statusCode = 400;
    }
}

// EXPORTS
export {
    //artist
    ArtistBioNotProvided,
    ArtistImgNotProvided,
    ArtistNameNotProvided,
    ArtistSocialMediaNotProvided,
    
    //fan
    FanImgNotProvided,
    FanBioNotProvided,

    //category
    CategoryNameNotProvided,

    //project
    ProjectTitleNotProvided,
    ProjectDescriptionNotProvided,
    ProjectURLNotProvided,
    ProjectImgsNotProvided,
    ProjectDateNotProvided
}