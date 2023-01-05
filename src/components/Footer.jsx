import React from "react"
import LogoWhite from "../assets/img/logo-white.svg";

 function Footer() {

    return (
        <footer className=" bg-slate-900 py-12">  
            <div className=" container mx-auto text-white flex flex-col justify-center"> 
                <img src={LogoWhite} alt="" width={160} className="mb-4 mx-auto"/>
                <div className=" text-center lg:flex lg:justify-center items-center gap-3">
                <p className="text-center text-[28px]"> Copyright &copy; 2022. all rights for </p>
                <span className="text-[32px] text-[#a37b49] text-center">Mahmoud Reda</span>
                </div>
            </div>
        </footer>
    )
}


export default Footer