import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App(){
    return(
        <div className="tw-text-3xl tw-mx-auto tw-max-w-6xl">
            <Header/>
            <div className="tw-my-10">
                Home page Content
            </div>
            <Footer/>        
        </div>
    )
}