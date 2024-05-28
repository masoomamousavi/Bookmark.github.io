
function ExtensionBox(props) {
    return (
        <div className="shadow-lg py-7 mt-5 justify-center items-center rounded-lg border flex flex-col space-y-5">
            <div className="text-center flex justify-center">
                <img src={props.img} alt="" />
            </div>
            <h5 className='text-xl font-bold'>Add to {props.name}</h5>
            <p className='text-gray-400'>Minimum version {props.version}</p>
            <div className=" border-gray-400 w-full text-center  bg-repeat-x px-6 capitalize">
                <a href="#" className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white hover:border-softBlue">Add & Install the Extension</a>
            </div>
        </div>
    )
}
export default ExtensionBox;