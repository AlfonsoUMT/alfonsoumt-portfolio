import {
    VscFiles,
    VscAccount,
    VscFolderLibrary,
    VscTools,
    VscMail
} from "react-icons/vsc";

import { MdLanguage } from "react-icons/md";

import ActivityButton from "./ActivityButton";
import "./ActivityBar.css";
function ActivityBar() {

    return (

        <aside className="activitybar">

            <div className="activitybar__top">

                <ActivityButton
                    icon={<VscFiles />}
                    label="About"
                    active
                />

                <ActivityButton
                    icon={<VscAccount />}
                    label="Profile"
                />

                <ActivityButton
                    icon={<VscFolderLibrary />}
                    label="Projects"
                />

                <ActivityButton
                    icon={<VscTools />}
                    label="Skills"
                />

                <ActivityButton
                    icon={<VscMail />}
                    label="Contact"
                />

            </div>


            <div className="activitybar__bottom">

                <ActivityButton
                    icon={<MdLanguage />}
                    label="Language"
                />

            </div>

        </aside>

    );

}

export default ActivityBar;