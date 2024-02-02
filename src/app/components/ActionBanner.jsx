import { DownCheveron } from "../icons";

const ActionBanner = () => {
    return (
        <div className=" flex w-full content-center justify-center">

<div className="action-banner w-11/12 flex content-center justify-between items-center pt-4">

<div className="logo flex">
    <ul className="flex gap-4">
        <li className='navItem'> <a href="#">  Explore</a> </li>
        <li className='navItem'> <a href="#"> Submit Voyage </a> </li>
        <li className='navItem'> <a href="/profile"> My Profile  </a> </li>
    </ul>
</div>

    {/*<div className=" flex bg-gray-200 rounded items-center gap-2">*/}
    {/*    <div className="flex ">*/}
    {/*        filter*/}
    {/*    </div>*/}
    {/*    <input className=" h-8 bg-gray-200" type="text" placeholder="Search" />*/}
    {/*    Search*/}
    {/*</div>*/}
    <div className="flex gap-2">

    <label
        className="mx-auto  relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center
         justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar">


        <input id="search-bar" placeholder="Where would you like to go?" name="q"
               className="px-6 w-full rounded-md flex-1 outline-none bg-white" required=""/>
            <button type="submit"
                    className="w-full md:w-auto px-4 py-1.5 bg-light-green border-green text-light-brown fill-white
                    active:scale-95 duration-100 will-change-transform overflow-hidden relative rounded-xl transition-all">
                <div className="flex items-center transition-all opacity-1">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                        </span>
                </div>
            </button>
    </label>
    <button className="flex p-2.5 bg-light-green border-green text-light-brown rounded-md gap-2 shadow-xl focus-within:border-gray-300 justify-center items-center" type="filter">
        Filter
        <DownCheveron />
    </button>
    </div>

    <div>

    <button className="loginBtn place-self-end float-right"> Login/Signup </button>
    </div>

</div>
        </div>
    )

}

export default ActionBanner;