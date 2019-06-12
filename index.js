axios({
        method: 'get',
        url: 'https://api.github.com/users/LuizPauloLPG2/repos',
    })
    .then((callback) => {
        const { data: dados, status, statusText: msg } = callback;
        console.log(dados);
        console.log(status);
        console.log(msg);

        for (var i = 0; i < dados.length; i++) {
            console.log(dados[i].name);
        }
});
