import "../css/layout.css";
import "../css/color-fonts.css";
import "../css/list.css";

export function List() {
  return (
    <>
        <div class="GridPage">
            <div class="GridItemMain">
                <div class="tableFluid">
                    <div class="theadFluid">
                        <div class="trFluid">
                            <div class="trFluid_Grouping2">
                                <div class="trFluid_Grouping1">
                                    <div class="tdFluent">Band Name</div>
                                </div>
                                <div class="trFluid_Grouping1">
                                    <div class="tdFluent">Members</div>
                                    <div class="tdFluent">Genre</div>
                                    <div class="tdFluent">Year established</div>
                                    <div class="tdFluent">Albums</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tbodyFluid" id="musicGroupList">
                        <div class="trFluid">
                            <div class="trFluid_Grouping2">
                                <div class="trFluid_Grouping1">
                                    <div class="tdFluent"></div>
                                </div>
                                <div class="trFluid_Grouping1">
                                    <div class="tdFluent"></div>
                                    <div class="tdFluent"></div>
                                    <div class="tdFluent"></div>
                                    <div class="tdFluent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="btnPrev">Previus</button>
                <button id="btnNext">Next</button>
            </div>

            <div class="GridItemSideOne">
                <div class="MenuWrap">
                    <a href="./home.html" class="ListItem">About</a>
                    <a href="./list.html" class="ListItem">Music</a>
                </div>
            </div>

            <div class="GridItemHeader">My Application</div>
            <div class="GridItemFooter">&copy; Eddie Wahlström</div>
        </div>
    </>
  );
}
