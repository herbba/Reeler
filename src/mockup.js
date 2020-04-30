
/** LINKKAUKSESTA
 * linkkaus toimii elokuvan abstractissa ja storylinessä sekä näyttälijän abstarctissa
 * [[name:nm1111111]] => pelkkä id:llä 1111111 löytyvä nimi => Matti meikäläinen
 * [[name&year:nm11111]] => id:llä löytyvä nimi ja vuosi => Matti Meikäläinen (1998)
 * [[title:tt111111]] => sama logiikka
 * [[title&year:tt111111]] => sama logiikka
 */

/** NÄISTÄ MOCKUPIT */
const mockupIds = ["tt0096895", "tt2562232", "tt0094721", "tt4276820", "tt0120338", "tt0407887",
    "nm0000474", "nm0000197", "nm0000107", "nm0000138", "nm0000701"]


const movies = [
    /** THE DEPARTED */
    {
        tconst: "tt0407887",
        primarytitle: "The Departed*",
        startyear: 2006,
        endyear: null,
        originaltitle: "The Departed",
        isadult: false,
        runtimeminutes: 151,
        genres: ["Crime", "Drama", "Thriller"],
        titletype: "movie",
        released: '10 November 2006 (Finland)',
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        abstract:
            `An undercover cop ([[name:nm0000138]]) and a mole in the police ([[name:nm0000354]]) attempt to identify each other while infiltrating an Irish gang in South Boston.`, //** DIRECTOR: ei linkkiä */
        director: 'Martin Scorsese',
        //** WRITER: ei linkkiä */
        writers: [
            "William Monahan (screenplay)", "Alan Mak"
        ],
        //** STARS: ei linkkiä */
        stars: ' Leonardo DiCaprio, Matt Damon, Jack Nicholson',
        /** CAST: TÄHÄN VAIN VALIDEJA ID:TÄ */
        cast: ["nm0000138", "nm0000354", "nm0000197"],
        /** STORYLINE: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        storyline:
            `In this crime-action tour de force, the South Boston state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan ([[name:nm0000138]]) is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello ([[name:nm0000197]]). While Billy quickly gains Costello's confidence, Colin Sullivan ([[name:nm0000354]]), a hardened young criminal who has infiltrated the state police as an informer for the syndicate is rising to a position of power in the Special Investigation Unit.`,
        images: ['departed1', 'departed2', 'departed3'],

    },
    /** TITANIC */
    {
        tconst: "tt0120338",
        primarytitle: "Titanic*",
        startyear: 1997,
        endyear: null,
        originaltitle: "The Founder",
        isadult: false,
        runtimeminutes: 194,
        genres: ["Drama", "Romance"],
        titletype: "movie",
        released: '16 January 1998 (Finland)',
        abstract:
            `A seventeen-year-old aristocrat ([[name:nm0000701]]) falls in love with a kind but poor artist ([[name:nm0000138]]) aboard the luxurious, ill-fated R.M.S. Titanic.`,
        //** DIRECTOR: ei linkkiä */
        director: 'James Cameron',
        //** WRITER: ei linkkiä */
        writers: [
            " James Cameron"
        ],
        //** STARS: ei linkkiä */
        stars: ' Leonardo DiCaprio, Kate Winslet, Billy Zane',
        /** CAST: TÄHÄN VAIN VALIDEJA ID:TÄ */
        cast: ["nm0000138", "nm0000701", "nm0000870"],
        /** STORYLINE: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        storyline:
            `In 1996, treasure hunter Brock Lovett ([[name:nm0000200]]) and his team aboard the research vessel Keldysh search the wreck of RMS Titanic for a necklace with a rare diamond, the Heart of the Ocean. They recover a safe containing a drawing of a young woman wearing only the necklace. It is dated April 14, 1912, the day the ship struck the iceberg. Rose Dawson Calvert ([[name:nm0001784]]), claiming to be the person in the drawing, visits Lovett and tells of her experiences aboard the ship. In 1912 Southampton, 17-year-old first-class passenger Rose DeWitt Bukater ([[name:nm0000701]]), her fiancé Cal Hockley (Billy Zane), and her mother Ruth ([[name:nm0004920]]) board the Titanic.`,
        images: ['titanic1', 'titanic2', 'titanic3'],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
    },
    /** THE FOUNDER */
    {
        tconst: "tt4276820",
        primarytitle: "The Founder*",
        startyear: 2016,
        endyear: null,
        originaltitle: "The Founder",
        isadult: false,
        runtimeminutes: 115,
        genres: ["Biography", "Drama", "History"],
        titletype: "movie",
        released: ' 27 January 2017 (Finland)',
        abstract:
            `The story of Ray Kroc ([[name:nm0000474]]), a salesman who turned two brothers' innovative fast food eatery, McDonald's, into the biggest restaurant business in the world, with a combination of ambition, persistence, and ruthlessness.`,
        //** DIRECTOR: ei linkkiä */
        director: 'John Lee Hancock',
        //** WRITER: ei linkkiä */
        writers: [
            " Robert Siegel"
        ],
        //** STARS: ei linkkiä */
        stars: ' Michael Keaton, Nick Offerman, John Carroll Lynch',
        /** CAST: TÄHÄN VAIN VALIDEJA ID:TÄ */
        cast: ["nm0000474", "nm0004802", "nm0002253"],
        /** STORYLINE: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        storyline:
            `1954. Having worked as a salesman most of his adult life, Ray Kroc has ([[name:nm0000474]]) been a hustler in most senses of the word. That hustling has made him the target of derision among certain circles for peddling what have ended up being more novelty or faddish than useful products, but it has also placed more than a comfortable roof in Arlington Heights, Illinois over his and his wife Ethel's heads.`,
        images: ['founder3', 'founder1', 'founder2'],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
    },

    /** BEETLEJUICE */
    {
        tconst: "tt0094721",
        primarytitle: "Beetlejuice*",
        startyear: 1988,
        endyear: null,
        originaltitle: "Beetlejuice",
        isadult: false,
        runtimeminutes: 92,
        genres: ["Comedy", "Fantasy"],
        titletype: "movie",
        released: ' 5 August 1988 (Finland)',
        abstract:
            'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.',
        //** DIRECTOR: ei linkkiä */
        director: ' Tim Burton',
        //** WRITER: ei linkkiä */
        writers: [
            "Michael McDowell (story)", "Larry Wilson (story)"
        ],
        //** STARS: ei linkkiä */
        stars: ' Alec Baldwin, Geena Davis, Michael Keaton',
        /** CAST: TÄHÄN VAIN VALIDEJA ID:TÄ */
        cast: ["nm0000285", "nm0000474", "nm0000133"],
        /** STORYLINE: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        storyline:
            `Adam ([[name:nm0000285]]) and Barbara ([[name:nm0000133]]) are a normal couple...who happen to be dead. They have given their precious time to decorate their house and make it their own, but unfortunately a family is moving in, and not quietly. Adam and Barbara try to scare them out, but end up becoming the main attraction to the money making family. They call upon Beetlejuice ([[name:nm0000474]]) to help, but Beetlejuice has more in mind than just helping.`,
        images: ['beetlejuice1', 'beetlejuice2', 'beetlejuice3'],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
    },
    /** BIRDMAN */
    {
        tconst: "tt2562232",
        primarytitle: "Birdman*",
        startyear: 2014,
        endyear: null,
        originaltitle: "The Unexpected Virtue of Ignorance",
        isadult: false,
        runtimeminutes: 119,
        genres: ["Comedy", "Drama"],
        titletype: "movie",
        released: '16 January 2015 (Finland)',
        //** DIRECTOR: ei linkkiä */
        director: 'Alejandro G. Iñárritu',
        //** WRITER: ei linkkiä */
        writers: [
            'Alejandro G. Iñárritu', 'Nicolás Giacobone',
        ],
        //** STARS: ei linkkiä */
        stars: ' Michael Keaton, Zach Galifianakis, Edward Norton',
        abstract:
            'A washed-up superhero actor ([[name:nm0000474]]) attempts to revive his fading career by writing, directing, and starring in a Broadway production.',

        /** CAST: TÄHÄN VAIN VALIDEJA ID:TÄ */
        cast: ["nm0000474", "nm0302108", "nm0001570"],
        /** STORYLINE: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        storyline:
            `Actor Riggan Thomson ([[name:nm0000474]]) is most famous for his movie role from over twenty years ago of the comic book superhero Birdman in the blockbuster movie of the same name and its two equally popular sequels. His association with the role took over his life, where Birdman is more renowned than "Riggan Thomson" the actor.`,
        images: ['birdman1', 'birdman2', 'birdman3'],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
    },
    /** BATMAN */
    {
        isadult: false,
        originaltitle: "Batman",
        primarytitle: "Batman*",
        runtimeminutes: 126,
        startyear: 1989,
        tconst: "tt0096895",
        titletype: "movie",
        endyear: null,
        genres: ["Action", "Adventure"],
        released: '23 June 1989 (USA)',
        //** DIRECTOR: ei linkkiä */
        director: 'Tim Burton',
        //** WRITER: ei linkkiä */
        writers: [
            'Bob Kane (Batman Characters)',
            'Sam Hamm (story)',
        ],
        //** STARS: ei linkkiä */
        stars: 'Michael Katon, Jack Nicholson, Kim Basinger',
        /** CAST: TÄHÄN VAIN VALIDEJA ID:TÄ */
        cast: ["nm0000474", "nm0000197", "nm0000107"],
        /** STORYLINE: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        storyline:
            "Gotham City. Crime boss Carl Grissom ([[name:nm0001588]]) effectively runs the town but there's a new crime fighter in town - Batman ([[name:nm0000474]]). Grissom's right-hand man is Jack Napier",
        images: ['bm1', 'bm2', 'bm3'],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        abstract:
            'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker. ',
    }]

const names = [
    /** KATE WINSLET */
    {
        nconst: "nm0000701",
        primaryname: "Kate Winslet*",
        primaryprofession: "Actor, Producer, Soundtrack, ",
        abstract:
            `Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively humble beginnings, as a supporting cast member of the sitcom [[title&year:tt0088527]] and low budget horror movies, such as [[title&year:tt0101627]], to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as William Shakespearen Romeo ja Julia (1996) and [[title&year:tt0120338]], to then become a leading man in Hollywood blockbusters, made by internationally renowned directors such as [[name:nm0000217]] and Christopher Nolan.`,
        birthyear: 1974,
        birthday: 'November 11',
        deathyear: null,
        birthplace: 'Hollywood, Los Angeles, California, USA',
        birthname: 'Kate Winslet',
        knownfortitles: ["tt1375666", "tt0407887", "tt0120338", "tt0993846"],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        fullbio:
            `Her first big break came at age 17, when she was cast as an obsessive adolescent in [[title&year:tt0110005]]. The film, based on the true story of two fantasy-gripped girls who commit a brutal murder, received modest distribution but was roundly praised by critics. Still a relative unknown, Winslet attended a cattle call audition the next year for [[name:nm0000487]]'s [[title&year:tt0114388]]. She made an immediate impression on the film's star, Emma Thompson, and beat out more than a hundred other hopefuls for the part of plucky Marianne Dashwood. Her efforts were rewarded with both a British Academy Award and an Oscar nomination for Best Supporting Actress. Winslet followed up with two more period pieces, playing the rebellious heroine in Jude - kivenhakkaajan rakkaus (1996) and Ophelia in [[name:nm0000110]]'s [[title&year:tt0116477]].`,
        images: ['katew1', 'katew2', 'katew3'],
    },
    /** LEONARD0 DICAPRIO */
    {
        nconst: "nm0000138",
        primaryname: "Leonardo DiCaprio*",
        primaryprofession: "Actor, Producer,  Soundtrack, ",
        abstract:
            `Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively humble beginnings, as a supporting cast member of the sitcom [[title&year:tt0088527]] and low budget horror movies, such as [[title&year:tt0101627]], to a major teenage heartthrob in the 1990s, as the hunky lead actor in movies such as William Shakespearen Romeo ja Julia (1996) and [[title&year:tt0120338]], to then become a leading man in Hollywood blockbusters, made by internationally renowned directors such as [[name:nm0000217]] and Christopher Nolan.`,
        birthyear: 1974,
        birthday: 'November 11',
        deathyear: null,
        birthplace: 'Hollywood, Los Angeles, California, USA',
        birthname: 'Leonardo DiCaprio',
        knownfortitles: ["tt1375666", "tt0407887", "tt0120338", "tt0993846"],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        fullbio:
            `Born in Los Angeles, DiCaprio began his career by appearing in television commercials in the late 1980s. In the early 1990s, he played recurring roles in various television series, such as the sitcom [[title:tt0098887]]. He had his first major film role in [[title&year:tt0108330]], and received acclaim for the supporting role of a developmentally disabled boy in [[title&year:tt0108550]], which earned him an Academy Award nomination. `,
        images: ['leod1', 'leod2', 'leod3'],
    },
    /**  KIM BASINGER */
    {
        nconst: "nm0000107",
        primaryname: "Kim Basinger*",
        primaryprofession: "Actress, Soundtrack, Producer",
        abstract:
            `Kim Basinger was born December 8, 1953, in Athens, Georgia, the third of five children. Both her parents had been in entertainment, her dad had played big-band jazz, and her mother had performed water ballet in several [[name:nm0930565]] movies. Kim was introspective, from her father's side. As a schoolgirl, she was very shy.`,
        birthyear: 1953,
        birthday: ' December 8',
        deathyear: null,
        birthplace: 'Athens, Georgia, USA',
        birthname: 'Kim Basinger',
        knownfortitles: ["tt0096895", "tt0119488", "tt0337921", "tt0108525"],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        fullbio:
            `Basinger was born in Athens, Georgia, on December 8, 1953. Her mother, Ann Lee (née Cordell; 1925–2017), was a model, actress and swimmer who appeared in several Esther Williams films. Her father, Donald Wade Basinger (1923–2016), was a big band musician and loan manager; as a U.S. Army soldier, he landed in Normandy on D-Day.`,
        images: ['kimb1', 'kimb2', 'kimb3'],
    },
    /** JACK NICHOLSON */
    {
        nconst: "nm0000197",
        primaryname: "Jack Nicholson*",
        primaryprofession: "actor, soundtrack, producer",
        abstract:
            `Jack Nicholson, an American actor, producer, director and screenwriter, is a three-time Academy Award winner and twelve-time nominee. Nicholson is also notable for being one of two actors - the other being [[name:nm0000323]] - who have received an Oscar nomination in every decade from the 1960s through the early 2000s.`,
        birthyear: 1951,
        birthday: 'April 22, 1937',
        deathyear: null,
        birthplace: 'Neptune, New Jersey, USA',
        birthname: 'Jack Nicholson',
        knownfortitles: ["tt0071315", "tt0073486", "tt0119822", "tt0407887"],
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        fullbio:
            `Nicholson was born on April 22, 1937, in Neptune City, New Jersey, the son of a showgirl, June Frances Nicholson (stage name June Nilson; 1918–1963). Nicholson's mother was of Irish, English, German, and Welsh descent.`,
        images: ['jackn1', 'jackn2', 'jackn3'],
    },
    /** MICHAEL KEATON */
    {
        birthyear: 1951,
        deathyear: null,
        knownfortitles: ["tt2562232", "tt0094721", "tt4276820", "tt1895587"],
        nconst: "nm0000474",
        primaryname: "Michael Keaton*",
        primaryprofession: "actor,producer,soundtrack",
        birthday: 'September 5',
        birthplace: 'Corapolis, Pennsylvania, USA',
        birthname: 'Michael John Douglas',
        /** ABSTRACT: Tässä voi käyttää linkkejä, katso ylhäältä ohjeet */
        abstract:
            "Quirky, inventive and handsome American actor Michael Keaton first achieved major fame with his door-busting performance as fast-talking ideas man Bill Blazejowski, alongside a nerdish morgue attendant ([[name:nm0001857]]), in [[title&year:tt0084412]]. He played further comedic roles in [[title&year:tt0085970]], [[title&year:tt0087507]], and [[title&year:tt0094721]], earned further acclaim for his dramatic portrayal of Bruce Wayne / Batman in Tim Burton's [[title&year:tt0096895]] and [[title&year:tt0103776]], and since then, has moved easily between film genres, ranging from drama and romantic comedy to thriller and action.",
        fullbio:
            'Keaton was born Michael John Douglas on September 5, 1951 in Coraopolis, Pennsylvania, to Leona Elizabeth (Loftus), a homemaker, and George A. Douglas, a civil engineer and surveyor. He is of Irish, as well as English, Scottish, and German, descent.',
        images: ['mk1', 'mk2', 'mk3'],
    }]


const getMockup = (id) => {
    const index = mockupIds.indexOf(id);
    const item = index > -1 ? id.includes("nm") ? names.filter(n => n.nconst === id)[0] : movies.filter(m => m.tconst === id)[0] : null
    return item;
};


export default { getMockup };