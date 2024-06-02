import "../css/layout.css";
import "../css/color-fonts.css";
import "../css/home.css";

export function Home() {
  return (
    <>
        <div class="GridPage">
            <div class="GridItemHeader">My Application</div>
            <div class="GridItemMain">
                <div class="FlexWrap Home">
                    <h1>My name is Eddie and welcome to my Application!</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consectetur earum ipsum atque dolores optio. Beatae obcaecati corrupti, 
                        ea asperiores autem laborum. Consectetur alias aut ea necessitatibus nesciunt tempore cupiditate ratione. 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, 
                        reprehenderit perferendis saepe ducimus totam cum aperiam quod excepturi? 
                        Unde similique aspernatur facere quam. Incidunt perferendis molestiae adipisci, 
                        earum dolores dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Maxime, reprehenderit. Impedit minima quibusdam nisi libero commodi harum hic suscipit excepturi est veritatis iste, 
                        maxime, non, magnam itaque nam. Porro, odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum tempore delectus accusamus, quis debitis, tenetur reiciendis natus magni odit dolore assumenda beatae minima. 
                        Quibusdam est dignissimos non cumque fugiat libero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Consectetur debitis suscipit magni placeat deleniti aut molestias aliquid! Porro repellendus, 
                        numquam facilis aut eum enim molestiae saepe possimus minus, non laudantium. Lorem ipsum dolor, 
                        sit amet consectetur adipisicing elit. Sint dolorum culpa veritatis modi ad molestias accusamus, 
                        dicta reiciendis possimus. Sequi fugit minima numquam magnam repellendus repudiandae totam odit. Voluptatum, facilis.
                    </p>
                </div>
            </div>
            <div class="GridItemSideOne">
                <div class="MenuWrap">
                    <a href="./home.html" class="ListItem">About</a>
                    <a href="./list.html" class="ListItem">Music</a>
                </div>
            </div>
            <div class="GridItemFooter">&copy; Eddie Wahlström</div>
    </div>
    </>
  );
}
