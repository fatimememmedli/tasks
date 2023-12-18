const postUser = async((req, res) => {
  console.log(req.body);
});
const getAllUser = async((req, res) => {
  console.log("datalar geldi");
});
module.exports = { postUser, getAllUser };
