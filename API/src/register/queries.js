const getregister="SELECT * FROM register";
const addreg="INSERT INTO register (id,name,email,password,phone_no) VALUES ($1,$2,$3,$4,$5)";
const getById="SELECT * FROM register WHERE id=$1";
const deletId="DELETE FROM register WHERE id=$1";
const updateId="UPDATE register SET name=$1, email=$2,phone_no=$3 WHERE id=$4";


module.exports={
    getregister,
    addreg,
    getById,
    deletId,
    updateId
}