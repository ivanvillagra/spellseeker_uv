import logo from "./assets/logo.svg"

// eslint-disable-next-line react/prop-types
export default function NavBar({appName}) {
    return (
        <>
            <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-black bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div className="flex items-center justify-center md:justify-start text-white">
                    <img src={logo}  className="mr-4 w-14 rounded" ></img>
                    <a
                        href="#"
                        className="mr-4  cursor-pointer hidden md:block py-1.5 font-mono text-4xl font-black leading-relaxed text-inherit antialiased"
                    >
                       {appName}
                    </a>
                </div>
            </nav>
        </>
    );
}