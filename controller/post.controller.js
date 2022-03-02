const handlePostReq = (req, res) => {
    // console.log(req.body);
    var datas = req.body.data;
    var numbers = [];
    var alphabets = [];
    datas.map((d) => {
        if (isNaN(d)) {
            alphabets.push(d);
        } else {
            numbers.push(d);
        }
    })
    var response = {
        is_success: true,
        user_id: "tirtharaj_jana_21072001",
        email: "tirtharajjana.cse19@chitkarauniversity.edu.in",
        roll_number: "1911981342",
        numbers,
        alphabets
    }
    // console.log({ numbers, alphabets });
    res.status(200);
    res.json(response)
}

module.exports = {
    handlePostReq
}