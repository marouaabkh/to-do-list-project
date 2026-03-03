
function AddTask(){

    const [projectname, setprojectname] = useState("")

    function handleSelect(e){
        setprojectname(e.target.value)
    }

    return(
        projectname
    )
}

export default AddTask