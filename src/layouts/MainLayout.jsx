import TopBar from "../components/layout/TopBar/TopBar"
import StatusBar from "../components/layout/StatusBar/StatusBar"
import Editor from "../components/layout/Editor/Editor"
import ActivityBar from "../components/layout/ActivityBar/ActivityBar"
import "./MainLayout.css"
function MainLayout(){
    return(
        <>
            <div className="main-layout">
                <TopBar />

                <main className="main-content">
                    <ActivityBar />
                    <Editor />
                </main>

                <StatusBar />
            </div>
        </>
    );
}
export default MainLayout;