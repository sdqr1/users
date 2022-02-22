const LS_KEY="users";
function saveUser(user){
    //load the old data from the LS
    //merge the data
    onloadeddata.push(user);

    let val = JSON.stringify(oldData);//pare into a JSON string

    localStorage.setItem(LS_KEY,val);//send it to the localstorage

}
function readUsers(){
    //get the values from the localStorage
    let data = localStorage.getItem(LS_KEY);
    if(!data){//NOT users?
        return[];// creating the array the first registration
    }else{
        let list = JSON.parse(data); //parse string back into obj
        return list;
    }
}