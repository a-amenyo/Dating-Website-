var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        age: 20,
        avatar: 'lucy.jpg'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        age: 30,
        avatar: 'betty.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        age: 40,
        avatar: 'ronald.jpg'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        age: 26,
        avatar: 'chris.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        age: 27,
        avatar: 'xiema.jpg'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        age: 29,
        avatar: 'paull.jpg'
    },
    {
        name: 'Charlize',
        gender: 'F',
        hobby: 'pets',
        age: 39,
        avatar: 'charlize.png'
    },
];

window.addEventListener('load', function () {

    var results = document.getElementById('results');

    function search() {

        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        // get age range
        let minAge = document.getElementById("min-age");
        let maxAge = document.getElementById("max-age");

        let min = minAge.value;
        let max = maxAge.value;
        console.log(minAge.value, maxAge.value);

        var resultsHtml = '';
        var usersLength = users.length;

        for (var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    if (min === '' || max === '' || (min <= users[i].age && max >= users[i].age)) {
                        resultsHtml += 
                        '<div class="person-row">\
                        <img src="images/' + users[i].avatar + '" />\
                        <div class="person-info">\
                        <div>' + users[i].name + '</div>\
                        <div>' + users[i].hobby + '</div>\
                        <div>' + users[i].age + '</div></div>\
                        <button>Add friend</button></div>';
                    }

                }
            }
        }

        results.innerHTML = resultsHtml;
    }

    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', search);
});