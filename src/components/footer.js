// src/components/footer.js
function Footer(){

    // get today's copy right year
    let date = new Date()
    let year  = date.getFullYear()

    return (

        <footer className="bg-gray-900 ml-4 items-center">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {year} <a href="https://github.com/epythonlab" rel="noreferrer" target="_blank" className="hover:underline">epthonlab</a>. All Rights Reserved.
                
                </span>
            </div>
        </footer>
    );
}
export default Footer;