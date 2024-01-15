const supabase = require("../../supabase");

// Route Login

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await supabase
            .auth.signInWithPassword({
                email: email,
                password: password
            })

        if (response.data.user != null) {
            res.status(200).send("Connected")
        } else {
            res.status(400).send("Failed")
        }

    } catch(err) {
        res.status(500).send("Connection failed : ", err)
    }
}

module.exports = {
    login
}