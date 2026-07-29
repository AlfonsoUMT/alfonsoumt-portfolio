import TopBar from "../components/layout/TopBar/TopBar"
import StatusBar from "../components/layout/StatusBar/StatusBar"
import Editor from "../components/layout/Editor/Editor"
import ActivityBar from "../components/layout/ActivityBar/ActivityBar"
function MainLayout(){
    return(
        <>
            <TopBar />

            <main>
                <ActivityBar />
                <Editor />
            </main>

            <StatusBar />
        </>
    );
}
export default MainLayout;