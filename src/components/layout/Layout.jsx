import Navbar from "../navbar/Navbar";

export default function Layout({children}){

    return(
        <>
            <Navbar/>
            <div className="container">{children}</div>
        </>
    )
}