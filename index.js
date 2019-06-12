$.get({
    url: 'https://api.github.com/users/LuizPauloLPG2/repos',
}).done((req, res, callback) => {

    const { responseJSON: dados, status, statusText: msg } = callback;

    for (var i = 0; i < req.length; i++) {
        console.log(req[i].name);
    }

    console.log(dados);
    console.log(status);
    console.log(msg);
});