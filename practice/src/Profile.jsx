function Profile(){
    const name="bharat"
    const age=19
    const isStudent=true
    return(
        <div>
            <p>name:{name}</p>
            <p>age:{age}</p>
            <p>{isStudent===true?"I am student":"Not Student"}</p>
        </div>
    )
}
export default Profile