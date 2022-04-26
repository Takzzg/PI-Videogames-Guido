const ExampleDesc = `<h1>HTML Ipsum Presents</h1>

<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

<h2>Header Level 2</h2>

<ol>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ol>

<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

<h3>Header Level 3</h3>

<ul>
   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
</ul>

<pre><code>
#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}
</code></pre>`

const hardcoded_1 = {
    name: "Minecraft",
    desc: ExampleDesc,
    rating: 4.45,
    genres: [59, 51, 3],
    platforms: [
        {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6282,
            image_background:
                "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 90483,
            image_background:
                "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
        },
        {
            id: 21,
            name: "Android",
            slug: "android",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 46769,
            image_background:
                "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        }
    ]
}

const hardcoded_2 = {
    name: "The Legend of Zelda: Postgres Edition",
    desc: ExampleDesc,
    rating: 3.1,
    genres: [83, 1],
    platforms: [
        {
            id: 19,
            name: "PS Vita",
            slug: "ps-vita",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1955,
            image_background:
                "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
        },
        {
            id: 27,
            name: "PlayStation",
            slug: "playstation1",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1572,
            image_background:
                "https://media.rawg.io/media/games/8fc/8fcc2ff5c7bcdb58199b1a4326817ceb.jpg"
        },
        {
            id: 17,
            name: "PSP",
            slug: "psp",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 1607,
            image_background:
                "https://media.rawg.io/media/games/662/6625a20ca1d13699ee7c191b20a02408.jpg"
        }
    ]
}

const hardcoded_3 = {
    name: "Slay the Spire",
    desc: ExampleDesc,
    rating: 4.001,
    genres: [17],
    platforms: [
        {
            id: 186,
            name: "Xbox Series S/X",
            slug: "xbox-series-x",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 435,
            image_background:
                "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
        }
    ]
}

module.exports = { hardcoded_1, hardcoded_2, hardcoded_3 }
