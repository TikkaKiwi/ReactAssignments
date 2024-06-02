import "../css/layout.css";
import "../css/color-fonts.css";

export function Layout() {
  return (
    <>
      <div className="GridPage">
        <div className="GridItemMain"></div>
        <div className="GridItemSideOne">
          <div className="MenuWrap">
            <a href="./home" className="ListItem">About</a>
            <a href="./list" className="ListItem">Music</a>
          </div>
        </div>
        <div className="GridItemHeader">My Application</div>
        <div className="GridItemFooter">&copy; Eddie Wahlström</div>
      </div>
    </>
  );
}
