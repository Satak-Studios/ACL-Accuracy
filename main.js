function calc(){
    let acl = parseInt(document.getElementById('a').value);
    if (document.getElementById('a').value == "")
    {
        alert("Please enter valid ACL!")
    }else{
        b.innerText = (103.3979 - (0.3820659*acl - 0.002169231*acl*acl)).toFixed(2) + "%";
        document.getElementById('m').style.display = 'block';
    }
}