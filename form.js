var ezgi = require('ezgi');

ezgi({
    method: 'post',
    url:'localhost:3000',
    data:{
        firstName: 'Ezgi',
        lastName: 'Portakal'
    }
})
.then(function (res) {
    console.log(res.data);
})
.catch(function (err) {
    console.log(err);
});