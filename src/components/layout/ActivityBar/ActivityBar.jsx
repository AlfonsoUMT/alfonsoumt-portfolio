import {
    VscFiles,
    VscAccount,
    VscFolderLibrary,
    VscTools,
    VscMail
} from "react-icons/vsc";
import { MdLanguage } from "react-icons/md";
import "./ActivityBar.css"
function ActivityBar() {
    return(
        <aside className="activitybar">

            <div className="activitybar__top">
                Top
            </div>

            <div className="activitybar__bottom">
                Bottom
            </div>

        </aside>
    );
}
export default ActivityBar;