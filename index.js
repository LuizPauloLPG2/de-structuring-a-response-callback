getProfileOnGithub = async () => {
        
        try{
         
                const response = await api.get('https://api.github.com/users/luizpaulogroup/repos');

                const { data: dados, status, statusText: msg } = response;
                
                console.log(dados);
                console.log(status);
                console.log(msg);
                
        }catch(error){
                console.log(error);     
        }
        
}
