
// eslint-disable-next-line react/prop-types
export default function NavBar({appName}) {
    return (
        <>
            <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-black bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div className="flex items-center text-white">
                    <a
                        href="#"
                        className="mr-4 block cursor-pointer py-1.5 font-mono text-4xl font-black leading-relaxed text-inherit antialiased"
                    >
                       {appName}
                    </a>
                </div>
            </nav>
        </>
    );
}