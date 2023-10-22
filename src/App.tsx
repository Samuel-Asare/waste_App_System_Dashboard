import { ThemeProvider } from "@/Context/Theme-Provider";

import PagesWrapper from "./Components/PagesWrapper";
import { DataProvider } from "./Context/ FirestoreDataContext";
import { ResponseCommentProvider } from "./Context/ReviewComments/ResponseContext";
import { RelationCommentProvider } from "./Context/ReviewComments/RelationContext";
import { GeneralCommentProvider } from "./Context/ReviewComments/GeneralSuggestionContext";
import { UserContactProvider } from "./Context/UserContact/UserContactContext";
import AdminProvider from "./Context/AdminFirestore";

function App() {
    return (
        <div className="app_wrapper">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <DataProvider>
                    <ResponseCommentProvider>
                        <RelationCommentProvider>
                            <GeneralCommentProvider>
                                <UserContactProvider>
                                    <AdminProvider>
                                        <PagesWrapper />
                                    </AdminProvider>
                                </UserContactProvider>
                            </GeneralCommentProvider>
                        </RelationCommentProvider>
                    </ResponseCommentProvider>
                </DataProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
