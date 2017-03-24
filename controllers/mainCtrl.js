const user = require('../user.js');
module.exports = {
    getName: function (req, res) {
        res.json({
            "name": user.name
        })
    },

    getLocation: function (req, res) {
        res.json({
            "location": user.location
        })
    },
    getOccupations: function (req, res) {
        if (req.query === req.order) {
            res.json({
                "occupations": user.occupations.sort()
            })
        } else if (req.query === req.desc) {
            res.json({
                "occupations": user.occupations.reverse()
            })
        } else {
            res.json({
                "occupations": user.occupations
            })
        }
    },
    getLatestOccupations: function (req, res) {
        res.json({
            "occupation": user.occupations[user.occupations.length - 1]
        })
    },
    getHobbies: function (req, res) {
        res.json({
            "hobbies": user.hobbies
        })
    },
    getHobbiesById: function (req, res) {
        var arr = [];
        for (let i = 0; i < user.hobbies.length; i++) {

            if (req.params.id === user.hobbies[i].type) {
                arr.push(user.hobbies[i]);
            }
        }
        res.json({
            "hobbie": arr
        })
    },
    getFamily: function (req, res) {
        res.json({
            "family": user.family
        })
    },
    getFamilyByGender: function (req, res) {
        let arr = [];
        for (let i = 0; i < user.family.length; i++) {
            if (req.params.id === user.family[i].gender) {
                arr.push(user.family[i]);
            }
        }
        if (req.params.id === 'male') {

            res.json({
                "males": arr
            })
        } else {
            res.json({
                "females": arr
            })
        }
    },
    getRestaurants: function (req, res) {
        if (req.query) {
            var arr = user.restaurants.filter(a => {
                // console.log(a.rating);
                return a.rating >= 2;
            });
            res.json({
                "restaurants": arr
            })
        }
        res.json({
            "restaurants": user.restaurants
        })
    },
    // getRestaurantsByName : function (req,res) {
    //     var arr = [];
    //     for(var i=0; i<user.restaurants.length; i++){
    //         if(req.params.id === user.restaurants[i].name){
    //             arr.push(user.restaurants[i]);
    //         }
    //     }
    //     res.json({
    //         "restaurants" : arr
    //     })
    // }

}
